let btn=document.querySelector('button')
let circle=document.querySelector('.circle')
let box=document.querySelector('.box')


let flag=0

btn.addEventListener('click',()=>{
  if (flag==0) {
   interval=setInterval(()=>{
      let adi=Math.floor(Math.random()*225);
      let adi1=Math.floor(Math.random()*225);
      let adi2=Math.floor(Math.random()*225);
      circle.style.boxShadow= `0 0 100px 40px rgb(${adi},${adi1},${adi2})`; 
      circle.style.backgroundColor=`rgb(${adi},${adi1},${adi2})`;
    },100)
    box.style.backgroundColor='rgba(41, 40, 39, 0.52)';
    btn.innerHTML='Click To OFF'
    flag=1;
  } else {
    clearInterval(interval);
    circle.style.boxShadow= 'none'; 
    circle.style.backgroundColor='rgb(41, 38, 38)';
    box.style.backgroundColor='rgba(31, 29, 27, 0.515)';
    btn.innerHTML='Click To ON'
    flag=0;
  }
})
