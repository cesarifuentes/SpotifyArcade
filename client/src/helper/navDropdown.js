// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  // alert("closing");
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const myFunction = (e) => {
  e.preventDefault();
  // alert("opening");
  document.getElementById("myDropdown").classList.toggle("show");
};
