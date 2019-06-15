// BTree.cpp : Defines the entry point for the console application.
//
#ifndef  _BTREENODE_H_
#define _BTREENODE_H_
#include <iostream>
#include <stdlib.h>
#include <ctime>
template<class T>
class BiSearchTree;

template<class T>
class BTNode
{
        friend class BiSearchTree<T>;
        friend int myFind(BTNode<T> *&ptr, const T &item);
        template<class T> friend void Visit(BTNode<T> *p);
        friend BTNode<T>* Find(BTNode<T>* &root, T item);
        friend BTNode<T>* copytree(BTNode<T>* oldroot);
private:
        T element;
        BTNode<T> *lc, *rc;
public:
        BTNode(){ lc = rc = NULL; }
        BTNode(const T e)
        {
                element = e;
                lc = rc = NULL;
        }
        BTNode(const T e, BTNode<T> *l, BTNode<T> *r)
        {
                element = e;
                lc = l;
                rc = r;
        }
        BTNode(const BTNode<T> &a) // �������캯��
        {
                element = a->element;
                lc = a->lc;
                rc = a->rc;
        }
        BTNode<T>* &Left(void)
        {
                return lc;
        }
        BTNode<T>* &Right(void)
        {
                return rc;
        }
};
template<class T>
void Visit(BTNode<T> *p)
{
        cout << p->element << " \t";
}
#endif
