#include "head.h"
#include<string.h>
bool InitList(List &L){
	L.elem = new int[MAXSIZE];
	if(!L.elem)  return false;
	L.length = 0;
	memset(L.elem,0,MAXSIZE*sizeof(int));
	return true;
}


int LocateElem(List L,int e){
	int i;
	for(i=0;i<L.length ;i++)
		if(L.elem [i]==e) return i+1;
	return 0;   
}
//²åÈë
bool ListInsert(List &L,int i,int e){
	int j;
	if(i<1||i>L.length +1) return false;
	if(L.length == MAXSIZE) return false;
	for(j=L.length-1;j>=i-1;j--)
		L.elem[j+1]=L.elem[j];
	L.elem[i-1]=e;
	++L.length;
	return true;
}
//É¾³ý
bool ListDelete(List &L,int i, int &e){
	if(i<1||i>L.length) return false;
	e=L.elem[i-1];
	for(int j=i;j<=L.length-1;j++)
		L.elem[j-1]=L.elem[j];
	--L.length;
	return true;
}

int GetElem(List L,int i,int &e){
	e=L.elem[i];
	return e;
}

int  ListLength(List L){
	int len;
	for(len=0;;len++){
		if(L.elem[len]==0) break;
	}
	return len;
}

void DesrtoyList(List &L){
	delete L.elem;
	L.length = 0;
}

bool ClearList(List &L){
	if(L.elem!=NULL){
		memset(L.elem,0,L.length*sizeof(int));
		L.length = 0;
		return true;
	}
	else return false;
}