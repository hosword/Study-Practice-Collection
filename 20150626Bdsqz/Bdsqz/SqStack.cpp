#include "SqStack.h"
#include <iostream>
using namespace std;

//SChar���͵�ָ��Push������p
SChar *Push(SChar *s, char c)         
{
        SChar *p =new SChar;
        p->c = c;
        p->next = s;
        return p;
}

//SFloat���͵�ָ��Push������p
SFloat *Push(SFloat *s, float f)      
{
        SFloat *p = new SFloat;
        p->f = f;
        p->next = s;
        return p;
}

//SChar���͵�ָ��Pop
SChar *Pop(SChar *s)  
{
        SChar *q = s;
        s = s->next;
        delete q;
        return s;
}

//SFloat���͵�ָ��Pop
SFloat *Pop(SFloat *s)    
{
        SFloat *q = s;
        s = s->next;
        delete q;
        return s;
}
