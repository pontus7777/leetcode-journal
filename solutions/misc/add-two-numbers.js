// Problem: Add Two Numbers
// Link: https://leetcode.com/problems/add-two-numbers/
// Pattern: Linked-List
// Time:
// Space:

// Explanation:
// - Describe your approach here.

// singly linked list
// linked list: val, next -> val, next ->

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
// l2.next.next.next = new ListNode(1); example when one linkedlist is longer

function solution(l1, l2) {
  let List = new ListNode(0);
  let head = List;

  let sum = 0;
  let carry = 0;
  while (l1 !== null || l2 !== null || sum !== 0) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;
    sum = carry;
    carry = 0;
  }
  return List.next;
}

// Leetcode way
// function solution(l1, l2) {
//   let dummyHead = new ListNode(0);
//   let curr = dummyHead;
//   let carry = 0;
//   while (l1 !== null || l2 !== null || carry !== 0) {
//     let x = l1 !== null ? l1.val : 0;
//     let y = l2 !== null ? l2.val : 0;
//     let sum = carry + x + y;
//     carry = Math.floor(sum / 10);
//     curr.next = new ListNode(sum % 10);
//     curr = curr.next;
//     if (l1 !== null) l1 = l1.next;
//     if (l2 !== null) l2 = l2.next;
//   }
//   return dummyHead.next;
// }

function printList(node) {
  let arr = [];
  while (node !== null) {
    arr.push(node.val);
    node = node.next;
  }
  console.log(arr);
}

printList(solution(l1, l2));

module.exports = solution;
