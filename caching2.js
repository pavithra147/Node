 const shapes=require('./caching');  //when using require() is load and cache for subsequent loading ,in this cahing module loaded cached
// console.log(shapes.getShape());
// shapes.setShape("Triangle");
// console.log(shapes.getShape());

// const filter=require('./caching'); // we requiring the same module.in this case node.js will remember that this module is already loaded  . so load the same object as like line 1 since object are get by reference

// console.log(shapes.getShape());

const {mul,add}=shapes
console.log("mul",mul(2,8));
console.log("add",add(3,7));
//  console.log("add",shapes(2,8));
// console.log("mul",shapes(3,7));
        