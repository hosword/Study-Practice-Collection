#ifndef OPERATE_H
#define OPERATE_H
#define OPSETSIZE 8 //���������

float Operate(float a, unsigned char theta, float b);//���㺯��Operate
int In(char Test, char *TestOp);//�ж��Ƿ��������
int ReturnOpOrd(char op, char *TestOp);//�õ������������������±�
char precede(char Aop, char Bop);//������������ȼ�
float EvaluateExpression(char* exp);//�������ʽ��ֵ����������㷨
#endif