console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const searchBtn = document.getElementById("submitSearch");
const searchInput = document.getElementById("searchWord");
const gif = document.querySelector("img");
const feedbackEle = document.getElementById("feedback");
feedbackEle.style.textAlign = "center";
feedbackEle.style.color = "red";

searchBtn.addEventListener("click", displayGif);

function displayGif() {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ZrXfRz4rzjHIMOcNCiHHY0syRH5rRUu4&s=${searchInput.value}`, {mode: "cors"})
  .then((res) => res.json())
  .then((res) => {
      feedbackEle.textContent = "";
      gif.src = res.data.images.original.url;
      searchInput.value = "";
  })
  .catch((err) => {
      gif.src = "";
      feedbackEle.textContent = err.message;
      console.error(err);
  });
}