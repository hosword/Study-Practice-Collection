//*******************************************
//   ���ݴ����ۺ�ʵ��
//   
//*-****************************************
#include <fstream>
#include <iostream>
#include <ctime>
#include <time.h>

using namespace std;
#define N 32           //��ʱ�ļ���

#define ID(x)  (x>>27)                 //x��Ӧ���ļ����
#define NumUE(x) (x&0x07ffffff)        //x���ļ��б����ֵ
#define MAKE_IP(x,y)  ((x<<27)|y)      //���ļ���ź�ֵ�õ�IP��ַ.

#define MEM_SIZE  128*1024*1024       //������ڴ�Ĵ�С

char* data_path = "E:/test/ip.dat";        //ip����

//����n�����IP��ַ
void Make_Data(const int& n)
{
        ofstream out(data_path, ios::out | ios::binary);
        srand((unsigned)(time(NULL)));
        if (out)
        {
                for (int i = 0; i<n; ++i)
                {
                        unsigned temp = unsigned(rand());
                        temp = (temp << 24) | temp;                              //����unsigned���͵������

                        out.write((char *)& temp, sizeof (unsigned));
                }
        }
}

//�ҵ����ʴ�������ip��ַ
int main()
{
        printf("******************ʵ���������ݴ����ۺ�ʵ��************************\n\n");
        printf("***********************START********************************\n");
        clock_t start = clock();
    

        Make_Data(100000000);       //���������õ�IP����
        //����ʵ���ҵ����ڴ�̫С���Ե�ip������û�дﵽ40��
        fstream Arry[N];
   
        for (int i = 0; i<N; ++i)                 //����N����ʱ�ļ�
        {
                char tmp_path[128];     //��ʱ�ļ�·��
                sprintf_s(tmp_path, "E:/test/tmp%d.dat", i);             //vs2013�� sprintfҪת���� sprintf_s������ȷ����
                Arry[i].open(tmp_path, ios::trunc | ios::in | ios::out | ios::binary);  //�򿪵�i���ļ�

                if (!Arry[i])
                {
                        cout << "���ļ�" << i << "����" << endl;
                }
        }

        ifstream infile(data_path, ios::in | ios::binary);   //��������õ�IP����
        unsigned data;
        unsigned Num;
        int key;

        while (infile.read((char*)(&data), sizeof(data)))
        {
                Num = NumUE(data);
                 key = ID(data);
                Arry[ID(data)].write((char*)(&Num), sizeof(Num));           //���浽��ʱ�ļ�����
        }

        for (unsigned i = 0; i<N; ++i)
        {
                Arry[i].seekg(0);
        }
        unsigned Max_IP = 0;    //���ִ�������ip��ַ
        unsigned Max_Times = 0;     //���ֻ���ֵĴ���
        unsigned j;
        unsigned i;

        //����512M�ڴ�,����ͳ��ÿ�������ֵĴ���
        unsigned *count = new unsigned[MEM_SIZE];

        for ( i = 0; i<N; ++i)
        {
                memset(count, 0, sizeof(unsigned)*MEM_SIZE);

                //ͳ��ÿ����ʱ�ļ����в�ͬ���ֳ��ֵĴ���
                unsigned data;
                while (Arry[i].read((char*)(&data), sizeof(unsigned)))
                {
                        ++count[data];
                }

                //�ҳ����ִ�������IP��ַ
                for (j = 0; j<MEM_SIZE; ++j)
                {
                        if (Max_Times<count[j])
                        {
                                Max_Times = count[j];
                                Max_IP = MAKE_IP(i, j);        // �ָ���ԭip��ַ.
                        }
                }
        }
        delete[] count;
        unsigned char *result = (unsigned char *)(&Max_IP);
        printf("���ִ�������IPΪ:%d.%d.%d.%d,������%d��\n",
                result[0], result[1], result[2], result[3], Max_Times);
        printf("*******************************************************\n");
        clock_t end = clock();
        printf("����������ʱ��Ϊ : %f", double(end - start) / CLOCKS_PER_SEC);
        printf("��\n");
        printf("***********************END********************************\n");
}

