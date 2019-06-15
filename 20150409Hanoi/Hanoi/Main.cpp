#include <iostream>
using namespace std;
void Hanoi(int n, char A, char B, char C)
{
        if (n==1)
                cout << "Disk:  " << n << "  from   "<<A << "->"<<C<<endl;
        else
        {
                Hanoi(n-1,A,C,B);
                cout << "Disk:  " << n << "  from   " << A << "->" << C<<endl;
                Hanoi(n-1,B,A,C);
        }

}
int main()
{
        char c1 = 'A';
        char c2 = 'B';
        char c3 = 'C';
        int n;
        cout << "Please input the number of disk:"<<endl;
        cin>>n;
        Hanoi(n,c1,c2,c3);
        return 0;
}