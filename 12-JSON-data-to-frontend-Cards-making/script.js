let card=document.querySelector('.card')
let main=document.querySelector('.main')

let arr=[
  {
    name:"Aditya",
    city:'mumbai',
    age:20,
    college:'Nri'
  },
  {
    name:'Sonu',
    city:'Bihar',
    age:22,
    college:'Lnct'
  },
  {
    name:'Dheru',
    city:'virar',
    age:18,
    college:'Oriental'
  },
  {
    name:'sachin',
    city:'Goa',
    age:12,
    college:'Jnct'
  },
]


let sum = ''; // Initialize sum as an empty string
arr.forEach((elem) => {
  sum =sum+` <div class="card">
      <h1>${elem.name}</h1>
      <h2>${elem.city}</h2>
      <h4>${elem.age}</h4>
      <h5>${elem.college}</h5>
    </div>
    `
});

// Insert the generated HTML into the card
main.innerHTML = sum;
