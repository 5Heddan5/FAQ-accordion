function toggleDropdown(button, index) {
    const dropdown = document.getElementById(`dropdown${index}`);
    const hr = document.getElementById(`hr${index}`);
    const imgElement = button.querySelector('img'); 

    dropdown.classList.toggle("show");

    if (dropdown.classList.contains("show")) {
        hr.style.display = "none"; 
    } else {
        hr.style.display = "block"; 
    }

    if (imgElement.src.includes('icon-plus.svg')) {
        imgElement.src = 'assets/images/icon-minus.svg'; 
    } else {
        imgElement.src = 'assets/images/icon-plus.svg'; 
    }
}
