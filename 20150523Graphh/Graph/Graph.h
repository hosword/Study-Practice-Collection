#ifndef GRAPH_H
#define GRAPH_H
#define MaxInt 326767
#define MVNum 100
typedef int VerTexType;
typedef int ArcType;

typedef struct {
        VerTexType vexs[MVNum];                         //顶点表
        ArcType arcs[MVNum][MVNum];              // 邻接矩阵
        bool visited[MVNum] ;
      

        int vexnum, arcnum;                                     //图的当前点数和边数
}AM_Graph;
bool CreateUDN(AM_Graph &G);
bool BFS(AM_Graph G, int v);

bool DFS(AM_Graph G, int v);

int     FirstAdj(AM_Graph G, int v);
int      NextAdj(AM_Graph G, int v, int w);
int     LocateVex(AM_Graph G, int u);
bool Visited(AM_Graph G);
#endif