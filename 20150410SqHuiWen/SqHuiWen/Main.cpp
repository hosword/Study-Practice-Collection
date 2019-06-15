#include "SqStack.h"
#include "SqQueue.h"
#include <string>
#include <iostream>
using namespace std;
void HuiWen()
{
	char str[MAXQSIZE];
	cin >> str;
	SqStack S1;
	InitStack(S1);
	SqQueue S2;
	InitQueue(S2);
	SElemType e1;
	QElemType e2;
	int len = strlen(str),i=0,temp1,temp2;
	for (i = 0; i < len; i++){
		Push(S1, str[i]);
		EnQueue(S2, str[i]);
	}
	while (QueueEmpty(S2) && StackEmpty(S1)){
		Pop(S1, e1);
		temp1 = e1;
		DeQueue(S2, e2);
		temp2 = e2;
		if (temp1 != temp2){
			cout << "不是回文数" << endl;
			return;
		}
	}
	cout << "是回文数" << endl;
		
}
void main()
{
	int choice=1 ;
	
	cout << "请输入要测试的字符串：" << endl;
	while (choice){
	
		HuiWen();
		cout << "请输入要测试的字符串：" << endl;
	}
	


}