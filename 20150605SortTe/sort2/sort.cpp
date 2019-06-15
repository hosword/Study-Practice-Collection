#include<iostream>
#include"LinkQueue.h"
#include"sort.h"
using namespace std;


// 插入排序
void InsertSort(DataType *a, int n, int &count1 , int &count2 )
{
          int i,j;
       
          DataType temp;
          for (i = 1; i <= n - 1; i++){
                  temp = a[i];
                  j=i-1;
                  
                  while (j >= 0 && temp < a[j]){
                          count1++;
                          a[j + 1] = a[j];
                          count2++;
                          j--;
                  }
                  a[j+1]=temp;
                  count2++;
          }
}

//希尔排序
void ShellSort(DataType *a, int n, int *d, int numOfD, int &count1, int &count2)
{
        int i,j,k,m,span;
    
        DataType temp;
        for (m = 0; m < numOfD; m++){
                count1++;
                span = d[m];
                count2++;
                for (k = 0; k < span; k++){
                        count1++;
                        for (i = k; i<n-span;i=i+span){
                                count1++;
                                temp = a[i+span];
                                count2++;
                                j=i;
                                count2++;
                                while (j>-1 && temp <= a[j]){
                                        count1 += 2;
                                        a[j + span] = a[j];
                                        j=j-span;
                                        count2 += 2;
                                }
                                a[j+span]=temp;
                                count2++;
                        }
                }
        }
}

//直接选择排序
void SelectSort(DataType *a, int n, int &count1, int &count2)
{
       
        int i,j,small;
        DataType temp;
        for (i = 0; i < n - 1; i++){
                count1++;
                small=i;
                count2++;
                for (j = i + 1; j < n; j++){
                        count1++;
                        count2++;
                        if (a[j] < a[small]){
                                count1++;
                                small = j;
                                count2++;
                        }
                                
                }
                if (small != i){
                        count1++;
                        temp = a[i];
                        a[i] = a[small];
                        a[small]=temp;
                        count2 += 3;
                }
        }
}

//堆排序
void CreatHeap(DataType *a, int n, int h, int &count1, int &count2)//构造最大堆。
{
        int i,j,flag;
        DataType temp;
        i=h;
        j = 2 * i + 1;
        temp = a[i];
        flag=0;
        count2 += 4;
        while (j < n&&flag != 1){
                count1 += 2;
                if (j < n - 1 && a[j]<a[j + 1]){
                        j++;
                        count1 += 2;
                }
                      
                if (temp>a[j]){
                        flag = 1;
                        count1++;
                }
                     
                else{
                        a[i] = a[j];
                        i=j;
                        j=2*i+1;
                        count2 += 3;
                }



        }
        a[i]=temp;
        count2++;
}
void InitCreatHeap(DataType *a, int n, int &count1, int &count2)//初始化堆
{
         int i;
         for (i = (n - 1) / 2; i >= 0; i--){
                 count1++;
                 count2++;
                 CreatHeap(a,n,i,count1,count2);
         }
}
void HeapSort(DataType *a, int n, int &count1, int &count2)
{
        int i;
       
        DataType temp;
        InitCreatHeap(a,n,count1,count2);
        for (i = n - 1; i > 0; i--){
                count1++;
                temp = a[0];
                a[0] = a[i];
                a[i]=temp;
                count2 += 4;
                CreatHeap(a,i,0,count1,count2);
        }
}

//冒泡排序
void BubbleSort(DataType *a, int n, int &count1, int &count2)
{
      
        int i,j,flag=1;
        DataType temp;
        for (i = 1; i < n&&flag == 1; i++){
                count1 += 2;
                count2++;
                flag=0;
                for (j = 0; j < n - i; j++){
                        count1++;
                        count2++;
                        if (a[j]>a[j + 1]){
                                count1++;
                                flag=1;
                                temp = a[j];
                                a[j]= a[j+1];
                                a[j+1]=temp;
                                count2 += 4;
                        }
                }
        }

}
//改进版的冒泡排序(双向冒泡)
void BubbleSort_update(DataType *a, int n, int &count1, int &count2)
{
        
        int left,right,t,l,r,j,i=0;
        left = 0;
       right=n-1;
   
        //双向冒泡算法，极大的减少了循环排序的次数
       while (left<right)
        {
                //必须要给l和r赋值，否则若数组一开始就有序，则right=r中的r未赋值，即报错
               count1++;
              l=left+1;
               r=right-1;
               count2 += 2;
                //第一次循环将最大的值放到末尾
                for (j = left; j < right; j++)
                {
                        count1++;
                        count2++;
                        if (a[j] > a[j + 1])
                        {
                                t = a[j];
                                a[j] = a[j + 1];
                                a[j + 1] = t;
                                r = j;
                                count1++;
                                count2 += 4;
                        }
                }
                right = r;
                count2++;

                //第二次循环将最小的值放到了开头
                for (j = right; j > left; j--)
                {
                        count1++;
                        count2++;
                        if (a[j] < a[j - 1])
                        {
                                t = a[j];
                                a[j] = a[j - 1];
                                a[j - 1] = t;
                                l = j;
                                count1++;
                                count2 += 4;
                        }
                }
                left = l;
                count2++;
            
      
     }
}

//快速排序
void QuickSort(DataType *a, int low, int high, int &count1, int &count2)
{
        DataType temp;

        int origin_low=low,origin_high=high;
        count2 += 2;
        if (low < high){
                count1++;
                temp = a[low];
                count2++;
                while (low < high){
                        while (low < high&&temp <= a[high]) {
                                high--;
                                count1+=2;
                                count2++;
                        }
                      
                        a[low] = a[high];
                        while (low < high&&a[low] < temp){
                                low++;
                                count1++;
                                count2++;
                        }
                     
                        a[high] = a[low];
                       
                        count2 += 2;
                }
                a[low]=temp;
                count2++;
                QuickSort(a, origin_low, low - 1, count1, count2);
                QuickSort(a, low + 1, origin_high,count1, count2);
        }
}

//归并排序
void Merge(int *a, int *swap, int low, int mid, int high, int &count1, int &count2)
{
        int i = low;
        int j = mid + 1;
        int k = 0;

        //比较两个有序序列中的元素，将较小的元素插入到swap中
        while (i <= mid && j <= high)
        {
                count1++;
                if (a[i] <= a[j]){
                        swap[k++] = a[i++];
                        count1++;
                        count2++;
                }
                     
                else{
                        swap[k++] = a[j++];
                      
                        count2++;
                }
                       
        }

        //将a序列中剩余的元素复制到swap中
        //这两个语句只可能执行其中一个
        while (i <= mid){
                swap[k++] = a[i++];
                count1++;
                count2++;
        }
             
        while (j <= high){
                swap[k++] = a[j++];
                count1++;
                count2++;
        }
                

        //将swap中的元素复制到a中，使a[low...high]有序
        for (i = 0; i < k; i++){
                a[i + low] = swap[i];
                count1++;
                count2+=2;
        }
            
}
void MSort(int *a, int *swap, int low, int high, int &count1, int &count2)
{
     
        if (low<high)
        {
                count1++;
                int mid = (low + high) / 2;
                count2++;
                MSort(a, swap, low, mid, count1, count2);		//左边递归排序
                MSort(a, swap, mid + 1, high, count1, count2);		//右边递归排序
                Merge(a, swap, low, mid, high,count1,count2);	//左右序列归并
        }
}


