
import React, {useState} from 'react';
// const fetch = require('node-fetch');
const url = 'https://jisho.org/api/v1/search/words?keyword=cat'
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));


// function findInput(){
//   document.querySelector("button").addEventListener(
//   'click', function(){ 
//     var input = document.querySelector("input").value;
//     ;}, false);

// } 



export default function App() {
  const [input, setInput] = useState('test')

  function changeInput(event){
    const {text, value} = event.target;
    return setInput(value)

  }

  function handleClick(){
    console.log("button clicked")

  }
 


  



  return (
    <div className="App">
    <p>Message to translate</p>

    <input type="text" onChange={changeInput} value={input} />
    <br/>
    <button type="submit" class="button-4"role="button" onClick={handleClick} >Translate</button>
    
    
    </div>
  );
}
