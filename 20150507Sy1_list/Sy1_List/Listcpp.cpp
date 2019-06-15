#include "List.h"
#include <iostream>
bool InitList(LinkList &L)//构造一个空的线性表,L为LinkList的指针 
{
        L = new LNode;
        L->size = 0;
        L->next = NULL;//初始为空
        return true;
}


bool DestroyList(LinkList &L)//销毁线性表
{
        LinkList p;
        p = L;
        while (L){
                p = p->next;
                delete L;
                L = p;
        }
        L->size = 0;
        return true;
}

bool ClearList(LinkList &L)//重置线性表，将结点数据置为空 
{

        LinkList p, q;

        q = L->next;
        while (q != NULL){
                p = q;
                q = q->next;
                delete p;

        }
        L->size = 0;
        return true;
}

bool ListEmpty(LinkList L)//判断是否为空表
{
      
        if (L->size){
                return false;
        }
        else
                return true;
}

int ListLength(LinkList L)//返回线性表的数据元素个数
{
  
        return L->size;
}

int GetElem(LinkList L, int i, ElemType &e)//用e返回L中第i个数据元素的值
{
        int j;
        LinkList p = L;
        for (j = 0; j<i; j++)
        {
                p = p->next;
        }
        if (!p)
                return false;
        e = p->data;
        return e;
}

int LocateElem(LinkList L, ElemType e)//返回L中第一个与e满足关系的数据元素的位序
{
        int i = 0;
        LinkList p = L->next;
        while (p != NULL){
                i++;
                if (p->data == e) break;
                p = p->next;
        }

        return i;
}


bool ListInsert(LinkList &L, int i, ElemType e)//在L中第i个位置之前插入新的数据元素e，L的长度加1
{

        LinkList p,N;
       
        N = new LNode;
        N->data = e;
        p = L;
      
      if (!p || i < 0)
                return false;
        while ((p->next!= NULL) && (p->next->data < e)){
                p = p->next;
        }
        N->next = p->next;
        p->next = N;
        L->size++;
        return true;
}

int ListDelete(LinkList &L, int i, ElemType &e)//删除L的第i个数据元素，并用e返回其值，L的长度减1
{
        LinkList q, p;
        int j = 0;
        p = L->next;
        while (p != NULL&&j < i - 1){
                p = p->next;
                ++j;
        }
        if (!(p->next) || i < 0)
                return false;
        q = p->next;
        p->next = q->next;
        e = q->data;

        delete q;
        return true;


}
LinkList ReverseList(LinkList &L)//翻转
{
        if (!L || !L->next){
                return L;
              
        }
        else
        {
                LinkList q, p;
               
                p = L->next;
                L->next = NULL;
                while (p){
                        q = p;
                        p = p->next;
                        q->next = L->next;
                        L->next = q;
                }
                return L;
        }
     
}

//LinkList ReverseList(LinkList &L)//翻转
//{
//        if (!L || !L->next){
//                return L;
//        }
//        else
//        {
//                LinkList q = L->next;
//                L->next = NULL;
//                LinkList p = ReverseList(q);
//                q->next = L;
//            /*    LinkList p = ReverseList(L->next);
//                p->next=L;
//                L->next = NULL;*/
//                return p;
//        }
//}
 LinkList MegeList(LinkList &LA, LinkList &LB, LinkList &LC)
{
        LinkList pa, pb, pc;
     
        pa = LA->next;
        pb = LB->next;
        LC = LA;
        pc = LC;
     
        while (pa&&pb){
                if (pa->data > pb->data){
                        pc->next = pa;
                        
                        pc = pa;
                        pa = pa->next;

                }
                else{
                        pc->next = pb;
                     
                        pc = pb;
                        pb = pb->next;
                }

        }
        if (!pb&&pa){
                pc->next = pa;
        }
        if (!pa&&pb){
                pc->next = pb;
        }
        delete LB;
       
        return LC;
}
