function loadMenuPage() {
  const content = document.getElementById('content');
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  const heading = document.createElement('h1');
  heading.textContent = "Our Menu";

  const item1 = document.createElement('p');
  item1.textContent = "🔥 Spicy Chicken Wings - 12.99₺";

  const item2 = document.createElement('p');
  item2.textContent = "🍝 Creamy Mushroom Pasta - 18.50₺";

  menuDiv.appendChild(heading);
  menuDiv.appendChild(item1);
  menuDiv.appendChild(item2);

  content.appendChild(menuDiv);
}

export default loadMenuPage;
