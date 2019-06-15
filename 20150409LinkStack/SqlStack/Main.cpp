#include "LinkStack.h"
#include <iostream>
using namespace std;
void  conversion(LinkStack &S, int &N, int m)                          //����ת��
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
void Matching()                              //����ƥ��
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
		cout << "ƥ��ɹ���" << endl;
	else
		cout << "ƥ�䲻�ɹ�!" << endl;

}
int main()
{
	LinkStack S;
	int choice, N, m;

	SElemType e;
	InitStack(S);
	while (1){
		cout << "	///////////////////////////////////////////////////////////////////////" << endl;
		cout << "/////	                       ���������ѡ�" << endl;
		cout << "/////	                        1�������ջ����ʼ��ջ" << endl;
		cout << "/////	                        2������ջ" << endl;
		cout << "/////	                        3�����ջ " << endl;
		cout << "/////	                        4���ж�ջΪ��" << endl;
		cout << "/////	                        5��ջ����" << endl;
		cout << "/////	                        6������ջ��Ԫ��" << endl;
		cout << "/////	                        7�������µ�ջ��Ԫ��" << endl;
		cout << "/////	                        8��ɾ��ջ��Ԫ��" << endl;
		cout << "/////	                        9������ջ�׵�ջ����Ԫ��" << endl;
		cout << "/////	                        10������ת��" << endl;
		cout << "/////	                        11������ƥ��" << endl;
		cout << "	//////////////////////////////////////////////////////////////////////" << endl << endl;
		cin >> choice;
		cout << choice;
		switch (choice){
		case 1:
			
			cout << "�����ջ����ʼ��ջ��" << endl;
			cout << "��������ջԪ�أ�����-1������" << endl;
			while (cin >> e&&e != -1){
				Push(S, e);
			}
			break;
		case 2:
			cout << "����ջ��" << endl;
			if (DestroyStack(S))
				DestroyStack(S);
			else
				cout << "����" << endl;
			break;
		case 3:
			cout << "���ջ��" << endl;
			if (ClearStack(S))
				ClearStack(S);
			else
				cout << "����" << endl;
			break;
		case 4:
			cout << "�ж�ջΪ�գ�" << endl;
			if (StackEmpty(S))
				cout << "ջΪ��" << endl;
			else
				cout << "ջ��Ϊ��" << endl;

			break;
		case 5:
			cout << "ջ���ȣ�" << endl;
			cout << StackLength(S) << endl;
			break;
		case 6:
			cout << "����ջ��Ԫ��" << endl;
			if (GetTop(S, e))
				cout << e << endl;
			else
				cout << "����" << endl;
			break;
		case 7:
			cout << "�����µ�ջ��Ԫ��" << endl;
			cin >> e;
			Push(S, e);
			break;
		case 8:
			cout << "ɾ��ջ��Ԫ��" << endl;
			if (StackEmpty(S))
				cout << "Ҫɾ����ջ��Ԫ���ǣ�" << Pop(S, e) << endl;
			else
				cout << "����" << endl;
			break;
		case 9:
			cout << "����ջ�׵�ջ����Ԫ��:" << endl;
			if (!StackEmpty(S)){

				cout << "Ԫ���ǣ�";
				StackTraverse(S);
				cout << endl;
			}
			
			else
				cout << "����" << endl;
			break;
		case 10:
			cout << "����ת��" << endl;
			cout << "������Ҫת��������N��ʮ���ƣ��Լ�Ҫת���Ľ���m��NΪ������mΪ��������m>1��" << endl;
			ClearStack(S);
			InitStack(S);
			cin >> N >> m;
			cout << "ʮ����" << N << "��" << m << "������Ϊ��";
			conversion(S, N, m);
			cout << endl;
			ClearStack(S);
			break;
		case 11:


			cout << "����ƥ��" << endl;
			cout << "���������ţ���{}[]()��Ӣ�����ţ�����#������:" << endl;
			Matching();
			getchar();
			break;
		default:
			break;



		}
	}


}
