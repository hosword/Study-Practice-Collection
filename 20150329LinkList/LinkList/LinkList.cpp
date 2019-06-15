#include "LinkList.h"
#include <stdlib.h>
bool InitList(LinkList &L)//构造一个空的线性表,L为LinkList的指针 
{
	L = new LNode;
	L->next = NULL;//初始为空
	return true;
}


bool DestroyList(LinkList &L)//销毁线性表
{
	LinkList p, q;

	q = L->next;
	while (q){
		p = q;
		delete p;
		q = q->next;
	}
	return true;
}

bool ClearList(LinkList &L)//重置线性表，将结点数据置为空 
{
	LinkList p;
	p = L;
	while (L){
		p = p->next;
		delete L;
		L = p;
	}
	return true;
}

bool ListEmpty(LinkList L)//判断是否为空表
{
	LinkList p;
	p = L->next;

	if (p){
		return false;
	}
	else
		return true;
}

int ListLength(LinkList L)//返回线性表的数据元素个数
{
	int i = 0;
	LinkList p = L->next;
	while (p)
	{
		i++;
		p = p->next;
	}
	return i;
}

int GetElem(LinkList L, int i, ElemType &e)//用e返回L中第i个数据元素的值
{
	int j;
	LinkList p = L;
	for (j = 0; j<i; j++)
	{
		p = p->next;
	}
	if (!p)  
		return false;
	e = p->data;
	return e;
}

int LocateElem(LinkList L, ElemType e)//返回L中第一个与e满足关系的数据元素的位序
{
	int i = 0;
	LinkList p = L->next;
	while (p!=NULL ){
		i++;
		if (p->data == e) break;
		p = p->next;
	}
	
	return i;
}

int PriorElem(LinkList L, ElemType cur_e, ElemType & pre_e)//若cur_e是L的数据元素，且不是第一个，则用pre_e返回他的前驱
{
	LinkList p,q;
	p = L->next;

	while (p->next){
		q = p->next;
		if (q->data == cur_e){
			pre_e = p->data;
			return pre_e;
		}
		p = q;
		q = q->next;
	}
}

int NextElem(LinkList L, ElemType cur_e, ElemType &next_e)//若cur_e是L的数据元素，且不是最后一个，则用next_e返回他的后继
{
	LinkList p, q;
	p = L->next;
	
	while (p->next)
	{
		q = p->next;
		if (p->data == cur_e)
		{
			next_e = q->data;
			return next_e;
		}
		p = q;
		q = q->next;
	}
	return false;
}

bool ListInsert(LinkList &L, int i, ElemType e)//在L中第i个位置之前插入新的数据元素e，L的长度加1
{

	LinkList p;
	p = L;
	int j=0;
	while (p&&j < i - 1){
		p = p->next;
		++j;
	}
	if (!p || i < 0)
		return false;
	LinkList N;
	N = new LNode;
	N->data = e;
	N->next = p->next;
	p->next = N;
	return true;
}

int ListDelete(LinkList &L, int i, ElemType &e)//删除L的第i个数据元素，并用e返回其值，L的长度减1
{
	LinkList q, p;
	int j = 0;
	p = L->next;
	while (p!=NULL&&j < i - 1){
		p = p->next;
		++j;
	}
	if (!(p->next) || i < 0)
		return false;
	q = p->next;
	p->next = q->next;
	e = q->data;
	
	delete q;
	return true;


}

