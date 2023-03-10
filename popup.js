// Define image and header data objects
const data = [
  {
    img: 'assets/desktop/Snapshoot Portfolio(3).png',
    header: 'Tonic',
  },
  {
    img: 'assets/desktop/Snapshoot Portfolio.png',
    header: 'Multi-Post Stories',
  },
  {
    img: 'assets/desktop/Snapshoot Portfolio(1).png',
    header: 'Facebook 360',
  },
  {
    img: 'assets/desktop/Snapshoot Portfolio(2).png',
    header: 'Uber Navigation',
  },
];

const smallScreenData = [
  {
    img: './assets/Snapshoot Portfolio.png',
    header: 'Tonic',
  },
  {
    img: './assets/Snapshoot Portfolio (1).png',
    header: 'Multi-Post Stories',
  },
  {
    img: './assets/Snapshoot Portfolio (2).png',
    header: 'Tonic',
  },
  {
    img: './assets/Snapshoot Portfolio (3).png',
    header: 'Multi-Post Stories',
  },
];

// Get elements
const popupCard = document.querySelector('.popup-card');
const displayCards = document.querySelectorAll('.display-card');
const popupHeader = document.querySelector('.popup-h1');
const popupImg = document.querySelector('.popup-img-desktop');

// Loop through display cards and add event listeners
for (let i = 0; i < displayCards.length; i += 1) {
  displayCards[i].addEventListener('click', () => {
    // Get image and header data from corresponding object
    let imgSrc; let
      headerText;
    if (window.innerWidth <= 425) {
      imgSrc = smallScreenData[i].img;
      headerText = smallScreenData[i].header;
    } else {
      imgSrc = data[i].img;
      headerText = data[i].header;
    }

    // Update popup card content
    popupHeader.textContent = headerText;
    popupImg.src = imgSrc;

    // Show popup card
    popupCard.style.display = 'block';
  });
}

// Close popup card when close button is clicked
document.querySelector('.close-popup').addEventListener('click', () => {
  popupCard.style.display = 'none';
});