// BiSearchTree.cpp : Defines the entry point for the console application.
//

#include "BiSearchTree.h"
#include"BTreeNode.h"
#include <stdlib.h>
#include <ctime>

typedef int Datatype;
#define Max 10

void main(void)
{
	BiSearchTree<int> searchTree;

	time_t t;
	srand((unsigned)time(&t));

	for(int i=0;i<10;i++) searchTree.Insert(rand()%100);
    cout << "-------------------------------------------------------------------------" << endl;
    cout << "************************************ʵ����: �����㷨*********************" << endl;
    cout << "----------------------------------------------------------------------------" << endl;

    cout << "��������Ϊ��" << endl;
	searchTree.InOrder();
	cout<<endl;
    cout << "��������Ϊ��" << endl;
	searchTree.myOrder();
	cout<<endl;
}
