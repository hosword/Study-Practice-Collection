#ifndef  DATATYPE_H
#define  DATATYPE_H
typedef int KeyType;
struct DataType
{
	KeyType key;

	DataType(void){}
	DataType(KeyType k): key(k){}
	int operator ==(const DataType &a)
		{return key == a.key;}
	int operator !=(const DataType &a)
		{return key != a.key;}
};
#endif