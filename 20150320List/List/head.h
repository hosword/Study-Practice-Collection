#define MAXSIZE 100
typedef struct{
	int *elem;
	int length;
}List;
int GetElem(List L,int i,int &e);
bool ListDelete(List &L,int i, int &e);
bool ListInsert(List &L,int i,int e);
int LocateElem(List L,int e);
int  ListLength(List L);
bool InitList(List &L);
void DesrtoyList(List &L);
bool ClearList(List &L);