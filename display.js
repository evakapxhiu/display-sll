
// Create display() that uses a while loop and a runner to return a 
// string containing all list values. 
// Build what you wish console.log(myList) did!
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
    class SLL {
         // constructor, other methods, removed for brevity
        constructor(){
        this.head=null;
     }
     
     addFront(value) {
        let newNode = new Node(value);
    
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
        display(value) {
            let listStr= " ";
             if(this.head==null) {
            return " ";
        }
            listStr += this.head.value;
            var runner=this.next;
            while(runner!=null){
                listStr += ", " + runner.value;
                runner=runner.next;
                return listStr;
            }
        }

    }
    SLL1 = new SLL()
  console.log(SLL1.addFront(76));
  console.log(SLL1.addFront(2));
  console.log(SLL1.display());
  console.log(SLL1.addFront(11.41));
  console.log(SLL1.display());


// 