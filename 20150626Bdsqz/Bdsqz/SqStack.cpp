#include "SqStack.h"
#include <iostream>
using namespace std;

//SChar类型的指针Push，返回p
SChar *Push(SChar *s, char c)         
{
        SChar *p =new SChar;
        p->c = c;
        p->next = s;
        return p;
}

//SFloat类型的指针Push，返回p
SFloat *Push(SFloat *s, float f)      
{
        SFloat *p = new SFloat;
        p->f = f;
        p->next = s;
        return p;
}

//SChar类型的指针Pop
SChar *Pop(SChar *s)  
{
        SChar *q = s;
        s = s->next;
        delete q;
        return s;
}

//SFloat类型的指针Pop
SFloat *Pop(SFloat *s)    
{
        SFloat *q = s;
        s = s->next;
        delete q;
        return s;
}
