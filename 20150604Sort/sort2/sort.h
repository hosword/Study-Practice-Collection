#ifndef SORT_H
#define SORT_H
#define MAXSIZE 20
typedef int DataType;


//��������
void InsertSort(DataType a[], int n);
//ϣ������
void ShellSort(DataType a[], int n, int d[], int numOfD);
//ֱ��ѡ������
void SelectSort(DataType a[], int n);
//������
void CreatHeap(DataType a[], int n, int h);//�������ѡ�
void InitCreatHeap(DataType a[], int n);//��ʼ����
void HeapSort(DataType a[], int n);
//ð������
void BubbleSort_update(DataType *a, int n);
//˫��ð��
void BubbleSort(DataType a[], int n);
//��������
void QuickSort(DataType a[], int low, int high);
//�鲢����
void Merge(int *a, int *swap, int low, int mid, int high);
void MSort(int *a, int *swap, int low, int high);
//��������
void RadixSort(DataType a[], int n, int m, int d);



#endif