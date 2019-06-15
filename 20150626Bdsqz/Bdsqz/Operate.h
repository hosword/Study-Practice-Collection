#ifndef OPERATE_H
#define OPERATE_H
#define OPSETSIZE 8 //运算符个数

float Operate(float a, unsigned char theta, float b);//计算函数Operate
int In(char Test, char *TestOp);//判断是否是运算符
int ReturnOpOrd(char op, char *TestOp);//得到运算符数组中运算符下标
char precede(char Aop, char Bop);//返回运算符优先级
float EvaluateExpression(char* exp);//算术表达式求值的算符优先算法
#endif