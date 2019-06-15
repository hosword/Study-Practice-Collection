#include<iostream>
#include "head.h"
using namespace std;
int main()
{
	List Li;
	int i,j,n,m,p,num,tt=0,e;
    loop: InitList(Li);
	if(!InitList(Li)){
		goto loop;
	}
	cout << "****////////////////////////////  请输入数组元素的个数:  //////////////////////////// **** " << endl;
	cin>>i;
	cout<<"****////////////////////////////  请输入数据(不能为0):  //////////////////////////// ****"<<endl;
	for(j=0;j<i;j++)
		cin>>Li.elem[j];
	Li.length = ListLength(Li);
	while(tt==0){
		cout << "****////////////////////////////   1.查询数据    //////////////////////////// **** "<<endl;
		cout << "****////////////////////////////   2.插入数据    //////////////////////////// **** "<<endl;
		cout << "****////////////////////////////   3.删除数据    //////////////////////////// **** "<<endl;
		cout << "****////////////////////////////   4.退出程序    //////////////////////////// **** "<<endl;
		cout << "****////////////////////////////   5.清空数据    //////////////////////////// **** "<<endl;
		cin>>n;
		switch(n){
		case 1:cout<<"****  请输入你想查询的数据:    ****";
			   cin>>m;
			   num=LocateElem(Li,m);
			   if(num==0){
				   cout<<" 线性表中没有你想查询的数据. "<<endl;
			   }else{
				   cout<<m<<"位于线性表中第"<<num<<"位"<<endl;
			   }
			   break;
		case 2:cout<<"****  请输入你想插入的数据和插入的位置:   ****";
			   cin>>m>>p;
			   if(!ListInsert(Li,p,m)){
				   cout<<"你输入的位置不适合或数组空间已满."<<endl;
			   }
			   else{
				   for(i=0;i<Li.length;i++)
					   cout<<GetElem(Li,i,e)<<" ";
				   cout<<endl;
			   }
			   break;
		case 3:cout<<"****  请输入你想删除第几个数:   ****";
			   cin>>m;
			   if(!ListDelete(Li,m,p)){
				   cout<<"你输入的位置不适合."<<endl;
			   }
			   else{
				   cout<<"数据"<<p<<"已删除，剩下的数据如下:"<<endl;
				   for(i=0;i<Li.length;i++)
					   cout<<GetElem(Li,i,e)<<" ";
				   cout<<endl;
			   }
			   break;
		case 5:
			if(!ClearList(Li)){
				cout<<"该表已经是空表."<<endl;
			}
			else{
				cout<<"该表已清空,表长为: "<<Li.length <<endl;
			}
			break;
		default: 
			DesrtoyList(Li);
			tt=1;break;
		}
		if(tt==1) break;
	}
}		   

