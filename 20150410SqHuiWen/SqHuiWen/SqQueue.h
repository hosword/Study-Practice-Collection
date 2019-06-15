#define MAXQSIZE 100
typedef int QElemType;
typedef  struct{
	QElemType  *base;
	int front;
	int rear;
}SqQueue;
bool InitQueue(SqQueue &Q);
bool DestoryQueue(SqQueue &Q);
bool ClearQueue(SqQueue &Q);
bool QueueEmpty(SqQueue Q);
int QueueLength(SqQueue Q);
bool GetHead(SqQueue Q, QElemType &e);
bool EnQueue(SqQueue &Q, QElemType e);
bool DeQueue(SqQueue &Q, QElemType &e);
bool QueueTraverse(SqQueue Q);
