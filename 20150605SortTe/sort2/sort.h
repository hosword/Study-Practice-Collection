#ifndef SORT_H
#define SORT_H
#define MAXSIZE 500
typedef int DataType;

//²åÈëÅÅĞò
void InsertSort(DataType a[], int n, int &count1 , int &count2 );
//Ï£¶ûÅÅĞò
void ShellSort(DataType a[], int n, int d[], int numOfD, int &count1, int &count2);
//Ö±½ÓÑ¡ÔñÅÅĞò
void SelectSort(DataType a[], int n, int &count1, int &count2);
//¶ÑÅÅĞò
void CreatHeap(DataType a[], int n, int h, int &count1, int &count2);//¹¹Ôì×î´ó¶Ñ¡£
void InitCreatHeap(DataType a[], int n, int &count1, int &count2);//³õÊ¼»¯¶Ñ
void HeapSort(DataType a[], int n, int &count1, int &count2);
//Ã°ÅİÅÅĞò
void BubbleSort_update(DataType *a, int n, int &count1, int &count2);
//Ë«ÏòÃ°Åİ
void BubbleSort(DataType a[], int n, int &count1, int &count2);
//¿ìËÙÅÅĞò
void QuickSort(DataType a[], int low, int high, int &count1, int &count2);
//¹é²¢ÅÅĞò
void Merge(int *a, int *swap, int low, int mid, int high, int &count1, int &count2);
void MSort(int *a, int *swap, int low, int high, int &count1, int &count2);
//»ùÊıÅÅĞò
void RadixSort(DataType *a, int &count1, int &count2);
int CompareTimes(int a, int b);
int MoveTimes(int &a, int &b);



#endif