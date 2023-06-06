
function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

document.addEventListener("click", function(event) {
  var dropdownContent = document.getElementById("dropdown-content");
  var profileButton = document.querySelector(".profile-button");
  
  if (!dropdownContent.contains(event.target) && !profileButton.contains(event.target)) {
    dropdownContent.style.display = "none";
  }
});
