#include "LinkList.h"
#include <stdlib.h>
bool InitList(LinkList &L)//����һ���յ����Ա�,LΪLinkList��ָ�� 
{
	L = new LNode;
	L->next = NULL;//��ʼΪ��
	return true;
}


bool DestroyList(LinkList &L)//�������Ա�
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

bool ClearList(LinkList &L)//�������Ա������������Ϊ�� 
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

bool ListEmpty(LinkList L)//�ж��Ƿ�Ϊ�ձ�
{
	LinkList p;
	p = L->next;

	if (p){
		return false;
	}
	else
		return true;
}

int ListLength(LinkList L)//�������Ա������Ԫ�ظ���
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

int GetElem(LinkList L, int i, ElemType &e)//��e����L�е�i������Ԫ�ص�ֵ
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

int LocateElem(LinkList L, ElemType e)//����L�е�һ����e�����ϵ������Ԫ�ص�λ��
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

int PriorElem(LinkList L, ElemType cur_e, ElemType & pre_e)//��cur_e��L������Ԫ�أ��Ҳ��ǵ�һ��������pre_e��������ǰ��
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

int NextElem(LinkList L, ElemType cur_e, ElemType &next_e)//��cur_e��L������Ԫ�أ��Ҳ������һ��������next_e�������ĺ��
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

bool ListInsert(LinkList &L, int i, ElemType e)//��L�е�i��λ��֮ǰ�����µ�����Ԫ��e��L�ĳ��ȼ�1
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

int ListDelete(LinkList &L, int i, ElemType &e)//ɾ��L�ĵ�i������Ԫ�أ�����e������ֵ��L�ĳ��ȼ�1
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

