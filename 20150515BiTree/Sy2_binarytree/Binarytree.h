#define MAXSIZE 100
typedef int TElemType;
typedef struct Node{
        TElemType data;
        struct Node *lchild, *rchild;
}BiTNode,*BiTree;
char c_pre[50], c_mid[50];

bool PDCBiTree(BiTree &T,int i,int j,int len);
//i为元素在前序序列中的小标，j为元素在中序序列中的下标，len为中序序列的长度
bool prTBiTree(BiTree T);
bool PoTBiTree(BiTree T);
int Position(char c);

