// 13/01/2025
// Author: Kartik

#include <bits/stdc++.h>
using namespace std;
// ---------------- MACROS ----------------
#define int long long           // Use long long everywhere
#define vi vector<int>          // Vector of integers
#define vvi vector<vector<int>> // 2D vector
#define all(x) x.begin(), x.end()
#define sz(x) ((int)x.size())
#define pb push_back
#define ff first
#define ss second
#define endl "\n"

// ---------------- FAST I/O ----------------
void fastIO()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
}

// ---------------- DEBUGGING ----------------
#ifdef LOCAL
#define debug(x) cerr << #x << " = " << x << endl;
#else
#define debug(x)
#endif

void ProblemA(int n) {
    for(int i =1; i<=n; i++){
        cout<<pow(i, 2)<<" ";
    }

    cout<<endl;
}



// void ProblemB(vi &a)
// {
//     sort(a.begin(), a.end());
//     int maxi = 0;
//     for (int i = 0; i < a.size(); i++)
//     {
//         int d = a[i + 1] - a[i];
//         maxi = max(maxi, d);
//         i++;
//     }

//     cout << maxi << endl;
// }

// void ProblemC(vi a, int k, int n){
//     vector<int> freq(n + 1, 0);
//     for (int x : a)
//     {
//         if (x >= 0 && x <= n)
//         {
//             freq[x]++;
//         }
//     }

//     int missing_count = 0;
//     for (int i = 0; i < k; i++)
//     {
//         if (freq[i] == 0)
//         {
//             missing_count++;
//         }
//     }

//     int k_count = freq[k];
//     cout << max(missing_count, k_count) << "\n";
// }

// ---------------- SOLVE FUNCTION ----------------
void solve()
{
    int n;
    cin >> n;
    vector<int> a(n);
    for (int &x : a) cin >> x;

    sort(a.begin(), a.end());
    a.erase(unique(a.begin(), a.end()), a.end());

    int need = 0;
    for (int x : a) {
        if (x - need >= 0) {
            need++;
        }
    }

    cout << need << "\n";
}


// ---------------- MAIN ----------------
int32_t main()
{
    fastIO();

    int t = 1; // default 1 test case
    cin >> t;  // uncomment if multiple test cases
    while (t--)
        solve();

    return 0;
}
