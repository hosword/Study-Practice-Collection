#include <iostream>
#include"sort.h"
using namespace std;
void print(){
        cout << "-------------------------------------------------------------------------" << endl;
        cout << "************************************实验四：排序算法*********************" << endl;
        cout << "************************************请选择操作：" << endl;
        cout << "************************************1：插入排序" << endl;
        cout << "************************************2：希尔排序" << endl;
        cout << "************************************3：选择排序" << endl;
        cout << "************************************4：堆排序" << endl;
        cout << "************************************5：冒泡" << endl;
        cout << "************************************6：双向冒泡" << endl;
        cout << "************************************7：快速排序" << endl;
        cout << "************************************8：归并排序" << endl;
      cout << "----------------------------------------------------------------------------" << endl;
          cout << "************************************请选择操作：" << endl;
}

int main()
{
        DataType *a = new int[MAXSIZE];
        DataType *swap = new int[MAXSIZE];

        int *d= new int[MAXSIZE];
        int   count1 = 0, count2 = 0;
         int num;
        int choice;
        int i,k=1;
        int numOfD = 0;
        while (1){
                print();
                while (cin >> choice && (choice > 0 && choice < 9)){
                        
                                
                      
                         switch (choice){
                        case 1:
                                cout << "************************************1：插入排序" << endl;
                                cout << "请输入排序的元素的个数：" << endl;
                                cin >> num;
                                cout << "正在依次输入"<<num<<"个元素（必须为整数）：" << endl;
                               
                                for (i = 0; i < num; i++){
                                        a[i] = rand()%500;
                                }
                              
                                cout << "排序前的数据为：" <<endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                InsertSort(a, num,count1,count2);
                                cout << "排序后的数据为：" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                cout << "比较次数:" << endl;
                                cout << count1<<endl;
                                cout << "移动次数:" << endl;
                                cout << count2 << endl;
                                print();
                                break;
                        case 2:
                                cout << "************************************2：希尔排序" << endl;
                             int temp,t;
                                cout << "请输入排序的元素的个数：" << endl;
                                cin >> num;
                                temp=num;
                                t=num;
                                while (temp/ 2){
                                        temp /= 2;
                                        numOfD++;
                                     
                                }

                                for (i = 0; i < numOfD; i++){
                                        d[i] = (t+1)  / 2;
                                       t=d[i];
                                       
                                }
                                d[numOfD-1]=1;
                                cout << "希尔增量数组d[" << numOfD << "]如下:(尽量用/2)" << endl;
                                for (i = 0; i < numOfD; i++){
                                        cout << d[i] << "\t";
                                }
                                cout << endl;
                                cout << "正在依次输入" << num << "个元素（必须为整数）：" << endl;
                                for (i = 0; i < num; i++){
                                        a[i] = rand() % 500;
                                }
                               
                                cout << "排序前的数据为：" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                ShellSort(a, num, d, numOfD, count1, count2);
                                cout << "排序后的数据为：" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                cout << "比较次数:" << endl;
                                cout << count1 << endl;
                                cout << "移动次数:" << endl;
                                cout << count2 << endl;
                                print();
                                break;
                        case 3:
                                cout << "************************************3：选择排序" << endl;
                                cout << "请输入排序的元素的个数：" << endl;
                                cin >> num;
                                cout << "正在依次输入" << num << "个元素（必须为整数）：" << endl;
                                for (i = 0; i < num; i++){
                                        a[i] = rand() % 500;
                                }

                                cout << "排序前的数据为：" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                SelectSort(a, num, count1, count2);
                               
                                cout << "排序后的数据为：" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                cout << "比较次数:" << endl;
                                cout << count1 << endl;
                                cout << "移动次数:" << endl;
                                cout << count2 << endl;
                                print();
                                break;
                        case 4:
                                cout << "************************************4：堆排序" << endl;
                               cout << "请输入排序的元素的个数：" << endl;
                                cin >> num;
                                cout << "正在依次输入" << num << "个元素（必须为整数）：" << endl;
                                for (i = 0; i < num; i++){
                                        a[i] = rand() % 500;
                                }

                                cout << "排序前的数据为：" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                HeapSort(a, num, count1, count2);
                                cout << "排序后的数据为：" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                cout << "比较次数:" << endl;
                                cout << count1 << endl;
                                cout << "移动次数:" << endl;
                                cout << count2 << endl;
                                print();
                                break;
                        case 5:
                                cout << "************************************5：冒泡" << endl;
                                cout << "请输入排序的元素的个数：" << endl;
                                cin >> num;
                                cout << "正在依次输入" << num << "个元素（必须为整数）：" << endl;
                                for (i = 0; i < num; i++){
                                        a[i] = rand() % 500;
                                }

                                cout << "排序前的数据为：" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                BubbleSort(a, num, count1, count2);
                                cout << "排序后的数据为：" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                cout << "比较次数:" << endl;
                                cout << count1 << endl;
                                cout << "移动次数:" << endl;
                                cout << count2 << endl;
                                print();
                                break;
                        case 6:
                                cout << "************************************6：双向冒泡" << endl;

                                cout << "请输入排序的元素的个数：" << endl;
                                cin >> num;
                                cout << "正在依次输入" << num << "个元素（必须为整数）：" << endl;
                                for (i = 0; i < num; i++){
                                        a[i] = rand() % 500;
                                }

                                cout << "排序前的数据为：" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                BubbleSort_update(a, num, count1, count2);
                                cout << "排序后的数据为：" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                cout << "比较次数:" << endl;
                                cout << count1 << endl;
                                cout << "移动次数:" << endl;
                                cout << count2 << endl;
                                print();
                                break;
                        case 7:
                                cout << "************************************7：快速排序" << endl;
                                cout << "请输入排序的元素的个数：" << endl;
                                cin >> num;
                                cout << "正在依次输入" << num << "个元素（必须为整数）：" << endl;
                                for (i = 0; i < num; i++){
                                        a[i] = rand() % 500;
                                }

                                cout << "排序前的数据为：" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                QuickSort(a, 0, num - 1, count1, count2);
                                cout << "排序后的数据为：" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                cout << "比较次数:" << endl;
                                cout << count1 << endl;
                                cout << "移动次数:" << endl;
                                cout << count2 << endl;
                                print();
                                break;
                        case 8:
                                cout << "************************************8：归并排序" << endl;
                                cout << "请输入排序的元素的个数：" << endl;
                                cin >> num;
                              
                                cout << "正在依次输入" << num << "个元素（必须为整数）：" << endl;
                                for (i = 0; i < num; i++){
                                        a[i] = rand() % 500;
                                        swap[i]=-1;
                                }

                                cout << "排序前的数据为：" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                MSort(a, swap, 0, num - 1, count1, count2);
                                cout << "排序后的数据为：" << endl;
                                for (i = 0; i < num; i++){
                                        cout <<swap[i] << "\t";
                                }
                                cout << endl;
                                cout << "比较次数:" << endl;
                                cout << count1 << endl;
                                cout << "移动次数:" << endl;
                                cout << count2 << endl;
                                print();
                        
                                break;
                     
                         
                                break;
                 
                        default:
                                cout << "输入错误！" << endl;
                                break;
                              
                        }
                }
        
       
    }
       
      

 }