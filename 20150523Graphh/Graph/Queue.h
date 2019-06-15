#ifndef QUEUE_H
#define QUEUE_H
#define MAXQSIZE 100
typedef int QElemType;
typedef  struct QNode{
        QElemType  data;
        struct QNode *next;
}QNode, *QueuePtr;
typedef struct{
        QueuePtr front;
        QueuePtr rear;
}LinkQueue;
bool InitQueue(LinkQueue &Q);
bool DestoryQueue(LinkQueue &Q);
bool ClearQueue(LinkQueue &Q);
bool QueueEmpty(LinkQueue Q);
int QueueLength(LinkQueue Q);
bool GetHead(LinkQueue Q, QElemType &e);
bool EnQueue(LinkQueue &Q, QElemType e);
bool DeQueue(LinkQueue &Q, QElemType &e);
bool QueueTraverse(LinkQueue Q);

#endif