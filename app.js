function myToggle() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (dots.style.display === "none"){
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnText.innerText = "Show more";
    }
    else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnText.innerText = "Show less";
    }
}

document.getElementsByClassName("ham-btn")[0].addEventListener("click", function(){
    document.body.classList.toggle("activeNav");
})