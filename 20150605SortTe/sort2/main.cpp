#include <iostream>
#include"sort.h"
using namespace std;
void print(){
        cout << "-------------------------------------------------------------------------" << endl;
        cout << "************************************ʵ���ģ������㷨*********************" << endl;
        cout << "************************************��ѡ�������" << endl;
        cout << "************************************1����������" << endl;
        cout << "************************************2��ϣ������" << endl;
        cout << "************************************3��ѡ������" << endl;
        cout << "************************************4��������" << endl;
        cout << "************************************5��ð��" << endl;
        cout << "************************************6��˫��ð��" << endl;
        cout << "************************************7����������" << endl;
        cout << "************************************8���鲢����" << endl;
      cout << "----------------------------------------------------------------------------" << endl;
          cout << "************************************��ѡ�������" << endl;
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
                                cout << "************************************1����������" << endl;
                                cout << "�����������Ԫ�صĸ�����" << endl;
                                cin >> num;
                                cout << "������������"<<num<<"��Ԫ�أ�����Ϊ��������" << endl;
                               
                                for (i = 0; i < num; i++){
                                        a[i] = rand()%500;
                                }
                              
                                cout << "����ǰ������Ϊ��" <<endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                InsertSort(a, num,count1,count2);
                                cout << "����������Ϊ��" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                cout << "�Ƚϴ���:" << endl;
                                cout << count1<<endl;
                                cout << "�ƶ�����:" << endl;
                                cout << count2 << endl;
                                print();
                                break;
                        case 2:
                                cout << "************************************2��ϣ������" << endl;
                             int temp,t;
                                cout << "�����������Ԫ�صĸ�����" << endl;
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
                                cout << "ϣ����������d[" << numOfD << "]����:(������/2)" << endl;
                                for (i = 0; i < numOfD; i++){
                                        cout << d[i] << "\t";
                                }
                                cout << endl;
                                cout << "������������" << num << "��Ԫ�أ�����Ϊ��������" << endl;
                                for (i = 0; i < num; i++){
                                        a[i] = rand() % 500;
                                }
                               
                                cout << "����ǰ������Ϊ��" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                ShellSort(a, num, d, numOfD, count1, count2);
                                cout << "����������Ϊ��" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                cout << "�Ƚϴ���:" << endl;
                                cout << count1 << endl;
                                cout << "�ƶ�����:" << endl;
                                cout << count2 << endl;
                                print();
                                break;
                        case 3:
                                cout << "************************************3��ѡ������" << endl;
                                cout << "�����������Ԫ�صĸ�����" << endl;
                                cin >> num;
                                cout << "������������" << num << "��Ԫ�أ�����Ϊ��������" << endl;
                                for (i = 0; i < num; i++){
                                        a[i] = rand() % 500;
                                }

                                cout << "����ǰ������Ϊ��" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                SelectSort(a, num, count1, count2);
                               
                                cout << "����������Ϊ��" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                cout << "�Ƚϴ���:" << endl;
                                cout << count1 << endl;
                                cout << "�ƶ�����:" << endl;
                                cout << count2 << endl;
                                print();
                                break;
                        case 4:
                                cout << "************************************4��������" << endl;
                               cout << "�����������Ԫ�صĸ�����" << endl;
                                cin >> num;
                                cout << "������������" << num << "��Ԫ�أ�����Ϊ��������" << endl;
                                for (i = 0; i < num; i++){
                                        a[i] = rand() % 500;
                                }

                                cout << "����ǰ������Ϊ��" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                HeapSort(a, num, count1, count2);
                                cout << "����������Ϊ��" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                cout << "�Ƚϴ���:" << endl;
                                cout << count1 << endl;
                                cout << "�ƶ�����:" << endl;
                                cout << count2 << endl;
                                print();
                                break;
                        case 5:
                                cout << "************************************5��ð��" << endl;
                                cout << "�����������Ԫ�صĸ�����" << endl;
                                cin >> num;
                                cout << "������������" << num << "��Ԫ�أ�����Ϊ��������" << endl;
                                for (i = 0; i < num; i++){
                                        a[i] = rand() % 500;
                                }

                                cout << "����ǰ������Ϊ��" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                BubbleSort(a, num, count1, count2);
                                cout << "����������Ϊ��" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                cout << "�Ƚϴ���:" << endl;
                                cout << count1 << endl;
                                cout << "�ƶ�����:" << endl;
                                cout << count2 << endl;
                                print();
                                break;
                        case 6:
                                cout << "************************************6��˫��ð��" << endl;

                                cout << "�����������Ԫ�صĸ�����" << endl;
                                cin >> num;
                                cout << "������������" << num << "��Ԫ�أ�����Ϊ��������" << endl;
                                for (i = 0; i < num; i++){
                                        a[i] = rand() % 500;
                                }

                                cout << "����ǰ������Ϊ��" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                BubbleSort_update(a, num, count1, count2);
                                cout << "����������Ϊ��" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                cout << "�Ƚϴ���:" << endl;
                                cout << count1 << endl;
                                cout << "�ƶ�����:" << endl;
                                cout << count2 << endl;
                                print();
                                break;
                        case 7:
                                cout << "************************************7����������" << endl;
                                cout << "�����������Ԫ�صĸ�����" << endl;
                                cin >> num;
                                cout << "������������" << num << "��Ԫ�أ�����Ϊ��������" << endl;
                                for (i = 0; i < num; i++){
                                        a[i] = rand() % 500;
                                }

                                cout << "����ǰ������Ϊ��" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                QuickSort(a, 0, num - 1, count1, count2);
                                cout << "����������Ϊ��" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                cout << "�Ƚϴ���:" << endl;
                                cout << count1 << endl;
                                cout << "�ƶ�����:" << endl;
                                cout << count2 << endl;
                                print();
                                break;
                        case 8:
                                cout << "************************************8���鲢����" << endl;
                                cout << "�����������Ԫ�صĸ�����" << endl;
                                cin >> num;
                              
                                cout << "������������" << num << "��Ԫ�أ�����Ϊ��������" << endl;
                                for (i = 0; i < num; i++){
                                        a[i] = rand() % 500;
                                        swap[i]=-1;
                                }

                                cout << "����ǰ������Ϊ��" << endl;
                                for (i = 0; i < num; i++){
                                        cout << a[i] << "\t";
                                }
                                cout << endl;
                                count1 = 0, count2 = 0;
                                MSort(a, swap, 0, num - 1, count1, count2);
                                cout << "����������Ϊ��" << endl;
                                for (i = 0; i < num; i++){
                                        cout <<swap[i] << "\t";
                                }
                                cout << endl;
                                cout << "�Ƚϴ���:" << endl;
                                cout << count1 << endl;
                                cout << "�ƶ�����:" << endl;
                                cout << count2 << endl;
                                print();
                        
                                break;
                     
                         
                                break;
                 
                        default:
                                cout << "�������" << endl;
                                break;
                              
                        }
                }
        
       
    }
       
      

 }