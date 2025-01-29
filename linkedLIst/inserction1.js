class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = {
      data: 12,
      next: {
        data: 13,
        next: null,
        // {data:55,next:null}
      },
    };
  }
  insertAtBeginning(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this.head;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    return this.head;
  }
  size() {
    let count=0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error('Invalid NO');
      return;
    }
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;

    return this.head
  }

  removeTop(){
    if(!this.head){
return;
    }
    this.head=this.head.next;
    return this.head;
  }

  removeEnd(){
    if(!this.head){
        return;
    }
    let current=this.head;
    while(current.next.next){
        current=current.next;

    }
    current.next=null;
  }

  removeAt(index){

    if(index<0 || index>this.size())
    {
        console.log("error");

    }

    if(index===0){
        this.head=this.head.next;
        return;
    }
    let current=this.head;
    for(let i=0;i<index-1;i++){
       current=current.next;
    }
    if(current.next){
        current.next=current.next.next;
    }
  }

  getData(){
    if(!this.head){
return;
    }

    let current=this.head;
    while(current.next){
        console.log(current.data)
        current=current.next;
    }
  }
}

const insertClass = new linkedList();
// console.log(insertClass.insertAtBeginning(34));
// console.log(insertClass.insertAtEnd(90));
console.log(insertClass.addAt(1,90));
// console.log(insertClass.insertAtBeginning(null,24));
