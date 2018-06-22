#ifdef __linux__ 
  extern "C" int add(int x, int y);
#elif _WIN32
  extern "C" __declspec(dllexport) int add(int x, int y);
#elif __APPLE__
  extern "C" int add(int x, int y);
  extern "C" char * testFunciton(char text[]);
#endif
