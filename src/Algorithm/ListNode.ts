import { ListNode , Node } from '@/utils/ListNode'

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

  const listNode1 = new ListNode()
  listNode1.insert(1, 'header')
  listNode1.insert(2, 1)
  listNode1.insert(4, 2)

  const listNode2 = new ListNode()
  listNode2.insert(1, 'header')
  listNode2.insert(3, 1)
  listNode2.insert(4, 3)

  // listNode1.display()
  // listNode2.display()

  var mergeTwoLists = function(l1: any, l2: any) {
    let l3 = new Node(0)
    let res = l3
    while(l1 !== null && l2 !== null) {
      if(l1.element < l2.element) {
        l3.next = l1
        l1 = l1.next
      } else {
        l3.next = l2
        l2 = l2.next
      }
      l3 = l3.next
    }
    l3.next = l1 === null ? l2 : l1
    return res.next
  };