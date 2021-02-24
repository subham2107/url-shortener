const input=document.querySelector('#input');
const output=document.querySelector('#output');
const shortenButton=document.querySelector('#shorten-button');
const copyButton=document.querySelector('#copy-button');


shortenButton.addEventListener('click',()=>{
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
          output.value = `${input.value}/u/${json.id}`;
          copyButton.addEventListener('click',()=>{
            const copyText = document.querySelector('#output');
            copyText.select();
            document.execCommand('copy');
        });
      });
      
});

