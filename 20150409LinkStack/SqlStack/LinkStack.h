
#define MAXSIZE 100
typedef int SElemType;
typedef struct StackNode{
	SElemType data;
	struct  StackNode *next;
} StackNode, *LinkStack;
bool InitStack(LinkStack &S);                                          //�����ջ
bool DestroyStack(LinkStack &S);                                 //����ջS
bool ClearStack(LinkStack &S);                                      //���ջS
bool StackEmpty(LinkStack S);                                       //�ж�ջS�Ƿ�Ϊ��
int     StackLength(LinkStack S);                                     //ջS�ĳ���
bool GetTop(LinkStack S, SElemType &e);                 //����ջS��ջ��Ԫ��
bool Push(LinkStack &S, SElemType e);                      //����Ԫ��ΪS�µ�ջ��Ԫ��
bool  Pop(LinkStack &S, SElemType &e);                    //ɾ����Sջ��Ԫ�ز�������ֵe
bool  StackTraverse(LinkStack S);                                   //���η���ջS��ÿ��Ԫ��
