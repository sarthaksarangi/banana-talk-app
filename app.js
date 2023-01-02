var btnTranslate= document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function translationURL(text){
 return serverURL+"?text="+text;
}
function errorHandler(error){
 console.log('Error Occured')
 alert('Something is wrong with the server')
}

function clickHandler(){
    var inputTEXT = txtInput.value;
    fetch(translationURL(inputTEXT))
         .then(response=> response.json)
         .then(json=> {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler());

