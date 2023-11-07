function a(){
    console.log('Third:- amke akta jorrda  den');

}
function b(){
    console.log('Second:- pore amke akta rost er lag pics den');

}
function c(){
    console.log('First:- prothome amke akta plate den');

    b();
    a();
}
c();

// OUTPUT result:-

// First:- prothome amke akta plate den
// Second:- pore amke akta rost er lag pics den
// Third:- amke akta jorrda  den