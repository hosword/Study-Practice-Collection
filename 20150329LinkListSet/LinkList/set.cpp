#include "Set.h"
#include <iostream>
using namespace std;

LinkList SetUnion(LinkList La, LinkList Lb) //并集
{
	int i,j,k;
	LinkList Lc;
	InitList(Lc);
	ElemType e1,e2;
	for (i = 1; i <= ListLength(La); i++){
		GetElem(La, i, e1);
		ListInsert(Lc,i,e1);
	}
	k= ListLength(Lc);
	for (i = 1; i <=k; i++){
		for (j = 1; j <= ListLength(Lb);j++){
			if (GetElem(Lc, i, e1) != GetElem(Lb, j, e2))
				ListInsert(Lc, ++k, e2);
		}
		
	}
	return Lc;

}
LinkList SetDif(LinkList La, LinkList Lb) //差集
{
	int i, j;
	ElemType e1, e2;
	LinkList Lc;
	for (i = 1; i <= ListLength(La); i++){
		for (j = 1; j <= ListLength(Lb); j++){
			if (GetElem(La, i, e1) == GetElem(Lb, j, e2))
				ListDelete(La, i, e1);
			}
		}
	Lc = La;
	return Lc;
}
LinkList SetInt(LinkList La, LinkList Lb)//交集
{
	int i , j,k;
	ElemType e1, e2;
	LinkList Lc;
	InitList(Lc);
	k= ListLength(Lc);
	for (i = 1; i <= ListLength(La); i++){
		for (j = 1; j <= ListLength(Lb); j++){
			if ( GetElem(La,i,e1)==GetElem(Lb, j, e2))
				ListInsert(Lc, ++k, e1);
		}

	}
	return Lc;

}
LinkList SetCom(LinkList La,LinkList U)  //La.补集
{
	int i, j;
	
	ElemType e1,e2;
	for (i = 1; i <= ListLength(U); i++){
		for (j = 1; j <= ListLength(La); j++){
			if (GetElem(U, i, e1) == GetElem(La, j, e2))
				ListDelete(U, i, e1);
		}
	}
	return U;
}