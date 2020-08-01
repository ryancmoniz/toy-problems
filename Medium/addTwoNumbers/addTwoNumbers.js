var addTwoNumbers = function (l1, l2) {
  let queue1 = [],
  let queue2 = [];

  while (l1) {
    queue1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    queue2.push(l2.val);
    l2 = l2.next;
  }

  let carry = 0;
  let list = new ListNode(0);
  let cur = list;
  while (queue1.length || queue2.length || carry != 0) {
    let value = carry;
    if (queue1.length) value += queue1.shift();
    if (queue2.length) value += queue2.shift();
    let digit = value % 10;
    carry = Math.floor((value /= 10));
    let head = new ListNode(digit);
    cur.next = head;
    cur = head;
  }
  return list.next;
};
