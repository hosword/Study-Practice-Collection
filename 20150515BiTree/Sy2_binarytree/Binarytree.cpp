#include"Binarytree.h"
#include <iostream>
#include <string>

using namespace std;
int Position(char c)
{
        return strchr(c_mid, c) - c_mid;
}
bool PDCBiTree(BiTree &T, int i, int j, int len)
//iΪԪ����ǰ�������е�С�꣬jΪԪ�������������е��±꣬lenΪ�������еĳ���
{
        if (len < 1){
                return false;
        }
        else{
                T = new Node;
                T->data = c_pre[i];
                int m = Position(c_pre[i]);
               PDCBiTree(T->lchild, i + 1, j, m - j);            //m-jΪ�������ַ�������
              PDCBiTree(T->rchild, i + (m - j) + 1, m + 1, len - 1 - (m - j));    //len-1-(m-j)Ϊ�������ַ�������
        }
}
bool prTBiTree(BiTree T)
{
        if (T){
                prTBiTree(T->lchild);
                prTBiTree(T->rchild);
                cout << T->data;
        }
        return true;
}
bool PoTBiTree(BiTree T)
{
        if (T){
                cout << T->data;
                prTBiTree(T->lchild);
                prTBiTree(T->rchild);
               
        }
        return true;
}

//bool InitBiTree(BiTree &T)
//{
//        T = new BiTNode;
//        T = NULL;
//        return true;
//}
//bool DestroyBiTree(BiTree &T)
//{
//        T = NULL;
//        return true;
//}
//bool CreateBiTree(BiTree &T)
//{
//
//        char ch1;
//        cin >> ch1;
//        char ch2;
//        cin >> ch2;
//        if (ch1 == '#'&&ch2 == '#'){
//                T = NULL;
//        }
//      
//        return true;
//}
//bool ClearBiTree(BiTree &T)
//{
//        T = NULL;
//        return true;
//}
//bool BiTreeEmpty(BiTree T)
//{
//        if (T)
//                return false;
//        else
//                return true;
//}
