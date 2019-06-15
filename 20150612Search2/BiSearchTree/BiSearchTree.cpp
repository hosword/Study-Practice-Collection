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
    cout << "************************************实验五: 查找算法*********************" << endl;
    cout << "----------------------------------------------------------------------------" << endl;

    cout << "升序序列为：" << endl;
	searchTree.InOrder();
	cout<<endl;
    cout << "降序序列为：" << endl;
	searchTree.myOrder();
	cout<<endl;
}
