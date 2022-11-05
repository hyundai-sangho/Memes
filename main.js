let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

// API URL
let url = "https://meme-api.herokuapp.com/gimme/";

// Array of subreddits of your choice
let subreddits = ["catmemes", "wholesomememes", "dogmemes", "me_irl"];

// Function To Get Random Meme
let getMeme = async () => {
  // Chooses a random subreddit from the subreddits array
  let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];

  // Fetch data from the api
  await fetch(url + randomSubreddit)
    .then((res) => res.json())
    .then((data) => {
      meme.src = data.url;
      title.innerText = data.title;
    });
};

// Call the getMeme() on button click and on window load
window.addEventListener("load", getMeme);
getMemeBtn.addEventListener("click", getMeme);
