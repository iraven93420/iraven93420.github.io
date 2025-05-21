const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Retire active de tous les onglets
    tabs.forEach(t => t.classList.remove("active"));
    // Cache tous les contenus
    contents.forEach(c => c.classList.add("hidden"));

    // Active l'onglet cliqué
    tab.classList.add("active");

    // Affiche le contenu lié
    const targetId = tab.getAttribute("data-target");
    document.getElementById(targetId).classList.remove("hidden");
  });
});


  function showImage(button) {
    const card = button.closest('.project-card');
    const img = card.querySelector('img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');

    modal.style.display = 'block';
    modalImg.src = img.src;
  }

  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
