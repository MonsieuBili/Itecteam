var ttt;

async function postData(url = "", data = {}) {

    const response = await fetch(url, {
      method: "POST",
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + ttt
      
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(data), 
    });
    return response.json(); 
  }

function idk_click() {
    ttt = document.getElementById("tokeninp").value
    document.getElementById("token_req").style.display = "none";
    document.getElementById("poem_gen").style.display = "flex";
}

document.getElementById("button-addon2").addEventListener('click', () => {
    
      var l = document.getElementById("lyric").value
      var question = "Hello! Can you write a poem of 5 verses each of 2 lyrics starting with "+ l;
      console.log(question)
      postData("https://api.openai.com/v1/chat/completions", {
          "model": "gpt-3.5-turbo",
          "messages": [{"role": "user", "content": question}]
        }).then((data) => {
        
        var singlePoem = data.choices[0].message.content
        console.log(doublePoem)
        var doublePoem = doubleSlashes(singlePoem)
        console.log(doublePoem)
        document.getElementById("poem").textContent = doublePoem;
        document.getElementById("lyric").value = "";    
      });
  });
    var poema = ""
  function doubleSlashes(str) {
    let doubledStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "/") {
        doubledStr += "//";
      } else {
        doubledStr += str[i];
      }
    }
    poema = doubledStr;
    document.getElementById("vocee").style.display = "block";
    return doubledStr;
  }

  function voce(str)
  {
    responsiveVoice.speak(poema);
  }