
// Function to hide the preloader and show the main content
const loader = () => {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".everything").style.display = "block";
  };
  
  // Function to initialize the preloader with a delay
  const preloader = () => {
    setTimeout(loader, Math.floor(Math.random() * 3000) + 1000);
  };
  
var typed = new Typed(".typing", {
    strings: ["Web Designer!", "𝑾eb 𝑫eveloper!", "Mern Stack Developer!", "Mentor!"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

 