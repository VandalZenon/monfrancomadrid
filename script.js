
const navLinks = document.getElementsByClassName('nav-link');
document.addEventListener("mousemove",parallax);

function removeFromClassList(){
    console.log(navLinks.length);
    for(let j=0 ; navLinks.length > j ; j++){
        navLinks[j].classList.remove("link-active");
        
    }

}

function addActivetoClasslist(i){
    removeFromClassList();
    navLinks[i].classList.add("link-active");
    console.log(i)
}

function parallax(e){
    document.querySelectorAll(".paralax-item").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value)/250;
        var y = (e.clientY * moving_value)/250;
        

        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}


