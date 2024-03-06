// Variable Scope
// Global Variables
let globalVar = "I am a global variable!";


// Local Variables
function localScope() {
    let localVar = "I am a local variable :)";
    console.log(globalVar);
    console.log(localVar);
}
localScope();

console.log(globalVar);
