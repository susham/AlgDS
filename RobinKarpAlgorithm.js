class RobinKarpAlgImpl{
    constructor(){

    }

    search(src, target){
        if(src === null || target === null)
            throw "Null Pointer Exception"
        if(target.length == 0){
            return 0
        }
        if(target.length > src.length)
            return -1;

        let x = 53

        let hashT =0, hash=0

        for(let i=0; i< target.length; i++){
            hashT = hashT *x + target.charCodeAt(i)
            hash = hash *x + src.charCodeAt(i)
        }

        if(hashT == hash && target ===src.slice(0, target.length))
            return 0
        let xPow = 1;
        
        
    }
}

let obj = new RobinKarpAlgImpl()
console.log(obj.search("abc","abc"))
