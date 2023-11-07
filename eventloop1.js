const a=()=>{
    console.log('hi my name is faysal')
};

const d=()=>{
    console.log('hi, my full name is Amit hasan faysal ')
}

const b=()=>{
    console.log('hi my name is hasan');

}

const c=()=>{
    console.log('hi my name is amit');
   setTimeout(d, 10000);
   b();
   a()
}

c();

// OUTPUT ---->
// hi my name is amit
// hi my name is hasan
// hi my name is faysal
// hi, my full name is Amit hasan faysal  10000 mili second por result dibe 