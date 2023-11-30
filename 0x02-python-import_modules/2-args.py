#!/usr/bin/python3
from sys import argv

if __name__ == "__main__":
    argc = len(argv)

    if argc == 1:
        print("0 arguments.")
    else:
        print("{} argument{}:".format(argc - 1, "s" if argc > 2 else ""))
        for i in range(1, argc):
            print("{}: {}".format(i, argv[i]))

