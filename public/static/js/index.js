const input=document.querySelector('#input');
const output=document.querySelector('#output');
const shortenButton=document.querySelector('#shorten-button');
const copyButton=document.querySelector('#copy-button');
const allButton=document.querySelector('#all-button');

function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };

allButton.addEventListener('click',()=>{
    
    fetch('./api/urls/')
    .then(response=>response.json())
    .then(urls => {
        const allUrls=document.querySelector('#all-urls');
        urls.forEach(url =>{
            const element=document.createElement('div');
            element.innerText=`\nOriginal: ${url.long_url}\nShortened: ${document.location.origin}/u/${url.id}`;
            allUrls.appendChild(element);
        });
    });
      
});



shortenButton.addEventListener('click',()=>{

    if(input.value.length===0 || isValidURL(input.value)===false)
    {
        alert('Please enter valid URL');
    }

   else{

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
          output.value = `${document.location.origin}/u/${json.id}`;
          copyButton.addEventListener('click',()=>{
            const copyText = document.querySelector('#output');
            copyText.select();
            document.execCommand('copy');
        });
      });
}
}
);



