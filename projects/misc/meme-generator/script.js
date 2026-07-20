const meme = document.getElementById("meme");
const loadBtn = document.getElementById("loadBtn");

async function fetchAPI() {
  try {
    const response = await fetch("https://meme-api.com/gimme");

    if (!response.ok) {
      throw new Error("Failed to fetch meme.");
    }

    const data = await response.json();

    meme.src = data.url;
    meme.alt = data.title || "Random Meme";
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to load meme. Please try again.");
  }
}

loadBtn.addEventListener("click", fetchAPI);

loadBtn.addEventListener("mousemove", (event) => {
  const rect = loadBtn.getBoundingClientRect();
  const angle = (event.clientX - rect.left) * 3;

  document.documentElement.style.setProperty("--x", `${angle}deg`);
});

fetchAPI();
