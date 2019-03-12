// on va utiliser le $ get pour agfficher url de la page sur localhost
// on a creer une foction avec du forEach pour parcourrir tous les elements 
$.get('http://localhost:3000/movies',function (response) {
    response.forEach(function(movie) {
// on a creer des  div  dans le  js et on a fait un lien entre le html et  js
        const div =document.createElement('div');
        div.innerHTML = movie.movie_name;
        document.body.appendChild(div)
        
    })
    
});
 // la funtion permet l'envoie des objets dans le back

function send () {
 var movie_name = document.querySelector('#movie_name').Value;
 console.log(movie_name);
 $.post('http://localhost:3000/movies', {movie_name : movie_name}, function (response) {
    console.log(response);
 });
}