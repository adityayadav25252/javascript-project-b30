let btn=document.querySelector('button')
let h1=document.querySelector('h1')
let ratio=document.querySelector('.ratio1')

let grow=0;
btn.addEventListener('click',()=>{
  interval= setInterval(()=>{
    grow++;
    h1.innerHTML=grow +'%'
    ratio.style.width=grow +'%'
  },30)
  setTimeout(()=>{
    clearInterval(interval)
    btn.innerHTML='Downloaded';
    btn.style.opacity=0.8
    btn.style.pointerEvents='none'

 },3000)
})