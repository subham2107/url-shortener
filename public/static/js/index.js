const input=document.querySelector('#input');
const output=document.querySelector('#output');
const generateButton=document.querySelector('#generate-button');
const resetButton=document.querySelector('#reset-button');


generateButton.addEventListener('click',()=>{
  const url = new URL('http://localhost:3000/api/urls/post');
  const param = { long_url: input.value};
  Object.keys(param).forEach((key) => {
      url.searchParams.append(key, param[key]);
  });
  url.search = new URLSearchParams(param).toString();
  
  fetch(url)
  .then((response) => response.json())
      .then((json) => {
          output.value = json.id;
      });
      
});

resetButton.addEventListener('click',()=>{
    input.value="";
    output.value="";
    });