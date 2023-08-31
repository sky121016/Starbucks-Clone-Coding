window.onload = function(){
    // search bar
    let searchIcon = document.querySelector(".search-icon");
    let searchBar = document.querySelector(".search-input");
    let searchOn = false;
    searchIcon.addEventListener("click", function(){
        searchOn = !searchOn;
        if(searchOn){
            searchBar.style.display = "block";
        }else{
            searchBar.style.display = "none";
        }
    });


    // menu
    let navList = document.querySelectorAll(".bottom-nav > ul > li");
    let header = document.getElementById("header");

    navList.forEach((nav, index) => {
        nav.addEventListener("mouseover", function(){
            header.classList.add("on");
            this.querySelector(".subMenu").style.display = "block";
        });
        nav.addEventListener("mouseout", function(){
            header.classList.remove("on");
            this.querySelector(".subMenu").style.display = "none";
        });
    });
}
