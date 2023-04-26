#!/usr/bin/python3

#Write a method that determines if all the boxes can be opened.
# Prototype: def canUnlockAll(boxes)
# boxes is a list of lists
# A key with the same number as a box opens that box
# You can assume all keys will be positive integers
# There can be keys that do not have boxes
# The first box boxes[0] is unlocked
# Return True if all boxes can be opened, else return False

def canUnlockAll(boxes):
    checkbox = 0
    for i in range(len(boxes)):
        # print(boxes[i]) output: [3][4][][1][2]
        i = checkbox
        for j in range(len(boxes[i])):
            if j != '':
                print(boxes[i][j])
                checkbox = j



    # for i in boxes:
    #     for j in checkbox:
    #         if j :
    #             print(j)
    #             key = j
    #             del j
                # size = len(boxes)
                # print('yes')
                # print(size)





lst = [[3], [4], [], [1], [2]]
canUnlockAll(lst)