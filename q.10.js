class MyStack {
    constructor() {
        this.s = [];
        this.minEle;
    }
    getMin() {
        if (this.s.length == 0)
            console.log("Stack is empty");
        else
            console.log("Minimum Element in the stack is: ", this.minEle);
    }
    peek() {
        if (this.s.length == 0) {
            console.log("Stack is empty ");
            return;
        }
        let t = this.s[0]; // Top element.
        console.log("Top Most Element is: ");
        (t < this.minEle) ? console.log(this.minEle) : console.log(t);
  
    }
    pop() {
        if (this.s.length == 0) {
            console.log("Stack is empty ");
            return;
        }
        console.log("Top Most Element Removed: ");
        let t = this.s[0]; // Top element.
        this.s.shift();
        if (t < this.minEle) {
            console.log(this.minEle);
            this.minEle = (2 * this.minEle) - t;
        }
  
        else
            console.log(t);
    }
    push(x) {
        if (this.s.length == 0) {
            this.minEle = x;
            this.s.unshift(x);
            console.log("Number Inserted: ", x);
            return;
        }
        else if (x < this.minEle) {
            this.s.unshift(2 * x - this.minEle);
            this.minEle = x;
        }
        else
            this.s.unshift(x);
  
        console.log("Number Inserted: ", x);
    }
};
let s = new MyStack;
s.push(3);
s.push(5);
s.getMin();
s.push(2);
s.push(1);
s.getMin();
s.pop();
s.getMin();
s.pop();
s.peek();
