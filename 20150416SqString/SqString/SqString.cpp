#include "SqString.h"
#include <iostream>
using namespace std;

bool StrAssign(HString &T, char *chars)//
{
        int i = 0,len=0;
        T.ch = NULL;
        T.length = 0;
 /*       while (chars[len]){
                len++;
        }
        T.length = len;*/
        char *temp = new char[len];
        T.ch = temp;
        if (!T.ch)
                return false;
        while (chars[i]){
                T.ch[i] = chars[i];
                i++;
        }
        T.length = i;
        
        return true;

}
bool StrCopy(HString &T, HString S)
{
        int i = 0;
        T.ch = NULL;
        T.length = 0;
        char *temp = new char[S.length+1];
        T.ch = temp;
        if (!T.ch)
                return false;
        while (S.ch[i]){
                T.ch[i] = S.ch[i];
                i++;
        }
        T.length =S.length;
        return true;
}
bool StrEmpty(HString S)
{
        return S.length==0;
}
int StrCompare(HString S, HString T)
{
        int i;
        for (i = 0; i < S.length && i < T.length; i++)
        if (S.ch[i] != T.ch[i])
                return S.ch[i] - T.ch[i];
        return S.length - T.length;
}
int StrLength(HString S)
{
        return S.length;
}
bool ClearString(HString &S)
{
        if (!S.ch)
                return false;
        if (S.ch){
                delete[]S.ch;
                 }
        S.ch = NULL;
        S.length = 0;
        return true;
}
bool Concat(HString &T, HString S1, HString S2)
{
        int i = 0,j=0;
        T.ch = NULL;
        T.length = 0;
        char *temp = new char[S1.length + S2.length+1];
        T.ch = temp;
        if (!T.ch)
                return false;
        T.length = S1.length + S2.length;
        for (i; i < S1.length; i++){
                T.ch[i] = S1.ch[i];
        }
        for (j; j < S2.length; j++){
                T.ch[i++] = S2.ch[j];
        }
        return true;
}
bool SubString(HString &Sub, HString S, int pos, int len)
{
        if (pos<1 || pos>S.length || len < 1 || !S.ch||pos+len>S.length){
                return false;
        }
        int i = 0,j=0;
        Sub.ch = NULL;
        Sub.length = 0;
        char *temp = new char[S.length + 1];
        Sub.ch = temp;
        if (!Sub.ch)
                return false;
        for (i = pos; i < len + pos; i++,j++){
                Sub.ch[j] = S.ch[i];
        }
        Sub.length = len;
        return true;
}
int Index(HString S, HString T, int pos)
{
        if (!T.ch||pos>S.length||pos<1)
                return -1;
        int i = pos, j = 0;
        while (i < S.length && j < T.length){
                if (S.ch[i] == T.ch[j]) {  
                        i++;
                        j++;
                }
                else
                {
                        i = i - j +1;
                        j =0;
                }
        }
        if (j >= T.length)
                return i - T.length;
        else
                return -1;

      
}
bool Replace(HString &S, HString T, HString V)
{
        int i = 1; /*  从串S的第一个字符起查找串T */
        if (StrEmpty(T)) /*  T是空串 */
                return false;
      do
        {
                i = Index(S, T, i); /*  结果i为从上一个i之后找到的子串T的位置 */
                if (i) /*  串S中存在串T */
                {
                        StrDelete(S, i, StrLength(T)); /*  删除该串T */
                        StrInsert(S, i, V); /*  在原串T的位置插入串V */
                        i =i+ V.length; /*  在插入的串V后面继续查找串T */
                }
      } while (i<S.length);
        return true;
}
bool StrInsert(HString &S, int pos, HString T)
{
        if (!S.ch || !T.ch || pos<1 || pos>S.length + 1)
                return false;
     
        HString Te;
        int i = 0, j = 0;
        Te.ch = NULL;
        Te.length = 0;
        char *temp = new char[S.length +T.length+1];
        Te.ch = temp;
        if (!Te.ch)
                return false;
        Te.length = S.length + T.length;

        for (i = 0; i < pos-1; i++){
                Te.ch[i] = S.ch[i];
        }
        for (i = pos - 1, j = 0; i < T.length + pos - 1; i++, j++){
                Te.ch[i] = T.ch[j];
        }
        for (i = T.length + pos - 1, j = pos - 1; i < T.length + S.length; i++, j++){
                Te.ch[i] = S.ch[j];
        }
      
        for (int i = 0; i < Te.length; i++){
                S.ch[i] = Te.ch[i];
        }
       S.length = Te.length;
        return true;
}
bool StrDelete(HString &S, int pos, int len)
{
        if (!S.ch || pos<1 || pos>S.length - len + 1){
                return false;
        }
        HString Te;
        int i = 0, j = 0;
        Te.ch = NULL;
        Te.length = 0;
        char *temp = new char[S.length + 1];
        Te.ch = temp;
        if (!Te.ch)
                return false;
        Te.length = S.length-len;
        if (pos == 1){
                for (i = 0, j = len; i < Te.length,j<S.length; i++, j++){
                        Te.ch[i] = S.ch[j];

                }
        }
        else if (pos == S.length - len + 1){
                for (i = 0, j = 0; i < Te.length, j < Te.length; i++, j++){
                        Te.ch[i] = S.ch[j];
                }
        }
        else{
                for (i = 0; i < pos; i++){
                        Te.ch[i] = S.ch[i];
                }
                for (j = pos,i=len+pos-1; j < Te.length; j++,i++){
                        Te.ch[j] = S.ch[i];
                }
        }
  
        for (int i = 0; i < Te.length; i++){
                S.ch[i] = Te.ch[i];
        }
        S.length = Te.length;
        return true;
}
bool DestroyString(HString &S)
{
        if (!S.ch)
                return false;
        if (S.ch){
                delete []S.ch;
        }
        S.length = 0;
        return true;
}