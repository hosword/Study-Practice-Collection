#include "SqString.h"
#include <iostream>
using namespace std;
void Print(HString T)
{
        int j= 0;
    
        for (j = 0; j < T.length; j++){
                cout << T.ch[j];
        }
        cout << endl;
}
void main()
{
        HString S,T,S1,S2,V;
        int m;
        char c[30] ="SqlStringtesthelloword";
        
      
        while (1){
            
                cout << "////////////////////////////////////////////////////////////////////////////////" << endl<<endl;
                cout << "****************///////////    请输入操作选项： //////////****************" << endl;
                cout << "****************///////////         1：串赋值  //////////****************" << endl;
                cout << "****************///////////         2：串复制  //////////****************" << endl;
                cout << "****************///////////         3：串为空   //////////****************" << endl;
                cout << "****************///////////         4：串比较   //////////****************" << endl;
                cout << "****************///////////         5：串长度   //////////****************" << endl;
                cout << "****************///////////         6：清空串    //////////****************" << endl;
                cout << "****************///////////         7：串连接    //////////****************" << endl;
                cout << "****************///////////         8：返回子串   //////////****************" << endl;
                cout << "****************///////////         9：Index       //////////****************" << endl;
                cout << "****************///////////         10：Replace   //////////****************" << endl;
                cout << "****************///////////         11：插入串     //////////****************" << endl;
                cout << "****************///////////         12： 删除串    //////////****************" << endl;
                cout << "****************///////////         13： 销毁串    //////////****************" << endl;
               cout << "/////////////////////////////////////////////////////////////////////////////////////////////////////////////" << endl;


               int choice;
                cin >> choice;
                switch (choice){
                case 1:
                        cout << "****************///////////         1：串赋值  //////////****************" << endl;
                         StrAssign(T,c);
                         cout << "赋值后的T为："<<endl;
                         Print(T);
                        break;
                case 2:
                        cout << "****************///////////         2：串复制  //////////****************" << endl;
                        cout << "请输入字符串S" << endl;
                        cin >> c;
                        StrAssign(S,c);
                        if (!StrCopy(T, S)) {
                                cout << "复制失败" << endl;
                        }
                        else    { 
                        StrCopy(T, S); 
                        cout << "复制后的T为：" << endl;
                        Print(T);
                    
                        }
                         
                   
                          break;
                case 3:
                        cout << "****************///////////         3：串为空   //////////****************" << endl;
                        if (StrEmpty(T)){
                                cout << "串为空"<<endl;
                        }
                        else{
                                cout << "串不为空"<<endl;
                        }
                        break;
                case 4:
                        cout << "****************///////////         4：串比较   //////////****************" << endl;
                        char c1[255],c2[255];
                        cout << "请输入串S1串S2:"<<endl;
                        cin >> c1 >> c2;
                        StrAssign(S1,c1);
                        StrAssign(S2,c2);
                       m= StrCompare(S1,S2);
                       if (m = 0){
                               cout << "S1等于S2"<<endl;
                       }
                       else if (m > 0){
                               cout << "S1大于S2" << endl;
                       }
                       else{
                               cout << "S1小于于S2" << endl;
                       }
                       DestroyString(S1);
                       DestroyString(S2);
                       
                        break;
                case 5:
                        cout << "****************///////////         5：串长度   //////////****************" << endl;
                        cout << "串长为：" << StrLength(T)<<endl;
                        break;
                case 6:
                        cout << "****************///////////         6：清空串    //////////****************" << endl;
                        if (ClearString(T)){
                                cout << "串清空"<<endl;
                        }
                        else{
                                cout << "错误！串不能清空。"<<endl;
                        }
                        break;
                case 7:
                        cout << "****************///////////         7：串连接    //////////****************" << endl;
                        char c3[255], c4[255];
                        cout << "请输入串S1串S2:" << endl;
                        cin >> c3 >> c4;
                        StrAssign(S1, c3);
                        StrAssign(S2, c4);
                        Concat(T,S1,S2);
                        cout << "连接后的串T为："<<endl;
                        Print(T);
                        DestroyString(S1);
                        DestroyString(S2);
                        break;
                case 8:
                        cout << "****************///////////         8：返回子串   //////////****************" << endl;
                        int pos,len;
                        char c5[255];
                        cout << "请输入串S:"<<endl;
                        cin>>c5;
                        StrAssign(S1,c5);
                        cout<<"请输入要返回的子串开始的位置pos和长度len："<<endl;
                        cin>>pos>>len;
                        if (!SubString(S2, S1, pos, len)){
                                cout << "输入有误！"<<endl;
                        }
                        else{
                                SubString(S2, S1, pos, len);
                                cout << "S1串" ;
                                Print(S1);
                                cout<<"从第" << pos << "个字符开始长度为len的子串S2为：";
                                Print(S2);
                        }
                        DestroyString(S1);
                        DestroyString(S2);

                        break;
                case 9:
                        cout << "****************///////////         9：Index       //////////****************" << endl;
                        int po;
                        char c6[255],c7[255];
                        cout << "请输入串S:" << endl;
                        cin >> c6>>c7;
                        StrAssign(S1, c6);
                        StrAssign(S2,c7);
                        cout << "请输入位置pos：" << endl;
                        cin >> po;
                        m = Index(S1,S2,po);
                        if (m == -1){
                                cout << "匹配不成功" <<endl;
                        }
                        else{
                                cout << "匹配成功" << endl;
                                cout << "从主串S:";
                                Print(S1);
                                cout << "第" << po << "个字符之后第一次匹配子串T:";
                                Print(S2);
                                cout << "的位置为" << m << endl;
                        }
                        DestroyString(S1);
                        DestroyString(S2);
                   
                        break;
                case 10:
                        cout << "****************///////////         10：Replace   //////////****************" << endl;
                        char c11[255], c12[255],c13[255];
                        cout << "请输入串S,T,V:" << endl;
                        cin >> c11 >> c12 >> c13;
                        StrAssign(S, c11);
                        StrAssign(T, c12);
                        StrAssign(V, c13);
                        cout << "串S"<<endl;
                        Print(S);
                        cout << "中出现的所有与串T: ";
                        Print(T);
                        cout << "相等的不重叠子串用串V: ";
                        Print(V);
                        Replace(S, T, V);
                        cout<<"替换之后的串S为：";
                       
                        Print(S);
                    /*    DestroyString(S);*/
                       /* DestroyString(T);
                        DestroyString(V);*/
                    
                        break;
                case 11:
                        cout << "****************///////////         11：插入串     //////////****************" << endl;
                        int p;
                        char c8[255], c9[255];
                        cout << "请输入串S,T:" << endl;
                        cin >> c8>> c9;
                        StrAssign(S1, c8);
                        StrAssign(S2, c9);
                        cout << "请输入位置pos：" << endl;
                        cin>>p;
                       
                        StrInsert(S1,p,S2);
                        
                        Print(S1);
                        DestroyString(S1);
                        DestroyString(S2);
                      
                        break;
                case 12:
                        cout << "****************///////////         12： 删除串    //////////****************" << endl;
                        int pt,leng;
                        char c10[255];
                        cout << "请输入串S:" << endl;
                        cin >>c10;
                        StrAssign(S1, c10);
                        cout << "请输入位置pos：" << endl;
                        cin >> pt;
                        cout << "请输入要删除的子串长度：" << endl;
                        cin >> leng;
                        cout << "删除前的串为" << endl;
                        Print(S1);

                        StrDelete(S1,pt,leng);
                        cout << "删除后的串为" << endl;
                        Print(S1);
                        break;
           
                default:  
                        break;
                        
                }
        }
}