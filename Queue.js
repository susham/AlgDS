class Queue {
    constructor(capacity){
        this.front=0
        this.back=0
        this.length=0
        this.array = new Array(capacity)
    }

    add(value){
        console.log("You have invoked add method with parameter")
        if(this.length == this.array.length)
            throw "array is full, you need to remove elements to add new ones"
        
        this.array[this.back] = value
        this.back = (this.back+1)%this.array.length // this will make sure the index will always be within the bounds
        this.length++
    }

    //Implement remove

    remove(){
        if(this.length==0)
         throw "There are no elements in the queue to delete"
        let result = this.array[this.front]
        this.front = (this.front+1)%this.array.length
        this.length--
        return result
    }

    printArray(){
        console.log(this.front, this.back)
        for(let index=this.front; index<=this.back;index++){

            console.log(index, this.array[index])
        }
    }

} 

let queueobj = new Queue(7)
    queueobj.add(1)
    queueobj.add(2)
    queueobj.add(3)
    queueobj.add(1)
    queueobj.add(2)
    queueobj.add(3)
    console.log(queueobj.remove())
    queueobj.add(3)
    queueobj.printArray()