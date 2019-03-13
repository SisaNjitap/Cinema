$.get('http:/localhost:3000/movies',function (response){
    response.forEach(function (movie) {
        const el = document.createElement('div');
        el.innerHTML = movie.movie_id;
        container.appendChild(el);    
    });
});

/*     function send() {
    const inputObject = document.getElementById('object').value;
    const inputCom = document.getElementById('commentaire').value;
    var input = {comments_name : inputObject, 
        comments_text : inputCom};


    $.post('http://localhost:3000/comments',
        {input},
        function(response){
          //  console.log(response)
    });
};
 */