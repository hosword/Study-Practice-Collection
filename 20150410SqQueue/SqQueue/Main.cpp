#include "SqQueue.h"
#include <iostream>
using namespace std;
void main()
{
	SqQueue Q;
	QElemType e;
    InitQueue(Q);
	while (1){
		int n,m,temp;
        cout<<"////////////////////////////////////////////////////////////////////"<<endl;
	
        cout << "******                      1:��ʼ������"<<endl;
        cout << "******                      2:���ٶ���" << endl;
        cout << "******                      3:��ն���" << endl;
        cout << "******                      4:�����Ƿ�Ϊ��" << endl;
        cout << "******                      5:���г���" << endl;
        cout << "******                      6:���ض�ͷԪ��" << endl;
        cout << "******                      7:�����βԪ��" << endl;
        cout << "******                      8:ɾ����ͷԪ��" << endl;
        cout << "******                      9:��������Ԫ��" << endl;
        cout << "////////////////////////////////////////////////////////////////////" << endl;
        cout << "���������ѡ��:(1-9)" << endl;
		cin >> n;
		
			switch (n){
			case 1: 
                    cout << "��ʼ�����У�"<<endl;
                    cout << "���������Ԫ�ظ�����" << endl;
                    cin>>m;
                    cout << "���������Ԫ��" << endl;
                    while (m--){
                        cin>>e;
                        EnQueue(Q,e);
                    }
				break;
			case 2: 
                    cout << "���ٶ���"<<endl;
                    DestoryQueue(Q);
				break;
			case 3:
                    cout << "��ն���"<<endl;
                    ClearQueue(Q);
				break;
			case 4:
                    cout << "�����Ƿ�Ϊ��"<<endl;
                    if (QueueEmpty(Q))
                            cout << "����Ϊ��"<<endl;
                            else
                                    cout << "���в�Ϊ��"<<endl;
				break;
			case 5:
                    cout << "���г��ȣ�"<<endl;
                    cout << QueueLength(Q)<<endl;
				break;
		
			case 6:
                    cout << "���ض�ͷԪ�أ�"<<endl;
                    GetHead(Q,e);
                    temp=e;
                    cout<<temp<<endl;
				break;
            case 7:
                    cout << "�����βԪ�أ�" << endl;
                    cout << "������Ҫ����Ķ�βԪ��e:" << endl;
                    cin >> e;
                    EnQueue(Q,e);

                    break;
			case 8:
                    cout << "ɾ����ͷԪ�أ�"<<endl;
                    DeQueue(Q,e);
                    temp=e;
                    cout << " ��ͷԪ�أ� " <<temp<< endl; 
				break;
			case 9:
                    cout << "��������Ԫ�أ�"<<endl;
                    QueueTraverse(Q);
                    cout<<endl;
				break;
			default:
				break;
			}
		}
	
	

	
}