#include <bits/stdc++.h>
using namespace std;

// void solveA(){
//     int t;
//     cin >> t;
//     while (t--) {
//         int n;
//         cin >> n;
//         vector<int> p(n + 1);
//         int pn = 1;
//         for (int i = 1; i <= n; i++) {
//             cin >> p[i];
//             if (p[i] == n) pn = i;
//         }

//         swap(p[1], p[pn]);

//         for (int i = 1; i <= n; i++) {
//             cout << p[i]<<" ";
//         }
//         cout << '\n';
//     }
// }

void solveA(){
    int t;
    cin >> t;
    while (t--) {
        int n, m;
        cin >> n>>m;
        if((n-2*m) %3 != 0 || (n-2*m)/3 < 0){
            cout << "NO\n";
        }else if(max(0, -m) <= (n - 2*m)/6){
            cout << "YES\n";
        }  else{
            cout << "NO\n";
        }
    }
}

int main() {
    solveA();
    // solveB();
    return 0;
}
