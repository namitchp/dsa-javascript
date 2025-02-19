
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


console.log(reverseList({
    data:12,next:{data:32,next:{data:44,next:{data:45,next:{data:46,next:null}}}}
}));




