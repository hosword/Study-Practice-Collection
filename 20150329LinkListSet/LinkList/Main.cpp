////////////////////////////������///////////////////////////////////
#include <iostream>

#include <stdlib.h>
#include "Set.h"
using namespace std;
int main()
{
	LinkList La, Lb, Lc, U;
	ElemType e1,e2;
	int n, a, b;
	int i, j,ka,kb, La_len,Lb_len,U_len,c=0,m;
	InitList(La);
	InitList(Lb);
	InitList(Lc);
	InitList(U);
	

	while (c == 0){


	cout<<"////////////////////////////�������ܲ���///////////////////////////////////////"<<endl;
	cout<<"//                                                                                                        //"<<endl;
	cout<<"//1.���켯��               2.�ж��Ƿ�Ϊ�ռ� //"<<endl;
	cout<<"//3.����Ԫ�ظ���         4.��ѯ�����е�Ԫ��   //"<<endl;
	cout<<"//5.�󲢼�                    6.ɾ������Ԫ��                     //"<<endl;
	cout << "//7.�󽻼�                    8.�󲹼�                     //" << endl;
	cout << "//9.��                                       //" << endl;
	
	cout<<"//////////////////////////////////////////////////////////////////////////////////"<<endl;
	cout<<""<<endl;
	cout << "��ѡ�����: " << endl;
	cin >> n;
	while (n >= 1 && n <= 9)
	{
		switch (n)
		{
		case 1://InitList
			
			cout<<"�����뼯��La��Ԫ�ظ���: "<<endl;
			cin >> La_len;
			cout<<"����������Ԫ��: "<<endl;
			
			for (i = 1; i <=La_len; i++)
			{
					cin >> m;
					ListInsert(La, i, m);
			}
			
				cout<<"����La��ʼ���ɹ�."<<endl;
				cout << "�����뼯��Lb��Ԫ�ظ���: " << endl;
				cin >>Lb_len;
				cout << "����������Ԫ��: " << endl;

			for (i = 1; i <= Lb_len; i++)
			{
				cin >> m;
				ListInsert(Lb, i, m);
			}

			cout << "����La��ʼ���ɹ�." << endl;
			cout << "������ȫ��U��Ԫ�ظ���: " << endl;
			cin >> U_len;
			cout << "����������Ԫ��: " << endl;

			for (i = 1; i <= U_len; i++)
			{
				cin >> m;
				ListInsert(U, i, m);
			}

			cout << "ȫ��U��ʼ���ɹ�." << endl;
			break;
		
	
		case 2://ListEmpty
			if (ListEmpty(La))
				cout<<"����LaΪ��."<<endl;
			else
				cout<<"����La��Ϊ��."<<endl;
			if (ListEmpty(Lb))
				cout << "����LbΪ��." << endl;
			else
				cout << "����Lb��Ϊ��." << endl;

			break;
		case 3://ListLength
			ka = ListLength(La);
			if (ka)
				cout<<"����LaԪ�ظ���Ϊ "<< ka<<endl;
			else
				cout<<"����!"<<endl;
			kb = ListLength(Lb);
			if (kb)
				cout << "����LbԪ�ظ���Ϊ " << kb<< endl;
			else
				cout << "����!" << endl;

			break;

		case 4://LocateElem
			cout<<"����LaԪ������ : "<<endl;
			for (ka = 1; ka <= ListLength(La); ka++){
				cout << GetElem(La, ka, e1) << "\t";
			}
			cout << endl;
			cout << "����LbԪ������ : " << endl;
			for (kb = 1; kb <= ListLength(Lb); kb++){
				cout << GetElem(Lb, kb, e2) << "\t";
			}
			cout << endl;
			
			break;
		
		case 5://ListInsert
			if (SetUnion(La, Lb)){
				cout << "La��Lb�Ĳ���LcΪ��" << endl;
				cout << SetUnion(La, Lb) << endl;
			}
			else
				cout << "����" << endl;
			
			break;
		case 6://ListDelete
			cout<<"��������Ҫɾ��La��Ԫ��:"<<endl;
			cin >>e1;
			i=LocateElem(La, e1);
			ListDelete(La, i, e1);
			cout<<"��Ҫɾ����Ԫ����"<< e1<<endl;
			if (ListDelete(La,i, e1) != NULL)
			cout<<"ɾ���ɹ���"<<endl;
			cout << "��������Ҫɾ��Lb��Ԫ��:" << endl;
			cin >> e2;
			j = LocateElem(La, e2);
			ListDelete(Lb, j, e2);
			cout << "��Ҫɾ����Ԫ����" << e2 << endl;
			if (ListDelete(Lb, j, e2)!=NULL)
			cout << "ɾ���ɹ���" << endl;
			break;
		case 7://SetInt(La, Lb)
			if (!SetInt(La, Lb)){
				cout << "La��Lb�Ľ���LcΪ��" << endl;
				cout << SetInt(La, Lb) << endl;
			}
			else
				cout << "����" << endl;

			break;
		case 8://SetInt(La, U)
			if (!SetCom(La,U)){
				cout << "LaΪ��" << endl;
				cout << SetCom(La, U) << endl;
			}
			else
				cout << "����" << endl;

			break;
		case 9://SetInt(La, U)
			if (!SetDif(La, Lb)){
				cout << "La-LbΪ��" << endl;
				cout << SetDif(La, Lb) << endl;
			}
			else
				cout << "����" << endl;

			break;
		default: break;
		
		}//switch
		cout<<"��ѡ��Ҫ���ԵĹ������: "<<endl;
		cin >> n;
	}//while
}
	return 0;
}
