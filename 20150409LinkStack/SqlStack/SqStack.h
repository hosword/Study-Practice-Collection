#define MAXSIZE 100
typedef int SElemType;
typedef struct{
	SElemType *data;
	int top;
}SqStack;
bool InitStack(SqStack &S);                                          //构造空栈
bool DestroyStack(SqStack &S);                                 //销毁栈S
bool ClearStack(SqStack &S);                                      //清空栈S
bool StackEmpty(SqStack S);                                       //判断栈S是否为空
int     StackLength(SqStack S);                                     //栈S的长度
bool GetTop(SqStack S, SElemType &e);                 //返回栈S的栈顶元素
bool Push(SqStack &S, SElemType e);                      //插入元素为S新的栈顶元素
bool  Pop(SqStack &S, SElemType &e);                    //删除的S栈顶元素并返回其值e
void  StackTraverse(SqStack S);                                   //依次访问栈S的每个元素
