// Hamburger menu logic
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

hamMenuBtn.addEventListener('click', () => {
  smallMenu.classList.toggle('header__sm-menu--active');
  headerHamMenuBtn.classList.toggle('d-none');
  headerHamMenuCloseBtn.classList.toggle('d-none');
});

headerSmallMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  });
});

// Logo redirect
const headerLogoContainer = document.querySelector('.header__logo-container');
headerLogoContainer.addEventListener('click', () => {
  location.href = 'index.html';
});

function navigateToProjectsDS() {
  window.location.href = './project-1.html';
}

function navigateToProjectsGIS() {
  window.location.href = './project-2.html';
}

// Add this script to your JavaScript file or in a script tag at the end of your HTML
document.addEventListener('DOMContentLoaded', function() {
  // Options for the Intersection Observer
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  };
})
  // Function to handle the animation when elements come into view
