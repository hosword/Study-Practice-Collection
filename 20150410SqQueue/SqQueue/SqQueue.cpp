#include "SqQueue.h"
#include <iostream>
using namespace std;
bool InitQueue(SqQueue &Q)
{
	Q.base = new QElemType[MAXQSIZE];
	if (!Q.base) return false;
	Q.front = Q.rear = 0;
	return true;

}
bool DestoryQueue(SqQueue &Q)
{
	if (Q.base)
		delete Q.base;
	Q.base = NULL;
	Q.front = Q.rear = 0;
	return true;
}
bool ClearQueue(SqQueue &Q)
{
	Q.front = Q.rear = 0;
	return true;

}
bool QueueEmpty(SqQueue Q)
{
	return Q.front == Q.rear ? true : false; 
}
int QueueLength(SqQueue Q)
{
	return (Q.rear - Q.front + MAXQSIZE) % MAXQSIZE;
}
bool GetHead(SqQueue Q, QElemType &e)
{
	if (Q.front == Q.rear)
		return false;
    e = Q.base[Q.front];
	return true;
}
bool EnQueue(SqQueue &Q, QElemType e)
{
	if ((Q.rear + 1) % MAXQSIZE == Q.front)
		return false;
	Q.base[Q.rear] = e;
	Q.rear = (Q.rear + 1) % MAXQSIZE;
	return true;
}
bool DeQueue(SqQueue &Q, QElemType &e)
{
	if (Q.front == Q.rear)
		return false;
	e = Q.base[Q.front];
	Q.front = (Q.front+1)%MAXQSIZE;
	return true;

}
bool QueueTraverse(SqQueue Q)
{
	QElemType e;
	if (Q.front == Q.rear)
		return false;
	while (Q.front != Q.rear){
		e = Q.base[Q.front];
		cout << e << "\t";
		Q.front = (Q.front + 1) % MAXQSIZE;
      }
	return true;

}
