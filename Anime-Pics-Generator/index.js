const btnEl = document.getElementById("btn");
const textEl = document.getElementById("text");
const imageContainerEl = document.querySelector(".image-container");
const imgEl = document.querySelector(".img");





btnEl.addEventListener("click", async ()=>{
    try {
        btnEl.innerText = "Loading"
        textEl.innerText = "Loading"
        imgEl.src = "anime.jpg"
        btnEl.disabled = true;
        const response = await fetch("https://api.catboys.com/img")
        const data = await response.json()
        btnEl.disabled = false;
        console.log(data)
        imgEl.src = data.url;
        textEl.innerText = data.artist;
    } catch (error) {
        console.log(error) 
    }
})