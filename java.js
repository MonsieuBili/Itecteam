/*bhutonas*/
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const body = document.querySelector("body");

darkModeToggle.addEventListener("change", function() {
  body.classList.toggle("dark-mode");
});
/*HIDE HTML COMPONENTS
function hideElement() {
			// Get the element to be hidden
			var element = document.getElementsByTagName("p")[0];
     
			// Add the "hidden" class to the element
			element.classList.add("hidden");
      document.getElementById("lyric").hidden = true;
      document.getElementById("button-addon2").hidden = true;
     
		}*/
