#include <bits/stdc++.h>
using namespace std;

bool isPrime(int x) {
    if (x <= 1) return false;
    if (x <= 3) return true;
    if (x % 2 == 0 || x % 3 == 0) return false;
    for (int i = 5; i * i <= x; i += 6)
        if (x % i == 0 || x % (i + 2) == 0)
            return false;
    return true;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;

        vector<int> a(n);
        for (int i = 0; i < n; i++)
            cin >> a[i];

        bool sorted = true;
        for (int i = 0; i < n - 1; i++) {
            if (a[i] > a[i + 1]) {
                sorted = false;
                break;
            }
        }

        if (sorted) {
            cout << "Bob\n";
            continue;
        }

        bool aliceWins = false;
        for (int i = 0; i < n - 1; i++) {
            if (a[i] > a[i + 1] && isPrime(a[i])) {
                aliceWins = true;
                break;
            }
        }

        cout << (aliceWins ? "Alice\n" : "Bob\n");
    }
}