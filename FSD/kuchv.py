import cv2
import numpy as np
import mss
import pyautogui
import time
import random
import tkinter as tk
from deepface import DeepFace

# --- CONFIGURATION ---
# The exact pixel coordinates of the "Next" button
NEXT_BUTTON_X = 192
NEXT_BUTTON_Y = 880

def show_circle_indicator():
    """Displays a borderless window with a red circle for 1 second."""
    print("Displaying visual indicator...")
    root = tk.Tk()
    root.overrideredirect(True) # Remove window borders
    root.attributes('-topmost', True) # Keep on top of the browser
    
    # Position the 100x100 circle at the top left of the screen
    root.geometry("100x100+50+50") 
    
    canvas = tk.Canvas(root, width=100, height=100, bg='white', highlightthickness=0)
    canvas.pack()
    canvas.create_oval(10, 10, 90, 90, fill="red", outline="red")
    
    # Make the white background transparent (Windows only)
    root.wm_attributes("-transparentcolor", "white")
    root.update() # Force the UI to draw
    
    time.sleep(1) # Keep it on screen for 1 second
    root.destroy() # Clean up

def click_next():
    """Handles the visual indicator and clicking logic."""
    print("Triggering skip sequence...")
    
    # 1. Show the red circle indicator
    show_circle_indicator()
    
    # 2. Add a slight random offset to avoid exact-pixel bot detection
    offset_x = random.randint(-5, 5)
    offset_y = random.randint(-5, 5)
    final_x = NEXT_BUTTON_X + offset_x
    final_y = NEXT_BUTTON_Y + offset_y
    
    # 3. Human-like delay before clicking
    time.sleep(random.uniform(0.1, 0.3))
    pyautogui.click(final_x, final_y)
    
    print("Waiting for next connection...")
    time.sleep(3.0)

def main():
    print("Starting auto-skipper in 3 seconds. Switch to your browser window!")
    time.sleep(3)
    
    # Automatically calculate the left half of your specific monitor
    screen_width, screen_height = pyautogui.size()
    video_region = {
        'top': 0,
        'left': 0,
        'width': int(screen_width / 2),
        'height': screen_height
    }
    
    print(f"Monitoring left half of screen: {video_region}")
    print("Running... (Press Ctrl+C in your terminal to stop)")

    with mss.mss() as sct:
        while True:
            try:
                # 1. Capture the left half of the screen
                screenshot = np.array(sct.grab(video_region))
                frame = cv2.cvtColor(screenshot, cv2.COLOR_BGRA2BGR)

                # PERFORMANCE TWEAK: Shrink the image by 50% to help your Vivobook run smoother
                small_frame = cv2.resize(frame, (0, 0), fx=0.5, fy=0.5)

                # 2. Analyze the frame for gender
                results = DeepFace.analyze(small_frame, actions=['gender'], enforce_detection=False, silent=True)
                
                # Handle both list (multiple faces) and dict (single face) returns
                result = results[0] if isinstance(results, list) else results

                # 3. Check for >99% certainty of a male
                if result and 'gender' in result:
                    # Extract the specific probability for 'Man'
                    man_probability = result['gender'].get('Man', 0)
                    
                    if man_probability > 99.0:
                        print(f"\nSkipping! AI is {man_probability:.2f}% sure it's a male.")
                        click_next()
                        continue # Start the loop over immediately after skipping
                
                # Small delay to prevent your CPU from maxing out at 100%
                time.sleep(0.5)

            except KeyboardInterrupt:
                print("\nStopping script...")
                break
            except Exception as e:
                # Ignore random errors (like DeepFace finding a completely black screen)
                time.sleep(0.5)

if __name__ == "__main__":
    main()