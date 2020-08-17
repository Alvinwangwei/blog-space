const findItemInArray = () =>  {
  let arr = [1, 4, 5, 7,  9, 13], item = 13
  let left = 0, right = arr.length - 1, mid = Math.floor((right - left + 1) / 2)
  let ret = null
  while(item !== arr[mid] && mid < arr.length - 1) {
    if(item < arr[mid]) {
      right = mid
    } else {
      left = mid
    }
    mid = left + Math.floor((right - left + 1) / 2)
  }
  if(mid === arr.length - 1 && item !== arr[mid]) {
    ret = arr.length
  } else {
    ret = mid
  }
  return ret
}

const myInstance = (left, right) => {
  if((typeof right !== 'object' && typeof right != 'function') || left == null) return false
  let proto = left.__proto__
  let protoType = right.prototype
  while(true) {
    if(proto === null) {
      return false
      break
    }
    if(proto === protoType) {
      return true
      break
    }
    proto = proto.__proto__
  }
}

const isArray = (arr) => {
  return myInstance(arr, Array)
  // return Object.prototype.toString.call(arr) === '[object Array]'
}
// 深度遍历和广度遍历
const data = [
  {
      name: 'a',
      children: [
          { name: 'b', children: [{ name: 'e' }] },
          { name: 'c', children: [{ name: 'f' }] },
          { name: 'd', children: [{ name: 'g' }] },
      ],
  },
  {
      name: 'a2',
      children: [
          { name: 'b2', children: [{ name: 'e2' }] },
          { name: 'c2', children: [{ name: 'f2' }] },
          { name: 'd2', children: [{ name: 'g2' }] },
      ],
  }
]
function getName (data) {
  let result = []
  let fn = (data) => {
    data.forEach(item => {
      result.push(item.name)
      item.children && fn(item.children)
    })
  }
  fn(data)
}
function tryGetName(data) {
  let result = []
  let queue = data
  while (queue.length > 0) {
    [...queue].forEach(el => {
      result.push(el.name)
      queue.shift()
      el.children && queue.push(...el.children)
    })
  }
  console.log(result)
}

// 最近最久算法
let LinkNode = function (key, value) {
  this.key = key
  this.value = value
  this.pre = null
  this.next = null
}
let DoubleLinkList = function() {
  this.size = 0
  this.head = new LinkNode()
  this.tail = new LinkNode()
  this.head.next = this.tail
  this.tail.pre = this.head
}
DoubleLinkList.prototype.addNode = function(node) {
  if(!(node instanceof LinkNode)) throw new Error('param must be a LinkNode')
  const preNode = this.tail.pre
  const nextNode = this.tail.pre.next
  node.pre = preNode
  node.next = nextNode
  preNode.next = node
  nextNode.pre = node
  this.size++
}
DoubleLinkList.prototype.deleteNode = function(node) {
  if(!(node instanceof LinkNode)) throw new Error('param must be a LinkNode')
  const preNode = node.pre
  const nextNode = node.next
  preNode.next = nextNode
  nextNode.pre = preNode
  this.size--
}
DoubleLinkList.prototype.refreshNode = function(node) {
  this.deleteNode(node)
  this.addNode(node)
}
let LRUCache = function(capacity) {
  this.maxSize = capacity
  this.map = new Map()
  this.doubleLinkList = new DoubleLinkList()
}
LRUCache.prototype.get = function(key) {
  if(this.map.get(key) === undefined) return -1
  const curNode = this.map.get(key)
  this.doubleLinkList.refreshNode(curNode)
  return curNode.value
}
LRUCache.prototype.put = function(key, value) {
  const newNode = new LinkNode(key, value)
  if (this.map.get(key)) {
    this.doubleLinkList.refreshNode(this.map.get(key))
    return this.map.get(key).value = value
  }
  if (this.map.size < this.maxSize) {
    this.doubleLinkList.addNode(newNode)
  } else {
    const firstNode = this.doubleLinkList.head.next
    this.doubleLinkList.deleteNode(firstNode)
    this.doubleLinkList.addNode(newNode)
    this.map.delete(firstNode.key)
  }
  this.map.set(key, newNode)
}
let cache = new LRUCache(2)


export {
  findItemInArray,
  myInstance,
  isArray
}