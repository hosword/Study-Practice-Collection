#include<iostream>
#include"LinkQueue.h"
#include"sort.h"
using namespace std;


// ��������
void InsertSort(DataType *a, int n)
{
          int i,j;
          DataType temp;
          for (i = 1; i <= n - 1; i++){
                  temp = a[i];
                  j=i-1;
                  while (j >= 0 && temp < a[j]){
                          a[j + 1] = a[j];
                          j--;
                  }
                  a[j+1]=temp;
          }
}

//ϣ������
void ShellSort(DataType *a, int n, int *d, int numOfD)
{
        int i,j,k,m,span;
        DataType temp;
        for (m = 0; m < numOfD; m++){
                span = d[m];
                for (k = 0; k < span; k++){
                        for (i = k; i<n-span;i=i+span){
                                temp = a[i+span];
                                j=i;
                                while (j>-1 && temp <= a[j]){
                                        a[j + span] = a[j];
                                        j=j-span;
                                }
                                a[j+span]=temp;
                        }
                }
        }
}

//ֱ��ѡ������
void SelectSort(DataType *a, int n)
{
        int i,j,small;
        DataType temp;
        for (i = 0; i < n - 1; i++){
                small=i;
                for (j = i + 1; j < n; j++){
                        if (a[j]<a[small])
                                small=j;
                }
                if (small != i){
                        temp = a[i];
                        a[i] = a[small];
                        a[small]=temp;
                }
        }
}

//������
void CreatHeap(DataType *a, int n, int h)//�������ѡ�
{
        int i,j,flag;
        DataType temp;
        i=h;
        j = 2 * i + 1;
        temp = a[i];
        flag=0;
        while (j < n&&flag != 1){
                if (j<n - 1 && a[j]<a[j+1])
                        j++;
                if (temp>a[j])
                        flag=1;
                else{
                        a[i] = a[j];
                        i=j;
                        j=2*i+1;
                }



        }
        a[i]=temp;
}
void InitCreatHeap(DataType *a, int n)//��ʼ����
{
         int i;
         for (i = (n - 1) / 2; i >= 0; i--){
                 CreatHeap(a,n,i);
         }
}
void HeapSort(DataType *a, int n)
{
        int i;
        DataType temp;
        InitCreatHeap(a,n);
        for (i = n - 1; i > 0; i--){
                temp = a[0];
                a[0] = a[i];
                a[i]=temp;
                CreatHeap(a,i,0);
        }
}

//ð������
void BubbleSort(DataType *a, int n)
{
        int i,j,flag=1;
        DataType temp;
        for (i = 1; i < n&&flag == 1; i++){
                flag=0;
                for (j = 0; j < n - i; j++){
                        if (a[j]>a[j + 1]){
                                flag=1;
                                temp = a[j];
                                a[j]= a[j+1];
                                a[j+1]=temp;
                        }
                }
        }

}
//�Ľ����ð������(˫��ð��)
void BubbleSort_update(DataType *a, int n)
{
        
        int left,right,t,l,r,j,i=0;
        left = 0;
       right=n-1;

        //˫��ð���㷨������ļ�����ѭ������Ĵ���
       while (left<right)
        {
                //����Ҫ��l��r��ֵ������������һ��ʼ��������right=r�е�rδ��ֵ��������
              l=left+1;
               r=right-1;

                //��һ��ѭ��������ֵ�ŵ�ĩβ
                for (j = left; j < right; j++)
                {
                        if (a[j] > a[j + 1])
                        {
                                t = a[j];
                                a[j] = a[j + 1];
                                a[j + 1] = t;
                                r = j;
                        }
                }
                right = r;

                //�ڶ���ѭ������С��ֵ�ŵ��˿�ͷ
                for (j = right; j > left; j--)
                {
                        if (a[j] < a[j - 1])
                        {
                                t = a[j];
                                a[j] = a[j - 1];
                                a[j - 1] = t;
                                l = j;
                        }
                }
                left = l;
            
      
     }
}

//��������
void QuickSort(DataType *a, int low, int high)
{
        DataType temp;
        int origin_low=low,origin_hign=high;
        if (low < high){
                temp = a[low];
                while (low < high){
                        while (low<high&&temp <= a[high]) 
                        high--;
                        a[low] = a[high];
                        while (low<high&&a[low]<temp)
                        low++;
                        a[high] = a[low];

                }
                a[low]=temp;
                QuickSort(a,origin_low,low-1);
                QuickSort(a,low+1,origin_hign);
        }
}

//�鲢����
void Merge(int *a, int *swap, int low, int mid, int high)
{
        int i = low;
        int j = mid + 1;
        int k = 0;

        //�Ƚ��������������е�Ԫ�أ�����С��Ԫ�ز��뵽swap��
        while (i <= mid && j <= high)
        {
                if (a[i] <= a[j])
                        swap[k++] = a[i++];
                else
                        swap[k++] = a[j++];
        }

        //��a������ʣ���Ԫ�ظ��Ƶ�swap��
        //���������ֻ����ִ������һ��
        while (i <= mid)
                swap[k++] = a[i++];
        while (j <= high)
                swap[k++] = a[j++];

        //��swap�е�Ԫ�ظ��Ƶ�a�У�ʹa[low...high]����
        for (i = 0; i<k; i++)
                a[i + low] = swap[i];
}
void MSort(int *a, int *swap, int low, int high)
{
        if (low<high)
        {
                int mid = (low + high) / 2;
                MSort(a, swap, low, mid);		//��ߵݹ�����
                MSort(a, swap, mid + 1, high);		//�ұߵݹ�����
                Merge(a, swap, low, mid, high);	//�������й鲢
        }
}
//��������
//void RadixSort(DataType *a, int n, int m, int d)
//{
//        int i, j, k, power = 1;
//        LinkQueue<DataType> *tub = new LinkQueue<DataType>[d];
//
//        //����m������
//        for (i = 0; i < m; i++)
//        {
//                if (i == 0) power = 1;
//                else power = power *d;
//                //������Ԫ�ذ��ؼ����kλ�Ĵ�С�ŵ���Ӧ�Ķ�����
//                for (j = 0; j < n; j++)
//                {
//                        k = a[j] / power - (a[j] / (power * d)) * d;
//                        tub[k].Apphigh(a[j]);
//                }
//
//                //˳����ո������е�����Ԫ��
//                for (j = 0, k = 0; j < d; j++)
//                while (tub[j].NotEmpty())
//                        a[k++] = tub[j].Delete();
//        }
//}
//
//
//}