#define MAXSIZE 100
typedef int TElemType;
typedef struct Node{
        TElemType data;
        struct Node *lchild, *rchild;
}BiTNode,*BiTree;
char c_pre[50], c_mid[50];

bool PDCBiTree(BiTree &T,int i,int j,int len);
//iΪԪ����ǰ�������е�С�꣬jΪԪ�������������е��±꣬lenΪ�������еĳ���
bool prTBiTree(BiTree T);
bool PoTBiTree(BiTree T);
int Position(char c);

