function loadHomePage() {
  const content = document.getElementById('content');

  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');

  const heading = document.createElement('h1');
  heading.textContent = "Welcome to Arda's Flame Kitchen";

  const image = document.createElement('img');
  image.src = 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092';
  image.alt = 'Delicious food';
  image.width = 400;

  const paragraph = document.createElement('p');
  paragraph.textContent = "Experience the taste of tradition and innovation at Arda's Flame Kitchen.";

  homeDiv.appendChild(heading);
  homeDiv.appendChild(image);
  homeDiv.appendChild(paragraph);

  content.appendChild(homeDiv);
}

export default loadHomePage;
