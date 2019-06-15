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
        HashTable myHashTalbe1(11);  //����m=11�Ĺ�ϣ��
        HashTable myHashTalbe2(13);  //����m=13�Ĺ�ϣ��
        int i, j, n = 10;
        char ch;
        DataType item;
        keytype a[10];  //����һ����10������Ԫ����ɵļ���
        for (i = 0; i < 10; i++){
                a[i] = rand() %497;
        }
        keytype d;  //����һ��keytype�ͱ���,�����洢Ҫ���ҵ�Ԫ��
        cout << "�����ݲ����ϣ������Ϊ11ʱ��" << endl;
        for (i = 0; i<10; i++)
                myHashTalbe1.Insert(a[i]);  //�����ݲ����ϣ��
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
                cout << "������Ҫ���ҵ�Ԫ��:";
                cin >> d;   //����Ҫ���ҵ�Ԫ��
                if (myHashTalbe1.Find(d) >= 0)
                        cout << "Ԫ��" << d << "��m=11�Ĺ�ϣ����" << myHashTalbe1.Find(d) << "λ��!" << endl;
                else
                        cout << "Ԫ��" << d << "����m=11�Ĺ�ϣ����!" << endl;
                cout << "�Ƿ�������ң������밴y�����밴������ϵͳ����" << endl;
                cin >> ch;
              
        }
        cout << endl;
        cout << "�����ݲ����ϣ������Ϊ13ʱ��" << endl;
        for (i = 0; i<10; i++)
                myHashTalbe2.Insert(a[i]);  //�����ݲ����ϣ��
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
                cout << "������Ҫ���ҵ�Ԫ��:";
                cin >> d;   //����Ҫ���ҵ�Ԫ��
                if (myHashTalbe2.Find(d) >= 0)
                        cout << "Ԫ��" << d << "��m=13�Ĺ�ϣ����" << myHashTalbe2.Find(d) << "λ��!" << endl;
                else
                        cout << "Ԫ��" << d << "����m=13�Ĺ�ϣ����!" << endl;
                cout << "�Ƿ�������ң������밴y�����밴������ϵͳ����" << endl;
                cin >> ch;
            
        }
        cout << endl;
}