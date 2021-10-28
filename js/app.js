/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */

// Declared global variables for navigation and sections
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

//building the nav
const navBuild = () => {
   let navUI = " ";
   // Looping over the sections
   sections.forEach(section => {
      const sectionID = section.id;
      const sectionDataNav = section.dataset.nav;
      navUI += `<li><a class="menu__link" href = "#${sectionID}"> ${sectionDataNav} </a></li>`
   });
   // Appending all items to the navigation
   navigation.innerHTML = navUI;
};
navBuild();

// Add class 'active' to section when near top of viewport
// getting the largest value that is less or equal to the number
const offset = (section) => {
   return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive = (section) => {
   section.classList.remove('your-active-class');
   section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// adding the active class
const addActive = (conditional, section) => {
   if (conditional) {
      section.classList.add('your-active-class');
      section.style.cssText = "background-color: peru";
   };
};

//implementating the actual function

const sectionActivation = () => {
   sections.forEach(section => {
      const elementOffset = offset(section);

      inviewport = () => elementOffset < 150 && elementOffset >= -150;

      removeActive(section);
      addActive(inviewport(), section);
   });
};

window.addEventListener('scroll', sectionActivation);


// Scroll to anchorID using scrollTO event
const scrolling = () => {

   const links = document.querySelectorAll('.navbar__menu a');
   links.forEach(link => {
      link.addEventListener('click', () => {
         for (i = 0; i < sections; i++) {
            sections[i].addEventListener("click", sectionScroll(link));
         }
      });
   });

};

scrolling();


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active