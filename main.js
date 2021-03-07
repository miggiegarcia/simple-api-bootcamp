let word=document.getElementById("typeWord");
let button=document.getElementById("search");
let paragraph =document.getElementById("showMovieTitle");

const key = "<word>";

button.addEventListener('click',function(){

document.createElement("LI")
let ul =document.getElementById("returnMeaning")
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/<word>`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {


      console.log(response)
      console.log(response.results[0].link.url);

      response.results.forEach( (titles, i) =>{
        let li = document.createElement("LI")
        let a = document.createElement("A")
        let url = response.results[i++].link.url
        let newContent = document.createTextNode(response.results[i].link.url);
            a.appendChild(newContent);
          a.href= url

        li.innerHTML=response.results[i].display_word
        li.appendChild(a);
        ul.appendChild(li);
        console.log(response.results[i].display_word);
      })
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
})
