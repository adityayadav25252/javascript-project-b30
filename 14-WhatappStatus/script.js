let arr = [
  {
    image: "https://as1.ftcdn.net/v2/jpg/03/69/70/34/1000_F_369703412_jXA622I6Wg4wEush6Lom6ZNxzu9hwQ7W.jpg",
    story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqscPIAFk3aE_MutfkLD_0GZcEwjObL01Btw&s",
    name: "Aditya Yadav",
    Time: "Just now",
  },
  {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=900&h=500&s=1",
      story: "https://cdn.britannica.com/54/256354-050-C19887AD/bollywood-actor-salman-khan-at-nika-mukesh-ambani-cultural-center-nmacc-mumbai-india.jpg",
      name: "Lorens Bisnoi",
      Time: "2 min ago",
  },
  {
      image: "https://img.freepik.com/free-photo/close-up-portrait-young-indian-man-with-beard-white-shirt-isolated-standing-smiling_155003-23823.jpg?semt=ais_hybrid",
      story: "https://t3.ftcdn.net/jpg/00/89/16/56/360_F_89165623_QSfwcywrXZx8lmhBZO2xD2T1CZ3H3QeK.jpg",
      name: "Salman Khan",
      Time: "23 hrs ago",
  },
  {
      image: "https://i.pinimg.com/736x/42/a7/1b/42a71be4dca58106f4828c2d2c58fb73.jpg",
      story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCkT5tdKxHfnT9VO-hW68dbv-cyJQGBevgyA&s",
      name: "Dahud Abrahim",
      Time: "30 min ago",
  },
  {
      image: "https://c1.wallpaperflare.com/preview/499/990/504/man-india-indian-old.jpg",
      story: "https://images.apollo247.in/pub/media/catalog/product/H/O/HOR0017_1-JULY23_1.jpg",
      name: "Chota Don",
      Time: "3 min ago",
  },
  {
      image: "https://cdn.pixabay.com/photo/2024/03/31/05/00/ai-generated-8665990_960_720.jpg",
      story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRil3Dx034iWXvijSSoOjfgyOfJq89awmAUVg&s",
      name: "H#O#D",
      Time: "20 min  ago",
  },
  {
      image: "https://img.freepik.com/premium-photo/indian-woman-portrait-temple_53876-71699.jpg?semt=ais_hybrid",
      story: "https://www.bollywoodhungama.com/wp-content/uploads/2024/02/Deepika-Padukone-spills-her-hair-secrets-reveals-what-kinds-of-hairstyles-she-prefers-watch-2.jpg",
      name: "Dipeka Padukon",
      Time: "40 min ago",
  },
  {
      image: "https://i.pinimg.com/236x/a3/89/ba/a389bab8aefba539b10d7218d4bf3d59.jpg",
      story: "https://i.pinimg.com/originals/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg",
      name: "Tamanna Bhatiya",
      Time: "23 min ago",
  },
  {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsR2f-rV6e1kUDlaf8_1czPGTtt4K2m_BdQ&s",
      story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBGWGFp0WZZxRRi5NMWbDcz3DCw3LYBSmBA&s",
      name: "Sandash Nagar",
      Time: "34 min ago",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1689838026921-c09632fd77ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
      story: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=900&h=500&s=1",
    name: "Arpit bala",
    Time: "Just now",
  },
];
let statusDiv = document.querySelector(".content");
let full = document.querySelector(".full");
let fullDiv = document.querySelector(".full-div");

if (!statusDiv || !full || !fullDiv) {
  console.error("Required DOM elements not found");
} else {
  let sum = "";

  arr.forEach((elem, idx) => {
    if (!elem) return;
    sum += `
      <div class="status-div" id="${idx}">
        <div class="status-symbol">
          <div class="circle">
            <img src="${elem.image}" alt="${elem.name}'s Profile Picture">
          </div>
        </div>
        <div class="content-div-text">
          <div class="content-text-status">${elem.name}</div>
          <div>${elem.Time}</div>
        </div>
      </div>
    `;
  });

  statusDiv.innerHTML += sum;

  let grow = 0; // Initialize growth value
  let hideTimeout;
  let interval;

  statusDiv.addEventListener("click", (dets) => {
    const clickedDiv = dets.target.closest(".status-div");
    if (!clickedDiv) return;

    const idx = parseInt(clickedDiv.id, 10);
    const storyObj = arr[idx];
    if (!storyObj) {
      console.error(`Invalid or missing data for ID: ${idx}`);
      return;
    }

    const story = storyObj.story || storyObj.image;
    if (!story) {
      console.error(`No story or image available for ID: ${idx}`);
      return;
    }

    // Reset the grow value and full-div width before starting new animation
    grow = 0;
    fullDiv.style.width = "0%"; // Reset width of fullDiv to 0%

    // Start increasing the width of .full-div
    interval = setInterval(() => {
      if (grow < 100) {
        grow++;
        full.style.backgroundPosition = "center";
        full.style.backgroundSize = "cover";
        full.style.backgroundImage = `url(${story})`;
        full.style.display = "block";
        fullDiv.style.width = grow + "%";
      }
    }, 30);

    setTimeout(() => {
      clearInterval(interval); // Stop growing
      full.style.display = "none"; // Hide the full div
      fullDiv.style.width = "0%"; // Reset the width when hiding
    }, 3000); // Hide after 3 seconds
  });
}
