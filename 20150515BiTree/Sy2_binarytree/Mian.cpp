#include"Binarytree.h"
#include <iostream>
#include<string>
using namespace std;
int main()
{
        BiTree T;
        
 
        cout << "������������" << endl;
        cout << "������ǰ������������ԡ�#������" << endl;
        cin >> c_pre >> c_mid;
        PDCBiTree(T, 0, 0, strlen(c_mid));
        prTBiTree(T);
        cout << endl;
        PoTBiTree(T);
        cout << endl;

       
}