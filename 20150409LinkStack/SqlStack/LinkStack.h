
#define MAXSIZE 100
typedef int SElemType;
typedef struct StackNode{
	SElemType data;
	struct  StackNode *next;
} StackNode, *LinkStack;
bool InitStack(LinkStack &S);                                          //构造空栈
bool DestroyStack(LinkStack &S);                                 //销毁栈S
bool ClearStack(LinkStack &S);                                      //清空栈S
bool StackEmpty(LinkStack S);                                       //判断栈S是否为空
int     StackLength(LinkStack S);                                     //栈S的长度
bool GetTop(LinkStack S, SElemType &e);                 //返回栈S的栈顶元素
bool Push(LinkStack &S, SElemType e);                      //插入元素为S新的栈顶元素
bool  Pop(LinkStack &S, SElemType &e);                    //删除的S栈顶元素并返回其值e
bool  StackTraverse(LinkStack S);                                   //依次访问栈S的每个元素
