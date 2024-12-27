let btn = document.querySelector(".all-button");
let btn1 = document.querySelector(".button-1");
let btn2 = document.querySelector(".button-2");

let a=[
  {
    img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    Name:'Aditya Yadav'
  },
  {
    img:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    Name:'argaher aerhaer'
  },
  {
    img:'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    Name:'arghaerh'
  },
  {
    img:'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    Name:'sonu dha'
  },
  {
    img:'https://images.unsplash.com/photo-1485811661309-ab85183a729c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    Name:' dherraj singh'
  },
  {
    img:'https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    Name:'Shi Yadav'
  },
]


let flag = 0;
btn.addEventListener("click", () => {
  if (flag==0) {
    btn2.style.display = "none";
    btn1.style.width = 250 + "px";
    btn1.innerHTML = "Requested";
    btn1.style.backgroundColor = " rgb(56, 62, 67)";
    setTimeout(()=>{
      btn1.style.backgroundColor='#0a52d1'
      btn1.innerHTML = "Unfreind";
      btn1.style.width=''
      btn2.style.width=''
      btn2.style.display='block'
      btn2.innerHTML='Delete'  
      flag=1
    },3000)
  }
  else{
    btn2.style.display = "none";
    btn1.style.width = 250 + "px";
    btn1.innerHTML = "Requested";
    btn1.style.backgroundColor = " rgb(56, 62, 67)";
    setTimeout(()=>{
      btn1.style.backgroundColor='#0a52d1'
      btn1.innerHTML = "Add Freind";
      btn1.style.width=''
      btn2.style.width=''
      btn2.style.display='block'
      flag=0
      btn2.innerHTML='Igrone'  
    },3000)
  }
});
