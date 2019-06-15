#include"Graph.h"

#include<iostream>
#include "Queue.h"
using namespace std;

bool CreateUDN(AM_Graph &G)
{
        VerTexType v1, v2;
        int i = 0, j = 0, k = 0;

        cin >> G.arcnum >> G.vexnum;//边，点
        //cout << "请输入点的信息：" << endl;
        for (i = 1; i <=G.vexnum; ++i){
                cin >> G.vexs[i];
        }
        for (i = 1; i <= G.vexnum; i++){
                G.visited[i] = false;
        }
     
        for (i = 1; i <= G.vexnum; i++){
                for (j = 1; j <= G.vexnum; j++){
                        G.arcs[i][j] = 0;
                }
        }
       
        for (k = 0; k < G.arcnum; k++){
               // cout << "请输入边：" << endl;
                cin >> v1 >> v2;
                i = LocateVex(G, v1);
                j = LocateVex(G,v2);
                G.arcs[i][j] = 1;
                G.arcs[j][i] = 1;
        }
        return true;
}

bool DFS(AM_Graph G, int v)
{
        int w;
        int j = LocateVex(G,v);
        G.visited[j] = true;
        cout << "->" << G.vexs[j];
         w = FirstAdj(G, v);
        do{
                if (!G.visited[w]){
                       
                        DFS(G, w);
                }
                w = NextAdj(G, v, w);
        } while (w != -1);
        return true;
}


bool BFS(AM_Graph G, int v)
{
        VerTexType u, w;
        QElemType e;
        LinkQueue Q;
        InitQueue(Q);
      
        int j = LocateVex(G,v);
        G.visited[j]=true;
        cout << "->" << G.vexs[j];
        EnQueue(Q, v);
        while (!QueueEmpty(Q)){
                DeQueue(Q, u);
            
                w = FirstAdj(G, u);
                while (w != -1){
                        if (!G.visited[w]){ 
                                cout << " ->" << G.vexs[w];
                                G.visited[w] = true;
                                EnQueue(Q, G.vexs[w]);  
                        }
                        w = NextAdj(G, u, w);
                }
        }
        return true;
}

int FirstAdj(AM_Graph G, int v)
{
        int w=-1, i,j;
        j = LocateVex(G,v);
        for (i = 1; i <= G.vexnum; i++)
        {
                if (!G.visited[i] && G.arcs[j][i]==1)
                {
                        w = i;
                        return w;
                       }
        }
        return -1;
}
int NextAdj(AM_Graph G, int v, int w)
{
        int i,j;
        j = LocateVex(G, v);
        for (i = w+1 ; i <= G.vexnum; i++){
                if (G.arcs[j][i] == 1 )
                        return i;
        }
         return  -1;   
              
}
int     LocateVex(AM_Graph G, int u)
{
        int i = 1;
        while (G.vexs[i] != u&&i<G.vexnum+1){
                i++;
        }
        return i;
}
bool Visited(AM_Graph G)
{
        int i = 0;
        for (i = 1; i <= G.vexnum; i++){
                G.visited[i] = false;
        }
        return true;
}