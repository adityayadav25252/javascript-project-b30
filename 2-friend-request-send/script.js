let btn=document.querySelector('button');
let h1=document.querySelector('.main h1');

let flag=0;
btn.addEventListener('click',()=>{
  if (flag==0) {
    btn.innerHTML='Unfreind'
    h1.innerHTML='Freinds'
    flag=1
  } else {
    btn.innerHTML='Stranger'
    h1.innerHTML='Add friend'
    flag=0
  }
  
})