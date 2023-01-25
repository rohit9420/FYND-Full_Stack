#include <bits/stdc++.h>
using namespace std;

class Stack{
    vector<int> stackArray , incrArray;
    public:
        Stack(){
        }
    void push(int x){
        stackArray.push_back(x);
        incrArray.push_back(0);
    }
    void pop(){
        stackArray.pop_back();
        int lastval = incrArray.back();
        incrArray.pop_back();
        int siz = incrArray.size();
        if(siz !=0 ){
            incrArray[siz-1] += lastval;
        }
    }
    int peek(){
        return stackArray.back() + incrArray.back();
    }

    void inc(int u , int v){
        incrArray[i] += v;
    }

};