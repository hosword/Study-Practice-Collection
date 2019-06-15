#ifndef SORT_H
#define SORT_H
#define MAXSIZE 20
typedef int DataType;


//插入排序
void InsertSort(DataType a[], int n);
//希尔排序
void ShellSort(DataType a[], int n, int d[], int numOfD);
//直接选择排序
void SelectSort(DataType a[], int n);
//堆排序
void CreatHeap(DataType a[], int n, int h);//构造最大堆。
void InitCreatHeap(DataType a[], int n);//初始化堆
void HeapSort(DataType a[], int n);
//冒泡排序
void BubbleSort_update(DataType *a, int n);
//双向冒泡
void BubbleSort(DataType a[], int n);
//快速排序
void QuickSort(DataType a[], int low, int high);
//归并排序
void Merge(int *a, int *swap, int low, int mid, int high);
void MSort(int *a, int *swap, int low, int high);
//基数排序
void RadixSort(DataType a[], int n, int m, int d);



#endif