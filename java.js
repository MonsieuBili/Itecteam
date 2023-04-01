
async function qqq(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/ismaelfaro/gpt2-poems.en",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
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