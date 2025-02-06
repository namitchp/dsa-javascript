
// 206. Reverse Linked List
var reverseList = function(head) {
    let prev=null;
    let current=head;
    while(current!==null){
        const nextnode=current.next;
        current.next=prev;
        prev=current;
        current=nextnode;
    }
    return prev;
};


console.log(reverseList([1,2,3,4,5]));



