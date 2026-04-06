#include<bits/stdc++.h>
using namespace std;

int findMedian(vector<int> &nums1, vector<int> &nums2, int m, int n){
    int total_len = m + n;
    int i = 0, j = 0, m1 = 0;

    while(i + j <= total_len/2){
        if(nums1[i] <= nums2[j]){
            m1 = nums1[i];
            i++;
        }else{
            m1 = nums2[j];
            j++;
        }
    }

    if(total_len%2==0){
        return (nums1[i] + nums2[j])/2;
    }

    return m1;
}

int main(){
    int m = 5, n = 6;
    vector<int> nums1 = {1, 2, 3, 4, 5};
    vector<int> nums2 = {3, 3, 4, 5, 6, 7};

    cout<<"the median of arrays is:"<< findMedian(nums1, nums2, m, n)<<endl;
}