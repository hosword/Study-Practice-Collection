#ifndef SQSTACK_H
#define SQSTACK_H
//StackChar类型的结点SChar，char：存放运算符
typedef struct StackChar
{
        char c;
        struct StackChar *next;
}SChar;      

//StackFloat类型的结点SFloat，float：pow函数时需要用到，所以定义float类型
typedef struct StackFloat
{
        float f;
        struct StackFloat *next;
}SFloat;     

//运算符入栈出栈
SChar *Push(SChar *s, char c);
SChar *Pop(SChar *s);

//操作数入栈出栈
SFloat *Push(SFloat *s, float f);
SFloat *Pop(SFloat *s);
#endif
