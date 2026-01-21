# Import required libraries
import numpy as np
import pandas as pd
from pathlib import Path
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.linear_model import LinearRegression

# Load the dataset with basic error handling
try:
    csv_path = Path(__file__).parent / 'test.csv'
    data = pd.read_csv(csv_path)
except FileNotFoundError:
    raise SystemExit(f"Could not find '{csv_path}' - check the path and try again.")

# Inspect the data
print(data.head())

# Select independent and dependent variables (match CSV columns)
if 'x' in data.columns and 'y' in data.columns:
    X = data[['x']]   # Independent variable (2D)
    y = data['y']     # Dependent variable (1D)
else:
    raise SystemExit("Expected columns 'x' and 'y' in test.csv")

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Obtain model parameters
slope = model.coef_
intercept = model.intercept_
print("Slope:", slope)
print("Intercept:", intercept)

# Make predictions
y_pred = model.predict(X_test)

# Error metrics
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

# Residual Standard Error (RSE)
n = len(y_test)
p = 1
rse = np.sqrt(np.sum((y_test - y_pred) ** 2) / (n - p - 1))

# Display metrics
print("MSE:", mse)
print("RMSE:", rmse)
print("RSE:", rse)
print("R²:", r2)

# Visualization - convert to arrays and sort for a clean predicted line
X_plot = X_test.values.flatten()
y_test_arr = y_test.values if hasattr(y_test, 'values') else np.array(y_test)
y_pred_arr = np.array(y_pred)
sort_idx = np.argsort(X_plot)

plt.scatter(X_plot, y_test_arr, label="Actual")
plt.plot(X_plot[sort_idx], y_pred_arr[sort_idx], color="red", label="Predicted Line")
plt.xlabel("X")
plt.ylabel("y")
plt.title("Simple Linear Regression")
plt.legend()
plt.show()
