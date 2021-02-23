const input=document.querySelector('#input');
const output=document.querySelector('#output');
const generateButton=document.querySelector('#generate-button');
const resetButton=document.querySelector('#reset-button');


generateButton.addEventListener('click',()=>{
    fetch('./api/urls/', {
        method: 'POST',
        body: JSON.stringify({
            long_url: input.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
  .then((response) => response.json())
      .then((json) => {
          output.value = json.id;
      });
      
});

resetButton.addEventListener('click',()=>{
    input.value="";
    output.value="";
    });