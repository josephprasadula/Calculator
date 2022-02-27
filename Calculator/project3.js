let cal=document.querySelectorAll('.numbers');
let a;
for(let x of cal){
   x.addEventListener('click',function(obj){
       a=obj;
       document.querySelector('.out').innerHTML+=this.innerHTML
       if(this.innerHTML=='ac'){
        document.querySelector('.out').innerHTML=''
       }else if(this.innerHTML=='c'){
           let l=document.querySelector('.out').innerHTML;
           let n=l.slice(0,-2);
           document.querySelector('.out').innerHTML=n;
       }else if(this.innerHTML=='='){
            let l=document.querySelector('.out').innerHTML;
            let n=l.slice(0,-1);
        //    let y=n;
           let z=eval(n);
           document.querySelector('.out').innerHTML=z;
       }
   })
}

// let x;
// for(let i=0;i<cal.length;i++){
//     x=cal[i];
//     if(i<16){
//         x.addEventListener('click',function(obj){
//             a=obj;
//             document.querySelector('.out').innerHTML+=this.innerHTML
//         })
//     }else if(i=15){
//         document.querySelector('.out').innerHTML=''
//     }
//     else if(i=16){
//         let l=document.querySelector('.out').innerHTML;
//         let n=l.slice(0,-1);
//         document.querySelector('.out').innerHTML=n;
//     }else if(i=17){
//         let y=document.querySelector('.out').innerHTML;
//            document.querySelector('.out').innerHTML=eval(y)
//     }
// }
// // let b=document.querySelector('.out').innerHTML;
// let empty=function(){
//     s='';
// }
// document.querySelector('#ac').addEventListener('click',empty);
// let backspace=function(){
//     document.querySelector('.out').innerHTML.slice(0,-2);
// }
// document.querySelector('#c').addEventListener('click',backspace)
// let result=function(){
//     let k=eval(b);
//     document.querySelector('.out').innerHTML=k;
// }
// document.querySelector('#equalto').addEventListener('click',result);