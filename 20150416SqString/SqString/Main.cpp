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
                cout << "****************///////////    ���������ѡ� //////////****************" << endl;
                cout << "****************///////////         1������ֵ  //////////****************" << endl;
                cout << "****************///////////         2��������  //////////****************" << endl;
                cout << "****************///////////         3����Ϊ��   //////////****************" << endl;
                cout << "****************///////////         4�����Ƚ�   //////////****************" << endl;
                cout << "****************///////////         5��������   //////////****************" << endl;
                cout << "****************///////////         6����մ�    //////////****************" << endl;
                cout << "****************///////////         7��������    //////////****************" << endl;
                cout << "****************///////////         8�������Ӵ�   //////////****************" << endl;
                cout << "****************///////////         9��Index       //////////****************" << endl;
                cout << "****************///////////         10��Replace   //////////****************" << endl;
                cout << "****************///////////         11�����봮     //////////****************" << endl;
                cout << "****************///////////         12�� ɾ����    //////////****************" << endl;
                cout << "****************///////////         13�� ���ٴ�    //////////****************" << endl;
               cout << "/////////////////////////////////////////////////////////////////////////////////////////////////////////////" << endl;


               int choice;
                cin >> choice;
                switch (choice){
                case 1:
                        cout << "****************///////////         1������ֵ  //////////****************" << endl;
                         StrAssign(T,c);
                         cout << "��ֵ���TΪ��"<<endl;
                         Print(T);
                        break;
                case 2:
                        cout << "****************///////////         2��������  //////////****************" << endl;
                        cout << "�������ַ���S" << endl;
                        cin >> c;
                        StrAssign(S,c);
                        if (!StrCopy(T, S)) {
                                cout << "����ʧ��" << endl;
                        }
                        else    { 
                        StrCopy(T, S); 
                        cout << "���ƺ��TΪ��" << endl;
                        Print(T);
                    
                        }
                         
                   
                          break;
                case 3:
                        cout << "****************///////////         3����Ϊ��   //////////****************" << endl;
                        if (StrEmpty(T)){
                                cout << "��Ϊ��"<<endl;
                        }
                        else{
                                cout << "����Ϊ��"<<endl;
                        }
                        break;
                case 4:
                        cout << "****************///////////         4�����Ƚ�   //////////****************" << endl;
                        char c1[255],c2[255];
                        cout << "�����봮S1��S2:"<<endl;
                        cin >> c1 >> c2;
                        StrAssign(S1,c1);
                        StrAssign(S2,c2);
                       m= StrCompare(S1,S2);
                       if (m = 0){
                               cout << "S1����S2"<<endl;
                       }
                       else if (m > 0){
                               cout << "S1����S2" << endl;
                       }
                       else{
                               cout << "S1С����S2" << endl;
                       }
                       DestroyString(S1);
                       DestroyString(S2);
                       
                        break;
                case 5:
                        cout << "****************///////////         5��������   //////////****************" << endl;
                        cout << "����Ϊ��" << StrLength(T)<<endl;
                        break;
                case 6:
                        cout << "****************///////////         6����մ�    //////////****************" << endl;
                        if (ClearString(T)){
                                cout << "�����"<<endl;
                        }
                        else{
                                cout << "���󣡴�������ա�"<<endl;
                        }
                        break;
                case 7:
                        cout << "****************///////////         7��������    //////////****************" << endl;
                        char c3[255], c4[255];
                        cout << "�����봮S1��S2:" << endl;
                        cin >> c3 >> c4;
                        StrAssign(S1, c3);
                        StrAssign(S2, c4);
                        Concat(T,S1,S2);
                        cout << "���Ӻ�Ĵ�TΪ��"<<endl;
                        Print(T);
                        DestroyString(S1);
                        DestroyString(S2);
                        break;
                case 8:
                        cout << "****************///////////         8�������Ӵ�   //////////****************" << endl;
                        int pos,len;
                        char c5[255];
                        cout << "�����봮S:"<<endl;
                        cin>>c5;
                        StrAssign(S1,c5);
                        cout<<"������Ҫ���ص��Ӵ���ʼ��λ��pos�ͳ���len��"<<endl;
                        cin>>pos>>len;
                        if (!SubString(S2, S1, pos, len)){
                                cout << "��������"<<endl;
                        }
                        else{
                                SubString(S2, S1, pos, len);
                                cout << "S1��" ;
                                Print(S1);
                                cout<<"�ӵ�" << pos << "���ַ���ʼ����Ϊlen���Ӵ�S2Ϊ��";
                                Print(S2);
                        }
                        DestroyString(S1);
                        DestroyString(S2);

                        break;
                case 9:
                        cout << "****************///////////         9��Index       //////////****************" << endl;
                        int po;
                        char c6[255],c7[255];
                        cout << "�����봮S:" << endl;
                        cin >> c6>>c7;
                        StrAssign(S1, c6);
                        StrAssign(S2,c7);
                        cout << "������λ��pos��" << endl;
                        cin >> po;
                        m = Index(S1,S2,po);
                        if (m == -1){
                                cout << "ƥ�䲻�ɹ�" <<endl;
                        }
                        else{
                                cout << "ƥ��ɹ�" << endl;
                                cout << "������S:";
                                Print(S1);
                                cout << "��" << po << "���ַ�֮���һ��ƥ���Ӵ�T:";
                                Print(S2);
                                cout << "��λ��Ϊ" << m << endl;
                        }
                        DestroyString(S1);
                        DestroyString(S2);
                   
                        break;
                case 10:
                        cout << "****************///////////         10��Replace   //////////****************" << endl;
                        char c11[255], c12[255],c13[255];
                        cout << "�����봮S,T,V:" << endl;
                        cin >> c11 >> c12 >> c13;
                        StrAssign(S, c11);
                        StrAssign(T, c12);
                        StrAssign(V, c13);
                        cout << "��S"<<endl;
                        Print(S);
                        cout << "�г��ֵ������봮T: ";
                        Print(T);
                        cout << "��ȵĲ��ص��Ӵ��ô�V: ";
                        Print(V);
                        Replace(S, T, V);
                        cout<<"�滻֮��Ĵ�SΪ��";
                       
                        Print(S);
                    /*    DestroyString(S);*/
                       /* DestroyString(T);
                        DestroyString(V);*/
                    
                        break;
                case 11:
                        cout << "****************///////////         11�����봮     //////////****************" << endl;
                        int p;
                        char c8[255], c9[255];
                        cout << "�����봮S,T:" << endl;
                        cin >> c8>> c9;
                        StrAssign(S1, c8);
                        StrAssign(S2, c9);
                        cout << "������λ��pos��" << endl;
                        cin>>p;
                       
                        StrInsert(S1,p,S2);
                        
                        Print(S1);
                        DestroyString(S1);
                        DestroyString(S2);
                      
                        break;
                case 12:
                        cout << "****************///////////         12�� ɾ����    //////////****************" << endl;
                        int pt,leng;
                        char c10[255];
                        cout << "�����봮S:" << endl;
                        cin >>c10;
                        StrAssign(S1, c10);
                        cout << "������λ��pos��" << endl;
                        cin >> pt;
                        cout << "������Ҫɾ�����Ӵ����ȣ�" << endl;
                        cin >> leng;
                        cout << "ɾ��ǰ�Ĵ�Ϊ" << endl;
                        Print(S1);

                        StrDelete(S1,pt,leng);
                        cout << "ɾ����Ĵ�Ϊ" << endl;
                        Print(S1);
                        break;
           
                default:  
                        break;
                        
                }
        }
}