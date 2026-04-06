import math
import random

HUMAN = "O"
AI = "X"
EMPTY = " "


def create_board():
    return [EMPTY] * 9


def available_moves(board):
    return [i for i, value in enumerate(board) if value == EMPTY]


def check_winner(board):
    lines = [
        (0, 1, 2),
        (3, 4, 5),
        (6, 7, 8),
        (0, 3, 6),
        (1, 4, 7),
        (2, 5, 8),
        (0, 4, 8),
        (2, 4, 6),
    ]
    for a, b, c in lines:
        if board[a] == board[b] == board[c] != EMPTY:
            return board[a]
    if EMPTY not in board:
        return "DRAW"
    return None


def minimax(board, depth, is_max_turn, alpha=-math.inf, beta=math.inf):
    result = check_winner(board)
    if result == AI:
        return 10 - depth
    if result == HUMAN:
        return depth - 10
    if result == "DRAW":
        return 0

    if is_max_turn:
        best = -math.inf
        for move in available_moves(board):
            board[move] = AI
            score = minimax(board, depth + 1, False, alpha, beta)
            board[move] = EMPTY
            best = max(best, score)
            alpha = max(alpha, best)
            if beta <= alpha:
                break
        return best

    best = math.inf
    for move in available_moves(board):
        board[move] = HUMAN
        score = minimax(board, depth + 1, True, alpha, beta)
        board[move] = EMPTY
        best = min(best, score)
        beta = min(beta, best)
        if beta <= alpha:
            break
    return best


def ai_move(board):
    best_score = -math.inf
    moves = []
    for move in available_moves(board):
        board[move] = AI
        score = minimax(board, 0, False)
        board[move] = EMPTY
        if score > best_score:
            best_score = score
            moves = [move]
        elif score == best_score:
            moves.append(move)
    return random.choice(moves)


def print_board(board):
    cells = [str(i + 1) if cell == EMPTY else cell for i, cell in enumerate(board)]
    print(f" {cells[0]} | {cells[1]} | {cells[2]}")
    print("---+---+---")
    print(f" {cells[3]} | {cells[4]} | {cells[5]}")
    print("---+---+---")
    print(f" {cells[6]} | {cells[7]} | {cells[8]}")


def get_human_move(board):
    while True:
        raw = input("Enter your move (1-9): ").strip()
        if not raw.isdigit():
            print("Please enter a number from 1 to 9.")
            continue
        pos = int(raw)
        if pos < 1 or pos > 9:
            print("Move must be between 1 and 9.")
            continue
        idx = pos - 1
        if board[idx] != EMPTY:
            print("That spot is already taken.")
            continue
        return idx


def main():
    board = create_board()
    human_turn = random.choice([True, False])
    print("Tic-Tac-Toe")
    print("You are O, computer is X")
    print("Cells are numbered 1 to 9")

    while True:
        print()
        print_board(board)
        result = check_winner(board)
        if result is not None:
            print()
            if result == HUMAN:
                print("You win!")
            elif result == AI:
                print("Computer wins!")
            else:
                print("Draw!")
            break

        if human_turn:
            move = get_human_move(board)
            board[move] = HUMAN
        else:
            move = ai_move(board)
            board[move] = AI
            print(f"Computer chose: {move + 1}")

        human_turn = not human_turn


if __name__ == "__main__":
    main()