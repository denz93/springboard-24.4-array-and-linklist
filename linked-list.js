/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    /** @type {Node | null} */
    this.head = null;
    /** @type {Node | null} */
    this.tail = null;
    /** @type {number} */
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const node = new Node(val)
    if (this.length === 0) {
      this.head = this.tail = node
    } else {
      this.tail.next = node 
      this.tail = node
    }
    this.length++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const node = new Node(val)
    if (this.length === 0) {
      this.head = this.tail = node
    } else {
      node.next = this.head 
      this.head = node
    }
    this.length++
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.tail === null) throw "List is empty" 
    let cur = this.head;
    let prev = null;
    while (cur != this.tail) {
      prev = cur
      cur = cur.next 
    }
    if (prev === null) {
      this.head = this.tail = null
    } else {
      prev.next = null
      this.tail = prev
    }
    this.length--
    return cur.val
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) throw "List is empty"

    const cur = this.head 
    if (this.length === 1) {
      this.head = this.tail = null
    } else {
      this.head = this.head.next 
      cur.next = null
    }
    this.length--
    return cur.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) throw `Index ${idx} is invalid`

    let curIdx = 0
    let cur = this.head
    while (curIdx < idx) { curIdx++; cur = cur.next }
    return cur.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) throw `Index ${idx} is invalid`
    let cur = this.head 
    let curIdx = 0
    while (curIdx < idx) {
      curIdx++;
      cur = cur.next
    }
    cur.val = val 
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const node = new Node(val)

    if (this.length === 0) {
      this.head = this.tail = node 
      this.length++
      return
    }
    if (idx < 0 || idx > this.length) throw `Index ${idx} is invalid`
    this.length++
    

    if (this.length === 2) {
      node.next = this.head 
      this.head = node 
      return
    }

    let cur = this.head 
    let curIdx = 0
    let prev = null 
    while (curIdx < idx) {
      curIdx++;
      prev = cur
      cur = cur.next
    }
    if (prev) {
      prev.next = node
      node.next = cur
    } else {
      node.next = cur 
    }
    if (idx === 0) {
      this.head = node
    } else if (idx === this.length - 1) {
      this.tail = node
    }

    
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) throw `Index ${idx} is invalid`
    this.length--

    //Base case when list has 1 item
    if (this.length === 0) {
      const node = this.head 
      this.head = null 
      this.tail = null
      return node.val
    }

    let cur = this.head 
    let prev = null
    let curIdx = 0
    while (curIdx < idx) {
      curIdx++;
      prev = cur 
      cur = cur.next
    }
    if (idx === 0) {
      this.head = cur.next 
    } else if (idx === this.length - 1) {
      this.tail = prev
      prev.next = null
    } else {
      prev.next = cur.next
      cur.next = null
    }
    return cur
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0

    let total = 0
    let cur = this.head
    while (cur !== null) {
      total += cur.val
      cur = cur.next
    }
    
    return total / this.length
  }
}

module.exports = LinkedList;
