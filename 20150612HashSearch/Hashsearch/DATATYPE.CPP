#include <iostream>
#include"Datatype.h"
#include"HashTable.h"
using namespace std;
typedef int keytype;
struct datatype
{
	keytype key;
	datatype(void){}
	datatype(keytype k): key(k){}
	int operator ==(datatype &a)
		{return key == a.key;}
	int operator !=(datatype &a)
		{return key != a.key;}
};

void main(void)
{
        HashTable myHashTalbe1(11);  //构造m=11的哈希表
        HashTable myHashTalbe2(13);  //构造m=13的哈希表
        int i, j, n = 10;
        char ch;
        DataType item;
        keytype a[10];  //建立一个由10个数据元素组成的集合
        for (i = 0; i < 10; i++){
                a[i] = rand() %497;
        }
        keytype d;  //定义一个keytype型变量,用来存储要查找的元素
        cout << "将数据插入哈希表长度为11时：" << endl;
        for (i = 0; i<10; i++)
                myHashTalbe1.Insert(a[i]);  //将数据插入哈希表
        for (i = 0; i<n; i++)
        {
                j = myHashTalbe1.Find(a[i]);
                if (j>0)
                {
                        item = myHashTalbe1.GetValue(j);
                        cout << "j=" << j <<"\t"<< " ht["<<i<<"]=" << item.key << endl;
                }
        }
        cout << endl;

        for (ch = 'y'; ch == 'y';)
        {
                cout << "请输入要查找的元素:";
                cin >> d;   //输入要查找的元素
                if (myHashTalbe1.Find(d) >= 0)
                        cout << "元素" << d << "在m=11的哈希表中" << myHashTalbe1.Find(d) << "位置!" << endl;
                else
                        cout << "元素" << d << "不在m=11的哈希表中!" << endl;
                cout << "是否继续查找：（是请按y，否请按其它非系统键）" << endl;
                cin >> ch;
              
        }
        cout << endl;
        cout << "将数据插入哈希表长度为13时：" << endl;
        for (i = 0; i<10; i++)
                myHashTalbe2.Insert(a[i]);  //将数据插入哈希表
        for (i = 0; i<n; i++)
        {
                j = myHashTalbe2.Find(a[i]);
                if (j>0)
                {
                        item = myHashTalbe2.GetValue(j);
                        cout << "j=" << j << " ht[]=" << item.key << endl;
                }
        }
        cout << endl;


        for (ch = 'y'; ch == 'y';)
        {
                cout << "请输入要查找的元素:";
                cin >> d;   //输入要查找的元素
                if (myHashTalbe2.Find(d) >= 0)
                        cout << "元素" << d << "在m=13的哈希表中" << myHashTalbe2.Find(d) << "位置!" << endl;
                else
                        cout << "元素" << d << "不在m=13的哈希表中!" << endl;
                cout << "是否继续查找：（是请按y，否请按其它非系统键）" << endl;
                cin >> ch;
            
        }
        cout << endl;
}