#include <bits/stdc++.h>
using namespace std;


// void solveA(){
//     int t;
//     cin >> t;
//     while (t--) {
//         int n, maxi = 0, cnt = 0;
//         cin >> n;
//         vector<int> a(n);
//         for (int i = 0; i < n; i++) {
//             cin >> a[i];
//             maxi = max(maxi, a[i]);
//         }

//         for(auto x : a){
//             if(x == maxi) cnt++;
//         }

//         cout<<cnt<<"\n";
//     }
// }

void solveB(){
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        string s;
        cin>> s;
        if(n == 1){
            cout<<"No\n";
            continue;
        }
        stack<char> st;
        for(auto x : s){
            if(!st.empty() && st.top() == x){
                st.pop();
            } else {
                st.push(x);
            }
        }
        if(st.empty()){
            cout << "YES\n";
        } else {
            cout << "NO\n";
        }
    }
}

int main() {
    // solveA();
    solveB();
    return 0;
}
