#include "main.h"

#include <iostream>

using namespace std;

int add(int x, int y)
{
  return x + y;
}

char * testFunciton(char text[])
{
  cout << "start cpp" << endl;
  cout << text << endl;
  cout << "end cpp" << endl;
  return text;
}


int main () {
  char textValue[] = "Hello world";
  cout << testFunciton(textValue) << endl;
  return 0;
}

