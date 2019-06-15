////////////////////////////������///////////////////////////////////
#include <iostream>

#include <stdlib.h>
#include "LinkList.h"
using namespace std;



int main()
{
	LinkList L;
	ElemType e;
	int n, b,m;
	int i, k, len,c=0;
	InitList(L);
	while (c == 0){


	cout<<"////////////////////////////�������ܲ���///////////////////////////////////////"<<endl;
	cout<<"//                                                                                                        //"<<endl;
	cout<<"//1.�������Ա�         2.�������Ա�      3.�������Ա�        4.�ж��Ƿ�Ϊ�ձ� //"<<endl;
	cout<<"//5.���Ա�Ԫ�ظ���     6.��i��Ԫ��ֵ     7.��ѯ����Ԫ��      8.����Ԫ��ǰ��  //"<<endl;
	cout<<"//9.����Ԫ�غ��      10.��������Ԫ��    11.ɾ������Ԫ��                     //"<<endl;
	
	cout<<"//////////////////////////////////////////////////////////////////////////////////"<<endl;
	cout<<""<<endl;
	cout << "��ѡ�����: " << endl;
	cin >> n;
	while (n >= 1 && n <= 11)
	{
		switch (n)
		{
		case 1://InitList
			
			cout<<"����������ĳ���(len): "<<endl;
			cin >> len;
			
			if (len > 0){
				cout << "����������Ԫ��(m): " << endl;
				
				for (n = 1; n <= len; n++){
					cin >> m;
					ListInsert(L, n, m);
				}
					
	
				cout << "���Ա��ʼ���ɹ�." << endl;
				cout << "���Ա��������£�" << endl;
				for (i = 1; i <= ListLength(L); i++){
					cout << GetElem(L, i, e) << "\t";
				}
				cout << endl;
			}
			else 
				cout << "��������������" << endl;
			break;
		case 2://DestroyList
			DestroyList(L);
			cout<<"���Ա�������."<<endl;
			break;
		case 3://ClearList
			ClearList(L);
			cout<<"���Ա����óɹ�."<<endl;
			break;
		case 4://ListEmpty
			if (ListEmpty(L))
				cout<<"���Ա�Ϊ��."<<endl;
			else
				cout<<"���Ա�Ϊ��."<<endl;
			break;
		case 5://ListLength
			k = ListLength(L);
			if (k){
				cout << "���Ա���Ϊ " << k << endl;
				cout << "���Ա��������£�" << endl;
				for (i = 1; i <= ListLength(L); i++){
					cout << GetElem(L, i, e) << "\t";
				}
				cout << endl;
			}
				
			else
				cout<<"����!"<<endl;
			break;
		case 6://GetElem
			cout<<"������Ҫ����Ԫ�ص�λ�� : "<<endl;
			cin >> i;
			GetElem(L, i, e);
			cout<<"��λ�õ�Ԫ����"<<e<<endl;
			cout << "���Ա���Ϊ " << ListLength(L) << endl;
			cout << "���Ա��������£�" << endl;
			for (i = 1; i <= ListLength(L); i++){
				cout << GetElem(L, i, e) << "\t";
			}
			cout << endl;
			break;
		case 7://LocateElem
			cout<<"������Ҫ����Ԫ�� : "<<endl;
			cin >> k;
			b = LocateElem(L, k);
			if (b != 0){
				cout << "��Ԫ��λ���� " << b << endl;
				cout << "���Ա���Ϊ " << ListLength(L) << endl;
				cout << "���Ա��������£�" << endl;
				for (i = 1; i <= ListLength(L); i++){
					cout << GetElem(L, i, e) << "\t";
				}
				cout << endl;
			}
				
			else
				cout<<"��Ԫ�ز�����"<<endl;
			break;
		case 8://PriorElem
			ElemType cur_e1;
			ElemType pre_e;
			cout<<"�����������Ԫ�� : "<<endl;
			cin >> cur_e1;
			pre_e = PriorElem(L, cur_e1, pre_e);
			if (pre_e)
				cout<<"������Ԫ�ص�ǰ����"<<pre_e<<endl;
			else
				cout<<"��Ԫ��û��ǰ����ǰ��Ϊ�գ�"<<endl;
			break;
		case 9://NextElem
			ElemType cur_e2;
			ElemType next_e;
			cout<<"�����������Ԫ�� : "<<endl;
			cin >> cur_e2;
			next_e = NextElem(L, cur_e2, next_e);
			if (next_e){
				
				cout << "���Ա���Ϊ " << ListLength(L) << endl;
				cout << "���Ա��������£�" << endl;
				for (i = 1; i <= ListLength(L); i++){
					cout << GetElem(L, i, e) << "\t";
				}
				cout << endl;
				cout << "������Ԫ�صĺ�����" << next_e << endl;
			}
				
			else{

				cout << "���Ա���Ϊ " << ListLength(L) << endl;
				cout << "���Ա��������£�" << endl;
				for (i = 1; i <= ListLength(L); i++){
					cout << GetElem(L, i, e) << "\t";
				}
				cout << endl;
				cout << "��Ԫ��û�к�̻���Ϊ�գ�" << endl;
			}
				
			break;
		case 10://ListInsert
			cout<<"��������Ҫ�����Ԫ�غ�λ�ã�Ԫ�أ�λ�ã� :(elem,location)"<<endl;
			cin >> e >> i;
			
			if (ListInsert(L, i, e)){
				cout << "���Ա���Ϊ " <<ListLength(L) << endl;
				cout << "���Ա��������£�" << endl;
				for (i = 1; i <= ListLength(L); i++){
					cout << GetElem(L, i, e) << "\t";
				}
				cout << endl;
				cout << "����ɹ���" << endl;
			}
				
			
			else
				cout<<"����ʧ�ܣ����������Ƿ�Ϸ�!"<<endl;
			break;
		case 11://ListDelete
			cout<<"��������Ҫɾ����Ԫ��λ��:"<<endl;
			cin >> i;
			ListDelete(L, i, e);
			cout<<"��Ҫɾ����Ԫ����"<< e<<endl;
			/*cout<<"ɾ���ɹ���"<<endl;*/
			break;
		
		}//switch
		cout<<"��ѡ��Ҫ���ԵĹ������: "<<endl;
		cin >> n;
	}//while
}
	return 0;
}



