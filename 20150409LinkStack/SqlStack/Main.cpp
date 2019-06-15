#include "LinkStack.h"
#include <iostream>
using namespace std;
void  conversion(LinkStack &S, int &N, int m)                          //进制转化
{

	SElemType e;
	if (N < 0){
		N = -N;
		cout << "-";
	}
	while (N){
		Push(S, N%m);
		N = N / m;
	}
	while (!StackEmpty(S)){
		Pop(S, e);
		if (e > -1 && e < 10)
			cout << e;
		else
			cout << (char)(e + 55);

	}
}
void Matching()                              //括号匹配
{

	LinkStack S;

	InitStack(S);
	SElemType e;
	int flag = 1;
	char c;
	cin >> c;
	while (c != '#'&&flag){
		switch (c){
		case   '(':
		case   '[':
		case   '{':
			Push(S, (int)c);
			break;
		case ')':
			GetTop(S, e);
			if ((char)e == '(')
				Pop(S, e);
			else
				flag = 0;
			break;
		case ']':
			GetTop(S, e);
			if ((char)e == '[')
				Pop(S, e);
			else
				flag = 0;
			break;
		case '}':
			GetTop(S, e);
			if ((char)e == '{')
				Pop(S, e);
			else
				flag = 0;
			break;


		}
		cin >> c;
	}

	if (StackEmpty(S) == true && flag == 1)
		cout << "匹配成功！" << endl;
	else
		cout << "匹配不成功!" << endl;

}
int main()
{
	LinkStack S;
	int choice, N, m;

	SElemType e;
	InitStack(S);
	while (1){
		cout << "	///////////////////////////////////////////////////////////////////////" << endl;
		cout << "/////	                       请输入操作选项：" << endl;
		cout << "/////	                        1：构造空栈并初始化栈" << endl;
		cout << "/////	                        2：销毁栈" << endl;
		cout << "/////	                        3：清空栈 " << endl;
		cout << "/////	                        4：判断栈为空" << endl;
		cout << "/////	                        5：栈长度" << endl;
		cout << "/////	                        6：返回栈顶元素" << endl;
		cout << "/////	                        7：插入新的栈顶元素" << endl;
		cout << "/////	                        8：删除栈顶元素" << endl;
		cout << "/////	                        9：访问栈底到栈顶各元素" << endl;
		cout << "/////	                        10：进制转化" << endl;
		cout << "/////	                        11：括号匹配" << endl;
		cout << "	//////////////////////////////////////////////////////////////////////" << endl << endl;
		cin >> choice;
		cout << choice;
		switch (choice){
		case 1:
			
			cout << "构造空栈并初始化栈：" << endl;
			cout << "请输入入栈元素（输入-1结束）" << endl;
			while (cin >> e&&e != -1){
				Push(S, e);
			}
			break;
		case 2:
			cout << "销毁栈：" << endl;
			if (DestroyStack(S))
				DestroyStack(S);
			else
				cout << "错误" << endl;
			break;
		case 3:
			cout << "清空栈：" << endl;
			if (ClearStack(S))
				ClearStack(S);
			else
				cout << "错误" << endl;
			break;
		case 4:
			cout << "判断栈为空：" << endl;
			if (StackEmpty(S))
				cout << "栈为空" << endl;
			else
				cout << "栈不为空" << endl;

			break;
		case 5:
			cout << "栈长度：" << endl;
			cout << StackLength(S) << endl;
			break;
		case 6:
			cout << "返回栈顶元素" << endl;
			if (GetTop(S, e))
				cout << e << endl;
			else
				cout << "错误！" << endl;
			break;
		case 7:
			cout << "插入新的栈顶元素" << endl;
			cin >> e;
			Push(S, e);
			break;
		case 8:
			cout << "删除栈顶元素" << endl;
			if (StackEmpty(S))
				cout << "要删除的栈顶元素是：" << Pop(S, e) << endl;
			else
				cout << "错误！" << endl;
			break;
		case 9:
			cout << "访问栈底到栈顶各元素:" << endl;
			if (!StackEmpty(S)){

				cout << "元素是：";
				StackTraverse(S);
				cout << endl;
			}
			
			else
				cout << "错误！" << endl;
			break;
		case 10:
			cout << "进制转化" << endl;
			cout << "请输入要转换的数字N（十进制）以及要转换的进制m（N为整数，m为正整数，m>1）" << endl;
			ClearStack(S);
			InitStack(S);
			cin >> N >> m;
			cout << "十进制" << N << "的" << m << "进制数为：";
			conversion(S, N, m);
			cout << endl;
			ClearStack(S);
			break;
		case 11:


			cout << "括号匹配" << endl;
			cout << "请输入括号（“{}[]()”英文括号，输入#结束）:" << endl;
			Matching();
			getchar();
			break;
		default:
			break;



		}
	}


}
