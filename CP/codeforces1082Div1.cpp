#include <bits/stdc++.h>
using namespace std;
void solveA()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n, x;
        cin >> n;
        stack<int> st;
        vector<int> a(n);
        for (int i = 0; i < n; i++)
            cin >> a[i];
        int i = n - 1;
        while (i >= 0){
            int x = a[i];
            while (!st.empty() && st.top() == x + 1)
            {
                st.pop();
            }
            st.push(x);

            i--;
        }
        cout << st.size() << "\n";
    }
}
void solveB()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n, x;
        cin >> n;
        stack<int> st;
        vector<int> a(n);
        for (int i = 0; i < n; i++)
            cin >> a[i];
        int i = n - 1, sum = 0;
        while (i >= 0){
            int x = a[i];
            while (!st.empty() && st.top() == x + 1)
            {
                // sum+=st.top();
                st.pop();
            }
            st.push(x);

            i--;
        }
        while(!st.empty()){
            sum+=st.top();
            st.pop();
        }
        cout << sum << "\n";
    }
}
int main()
{
    // solveA();
    solveB();
    return 0;
}