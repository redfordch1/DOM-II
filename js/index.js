// Your code goes here

// =========================== WHOLE PAGE ================================

var tl = new TimelineLite;
tl.fromTo(".logo-heading", 1.2, {x: "-350%"}, {x: "0%", ease: Power4.easeIn})

  .fromTo(".nav", 1.5, {x: "350%"}, {x: "0%", ease: Power3.easeIn}, "-=1.5")

  .fromTo(".firstImg", 1.5, {y: "-300%" }, {y: "0%", ease: Power4.easeIn})

  .fromTo(".slider", 1, {x: "-100%" }, {x: "0%", ease: Power4.easeIn});
  
// =========================== NAV BUTTONS ================================

document.querySelectorAll(".nav .nav-link1").forEach(A => {
    A.addEventListener("mouseenter", () => {
        A.style.transform = "scale(1.5)";
        A.style.color = "red";
      })
    A.addEventListener("mouseleave", () => {
        A.style.transform = "scale(1)";
        A.style.color = "black";
      })
})

document.querySelectorAll(".nav .nav-link2").forEach(A => {
    A.addEventListener("mouseenter", () => {
        A.style.transform = "scale(1.5)";
        A.style.color = "blue";
      })
    A.addEventListener("mouseleave", () => {
        A.style.transform = "scale(1)";
        A.style.color = "black";
      })
})

document.querySelectorAll(".nav .nav-link3").forEach(A => {
    A.addEventListener("mouseenter", () => {
        A.style.transform = "scale(1.5)";
        A.style.color = "green";
      })
    A.addEventListener("mouseleave", () => {
        A.style.transform = "scale(1)";
        A.style.color = "black";
      })
})

document.querySelectorAll(".nav .nav-link4").forEach(A => {
    A.addEventListener("mouseenter", () => {
        A.style.transform = "scale(1.5)";
        A.style.color = "orange";
      })
    A.addEventListener("mouseleave", () => {
        A.style.transform = "scale(1)";
        A.style.color = "black";
      })
})

const stopLink = document.querySelector(".nav-link4");

stopLink.addEventListener("click", (event) => {
  event.preventDefault();
})

// ============================ BUS IMAGE ===============================

const imgChange = document.querySelector(".firstImg");

imgChange.addEventListener("mousedown", () => {
    imgChange.style.transform = "rotate(0.5turn)";
})
imgChange.addEventListener("mouseup", () => {
    imgChange.style.transform = "none";
}) 

// ====================== MIDDLE IMAGES ============================

const img2Change = document.querySelector(".secondImg");

img2Change.addEventListener("mouseenter", () => {
    img2Change.style.transform = "skew(30deg, 20deg)";
})
img2Change.addEventListener("mouseleave", () => {
    img2Change.style.transform = "none";
}) 

const img3Change = document.querySelector(".thirdImg");

img3Change.addEventListener("mouseenter", () => {
    img3Change.style.transform = "skew(-30deg, -20deg)";
})
img3Change.addEventListener("mouseleave", () => {
    img3Change.style.transform = "none";
}) 


TweenMax.to(".firstImg", 0, {boxShadow:"0px 0px 40px yellow"});

TweenMax.to(".secondImg", 0, {boxShadow:"0px 0px 40px blue"});

TweenMax.to(".thirdImg", 0, {boxShadow:"0px 0px 40px purple"});

TweenMax.to(".fourthImg", 0, {boxShadow:"0px 0px 40px limegreen"});

TweenMax.to(".firstImg", 1, {"--myColor":"white", yoyo: true, repeat: 100});

TweenMax.to(".secondImg", 1, {"--myColor":"white", yoyo: true, repeat: 100}, "-=1.5" );

TweenMax.to(".thirdImg", 1, {"--myColor":"white", yoyo: true, repeat: 100}, "-=1.5" );

TweenMax.to(".fourthImg", 1, {"--myColor":"white", yoyo: true, repeat: 100}, "-=1.5" );

// ====================== SIGN UP BUTTONS ============================

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.5)";
        button.style.backgroundColor = "black";
      })
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
        button.style.backgroundColor = "#17A2B8";
      })
})