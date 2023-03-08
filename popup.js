const seePopup = document.querySelectorAll('.see-project');
const closeView = document.querySelector('.popup-close-icon');
const popupCard = document.querySelector('.popup-card');

function openPopup() {
	popupCard.style.display = "block";
}

function closePopup() {
	popupCard.style.display = "none";
}

closeView.addEventListener("click", closePopup);

seePopup.forEach((i) => {
	i.addEventListener("click", openPopup);
});