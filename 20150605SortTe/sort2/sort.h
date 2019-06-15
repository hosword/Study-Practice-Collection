#ifndef SORT_H
#define SORT_H
#define MAXSIZE 500
typedef int DataType;

//��������
void InsertSort(DataType a[], int n, int &count1 , int &count2 );
//ϣ������
void ShellSort(DataType a[], int n, int d[], int numOfD, int &count1, int &count2);
//ֱ��ѡ������
void SelectSort(DataType a[], int n, int &count1, int &count2);
//������
void CreatHeap(DataType a[], int n, int h, int &count1, int &count2);//�������ѡ�
void InitCreatHeap(DataType a[], int n, int &count1, int &count2);//��ʼ����
void HeapSort(DataType a[], int n, int &count1, int &count2);
//ð������
void BubbleSort_update(DataType *a, int n, int &count1, int &count2);
//˫��ð��
void BubbleSort(DataType a[], int n, int &count1, int &count2);
//��������
void QuickSort(DataType a[], int low, int high, int &count1, int &count2);
//�鲢����
void Merge(int *a, int *swap, int low, int mid, int high, int &count1, int &count2);
void MSort(int *a, int *swap, int low, int high, int &count1, int &count2);
//��������
void RadixSort(DataType *a, int &count1, int &count2);
int CompareTimes(int a, int b);
int MoveTimes(int &a, int &b);



#endif