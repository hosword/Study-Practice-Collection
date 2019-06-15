#include<iostream>
#include"Operate.h"
#include"SqStack.h"
#include<cmath>
#include<string>

//运算符数组
char OPSET[OPSETSIZE] = { '+', '-', '*', '/', '(', ')', '#', '^' };

// 运算符优先级表 
unsigned char Prior[8][8] =
{ 
        // '+' '-' '*' '/' '(' ')' '#' '^' 
        /*'+'*/ '>', '>', '<', '<', '<', '>', '>', '<',
        /*'-'*/ '>', '>', '<', '<', '<', '>', '>', '<',
        /*'*'*/ '>', '>', '>', '>', '<', '>', '>', '<',
        /*'/'*/ '>', '>', '>', '>', '<', '>', '>', '<',
        /*'('*/ '<', '<', '<', '<', '<', '=', ' ', '<',
        /*')'*/ '>', '>', '>', '>', ' ', '>', '>', '>',
        /*'#'*/ '<', '<', '<', '<', '<', ' ', '=', '<',
        /*'^'*/ '>', '>', '>', '>', '<', '>', '>', '>'
};

//计算函数Operate
float Operate(float a, unsigned char theta, float b)    
{
        switch (theta)
        {
        case '+': return a + b; break;
        case '-': return a - b; break;
        case '*': return a*b; break;
        case '/': return a / b; break;
        case '^': return pow(a, b); break;
        default: return 0;
        }
}


//判断是否是运算符
int In(char Test, char *TestOp)
{
        int Find = 0;
        for (int i = 0; i< OPSETSIZE; i++)
        {
                if (Test == TestOp[i])
                        Find = 1;
        }
        return Find;
}


//得到运算符数组中运算符下标
int ReturnOpOrd(char op, char *TestOp)
{
        for (int i = 0; i< OPSETSIZE; i++)
        {
                if (op == TestOp[i])
                        return i;
        }
}


//返回运算符优先级
char precede(char Aop, char Bop)
{
        return Prior[ReturnOpOrd(Aop, OPSET)][ReturnOpOrd(Bop, OPSET)];
}



// 算术表达式求值的算符优先算法
float EvaluateExpression(char* exp)
{
      
        // 设OPTR和OPND分别为运算符栈和运算数栈，OP为运算符集合 
       SChar *OPTR = NULL;       // 运算符栈，字符元素 
       SFloat *OPND = NULL;       // 运算数栈，实数元素 
        char TempData[20];
        float Data, a, b;
        char theta, *c, Dr[] = { '#', '\0' };

        OPTR = Push(OPTR, '#');
        c = exp;
        //字符串拷贝函数 
        strcpy_s(TempData, "\0");


        while (*c != '#' || OPTR->c != '#')//判断是否到表达式末尾，末尾为‘#’
        {
                if (!In(*c, OPSET)) // 是运算符
                {
                        Dr[0] = *c;
                        strcat_s(TempData, Dr);           //字符串连接函数 
                        c++;
                        if (In(*c, OPSET))
                        {
                                Data = atof(TempData);       //字符串转换函数(double) 
                                OPND = Push(OPND, Data);
                                strcpy_s(TempData, "\0");
                        }
                }
                else    // 不是运算符则进栈 
                {
                        switch (precede(OPTR->c, *c))
                        {
                        case '<': // 栈顶元素优先级低 
                                OPTR = Push(OPTR, *c);
                                c++;
                                break;
                        case '=': // 脱括号并接收下一字符 
                                OPTR = Pop(OPTR);
                                c++;
                                break;
                        case '>': // 退栈并将运算结果入栈 
                                theta = OPTR->c; 
                                OPTR = Pop(OPTR);
                                b = OPND->f; 
                                OPND = Pop(OPND);
                                a = OPND->f;
                                OPND = Pop(OPND);
                                OPND = Push(OPND, Operate(a, theta, b));
                                break;
                        } //switch
                }
        } //while 
        return OPND->f;
} 