////////////////////////////主函数///////////////////////////////////
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


	cout<<"////////////////////////////函数功能测试///////////////////////////////////////"<<endl;
	cout<<"//                                                                                                        //"<<endl;
	cout<<"//1.构造集合               2.判断是否为空集 //"<<endl;
	cout<<"//3.集合元素个数         4.查询集合中的元素   //"<<endl;
	cout<<"//5.求并集                    6.删除集合元素                     //"<<endl;
	cout << "//7.求交集                    8.求补集                     //" << endl;
	cout << "//9.求差集                                       //" << endl;
	
	cout<<"//////////////////////////////////////////////////////////////////////////////////"<<endl;
	cout<<""<<endl;
	cout << "请选择操作: " << endl;
	cin >> n;
	while (n >= 1 && n <= 9)
	{
		switch (n)
		{
		case 1://InitList
			
			cout<<"请输入集合La的元素个数: "<<endl;
			cin >> La_len;
			cout<<"请输入数据元素: "<<endl;
			
			for (i = 1; i <=La_len; i++)
			{
					cin >> m;
					ListInsert(La, i, m);
			}
			
				cout<<"集合La初始化成功."<<endl;
				cout << "请输入集合Lb的元素个数: " << endl;
				cin >>Lb_len;
				cout << "请输入数据元素: " << endl;

			for (i = 1; i <= Lb_len; i++)
			{
				cin >> m;
				ListInsert(Lb, i, m);
			}

			cout << "集合La初始化成功." << endl;
			cout << "请输入全集U的元素个数: " << endl;
			cin >> U_len;
			cout << "请输入数据元素: " << endl;

			for (i = 1; i <= U_len; i++)
			{
				cin >> m;
				ListInsert(U, i, m);
			}

			cout << "全集U初始化成功." << endl;
			break;
		
	
		case 2://ListEmpty
			if (ListEmpty(La))
				cout<<"集合La为空."<<endl;
			else
				cout<<"集合La不为空."<<endl;
			if (ListEmpty(Lb))
				cout << "集合Lb为空." << endl;
			else
				cout << "集合Lb不为空." << endl;

			break;
		case 3://ListLength
			ka = ListLength(La);
			if (ka)
				cout<<"集合La元素个数为 "<< ka<<endl;
			else
				cout<<"错误!"<<endl;
			kb = ListLength(Lb);
			if (kb)
				cout << "集合Lb元素个数为 " << kb<< endl;
			else
				cout << "错误!" << endl;

			break;

		case 4://LocateElem
			cout<<"集合La元素如下 : "<<endl;
			for (ka = 1; ka <= ListLength(La); ka++){
				cout << GetElem(La, ka, e1) << "\t";
			}
			cout << endl;
			cout << "集合Lb元素如下 : " << endl;
			for (kb = 1; kb <= ListLength(Lb); kb++){
				cout << GetElem(Lb, kb, e2) << "\t";
			}
			cout << endl;
			
			break;
		
		case 5://ListInsert
			if (SetUnion(La, Lb)){
				cout << "La与Lb的并集Lc为：" << endl;
				cout << SetUnion(La, Lb) << endl;
			}
			else
				cout << "错误" << endl;
			
			break;
		case 6://ListDelete
			cout<<"请输入你要删除La的元素:"<<endl;
			cin >>e1;
			i=LocateElem(La, e1);
			ListDelete(La, i, e1);
			cout<<"你要删除的元素是"<< e1<<endl;
			if (ListDelete(La,i, e1) != NULL)
			cout<<"删除成功！"<<endl;
			cout << "请输入你要删除Lb的元素:" << endl;
			cin >> e2;
			j = LocateElem(La, e2);
			ListDelete(Lb, j, e2);
			cout << "你要删除的元素是" << e2 << endl;
			if (ListDelete(Lb, j, e2)!=NULL)
			cout << "删除成功！" << endl;
			break;
		case 7://SetInt(La, Lb)
			if (!SetInt(La, Lb)){
				cout << "La与Lb的交集Lc为：" << endl;
				cout << SetInt(La, Lb) << endl;
			}
			else
				cout << "错误" << endl;

			break;
		case 8://SetInt(La, U)
			if (!SetCom(La,U)){
				cout << "La为：" << endl;
				cout << SetCom(La, U) << endl;
			}
			else
				cout << "错误" << endl;

			break;
		case 9://SetInt(La, U)
			if (!SetDif(La, Lb)){
				cout << "La-Lb为：" << endl;
				cout << SetDif(La, Lb) << endl;
			}
			else
				cout << "错误" << endl;

			break;
		default: break;
		
		}//switch
		cout<<"请选择要测试的功能序号: "<<endl;
		cin >> n;
	}//while
}
	return 0;
}
