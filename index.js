function toggleDropdown(index) {

    const dropdown = document.getElementById(`dropdown${index}`);
    const hr = document.getElementById(`hr${index}`);

    dropdown.classList.toggle("show");
    
    if (dropdown.classList.contains("show")) {
        hr.style.display = "none";  
    } else {
        hr.style.display = "block"; 
    }
}