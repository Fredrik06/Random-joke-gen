const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://api.chucknorris.io/jokes/random";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.value}`;
      jokeContainer.classList.add("fade");
    });
};

btn.addEventListener("click", getJoke);
getJoke();
