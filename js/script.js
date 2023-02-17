// random color generator
const cards = document.querySelectorAll(".card");
for(const card of cards){
    card.addEventListener("mouseover", function(){
        const randomNumber = Math.floor(Math.random() * 1677215);
        const randomCode = "#" + randomNumber.toString(16);
        card.style.backgroundColor = randomCode;
        card.style.transition = ".4s"; 
    });
}

// change location function
document.getElementById("btn-blog").addEventListener("click", function(){
    window.location.href = "blog.html";
});
