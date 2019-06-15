#include "LinkQueue.h"
#include <iostream>
using namespace std;
bool InitQueue(LinQueue &Q)
{
	Q.front=Q.rear=new QNode;
    if (!Q.front) return false;
    Q.front->next=NULL;
    return true;

}
bool DestoryQueue(LinQueue &Q)
{
        while (Q.front){
                Q.rear = Q.front->next;
                delete Q.front;
                Q.front = Q.rear;
        }
        return true;
}
bool ClearQueue(LinQueue &Q)
{
        QNode *p = new QNode;
        p = Q.front->next;

        while (p)
        {
                Q.rear = p->next;
                delete p;
                p = Q.rear;
        }
        Q.rear = Q.front;
        Q.front->next = NULL;
        return true;

}
bool QueueEmpty(LinQueue Q)
{
        return Q.front == Q.rear;
}
int QueueLength(LinQueue Q)
{
        int count = 0;
        if (Q.front == Q.rear)
                return 0;

        QNode *p = new QNode;
        p = Q.front->next;
        while (p)
        {
                ++count;
                p = p->next;
        }
        return count;
}
bool GetHead(LinQueue Q, DataType &e)
{
        if (Q.front == Q.rear)
                return false;
        e = Q.front->next->data;
        return true;
}
bool EnQueue(LinQueue &Q, DataType e)
{
        QNode *p = new QNode;
        if (!p)
                return false;
        p->data = e;
        p->next = NULL;
        Q.rear->next = p;  //尾指针指向插入的元素 
        Q.rear = p;   //插入的元素成为尾指针 
        return true;

}
bool DeQueue(LinQueue &Q, DataType &e)
{
        if (Q.front == Q.rear)
                return false;
        QNode *p = new QNode;
        p = Q.front->next;
        e = p->data;
        Q.front->next = p->next;
        if (Q.rear == p)
                Q.rear = Q.front;
        delete p;
        return true;

}
bool QueueTraverse(LinQueue Q)
{
        if (Q.front == Q.rear)
                return false;
        QNode *p = new QNode;
        p = Q.front->next;
        while (p)
        {
                cout << p->data << "\t";
                p = p->next;
        }
        return true;

}
