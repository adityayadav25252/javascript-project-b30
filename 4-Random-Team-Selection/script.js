let btn = document.querySelector('button');
let main = document.querySelector('.main');

let team = [
  'https://c.ndtvimg.com/2020-02/1r5vdst_rcb_625x300_14_February_20.jpg',
  'https://4kwallpapers.com/images/wallpapers/chennai-super-kings-indian-premier-league-ipl-ipl-2021-2560x1080-4938.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJYlyr00ltw5oV74lX4GpyHei51wRIJDiQw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbHNcqNUyEGFv1YwMj6Y0KkRmgHrdVpYgVQ&s',
  'https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Kolkata_Knight_Riders_logo.svg/1200px-Kolkata_Knight_Riders_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Delhi_Capitals.svg/1200px-Delhi_Capitals.svg.png'
];

btn.addEventListener('click', () => {
  btn.innerHTML = 'Wait...';
  
  setTimeout(() => {
    btn.innerHTML = 'Winner';

    let adi = Math.floor(Math.random() * team.length);
  
    main.style.backgroundImage = `url('${team[adi]}')`;
    main.style.backgroundSize = "cover";
    main.style.backgroundPosition = "center";
  }, 300);
});
