function loadContactPage() {
  const content = document.getElementById('content');
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');

  const heading = document.createElement('h1');
  heading.textContent = "Contact Us";

  const phone = document.createElement('p');
  phone.textContent = "📞 Phone: +90 555 123 4567";

  const address = document.createElement('p');
  address.textContent = "📍 Address: Flame Street No. 42, Istanbul";

  contactDiv.appendChild(heading);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(address);

  content.appendChild(contactDiv);
}

export default loadContactPage;
