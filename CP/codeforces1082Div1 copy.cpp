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

void solveB(){
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        long long ans = 1;

        for(int k = 2; k*k<=n; k++){
            if(n % k == 0){
                ans *= k;
                while(n % k == 0){
                    n /= k;
                }
            }
        }
        if(n > 1) ans *= n;
        cout << ans << "\n";    
    }
}

int main() {
    // solveA();
    solveB();
    return 0;
}
