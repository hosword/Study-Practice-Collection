#include "SqStack.h"
#include <iostream>
using namespace std;
bool InitStack(SqStack &S)                                          //构造空栈
{
		S.data = new SElemType[MAXSIZE];
		if (!S.data)
				return false;
		S.top = 0;
		return true;

}
bool DestroyStack(SqStack &S)                                 //销毁栈S
{

	delete S.data;
	S.data = NULL;
	S.top = 0;
	return true;
}
bool ClearStack(SqStack &S)                                      //清空栈S
{
	S.top = 0;
	return true;
}
bool StackEmpty(SqStack S)                                       //判断栈S是否为空
{
	if (S.top == 0)
		return true;
	else
		return false;
}
int  StackLength(SqStack S)                                      //栈S的长度
{
	return S.top;
}
bool GetTop(SqStack S, SElemType &e)                  //返回栈S的栈顶元素
{
	if (S.top > 0 && S.top <= MAXSIZE){
		e = S.data[S.top - 1];
		return true;
	}
	else
		return false;
		
}

bool Push(SqStack &S, SElemType e)                        //插入元素为S新的栈顶元素
{
	if (S.top == MAXSIZE) 
		return false;
	else {
		
	S.data[S.top] = e;
	S.top++;
	return true;
	}
	
}
bool  Pop(SqStack &S, SElemType &e)                     //删除的S栈顶元素并返回其值e
{
	if(S.top > 0 && S.top <= MAXSIZE){
		S.top--;
		e = S.data[S.top];
		return true;
	}
	return false;
}
void StackTraverse(SqStack S)                                    //依次访问栈S的每个元素
{

	int i;
	for (i = 0; i < S.top; i++){
		cout << S.data[i] << "\t";
	}
	cout << endl;
	
}
