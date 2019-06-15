//*******************************************
//   数据处理综合实验
//   
//*-****************************************
#include <fstream>
#include <iostream>
#include <ctime>
#include <time.h>

using namespace std;
#define N 32           //临时文件数

#define ID(x)  (x>>27)                 //x对应的文件编号
#define NumUE(x) (x&0x07ffffff)        //x在文件中保存的值
#define MAKE_IP(x,y)  ((x<<27)|y)      //由文件编号和值得到IP地址.

#define MEM_SIZE  128*1024*1024       //需分配内存的大小

char* data_path = "E:/test/ip.dat";        //ip数据

//产生n个随机IP地址
void Make_Data(const int& n)
{
        ofstream out(data_path, ios::out | ios::binary);
        srand((unsigned)(time(NULL)));
        if (out)
        {
                for (int i = 0; i<n; ++i)
                {
                        unsigned temp = unsigned(rand());
                        temp = (temp << 24) | temp;                              //产生unsigned类型的随机数

                        out.write((char *)& temp, sizeof (unsigned));
                }
        }
}

//找到访问次数最大的ip地址
int main()
{
        printf("******************实验六：数据处理综合实验************************\n\n");
        printf("***********************START********************************\n");
        clock_t start = clock();
    

        Make_Data(100000000);       //产生测试用的IP数据
        //由于实验室电脑内存太小测试的ip数据量没有达到40亿
        fstream Arry[N];
   
        for (int i = 0; i<N; ++i)                 //创建N个临时文件
        {
                char tmp_path[128];     //临时文件路径
                sprintf_s(tmp_path, "E:/test/tmp%d.dat", i);             //vs2013中 sprintf要转化成 sprintf_s才能正确运行
                Arry[i].open(tmp_path, ios::trunc | ios::in | ios::out | ios::binary);  //打开第i个文件

                if (!Arry[i])
                {
                        cout << "打开文件" << i << "错误！" << endl;
                }
        }

        ifstream infile(data_path, ios::in | ios::binary);   //读入测试用的IP数据
        unsigned data;
        unsigned Num;
        int key;

        while (infile.read((char*)(&data), sizeof(data)))
        {
                Num = NumUE(data);
                 key = ID(data);
                Arry[ID(data)].write((char*)(&Num), sizeof(Num));           //保存到临时文件件中
        }

        for (unsigned i = 0; i<N; ++i)
        {
                Arry[i].seekg(0);
        }
        unsigned Max_IP = 0;    //出现次数最多的ip地址
        unsigned Max_Times = 0;     //最大只出现的次数
        unsigned j;
        unsigned i;

        //分配512M内存,用于统计每个数出现的次数
        unsigned *count = new unsigned[MEM_SIZE];

        for ( i = 0; i<N; ++i)
        {
                memset(count, 0, sizeof(unsigned)*MEM_SIZE);

                //统计每个临时文件件中不同数字出现的次数
                unsigned data;
                while (Arry[i].read((char*)(&data), sizeof(unsigned)))
                {
                        ++count[data];
                }

                //找出出现次数最多的IP地址
                for (j = 0; j<MEM_SIZE; ++j)
                {
                        if (Max_Times<count[j])
                        {
                                Max_Times = count[j];
                                Max_IP = MAKE_IP(i, j);        // 恢复成原ip地址.
                        }
                }
        }
        delete[] count;
        unsigned char *result = (unsigned char *)(&Max_IP);
        printf("出现次数最多的IP为:%d.%d.%d.%d,共出现%d次\n",
                result[0], result[1], result[2], result[3], Max_Times);
        printf("*******************************************************\n");
        clock_t end = clock();
        printf("程序运行总时间为 : %f", double(end - start) / CLOCKS_PER_SEC);
        printf("秒\n");
        printf("***********************END********************************\n");
}

