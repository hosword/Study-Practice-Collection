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
	cout << "****////////////////////////////  ����������Ԫ�صĸ���:  //////////////////////////// **** " << endl;
	cin>>i;
	cout<<"****////////////////////////////  ����������(����Ϊ0):  //////////////////////////// ****"<<endl;
	for(j=0;j<i;j++)
		cin>>Li.elem[j];
	Li.length = ListLength(Li);
	while(tt==0){
		cout << "****////////////////////////////   1.��ѯ����    //////////////////////////// **** "<<endl;
		cout << "****////////////////////////////   2.��������    //////////////////////////// **** "<<endl;
		cout << "****////////////////////////////   3.ɾ������    //////////////////////////// **** "<<endl;
		cout << "****////////////////////////////   4.�˳�����    //////////////////////////// **** "<<endl;
		cout << "****////////////////////////////   5.�������    //////////////////////////// **** "<<endl;
		cin>>n;
		switch(n){
		case 1:cout<<"****  �����������ѯ������:    ****";
			   cin>>m;
			   num=LocateElem(Li,m);
			   if(num==0){
				   cout<<" ���Ա���û�������ѯ������. "<<endl;
			   }else{
				   cout<<m<<"λ�����Ա��е�"<<num<<"λ"<<endl;
			   }
			   break;
		case 2:cout<<"****  �����������������ݺͲ����λ��:   ****";
			   cin>>m>>p;
			   if(!ListInsert(Li,p,m)){
				   cout<<"�������λ�ò��ʺϻ�����ռ�����."<<endl;
			   }
			   else{
				   for(i=0;i<Li.length;i++)
					   cout<<GetElem(Li,i,e)<<" ";
				   cout<<endl;
			   }
			   break;
		case 3:cout<<"****  ����������ɾ���ڼ�����:   ****";
			   cin>>m;
			   if(!ListDelete(Li,m,p)){
				   cout<<"�������λ�ò��ʺ�."<<endl;
			   }
			   else{
				   cout<<"����"<<p<<"��ɾ����ʣ�µ���������:"<<endl;
				   for(i=0;i<Li.length;i++)
					   cout<<GetElem(Li,i,e)<<" ";
				   cout<<endl;
			   }
			   break;
		case 5:
			if(!ClearList(Li)){
				cout<<"�ñ��Ѿ��ǿձ�."<<endl;
			}
			else{
				cout<<"�ñ������,��Ϊ: "<<Li.length <<endl;
			}
			break;
		default: 
			DesrtoyList(Li);
			tt=1;break;
		}
		if(tt==1) break;
	}
}		   

