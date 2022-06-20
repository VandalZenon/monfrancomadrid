
const navLinks = document.getElementsByClassName('nav-link');


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




