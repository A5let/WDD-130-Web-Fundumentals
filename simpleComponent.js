/* script.js */
function toggleDropdown(button) {
    // Get the dropdown container
    const dropdown = button.parentElement;
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    
    // Close all other dropdowns first
    const allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(dd => {
        if (dd !== dropdown) {
            dd.classList.remove('active');
            dd.querySelector('.dropdown-content').classList.remove('show');
        }
    });
    
    // Toggle the current dropdown
    dropdown.classList.toggle('active');
    dropdownContent.classList.toggle('show');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideDropdown = event.target.closest('.dropdown');
    
    if (!isClickInsideDropdown) {
        const allDropdowns = document.querySelectorAll('.dropdown');
        allDropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
            dropdown.querySelector('.dropdown-content').classList.remove('show');
        });
    }
});