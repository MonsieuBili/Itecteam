  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(otherButton => {
        if (otherButton !== button) {
          otherButton.style.display = 'none';
        }
      });
    });
  });

  async function createPoem() {
    var l = document.getElementById("lyric").value
    console.log(l)
    var a = await qqq(l)
    console.log(a[0].generated_text)
    var b = a[0].generated_text
    document.getElementById("test").textContent= b
}

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