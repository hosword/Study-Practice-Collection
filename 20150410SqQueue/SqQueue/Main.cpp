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
	
        cout << "******                      1:初始化队列"<<endl;
        cout << "******                      2:销毁队列" << endl;
        cout << "******                      3:清空队列" << endl;
        cout << "******                      4:队列是否为空" << endl;
        cout << "******                      5:队列长度" << endl;
        cout << "******                      6:返回队头元素" << endl;
        cout << "******                      7:插入队尾元素" << endl;
        cout << "******                      8:删除队头元素" << endl;
        cout << "******                      9:遍历队列元素" << endl;
        cout << "////////////////////////////////////////////////////////////////////" << endl;
        cout << "请输入操作选项:(1-9)" << endl;
		cin >> n;
		
			switch (n){
			case 1: 
                    cout << "初始化队列："<<endl;
                    cout << "请输入队列元素个数：" << endl;
                    cin>>m;
                    cout << "请输入队列元素" << endl;
                    while (m--){
                        cin>>e;
                        EnQueue(Q,e);
                    }
				break;
			case 2: 
                    cout << "销毁队列"<<endl;
                    DestoryQueue(Q);
				break;
			case 3:
                    cout << "清空队列"<<endl;
                    ClearQueue(Q);
				break;
			case 4:
                    cout << "队列是否为空"<<endl;
                    if (QueueEmpty(Q))
                            cout << "队列为空"<<endl;
                            else
                                    cout << "队列不为空"<<endl;
				break;
			case 5:
                    cout << "队列长度："<<endl;
                    cout << QueueLength(Q)<<endl;
				break;
		
			case 6:
                    cout << "返回队头元素："<<endl;
                    GetHead(Q,e);
                    temp=e;
                    cout<<temp<<endl;
				break;
            case 7:
                    cout << "插入队尾元素：" << endl;
                    cout << "请输入要插入的队尾元素e:" << endl;
                    cin >> e;
                    EnQueue(Q,e);

                    break;
			case 8:
                    cout << "删除队头元素："<<endl;
                    DeQueue(Q,e);
                    temp=e;
                    cout << " 队头元素： " <<temp<< endl; 
				break;
			case 9:
                    cout << "遍历队列元素："<<endl;
                    QueueTraverse(Q);
                    cout<<endl;
				break;
			default:
				break;
			}
		}
	
	

	
}