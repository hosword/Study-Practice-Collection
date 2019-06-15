#define List_Init_Size  100//线性表存储空间初始分配量
#define LISTINCREMENT   10  //线性表存储空间的分配增量
typedef int ElemType;
typedef struct LNode
{
	ElemType data;
	struct LNode *next;
}LNode, *LinkList;
bool InitList(LinkList &L)
;//构造一个空的线性表,L为LinkList的指针 

bool DestroyList(LinkList &L);
//销毁线性表
bool ClearList(LinkList &L);
//重置线性表，将结点数据置为空 
bool ListEmpty(LinkList L);
//判断是否为空表
int ListLength(LinkList L);
//返回线性表的数据元素个数

int GetElem(LinkList L, int i, ElemType &e);
//用e返回L中第i个数据元素的值
int LocateElem(LinkList L, ElemType e);
//返回L中第一个与e满足关系compare()的数据元素的位序
int PriorElem(LinkList L, ElemType cur_e, ElemType & pre_e);
//若cur_e是L的数据元素，且不是第一个，则用pre_e返回他的前驱
int NextElem(LinkList L, ElemType cur_e, ElemType &next_e);
//若cur_e是L的数据元素，且不是最后一个，则用next_e返回他的后继
bool ListInsert(LinkList &L, int i, ElemType e);
//在L中第i个位置之前插入新的数据元素e，L的长度加1
int ListDelete(LinkList &L, int i, ElemType &e);
//删除L的第i个数据元素，并用e返回其值，L的长度减1
