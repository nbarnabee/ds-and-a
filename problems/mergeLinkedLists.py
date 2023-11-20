# Ok, this isn't JavaScript, but it was the first time that I'd
# seen an example of a linked list and actually understood it.

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def mergeTwoLists(self, list1, list2):
    dummy = ListNode()
    tail = dummy
    while list1 and list2: 
        if list1.val < list2.val:
            tail.next = list1
            list1 = list1.next
        else:
            tail.next = list2
            list2 = list2.next
    # in other words, while there are still
    # values in both lists, set the pointer 
    # to the larger value, then cut the top
    # off of that list
    if list1:
        tail.next = list1
    elif list2:
        tail.next = list2
    return dummy.next

# Why dummy.next?  Recall that all the way at the start,
# we set the "seed" of this new list equal to dummy.  
# But we don't want to return the dummy node, so instead we 
# start with whatever node it's pointing to.