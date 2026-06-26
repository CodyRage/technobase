document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const closeButton = document.querySelector(".close-button");
  
    document.querySelectorAll(".modal-trigger").forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const title = this.getAttribute("data-title");
        const content = this.getAttribute("data-content");
        modalText.innerHTML = `<h2>${title}</h2>` + content;
        modal.style.display = "block";
        document.body.classList.add('modal-open');
      });
    });
  
    closeButton.onclick = () => {
      modal.style.display = "none";
      document.body.classList.remove('modal-open');
    };
  
    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
      }
    };
});
  

const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeButton = document.querySelector(".close-button");

function openModal(content) {
modalText.innerHTML = content;
modal.style.display = "block";
}

closeButton.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}