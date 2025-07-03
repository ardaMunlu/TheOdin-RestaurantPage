import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadContactPage from './contact.js';

console.log("Webpack Dev Server is running!");

// Utility function to clear content
function clearContent() {
  const content = document.getElementById('content');
  content.innerHTML = '';
}

// Tab switch logic
function addNavEvents() {
  document.getElementById('home-btn').addEventListener('click', () => {
    clearContent();
    loadHomePage();
  });

  document.getElementById('menu-btn').addEventListener('click', () => {
    clearContent();
    loadMenuPage();
  });

  document.getElementById('contact-btn').addEventListener('click', () => {
    clearContent();
    loadContactPage();
  });
}

// Initial page load
loadHomePage();
addNavEvents();
