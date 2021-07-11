class Node {
  element: any
  next: any
  constructor(element: any) {
    this.element = element;
    this.next = null;
  }
}

class ListNode {
  header: any
  constructor() {
    this.header = new Node('header')
  }
  find(element: any) {
    let currentNode = this.header
    while(currentNode.element !== element) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  insert(newElement: any, hasElement: any) {
    const newNode = new Node(newElement)
    const currentNode = this.find(hasElement)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }
  display() {
    let currentNode = this.header
    while(currentNode !== null) {
      console.log(currentNode.next)
      currentNode = currentNode.next
    }
  }
}

export {
  Node,
  ListNode,
}