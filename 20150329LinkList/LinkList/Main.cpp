////////////////////////////主函数///////////////////////////////////
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


	cout<<"////////////////////////////函数功能测试///////////////////////////////////////"<<endl;
	cout<<"//                                                                                                        //"<<endl;
	cout<<"//1.构造线性表         2.销毁线性表      3.重置线性表        4.判断是否为空表 //"<<endl;
	cout<<"//5.线性表元素个数     6.第i个元素值     7.查询数据元素      8.数据元素前驱  //"<<endl;
	cout<<"//9.数据元素后继      10.插入数据元素    11.删除数据元素                     //"<<endl;
	
	cout<<"//////////////////////////////////////////////////////////////////////////////////"<<endl;
	cout<<""<<endl;
	cout << "请选择操作: " << endl;
	cin >> n;
	while (n >= 1 && n <= 11)
	{
		switch (n)
		{
		case 1://InitList
			
			cout<<"请输入链表的长度(len): "<<endl;
			cin >> len;
			
			if (len > 0){
				cout << "请输入数据元素(m): " << endl;
				
				for (n = 1; n <= len; n++){
					cin >> m;
					ListInsert(L, n, m);
				}
					
	
				cout << "线性表初始化成功." << endl;
				cout << "线性表数据如下：" << endl;
				for (i = 1; i <= ListLength(L); i++){
					cout << GetElem(L, i, e) << "\t";
				}
				cout << endl;
			}
			else 
				cout << "链表长度输入有误！" << endl;
			break;
		case 2://DestroyList
			DestroyList(L);
			cout<<"线性表已销毁."<<endl;
			break;
		case 3://ClearList
			ClearList(L);
			cout<<"线性表重置成功."<<endl;
			break;
		case 4://ListEmpty
			if (ListEmpty(L))
				cout<<"线性表为空."<<endl;
			else
				cout<<"线性表不为空."<<endl;
			break;
		case 5://ListLength
			k = ListLength(L);
			if (k){
				cout << "线性表长度为 " << k << endl;
				cout << "线性表数据如下：" << endl;
				for (i = 1; i <= ListLength(L); i++){
					cout << GetElem(L, i, e) << "\t";
				}
				cout << endl;
			}
				
			else
				cout<<"错误!"<<endl;
			break;
		case 6://GetElem
			cout<<"请输入要查找元素的位置 : "<<endl;
			cin >> i;
			GetElem(L, i, e);
			cout<<"该位置的元素是"<<e<<endl;
			cout << "线性表长度为 " << ListLength(L) << endl;
			cout << "线性表数据如下：" << endl;
			for (i = 1; i <= ListLength(L); i++){
				cout << GetElem(L, i, e) << "\t";
			}
			cout << endl;
			break;
		case 7://LocateElem
			cout<<"请输入要检查的元素 : "<<endl;
			cin >> k;
			b = LocateElem(L, k);
			if (b != 0){
				cout << "该元素位序是 " << b << endl;
				cout << "线性表长度为 " << ListLength(L) << endl;
				cout << "线性表数据如下：" << endl;
				for (i = 1; i <= ListLength(L); i++){
					cout << GetElem(L, i, e) << "\t";
				}
				cout << endl;
			}
				
			else
				cout<<"该元素不存在"<<endl;
			break;
		case 8://PriorElem
			ElemType cur_e1;
			ElemType pre_e;
			cout<<"请输入该数据元素 : "<<endl;
			cin >> cur_e1;
			pre_e = PriorElem(L, cur_e1, pre_e);
			if (pre_e)
				cout<<"该数据元素的前驱是"<<pre_e<<endl;
			else
				cout<<"该元素没有前驱或前驱为空！"<<endl;
			break;
		case 9://NextElem
			ElemType cur_e2;
			ElemType next_e;
			cout<<"请输入该数据元素 : "<<endl;
			cin >> cur_e2;
			next_e = NextElem(L, cur_e2, next_e);
			if (next_e){
				
				cout << "线性表长度为 " << ListLength(L) << endl;
				cout << "线性表数据如下：" << endl;
				for (i = 1; i <= ListLength(L); i++){
					cout << GetElem(L, i, e) << "\t";
				}
				cout << endl;
				cout << "该数据元素的后驱是" << next_e << endl;
			}
				
			else{

				cout << "线性表长度为 " << ListLength(L) << endl;
				cout << "线性表数据如下：" << endl;
				for (i = 1; i <= ListLength(L); i++){
					cout << GetElem(L, i, e) << "\t";
				}
				cout << endl;
				cout << "该元素没有后继或后继为空！" << endl;
			}
				
			break;
		case 10://ListInsert
			cout<<"请输入你要插入的元素和位置（元素，位置） :(elem,location)"<<endl;
			cin >> e >> i;
			
			if (ListInsert(L, i, e)){
				cout << "线性表长度为 " <<ListLength(L) << endl;
				cout << "线性表数据如下：" << endl;
				for (i = 1; i <= ListLength(L); i++){
					cout << GetElem(L, i, e) << "\t";
				}
				cout << endl;
				cout << "插入成功！" << endl;
			}
				
			
			else
				cout<<"插入失败，请检查输入是否合法!"<<endl;
			break;
		case 11://ListDelete
			cout<<"请输入你要删除的元素位序:"<<endl;
			cin >> i;
			ListDelete(L, i, e);
			cout<<"你要删除的元素是"<< e<<endl;
			/*cout<<"删除成功！"<<endl;*/
			break;
		
		}//switch
		cout<<"请选择要测试的功能序号: "<<endl;
		cin >> n;
	}//while
}
	return 0;
}



