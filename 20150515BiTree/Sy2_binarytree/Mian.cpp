#include"Binarytree.h"
#include <iostream>
#include<string>
using namespace std;
int main()
{
        BiTree T;
        
 
        cout << "创建二叉树：" << endl;
        cout << "请输入前序和中序序列以‘#’结束" << endl;
        cin >> c_pre >> c_mid;
        PDCBiTree(T, 0, 0, strlen(c_mid));
        prTBiTree(T);
        cout << endl;
        PoTBiTree(T);
        cout << endl;

       
}