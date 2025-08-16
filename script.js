// YouTube videos list
const VIDEOS = [
  { title: "GTA V Prologue", id: "BDOj-QmKT5c", desc: "First mission gameplay" },
  { title: "GTA V Custom Repo Mission", id: "OD2OL-ucECg", desc: "Bike repo mission with twist" }
];

// Inject videos into grid
const grid = document.getElementById("video-grid");
VIDEOS.forEach(v => {
  const card = document.createElement("div");
  card.className = "video-card";
  card.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${v.id}" frameborder="0" allowfullscreen></iframe>
    <h3>${v.title}</h3>
    <p>${v.desc}</p>
  `;
  grid.appendChild(card);
});