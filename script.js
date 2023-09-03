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



    // promotion slider
    let promoSliderContainer = document.querySelector(".promotion-container");
    let sliderClone = promoSliderContainer.firstElementChild.cloneNode(true);

    promoSliderContainer.appendChild(sliderClone);

    let currenIndex = 0;


    setInterval(() => {
        currenIndex++;

        promoSliderContainer.style.marginLeft = -currenIndex * 100 + "%";
        promoSliderContainer.style.transition = "all 0.6s";

        if(currenIndex == 2){
            setTimeout(() => {
            promoSliderContainer.style.marginLeft = "0";
            promoSliderContainer.style.transition = "0s";
            currenIndex = 0;
            }, 700);
        }
    }, 3000);

    // promo view
    const promoBtn = document.querySelector("#promotion");
    const promotionView = document.querySelector(".promotion-view");
    const promoArrow = document.querySelector("#promotion > span > a");
    let promoOn = false;
    promoBtn.addEventListener("click", function(){
        if(promoOn === false){
            promotionView.style.display = "block";
            promoArrow.style.rotate = "180deg";
            promoOn = true;
        }else{
            promotionView.style.display = "none";
            promoArrow.style.rotate = "180deg";
            promoOn = false;
        }
    });


    // main banner opacity
    const drinks = document.querySelectorAll(".drink");
    let drinkCurrenIndex = 0;
    const bannerBtn = document.querySelector(".banner-title > a");
    const intervalId = setInterval(() => {
        drinks[drinkCurrenIndex].style.opacity = "1";
        drinks[drinkCurrenIndex].style.transition = "opacity 0.5s";
        drinkCurrenIndex++;
        console.log(drinkCurrenIndex);
        if(drinkCurrenIndex === 3){
            setTimeout(() => {
                bannerBtn.style.opacity = "1";
                bannerBtn.style.transition = "all 0.5s";
            }, 500);
            clearInterval(intervalId);
        }
    }, 500);


    // notice slider
    const noticeContainer = document.querySelector(".notice-container");
    let noticeCurrentIndex = 0;
    const noticeClone = noticeContainer.firstElementChild.cloneNode(true);
    noticeContainer.appendChild(noticeClone);

    setInterval(() => {
        noticeCurrentIndex++;
        noticeContainer.style.marginTop = - noticeCurrentIndex * 16 + "px";
        noticeContainer.style.transition = "all 0.6s";

        if(noticeCurrentIndex === 3){
            setTimeout(() => {
                noticeContainer.style.marginTop = "0";
                noticeContainer.style.transition = "0s";
                noticeCurrentIndex = 0;
            }, 700);
        }
    }, 2000);

}
