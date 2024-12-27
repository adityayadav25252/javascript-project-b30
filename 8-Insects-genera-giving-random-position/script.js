let btn=document.querySelector('button');
let body=document.querySelector('body');
var images = [
  'https://thumbs.dreamstime.com/b/wings-insects-remove-white-background-42297941.jpg',   'https://pngimg.com/d/roach_PNG12145.png',
    'https://static.vecteezy.com/system/resources/thumbnails/038/451/350/small/ai-generated-bloodsucker-mosquito-isolated-on-transparent-background-file-png.png',
    'https://static.vecteezy.com/system/resources/thumbnails/024/589/182/small/bee-side-view-with-ai-generated-free-png.png'
];

btn.addEventListener('click',()=>{
  let valueX=Math.random()*96;
  let valueY=Math.random()*90;
  let rotate=Math.random()*360;
  let img=document.createElement('img')
  let ran=Math.floor(Math.random()*images.length)
  img.setAttribute('src',images[ran]);
   // Apply styles
   img.style.height = '100px';
   img.style.position = 'absolute';
   img.style.left = valueX + '%';
   img.style.top = valueY + '%';
   img.style.transform = `rotate(${rotate}deg)`; // Correct rotation syntax

  body.appendChild(img)
})