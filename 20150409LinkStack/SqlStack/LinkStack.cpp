#include "LinkStack.h"
#include <iostream>
using namespace std;
bool InitStack(LinkStack &S)                                          //构造空栈
{
	    S = NULL;
		return true;

}
bool DestroyStack(LinkStack &S)                                 //销毁栈S
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
bool ClearStack(LinkStack &S)                                      //清空栈S
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
bool StackEmpty(LinkStack S)                                       //判断栈S是否为空
{
	if (!S)
		return true;
	else
		return false;
}
int  StackLength(LinkStack S)                                      //栈S的长度
{
	int i=0;
	
	while (S){
		S = S->next;
		i++;
	}
	return i;
}
bool GetTop(LinkStack S, SElemType &e)                  //返回栈S的栈顶元素
{
	if (S){
		e = S->data;
		return true;
	}
	else{
		return false;
	}
}

bool Push(LinkStack &S, SElemType e)                        //插入元素为S新的栈顶元素
{
	LinkStack p = new StackNode;
	p->data = e;
	p->next = S;
	S = p;
	return true;
	
	
}
bool  Pop(LinkStack &S, SElemType &e)                     //删除的S栈顶元素并返回其值e
{
	LinkStack p = new StackNode;
	if (!S)		return false;
	e = S->data;
	p = S;
	S = S->next;
	delete p;
	return true;

}
bool StackTraverse(LinkStack S)                                    //依次访问栈S的每个元素
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