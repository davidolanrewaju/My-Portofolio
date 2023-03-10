const seePopup = document.querySelectorAll('.see-project');
const closeView = document.querySelector('.popup-close-icon');
const popupCard = document.querySelector('.popup-card');
const popupHeader = document.querySelector('.popup-h1');
const popupImg = document.querySelector('.popup-img');

const contents = [
    {
        title: 'Tonic',
        image: 'assets/desktop/Snapshoot Portfolio(3).png',
    },
    {
        title: 'Multi-Post Stories',
        image:  'assets/desktop/Snapshoot Portfolio.png',
    },
    {
        title: 'Facebook 360',
        image:  'assets/desktop/Snapshoot Portfolio(1).png',
    },
    {
        title: 'Uber',
        image:  'assets/desktop/Snapshoot Portfolio(2).png',
    }
];

function closePopup() {
    popupCard.style.display = "none";
    // Remove the image element from the popup
    while (popupImg.firstChild) {
        popupImg.removeChild(popupImg.firstChild);
    }
}

closeView.addEventListener("click", closePopup);

for (let i = 0; i < seePopup.length; i++) {
    seePopup[i].addEventListener('click', (event) => {
      const index = parseInt(event.target.dataset.index);
      const content = contents[index];
      if (content && content.title) {
        popupHeader.innerHTML = content.title;
      }
      if (content && content.image) {
        // Remove the old image element from the popup
        while (popupImg.firstChild) {
          popupImg.removeChild(popupImg.firstChild);
        }
        // Add the new image element to the popup
        const image = document.createElement('img');
        image.src = content.image;
        popupImg.appendChild(image);
      }
      popupCard.style.display = 'block';
    });
    seePopup[i].dataset.index = i;
  }
// return popup();
