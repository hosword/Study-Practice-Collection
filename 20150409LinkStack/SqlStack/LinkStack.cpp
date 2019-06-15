#include "LinkStack.h"
#include <iostream>
using namespace std;
bool InitStack(LinkStack &S)                                          //�����ջ
{
	    S = NULL;
		return true;

}
bool DestroyStack(LinkStack &S)                                 //����ջS
{ 
	LinkStack p;
	while(S){
		p = S->next;
		delete S;
		S = p;
	}
	S = NULL;
	return true;
}
bool ClearStack(LinkStack &S)                                      //���ջS
{
	LinkStack p;
	while (S){
		p = S->next;
		delete S;
		S = p;
	}
	S = NULL;
	return true;
	
	
}
bool StackEmpty(LinkStack S)                                       //�ж�ջS�Ƿ�Ϊ��
{
	if (!S)
		return true;
	else
		return false;
}
int  StackLength(LinkStack S)                                      //ջS�ĳ���
{
	int i=0;
	
	while (S){
		S = S->next;
		i++;
	}
	return i;
}
bool GetTop(LinkStack S, SElemType &e)                  //����ջS��ջ��Ԫ��
{
	if (S){
		e = S->data;
		return true;
	}
	else{
		return false;
	}
}

bool Push(LinkStack &S, SElemType e)                        //����Ԫ��ΪS�µ�ջ��Ԫ��
{
	LinkStack p = new StackNode;
	p->data = e;
	p->next = S;
	S = p;
	return true;
	
	
}
bool  Pop(LinkStack &S, SElemType &e)                     //ɾ����Sջ��Ԫ�ز�������ֵe
{
	LinkStack p = new StackNode;
	if (!S)		return false;
	e = S->data;
	p = S;
	S = S->next;
	delete p;
	return true;

}
bool StackTraverse(LinkStack S)                                    //���η���ջS��ÿ��Ԫ��
{
	SElemType e;
	if (!S)		return false;
	while (S){
		e = S->data;
		cout << e << "\t";
		S = S->next;
	}
	return true;
}