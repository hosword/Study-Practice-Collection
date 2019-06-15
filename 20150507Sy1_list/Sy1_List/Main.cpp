////////////////////////////������///////////////////////////////////
#include <iostream>

#include <stdlib.h>
#include "List.h"
using namespace std;



int main()
{
        LinkList L;
        ElemType e;
        int n, b, m;
        int i, k, len, c = 0;
        InitList(L);
        while (c == 0){


                cout << "////////////////////////////�������ܲ���///////////////////////////////////////" << endl;
                cout << "//                                                                                                        //" << endl;
                cout << "//1.�������Ա�         2.�������Ա�           3.�������Ա�        4.�ж��Ƿ�Ϊ�ձ� //" << endl;
                cout << "//5.���Ա�Ԫ�ظ���     6.��i��Ԫ��ֵ       7.��ѯ����Ԫ��      //" << endl;
                cout << "// 8.��������Ԫ��       9.ɾ������Ԫ��      10.��ת����         11.�ϲ�������  //" << endl;

                cout << "//////////////////////////////////////////////////////////////////////////////////" << endl;
                cout << "" << endl;
                cout << "��ѡ�����: " << endl;
                cin >> n;
                while (n >= 1 && n <= 11)
                {
                        switch (n)
                        {
                        case 1://InitList

                                cout << "����������ĳ���(len): " << endl;
                                cin >> len;

                                if (len > 0){
                                        cout << "����������Ԫ��(m): " << endl;

                                        for (n = 1; n <= len; n++){
                                                cin >> m;
                                                ListInsert(L, n, m);
                                        }


                                        cout << "���Ա��ʼ���ɹ�." << endl;
                                        cout << "���Ա��������£�" << endl;
                                        for (i = 1; i <= ListLength(L); i++){
                                                cout << GetElem(L, i, e) << "\t";
                                        }
                                        cout << endl;
                                }
                                else
                                        cout << "��������������" << endl;
                                break;
                        case 2://DestroyList
                                DestroyList(L);
                                cout << "���Ա�������." << endl;
                                break;
                        case 3://ClearList
                                ClearList(L);
                                cout << "���Ա����óɹ�." << endl;
                                break;
                        case 4://ListEmpty
                                if (ListEmpty(L))
                                        cout << "���Ա�Ϊ��." << endl;
                                else
                                        cout << "���Ա�Ϊ��." << endl;
                                break;
                        case 5://ListLength
                                k = ListLength(L);
                                if (k){
                                        cout << "���Ա���Ϊ " << k << endl;
                                        cout << "���Ա��������£�" << endl;
                                        for (i = 1; i <= ListLength(L); i++){
                                                cout << GetElem(L, i, e) << "\t";
                                        }
                                        cout << endl;
                                }

                                else
                                        cout << "����!" << endl;
                                break;
                        case 6://GetElem
                                cout << "������Ҫ����Ԫ�ص�λ�� : " << endl;
                                cin >> i;
                                GetElem(L, i, e);
                                cout << "��λ�õ�Ԫ����" << e << endl;
                                cout << "���Ա���Ϊ " << ListLength(L) << endl;
                                cout << "���Ա��������£�" << endl;
                                for (i = 1; i <= ListLength(L); i++){
                                        cout << GetElem(L, i, e) << "\t";
                                }
                                cout << endl;
                                break;
                        case 7://LocateElem
                                cout << "������Ҫ����Ԫ�� : " << endl;
                                cin >> k;
                                b = LocateElem(L, k);
                                if (b != 0){
                                        cout << "��Ԫ��λ���� " << b << endl;
                                        cout << "���Ա���Ϊ " << ListLength(L) << endl;
                                        cout << "���Ա��������£�" << endl;
                                        for (i = 1; i <= ListLength(L); i++){
                                                cout << GetElem(L, i, e) << "\t";
                                        }
                                        cout << endl;
                                }

                                else
                                        cout << "��Ԫ�ز�����" << endl;
                                break;

                        case 8://ListInsert
                                if ((L->next->data) > (L->next->next->data)){
                                        cout << "������Ϊ������Ҫ��תΪ������ܲ������ݡ�" << endl;
                                        ReverseList(L);
                                }
                                cout << "��������Ҫ�����Ԫ�غ�λ�ã�Ԫ�أ�λ�ã� :(elem,location)" << endl;
                                cout << "���Ա���Ϊ " << ListLength(L) << endl;
                                cin >> e >> i;

                                if (ListInsert(L, i, e)){
                                        cout << "���Ա���Ϊ " << ListLength(L) << endl;
                                        cout << "���Ա��������£�" << endl;
                                        for (i = 1; i <= ListLength(L); i++){
                                                cout << GetElem(L, i, e) << "\t";
                                        }
                                        cout << endl;
                                        cout << "����ɹ���" << endl;
                                }


                                else
                                        cout << "����ʧ�ܣ����������Ƿ�Ϸ�!" << endl;
                                break;
                        case 9://ListDelete
                                cout << "��������Ҫɾ����Ԫ��λ��:" << endl;
                                cin >> i;
                                ListDelete(L, i, e);
                                cout << "��Ҫɾ����Ԫ����" << e << endl;

                                break;
                        case 10://ReverseList
                                cout << "��תǰ�ĵ�����Ϊ��" << endl;
                                cout << "���Ա��������£�" << endl;
                                for (i = 1; i <= ListLength(L); i++){
                                        cout << GetElem(L, i, e) << "\t";
                                }
                                cout << endl;
                                cout << "��ת��ĵ�����Ϊ��" << endl;
                                ReverseList(L);
                                cout << "���Ա��������£�" << endl;
                                for (i = 1; i <= ListLength(L); i++){
                                        cout << GetElem(L, i, e) << "\t";
                                }
                                cout << endl;
                                break;
                        case 11:
                                cout << "�ϲ�������" << endl;
                                cout << "�����뵥����LA,LB" << endl;
                                LinkList LA, LB, LC;
                                InitList(LA);
                                InitList(LB);
                              
                                int len1, len2;
                                cout << "����������LA�ĳ���(len): " << endl;
                                cin >> len1;

                                if (len1 > 0){
                                        cout << "����������Ԫ��(m): " << endl;

                                        for (n = 1; n <= len1; n++){
                                                cin >> m;
                                                ListInsert(LA, n, m);
                                        }
                                }
                                        cout << "������LB����ĳ���(len): " << endl;
                                        cin >> len2;

                                        if (len2 > 0){
                                                cout << "����������Ԫ��(m): " << endl;

                                                for (n = 1; n <= len2; n++){
                                                        cin >> m;
                                                        ListInsert(LB, n, m);
                                                }
                                        }
                                                cout << "���Ա��ʼ���ɹ�." << endl;
                                                cout << "���Ա��������£�" << endl;
                                                for (i = 1; i <= ListLength(LA); i++){
                                                        cout << GetElem(LA, i, e) << "\t";
                                                }
                                                cout << endl;
                                                cout << "���Ա��ʼ���ɹ�." << endl;
                                                cout << "���Ա��������£�" << endl;
                                                for (i = 1; i <= ListLength(LB); i++){
                                                        cout << GetElem(LB, i, e) << "\t";
                                                }
                                                cout << endl;
                                                MegeList(LA, LB, LC);
                                                cout << "�ϲ���ĵ�����Ϊ��" << endl;
                                                cout << "���Ա��������£�" << endl;
                                                for (i = 1; i <=len1+len2; i++){
                                                        cout << GetElem(LC, i, e) << "\t";
                                                }
                                                cout << endl;
                                                break;



                                        }//switch
                                        cout << "��ѡ��Ҫ���ԵĹ������: " << endl;
                                        break;
                                   
                                }//while
                        }
                        return 0;
                }



 