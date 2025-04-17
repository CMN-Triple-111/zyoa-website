const aboutNavigator = document.querySelector('.about-navigator-fixed-container');
const aboutImgContainer = document.querySelector('.about-img-container');
const aboutHeroContent = document.querySelector('.about-hero-content');
const aboutHeroContentLeft = document.querySelector('.about-hero-content-Left');
const sectionWhoWeAre = document.querySelector('.section-who-we-are');
const navigatorWhoWeAre = document.querySelector('.who-we-are-navigator');

window.addEventListener('scroll', () => {
    if (window.scrollY > aboutImgContainer.offsetHeight) {
        aboutNavigator.classList.add('fixed');
        aboutHeroContent.classList.add('fixed');
        aboutHeroContentLeft.classList.add('fixed');
    } else {
        aboutNavigator.classList.remove('fixed');
        aboutHeroContent.classList.remove('fixed');
        aboutHeroContentLeft.classList.remove('fixed');
    }
});

window.addEventListener("scroll", function () {
    var button = document.getElementById("navigator-1");
    var button2 = document.getElementById("navigator-2");
    var button3 = document.getElementById("navigator-3");

    var sectionOne = document.getElementById("who-we-are");
    var sectionTwo = document.getElementById("mission-vision");
    var sectionThree = document.getElementById("what-we-do"); // ✅ Fixed typo

    // Scroll position + half viewport height for better detection
    var scrollY = window.scrollY + window.innerHeight / 3;

    var section1Top = sectionOne.offsetTop;
    var section2Top = sectionTwo.offsetTop;
    var section3Top = sectionThree.offsetTop;

    // Reset styles
    [button, button2, button3].forEach(btn => {
        btn.style.backgroundColor = "transparent";
        btn.style.color = "black";
    });

    if (scrollY >= section1Top && scrollY < section2Top) {
        button.style.backgroundColor = "#17260E";
        button.style.color = "white";
    } else if (scrollY >= section2Top && scrollY < section3Top) {
        button2.style.backgroundColor = "#17260E";
        button2.style.color = "white";
    } else if (scrollY >= section3Top) {
        button3.style.backgroundColor = "#17260E";
        button3.style.color = "white";
    }
});

 // Get nav height dynamically
 const navHeight = document.querySelector('.about-navigator-fixed-container').offsetHeight;

 // Scroll function
 function scrollToSection(id) {
     const section = document.getElementById(id);
     const topPos = section.getBoundingClientRect().top + window.scrollY - navHeight;

     window.scrollTo({
         top: topPos,
         behavior: 'smooth'
     });
 }

 // Attach to buttons
 document.getElementById("navigator-1").onclick = () => scrollToSection('who-we-are');
 document.getElementById("navigator-2").onclick = () => scrollToSection('mission-vision');
 document.getElementById("navigator-3").onclick = () => scrollToSection('what-we-do');


 // join us pop up button
 const shareBtn = document.getElementById("shareBtn");
 const sharePopup = document.getElementById("sharePopup");
 const closeBtn = document.getElementById("closeSharePopup");

 shareBtn.addEventListener("click", () => {
     sharePopup.classList.add("active");
 });

 closeBtn.addEventListener("click", () => {
     sharePopup.classList.remove("active");
 });

 // Close if clicked outside
 document.addEventListener("click", (e) => {
     if (!sharePopup.contains(e.target) && !shareBtn.contains(e.target)) {
         sharePopup.classList.remove("active");
     }
 });