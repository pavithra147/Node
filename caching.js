class caching{
    constructor(name){
        this.name=name
    }
    getShape(){
        return this.name
    }

    setShape(name){
            this.name=name;
    }
}
module.exports=new caching('circle');



// const add=(a,b)=>{
//     return a+b;
// }
// const mul=(a,b)=>{
//     return a*b;
// }

// module.exports={
//     add,
//     mul
// }


module.exports.mul=(a,b)=>{
    return a*b;
}
module.exports.add=(a,b)=>{
    return a+b;
}

// module.exports={
//     add,
//     mul
// }
