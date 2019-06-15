#ifndef  HASHTABLE_H
#define  HASHTABLE_H
//typedef int DataType;
enum KindOfItem {Empty, Active, Deleted};

struct HashItem
{
	DataType data;
	KindOfItem info;

	HashItem(KindOfItem i = Empty): info(i){}
	HashItem(const DataType &D, KindOfItem i = Empty): data(D), info(i){}
	int operator ==(HashItem &a)
		{return data == a.data;}
	int operator !=(HashItem &a)
		{return data != a.data;}
};

class HashTable
{
private:
	HashItem *ht;										//��ϣ������
	int TableSize;									//��ϣ��ĳ��ȣ���m��
	int currentSize;								//��ǰ�ı������
public:
	HashTable(int m);										//���캯��
	~HashTable(void)										//��������
		{delete []ht;}

	int Find(const DataType &x)const;						//����
	int Insert(const DataType &x);							//����
	int Delete(const DataType &x);							//ɾ��

	int IsIn(const DataType &x)								//�Ƿ��Ѵ���
		{int i = Find(x); return i >= 0 ? 1: 0;}
	DataType GetValue(int i)const							//ȡ����Ԫ��
		{return ht[i].data;}
};

//��ϣ����ʵ��
HashTable::HashTable(int m)									//���캯��
{
	TableSize = m;										//�ù�ϣ����
	ht = new HashItem[TableSize];						//���붯̬����ռ�
	currentSize = 0;									//�ó�ʼ�ĵ�ǰ�������
}

int HashTable::Find(const DataType &x)const						//����
{

  //�������Լ���д�ĳ���
        int i = x.key%TableSize;     //��ϣ����
        int j = i;
        while (ht[j].info == Active&&ht[j].data != x)    //˵�����ڳ�ͻ
        {
                j = (j + 1) % TableSize;    //�ù�ϣ��ͻ������������
                if (j == i)   //˵���ѱ���������ϣ��δ�ҵ��ұ�����
                        return -TableSize;
        }
        if (ht[j].info == Active)
                return j;    //�ҵ�,������ֵ
        else
                return -j;    //δ�ҵ�,���ظ�ֵ
}

int HashTable::Insert(const DataType &x)
{
	int i = Find(x); 							//����Find(x)

	if(i > 0) return 0;							//����Ԫ��x�Ѿ�����
	else if(i != -TableSize)		//����Ԫ��x�������ҹ�ϣ��δ��
	{
		ht[-i].data = x;						//����Ԫ�ظ�ֵ
		ht[-i].info = Active;					//�û���
		currentSize++;							//��ǰ���������1
		return 1;								//���ز���ɹ�״̬
	}
	else return 0;								//���ز���ʧ��״̬
}

int HashTable::Delete(const DataType &x)					//ɾ��
{
	int i = Find(x); 							//����Find(x)

	if(i >= 0)
	{
		ht[i].info = Deleted;					//��ɾ�����
		currentSize--;							//��ǰ���������1
		return 1;								//����ɾ���ɹ�״̬
	}
	else return 0;								//����ɾ��ʧ��״̬
}
#endif