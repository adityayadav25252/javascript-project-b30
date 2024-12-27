let btn=document.querySelector('button')
let circle=document.querySelector('.circle')
let box=document.querySelector('.box')


let flag=0
btn.addEventListener('click',()=>{
  if (flag==0) {
    circle.style.boxShadow= '0 0 100px 40px rgba(255, 255, 255, 0.5)'; 
    circle.style.backgroundColor='white';
    box.style.backgroundColor='rgba(72, 71, 70, 0.515)';
    btn.innerHTML='Click To OFF'
    flag=1;
  } else {
    circle.style.boxShadow= 'none'; 
    circle.style.backgroundColor='rgb(41, 38, 38)';
    box.style.backgroundColor='rgba(31, 29, 27, 0.515)';
    btn.innerHTML='Click To ON'
    flag=0;
  }
})

