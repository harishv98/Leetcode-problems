/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, 
 * and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * @link https://leetcode.com/problems/add-two-numbers/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let prev = new ListNode();
  let head = prev;
  
  while(l1 || l2) {
      let res = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      carry = Math.floor(res/10);
      prev.val = res%10;
      l1 = l1 && l1.next;
      l2 = l2 && l2.next;
      if(l1 || l2) {
          prev.next = new ListNode();
          prev = prev.next;
      }
  }
  
  if(carry) {
      prev.next = new ListNode(carry);
  }
  
  return head;
};