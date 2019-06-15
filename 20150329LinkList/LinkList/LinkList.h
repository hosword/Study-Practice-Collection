#define List_Init_Size  100//���Ա�洢�ռ��ʼ������
#define LISTINCREMENT   10  //���Ա�洢�ռ�ķ�������
typedef int ElemType;
typedef struct LNode
{
	ElemType data;
	struct LNode *next;
}LNode, *LinkList;
bool InitList(LinkList &L)
;//����һ���յ����Ա�,LΪLinkList��ָ�� 

bool DestroyList(LinkList &L);
//�������Ա�
bool ClearList(LinkList &L);
//�������Ա������������Ϊ�� 
bool ListEmpty(LinkList L);
//�ж��Ƿ�Ϊ�ձ�
int ListLength(LinkList L);
//�������Ա������Ԫ�ظ���

int GetElem(LinkList L, int i, ElemType &e);
//��e����L�е�i������Ԫ�ص�ֵ
int LocateElem(LinkList L, ElemType e);
//����L�е�һ����e�����ϵcompare()������Ԫ�ص�λ��
int PriorElem(LinkList L, ElemType cur_e, ElemType & pre_e);
//��cur_e��L������Ԫ�أ��Ҳ��ǵ�һ��������pre_e��������ǰ��
int NextElem(LinkList L, ElemType cur_e, ElemType &next_e);
//��cur_e��L������Ԫ�أ��Ҳ������һ��������next_e�������ĺ��
bool ListInsert(LinkList &L, int i, ElemType e);
//��L�е�i��λ��֮ǰ�����µ�����Ԫ��e��L�ĳ��ȼ�1
int ListDelete(LinkList &L, int i, ElemType &e);
//ɾ��L�ĵ�i������Ԫ�أ�����e������ֵ��L�ĳ��ȼ�1
