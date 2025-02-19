class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}

class LinkedList{

    constructor(){
        this.head=null;
    }

    insertBegining(value){
    for(let i=0;i<value.length;i++){
        const node=new Node(value[i]);
        node.next=this.head;
        this.head=node;

    }


console.log(this.head)
// return this.head;






    }
}

const linked= new LinkedList();

console.log(linked.insertBegining([23,45,67,89,90,1,2,34]))