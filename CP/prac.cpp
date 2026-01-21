#include<bits/stdc++.h>
using namespace std;

int main(){
    int n, maxxi = INT_MIN;
    cin>>n;

    vector<int>a(n);
    
    for(int i = 0; i<n; i++){
        cin>>a[i];
        maxxi = max(maxxi, a[i]);
    }

    cout<<"\nMaximum is: "<<maxxi<<"\n\n";
    return 0;
}