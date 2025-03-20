
// Reset chat (clear search and collapse all accordions)
function resetChat() {
    document.getElementById("searchInput").value = "";
    let collapseElements = document.querySelectorAll('.accordion-collapse');
    collapseElements.forEach(collapse => collapse.classList.remove('show'));
}

// Search Help Topics
function searchHelp() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        let button = item.querySelector(".accordion-button");
        let content = item.querySelector(".accordion-body").textContent.toLowerCase();

        if (button.textContent.toLowerCase().includes(input) || content.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
