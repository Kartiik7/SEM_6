# ===============================
# Simple Linear Regression
# OLS, Normal Equation, Gradient Descent
# ===============================

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics

# -------------------------------
# Load dataset
# -------------------------------
df = pd.read_csv(r"D:\SEM_6\Adv._ML\test.csv")


print(df.head())
print(df.isnull().sum())

# -------------------------------
# Feature and target
# -------------------------------
X = df[["x"]]   # 2D
y = df["y"]     # 1D

# -------------------------------
# Train-test split
# -------------------------------
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# -------------------------------
# OLS (sklearn)
# -------------------------------
model = LinearRegression()
model.fit(X_train, y_train)

print("Coefficient:", model.coef_)
print("Intercept:", model.intercept_)

y_pred_ols = model.predict(X_test)

# -------------------------------
# Metrics (OLS)
# -------------------------------
print("\nOLS Metrics")
print("MAE:", metrics.mean_absolute_error(y_test, y_pred_ols))
print("MSE:", metrics.mean_squared_error(y_test, y_pred_ols))
print("RMSE:", np.sqrt(metrics.mean_squared_error(y_test, y_pred_ols)))
print("R2:", metrics.r2_score(y_test, y_pred_ols))

# -------------------------------
# Normal Equation
# -------------------------------
X_train_ne = np.c_[np.ones(len(X_train)), X_train.values]
X_test_ne = np.c_[np.ones(len(X_test)), X_test.values]

theta = np.linalg.pinv(X_train_ne.T @ X_train_ne) @ X_train_ne.T @ y_train.values
y_pred_ne = X_test_ne @ theta

print("\nNormal Equation Metrics")
print("MAE:", metrics.mean_absolute_error(y_test, y_pred_ne))
print("MSE:", metrics.mean_squared_error(y_test, y_pred_ne))
print("RMSE:", np.sqrt(metrics.mean_squared_error(y_test, y_pred_ne)))
print("R2:", metrics.r2_score(y_test, y_pred_ne))

# -------------------------------
# Feature Normalization
# -------------------------------
mu = X_train.mean()
sigma = X_train.std()

X_train_norm = (X_train - mu) / sigma
X_test_norm = (X_test - mu) / sigma

X_train_gd = np.c_[np.ones(len(X_train_norm)), X_train_norm.values]
X_test_gd = np.c_[np.ones(len(X_test_norm)), X_test_norm.values]

# -------------------------------
# Gradient Descent
# -------------------------------
def gradient_descent(X, y, lr=0.01, iterations=1000):
    m, n = X.shape
    theta = np.zeros(n)
    cost_history = []

    for _ in range(iterations):
        predictions = X @ theta
        error = predictions - y
        cost = (1 / (2 * m)) * np.sum(error ** 2)
        cost_history.append(cost)
        theta -= (lr / m) * (X.T @ error)

    return theta, cost_history

theta_gd, cost_history = gradient_descent(
    X_train_gd, y_train.values
)

y_pred_gd = X_test_gd @ theta_gd

print("\nGradient Descent Metrics")
print("MAE:", metrics.mean_absolute_error(y_test, y_pred_gd))
print("MSE:", metrics.mean_squared_error(y_test, y_pred_gd))
print("RMSE:", np.sqrt(metrics.mean_squared_error(y_test, y_pred_gd)))
print("R2:", metrics.r2_score(y_test, y_pred_gd))

# -------------------------------
# Cost vs Iterations
# -------------------------------
plt.plot(cost_history)
plt.xlabel("Iterations")
plt.ylabel("Cost")
plt.title("Cost vs Iterations (Gradient Descent)")
plt.show()

# -------------------------------
# Actual vs Predicted
# -------------------------------
plt.scatter(y_test, y_pred_ols)
plt.plot([y_test.min(), y_test.max()],
         [y_test.min(), y_test.max()])
plt.xlabel("Actual")
plt.ylabel("Predicted")
plt.title("Actual vs Predicted (OLS)")
plt.show()
