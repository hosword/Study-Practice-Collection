#define MAXQSIZE 100
typedef int DataType;
typedef  struct QNode{
	DataType  data;
	struct QNode *next;
}QNode,*QueuePtr;
typedef struct{
        QueuePtr front;
        QueuePtr rear;
}LinQueue;
bool InitQueue(LinQueue &Q);
bool DestoryQueue(LinQueue &Q);
bool ClearQueue(LinQueue &Q);
bool QueueEmpty(LinQueue Q);
int QueueLength(LinQueue Q);
bool GetHead(LinQueue Q, DataType &e);
bool EnQueue(LinQueue &Q, DataType e);
bool DeQueue(LinQueue &Q, DataType &e);
bool QueueTraverse(LinQueue Q);
