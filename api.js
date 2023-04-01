
var ttt;

var getJSON = function(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function() {

        var status = xhr.status;

        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };

    xhr.send();
};

getJSON('https://64287389ebb1476fcc38d8e6.mockapi.io/secret_key',  function(err, data) {

    if (err != null) {
        console.error(err);
    } else {

        var text = data


        ttt = text[0].key 
    }
});

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
    //ttt = document.getElementById("tokeninp").value
    document.getElementById("token_req").style.display = "none";
    document.getElementById("poem_gen").style.display = "flex";
}

document.getElementById("button-addon2").addEventListener('click', () => {
    
      var l = document.getElementById("lyric").value
      var question = "Hello! Can you write a poem starting with "+ l;
      console.log(question)
      postData("https://api.openai.com/v1/chat/completions", {
          "model": "gpt-3.5-turbo",
          "messages": [{"role": "user", "content": question}]
        }).then((data) => {
        
        var singlePoem = data.choices[0].message.content
        document.getElementById("poem").innerHTML = singlePoem.replaceAll("\n", "<br>");
        document.getElementById("lyric").value = "";    
      });
  });

