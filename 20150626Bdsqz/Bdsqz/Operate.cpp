#include<iostream>
#include"Operate.h"
#include"SqStack.h"
#include<cmath>
#include<string>

//���������
char OPSET[OPSETSIZE] = { '+', '-', '*', '/', '(', ')', '#', '^' };

// ��������ȼ��� 
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

//���㺯��Operate
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


//�ж��Ƿ��������
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


//�õ������������������±�
int ReturnOpOrd(char op, char *TestOp)
{
        for (int i = 0; i< OPSETSIZE; i++)
        {
                if (op == TestOp[i])
                        return i;
        }
}


//������������ȼ�
char precede(char Aop, char Bop)
{
        return Prior[ReturnOpOrd(Aop, OPSET)][ReturnOpOrd(Bop, OPSET)];
}



// �������ʽ��ֵ����������㷨
float EvaluateExpression(char* exp)
{
      
        // ��OPTR��OPND�ֱ�Ϊ�����ջ��������ջ��OPΪ��������� 
       SChar *OPTR = NULL;       // �����ջ���ַ�Ԫ�� 
       SFloat *OPND = NULL;       // ������ջ��ʵ��Ԫ�� 
        char TempData[20];
        float Data, a, b;
        char theta, *c, Dr[] = { '#', '\0' };

        OPTR = Push(OPTR, '#');
        c = exp;
        //�ַ����������� 
        strcpy_s(TempData, "\0");


        while (*c != '#' || OPTR->c != '#')//�ж��Ƿ񵽱��ʽĩβ��ĩβΪ��#��
        {
                if (!In(*c, OPSET)) // �������
                {
                        Dr[0] = *c;
                        strcat_s(TempData, Dr);           //�ַ������Ӻ��� 
                        c++;
                        if (In(*c, OPSET))
                        {
                                Data = atof(TempData);       //�ַ���ת������(double) 
                                OPND = Push(OPND, Data);
                                strcpy_s(TempData, "\0");
                        }
                }
                else    // ������������ջ 
                {
                        switch (precede(OPTR->c, *c))
                        {
                        case '<': // ջ��Ԫ�����ȼ��� 
                                OPTR = Push(OPTR, *c);
                                c++;
                                break;
                        case '=': // �����Ų�������һ�ַ� 
                                OPTR = Pop(OPTR);
                                c++;
                                break;
                        case '>': // ��ջ������������ջ 
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