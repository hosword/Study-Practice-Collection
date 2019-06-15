#ifndef SQSTACK_H
#define SQSTACK_H
//StackChar���͵Ľ��SChar��char����������
typedef struct StackChar
{
        char c;
        struct StackChar *next;
}SChar;      

//StackFloat���͵Ľ��SFloat��float��pow����ʱ��Ҫ�õ������Զ���float����
typedef struct StackFloat
{
        float f;
        struct StackFloat *next;
}SFloat;     

//�������ջ��ջ
SChar *Push(SChar *s, char c);
SChar *Pop(SChar *s);

//��������ջ��ջ
SFloat *Push(SFloat *s, float f);
SFloat *Pop(SFloat *s);
#endif
