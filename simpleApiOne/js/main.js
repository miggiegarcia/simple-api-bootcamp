let pelicula=document.getElementById("typeMovieTitle");
let button=document.getElementById("search");
let paragraph =document.getElementById("showMovieTitle");

const key = "EOQLqyu59VbvxKO18vFcbvs7n8nGC8ww";

button.addEventListener('click',function(){
      // console.log(pelicula.value);
document.createElement("LI")
let ul =document.getElementById("resultList")
fetch(`https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${pelicula.value}&api-key=${key}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      // paragraph.textContent=JSON.stringify(response.results)
      // console.log(typeof pelicula);
      console.log(response)
      console.log(response.results[0].link.url);
      // console.log(response.results);
      // console.log(response.results[0].display_title);
      response.results.forEach( (titles, i) =>{
        let li = document.createElement("LI")
        let a = document.createElement("A")
        let url = response.results[i].link.url
        let newContent = document.createTextNode(response.results[i].link.url);
            a.appendChild(newContent);
          a.href= url

        li.innerHTML=response.results[i].display_title




        // // add the text node to the newly created div

        li.appendChild(a);
        ul.appendChild(li);

        console.log(response.results[i].display_title);
      })
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
})
// function addNewLi(){
//   let addToList = document.getElementById('addToList').value;
//   let li = document.createElement('LI');
//   li.addEventListener('click', (e) => {
//     let x = event.target;
//     x.style.textDecoration = "line-through";
//   updateCounter();
//   })
//   let newLi = document.createTextNode(addToList);
//
//   li.appendChild(newLi);
//   ul.appendChild(li);
// }
