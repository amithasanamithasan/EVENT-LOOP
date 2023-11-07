const a=()=>{
    console.log('ami');

}
const b=()=>{
    console.log('ace');

}
const c=()=>{
    console.log('tmr ');

}
const e=()=>{
 
    console.log('tmi thakle ame ace tmr passe ');
}
const d=()=>{
    console.log('ami ache tmr passe');
  
    setTimeout(e , 1000);

    new Promise((resolve, reject)=>
    resolve("i am right after d befor e")).then((resolve) => console.log(resolve));
    a();
    b();
    c();
}
d();

async function f() {
    let result = 'first!';
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('done!'), 1000);
    });
    result = await promise;
    console.log(result);
  }
  f();