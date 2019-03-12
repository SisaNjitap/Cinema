$.get('http:/localhost:3000/movies',function (response){
    response.forEach(function (movie) {
        const el = document.createElement('div');
        el.innerHTML = movie.movie_id;
        container.appendChild(el);    
    });
});

    function send() {
    const inputObject = document.getElementById('object').value;
    const inputCom = document.getElementById('commentaire').value;

    $.post('http://localhost:3000/comments',
        {comments_name: inputObject},
        {comments_text: inputCom},
        function(response){
            console.log(response)
    });
};
/* 
var = 
for (i = 0; i< movie.length; i++){

} */