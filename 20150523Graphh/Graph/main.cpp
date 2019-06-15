#include"Graph.h"
#include"Queue.h"
#include<iostream>
using namespace std;
void main(){
        AM_Graph G;
  
        int i = 0, j = 0;
        cout << " CreateUDN" << endl;
        cout << "请输入图的边数和点数：" << endl;
   
        CreateUDN(G);
        cout << "输出邻接矩阵如下：" << endl;
       
        cout << "-------------------------------------------------------------------" << endl;
        cout << "     |" << "\t";
        for (i = 1; i <= G.vexnum; i++){
                cout << i << "\t";
        }
        cout << endl;
        cout << "-------------------------------------------------------------------" << endl;
        for (i = 1; i <= G.vexnum; i++){
                cout << i << "    |" << "\t";
                for (j = 1; j <= G.vexnum; j++){
                        cout << G.arcs[i][j]<<"\t";
                }
                cout << endl;
            
        }
      
        cout << "-------------------------------------------------------------------" << endl;
        
        cout << "广度度优先遍历：（请输入遍历的开始位置（点的名称））" << endl;
        int v2;
        cin >> v2;
        BFS(G, v2);
       
        cout << endl;
        cout << "-------------------------------------------------------------------" << endl;
        cout << "深度优先遍历：（请输入遍历的开始位置（点的名称））" << endl;
        int v1;
        cin >> v1;
        Visited(G);
        for (i = 1; i <= G.vexnum; i++){
                cout << (bool)G.visited[i] << "\t";
        }
        cout << endl;
        DFS(G,v1);
        cout << endl;
      
      
}