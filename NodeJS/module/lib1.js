console.log("Running Lib1");
let x=10;
function add(a, b){
    return a + b;
}
// const _x = x; //new method
// export { _x as x }; //module.exports is an object that is passed to the file where it is required.
// const _add = add;
// export { _add as add };

module.exports.x=x; //previous method
module.exports.add=add;