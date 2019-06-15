////////////////////////////主函数///////////////////////////////////
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


                cout << "////////////////////////////函数功能测试///////////////////////////////////////" << endl;
                cout << "//                                                                                                        //" << endl;
                cout << "//1.构造线性表         2.销毁线性表           3.重置线性表        4.判断是否为空表 //" << endl;
                cout << "//5.线性表元素个数     6.第i个元素值       7.查询数据元素      //" << endl;
                cout << "// 8.插入数据元素       9.删除数据元素      10.翻转链表         11.合并单链表  //" << endl;

                cout << "//////////////////////////////////////////////////////////////////////////////////" << endl;
                cout << "" << endl;
                cout << "请选择操作: " << endl;
                cin >> n;
                while (n >= 1 && n <= 11)
                {
                        switch (n)
                        {
                        case 1://InitList

                                cout << "请输入链表的长度(len): " << endl;
                                cin >> len;

                                if (len > 0){
                                        cout << "请输入数据元素(m): " << endl;

                                        for (n = 1; n <= len; n++){
                                                cin >> m;
                                                ListInsert(L, n, m);
                                        }


                                        cout << "线性表初始化成功." << endl;
                                        cout << "线性表数据如下：" << endl;
                                        for (i = 1; i <= ListLength(L); i++){
                                                cout << GetElem(L, i, e) << "\t";
                                        }
                                        cout << endl;
                                }
                                else
                                        cout << "链表长度输入有误！" << endl;
                                break;
                        case 2://DestroyList
                                DestroyList(L);
                                cout << "线性表已销毁." << endl;
                                break;
                        case 3://ClearList
                                ClearList(L);
                                cout << "线性表重置成功." << endl;
                                break;
                        case 4://ListEmpty
                                if (ListEmpty(L))
                                        cout << "线性表为空." << endl;
                                else
                                        cout << "线性表不为空." << endl;
                                break;
                        case 5://ListLength
                                k = ListLength(L);
                                if (k){
                                        cout << "线性表长度为 " << k << endl;
                                        cout << "线性表数据如下：" << endl;
                                        for (i = 1; i <= ListLength(L); i++){
                                                cout << GetElem(L, i, e) << "\t";
                                        }
                                        cout << endl;
                                }

                                else
                                        cout << "错误!" << endl;
                                break;
                        case 6://GetElem
                                cout << "请输入要查找元素的位置 : " << endl;
                                cin >> i;
                                GetElem(L, i, e);
                                cout << "该位置的元素是" << e << endl;
                                cout << "线性表长度为 " << ListLength(L) << endl;
                                cout << "线性表数据如下：" << endl;
                                for (i = 1; i <= ListLength(L); i++){
                                        cout << GetElem(L, i, e) << "\t";
                                }
                                cout << endl;
                                break;
                        case 7://LocateElem
                                cout << "请输入要检查的元素 : " << endl;
                                cin >> k;
                                b = LocateElem(L, k);
                                if (b != 0){
                                        cout << "该元素位序是 " << b << endl;
                                        cout << "线性表长度为 " << ListLength(L) << endl;
                                        cout << "线性表数据如下：" << endl;
                                        for (i = 1; i <= ListLength(L); i++){
                                                cout << GetElem(L, i, e) << "\t";
                                        }
                                        cout << endl;
                                }

                                else
                                        cout << "该元素不存在" << endl;
                                break;

                        case 8://ListInsert
                                if ((L->next->data) > (L->next->next->data)){
                                        cout << "单链表为降序需要翻转为升序才能插入数据。" << endl;
                                        ReverseList(L);
                                }
                                cout << "请输入你要插入的元素和位置（元素，位置） :(elem,location)" << endl;
                                cout << "线性表长度为 " << ListLength(L) << endl;
                                cin >> e >> i;

                                if (ListInsert(L, i, e)){
                                        cout << "线性表长度为 " << ListLength(L) << endl;
                                        cout << "线性表数据如下：" << endl;
                                        for (i = 1; i <= ListLength(L); i++){
                                                cout << GetElem(L, i, e) << "\t";
                                        }
                                        cout << endl;
                                        cout << "插入成功！" << endl;
                                }


                                else
                                        cout << "插入失败，请检查输入是否合法!" << endl;
                                break;
                        case 9://ListDelete
                                cout << "请输入你要删除的元素位序:" << endl;
                                cin >> i;
                                ListDelete(L, i, e);
                                cout << "你要删除的元素是" << e << endl;

                                break;
                        case 10://ReverseList
                                cout << "翻转前的单链表为：" << endl;
                                cout << "线性表数据如下：" << endl;
                                for (i = 1; i <= ListLength(L); i++){
                                        cout << GetElem(L, i, e) << "\t";
                                }
                                cout << endl;
                                cout << "翻转后的单链表为：" << endl;
                                ReverseList(L);
                                cout << "线性表数据如下：" << endl;
                                for (i = 1; i <= ListLength(L); i++){
                                        cout << GetElem(L, i, e) << "\t";
                                }
                                cout << endl;
                                break;
                        case 11:
                                cout << "合并单链表" << endl;
                                cout << "请输入单链表LA,LB" << endl;
                                LinkList LA, LB, LC;
                                InitList(LA);
                                InitList(LB);
                              
                                int len1, len2;
                                cout << "请输入链表LA的长度(len): " << endl;
                                cin >> len1;

                                if (len1 > 0){
                                        cout << "请输入数据元素(m): " << endl;

                                        for (n = 1; n <= len1; n++){
                                                cin >> m;
                                                ListInsert(LA, n, m);
                                        }
                                }
                                        cout << "请输入LB链表的长度(len): " << endl;
                                        cin >> len2;

                                        if (len2 > 0){
                                                cout << "请输入数据元素(m): " << endl;

                                                for (n = 1; n <= len2; n++){
                                                        cin >> m;
                                                        ListInsert(LB, n, m);
                                                }
                                        }
                                                cout << "线性表初始化成功." << endl;
                                                cout << "线性表数据如下：" << endl;
                                                for (i = 1; i <= ListLength(LA); i++){
                                                        cout << GetElem(LA, i, e) << "\t";
                                                }
                                                cout << endl;
                                                cout << "线性表初始化成功." << endl;
                                                cout << "线性表数据如下：" << endl;
                                                for (i = 1; i <= ListLength(LB); i++){
                                                        cout << GetElem(LB, i, e) << "\t";
                                                }
                                                cout << endl;
                                                MegeList(LA, LB, LC);
                                                cout << "合并后的单链表为：" << endl;
                                                cout << "线性表数据如下：" << endl;
                                                for (i = 1; i <=len1+len2; i++){
                                                        cout << GetElem(LC, i, e) << "\t";
                                                }
                                                cout << endl;
                                                break;



                                        }//switch
                                        cout << "请选择要测试的功能序号: " << endl;
                                        break;
                                   
                                }//while
                        }
                        return 0;
                }



 