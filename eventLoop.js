function a(){
    console.log('a');
    b();
    console.log('aa');
}
function b(){
    console.log('b');
    c();
    console.log('bb');
}
function c(){
    console.log('c');
    d();
    console.log('cc');
}
function d(){
    console.log("d");
    setTimeout(() => {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    }, 3000);
}
a(); 
