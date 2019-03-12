const fs = require("fs"); //ajout
const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser'); // ajout pour mes commentaires
const dbFile = "test.db";
const db = new sqlite3.Database(dbFile);
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));  //ajout
app.use(bodyParser.jason());  //ajout


db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS movie (movie_id INTEGER PRIMARY KEY AUTOINCREMENT, movie_name VARCHAR(80), movie_year INTEGER, movie_genre VARCHAR(100), movie_director VARCHAR(100), movie_casting VARCHAR(300), movie_time VARCHAR(10), synopsis VARCHAR(2000), movie_img TEXT UNIQUE)');

    db.run('CREATE TABLE IF NOT EXISTS awards (awards_id INTEGER PRIMARY KEY AUTOINCREMENT, Oscars VARCHAR(1000), Golden_Globes VARCHAR(1000), Screen_Actors_Guild_Awards VARCHAR(500), BAFTA_Awards VARCHAR(500), People_Choice VARCHAR(500), MTV_Movie_Awards VARCHAR(500), Teen_Choice_Awards VARCHAR(500), Festival_De_Cannes VARCHAR(500), Satellite_Awards VARACHAR(500), César VARCHAR(500), movie_id INTEGER, FOREIGN KEY (movie_id) REFERENCES movie (movie_id))');

    db.run('CREATE TABLE IF NOT EXISTS comments (comments_name VARCHAR (30), comments_text VARCHAR (10000), movie_id INTEGER, FOREIGN KEY (movie_id) REFERENCES movie (movie_id) )');

    db.run('INSERT INTO movie (movie_name, movie_year, movie_genre, movie_director, movie_casting, movie_time, synopsis, movie_img ) VALUES (?,?,?,?,?,?,?,?)', 'Le Roi Lion', 1994, 'Film d\'animation', 'Roger Allers & Rob Minkoff', 'Matthew Broderick, Rowan Atkinson, Whoopi Goldberg', '1h19', 'L\'histoire se déroule sur les hautes terres d\'Afrique où règne Mufasa, lion tout puissant respecté et admiré pour sa grande sagesse et sa générosité. Son jeune fils, Simba, doit lui succéder un jour. Naïf et turbulent, le lionceau imagine son futur royaume comme lieu enchanté où il fera bon vivre, s\'amuser en donnant des ordres. La réalité sera bien différente et Simba l\'apprendra à ses dépens.', 'http://fr.web.img6.acsta.net/medias/nmedia/18/85/97/82/19858447.jpg');

    db.run('INSERT INTO movie (movie_name, movie_year, movie_genre, movie_director, movie_casting, movie_time, synopsis, movie_img ) VALUES (?,?,?,?,?,?,?,?)', 'The Dark Knight', 2008, 'Action/Thriller', 'Christopher Nolan', 'Christian Bale, Heath Ledger, Gary Oldman', '2h33', 'Batman aborde une phase décisive de sa guerre au crime. Avec l\'aide du lieutenant de police Jim Gordon et du nouveau procureur Harvey Dent, il entreprend de démanteler les dernières organisations criminelles qui infestent les rues de la ville. L\'association s\'avère efficace, mais le trio se heurte bientôt à un nouveau génie du crime qui répand la terreur et le chaos dans Gotham : le Joker. On ne sait pas d\'où il vient ni qui il est. Ce criminel possède une intelligence redoutable doublé d\'un humour sordide et n\'hésite pas à s\'attaquer à la pègre locale dans le seul but de semer le chaos.', 'https://i2.cdscdn.com/pdt2/9/4/8/1/700x700/clo4035519880948/rw/poster-batman-the-dark-knightle-joker-heath.jpg');

    db.run('INSERT INTO movie (movie_name, movie_year, movie_genre, movie_director, movie_casting, movie_time, synopsis, movie_img ) VALUES (?,?,?,?,?,?,?,?)', '500 jours ensemble', 2009, 'Drame/Romance', 'Marc Webb', 'Joseph Gordon-Levitt, Zooey Deschanel, Chloë Moretz', '1h35', 'La voix off prévient en ouverture du film : « c\'est l\'histoire d\'un garçon qui rencontre une fille ce n\'est pas une histoire d\'amour ».En dépit de cet avertissement, les deux protagonistes principaux se lancent dans une valse hésitation amoureuse, chacun ayant un regard différent sur leur relation.', 'http://fr.web.img5.acsta.net/c_215_290/medias/nmedia/18/68/74/89/19139318.jpg');

    db.run('INSERT INTO movie (movie_name, movie_year, movie_genre, movie_director, movie_casting, movie_time, synopsis, movie_img ) VALUES (?,?,?,?,?,?,?,?)', 'Forest Gump', 1994, 'Drame historique', 'Robert Zemeckis', 'Tom Hanks, Robin Wright, Gary Sinise', '2h22', 'Au fil des différents interlocuteurs qui viennent s\'asseoir tour à tour à côté de lui sur un banc, Forrest Gump raconte la fabuleuse histoire de sa vie. Sa vie est à l\'image d\'une plume qui se laisse porter par le vent, tout comme Forrest se laisse porter par les événements qu\'il traverse dans l\'Amérique de la seconde moitié du 20e siècle.', 'https://images-na.ssl-images-amazon.com/images/I/41Al9falobL._SY450_.jpg');

    db.run('INSERT INTO movie (movie_name, movie_year, movie_genre, movie_director, movie_casting, movie_time, synopsis, movie_img ) VALUES (?,?,?,?,?,?,?,?)', 'Avengers : Infinity War', 2018, 'Drame/Super Héros', 'Anthony et Joe Russo', 'Josh Brolin, Robert Downey Jr, Chris Evans', '2h29', 'Thanos a commencé à recueillir les six Pierres d\'Infinité : la Pierre du Pouvoir, la Pierre de l\'Espace, la Pierre de Réalité, la Pierre de l\'Âme, la Pierre du Temps et la Pierre de l\'Esprit. Son objectif est de réunir ces six artefacts sur le Gant d\'Infinité, forgé jadis par le nain Eitri sur Nidavellir, afin d\'utiliser leur immense puissance pour détruire la moitié de la population de l\'Univers et rétablir ainsi un certain équilibre', 'https://static.fnac-static.com/multimedia/Images/3A/3A/EE/7B/8121914-1505-1505-1/tsp20180503150322/Affiche-Maxi-Avengers-Infinity-War-One-Sheet-61x91-5cm.jpg');

    db.run('INSERT INTO movie (movie_name, movie_year, movie_genre, movie_director, movie_casting, movie_time, synopsis, movie_img ) VALUES (?,?,?,?,?,?,?,?)', 'Blade Runner', 1982, 'Science Fiction', 'Ridley Scott', 'Harrison Ford, Rutger Hauer, Sean Young', '1h57', 'Dans les dernières années du 20e siècle, des milliers d\'hommes et de femmes partent à la conquête de l\'espace, fuyant les mégalopoles devenues insalubres. Sur les colonies, une nouvelle race d\'esclaves voit le jour : les répliquants, des androïdes que rien ne peut distinguer de l\'être humain. Cependant, suite à une révolte, ces derniers sont peu à peu retirés', 'http://i2.cdscdn.com/pdt2/0/5/9/1/700x700/clo4050819319059/rw/blade-runner-poster-affiche.jpg');

    db.run('INSERT INTO movie (movie_name, movie_year, movie_genre, movie_director, movie_casting, movie_time, synopsis, movie_img ) VALUES (?,?,?,?,?,?,?,?)', 'Mulholland Drive', 2001, 'Drame', 'David Lynch', 'Naomi Watts, Laura Harring, Justin Theroux', '2h26', 'A Hollywood, durant la nuit, Rita, une jeune femme, devient amnésique suite à un accident de voiture sur la route de Mulholland Drive. Elle fait la rencontre de Betty Elms, une actrice en devenir qui vient juste de débarquer à Los Angeles. Aidée par celle-ci, Rita tente de retrouver la mémoire ainsi que son identité.', 'https://images-na.ssl-images-amazon.com/images/I/41mCYn32PDL.jpg');

    db.run('INSERT INTO movie (movie_name, movie_year, movie_genre, movie_director, movie_casting, movie_time, synopsis, movie_img ) VALUES (?,?,?,?,?,?,?,?)', 'Drive', 2011, 'Thriller', 'Nicolas Winding Refn', 'Ryan Gosling, Bryan Cranston, Ron Perlman', '1h43', 'Un jeune homme solitaire, The Driver, conduit le jour à Hollywood pour le cinéma en tant que cascadeur et la nuit pour des truands. Ultra professionnel et peu bavard, il a son propre code de conduite. Jamais il n\'a pris part aux crimes de ses employeurs autrement qu\'en conduisant et au volant, il est le meilleur.', 'https://www.mauvais-genres.com/24416-large_default/drive-affiche-de-film-40x60-cm-2011-ryan-gosling-nwr-roul%C3%A9e-.jpg');

    db.run('INSERT INTO movie (movie_name, movie_year, movie_genre, movie_director, movie_casting, movie_time, synopsis, movie_img ) VALUES (?,?,?,?,?,?,?,?)', 'Fight Club', 1999, 'Drame', 'David Fincher', 'Edward Norton, Brad Pitt, Helena Bonham Carter', '2h19', 'Jack est un jeune expert en assurance insomniaque, désillusionné par sa vie personnelle et professionnelle. Lorsque son médecin lui conseille de suivre une thérapie afin de relativiser son mal-être, il rencontre dans un groupe d\'entraide Marla avec qui il parvient à trouver un équilibre.', 'https://i2.cdscdn.com/pdt2/5/5/8/1/700x700/auc7429703561558/rw/fight-club-impression-d-affiche-27-94-x-43-18-cm.jpg');

    db.run('INSERT INTO movie (movie_name, movie_year, movie_genre, movie_director, movie_casting, movie_time, synopsis, movie_img ) VALUES (?,?,?,?,?,?,?,?)', 'Le Voyage de Chihiro', 2001, 'Film d\'animation japonais', 'Hayao Miyazaki', 'Rumi Hiiragi, Miyu Irino, Mari )Natsuki', '2h04', 'La petite Chihiro accompagne ses parents dans une promenade sylvestre qui doit les conduire vers leur nouvelle maison en banlieue. Alors qu\'elle prend un raccourci à travers un tunnel peu emprunté, la petite famille se retrouve soudain en territoire inconnu. Le temps de retrouver leur chemin, ils font une halte dans un gigantesque restaurant en plein air, totalement déserté.', 'https://www.ismac.fr/wp-content/uploads/2017/12/le-voyage-de-chihiro-affiche-japonaise-01-hayao-miyazaki-spirited-away-poster.jpg');


    db.run('INSERT INTO awards (Oscars, Golden_Globes, movie_id) VALUES(?,?,?)', 'Meilleur chanson, meilleure musique', 'Meilleur film musical, Meilleure musique de film, Meilleure chanson originale', 1);
    db.run('INSERT INTO awards (Oscars, Golden_Globes, Screen_Actors_Guild_Awards, movie_id) VALUES(?,?,?,?)', 'Meilleur acteur dans un second rôle, Meilleur montage de son', 'Meilleur acteur dans un second rôle', 'Meilleur acteur dans un second rôle', 2);
    db.run('INSERT INTO awards (Oscars, Golden_Globes, BAFTA_Awards, People_Choice, movie_id) VALUES(?,?,?,?,?)', 'Oscar du meilleur film, Oscar du meilleur réalisateur, Oscar du meilleur scénario adapté, Oscar du meilleur acteur, Oscar du meilleur montage, Oscar des meilleurs effets visuels', 'Golden Globe du meilleur film dramatique, Golden Globe du meilleur réalisateur, Golden Globes du meilleur acteur dans un film dramatique', 'BAFTA des meilleurs effets visuels', 'People\'s Choice Awards', 4);
    db.run('INSERT INTO awards (People_Choice, MTV_Movie_Awards, Teen_Choice_Awards, movie_id) VALUES(?,?,?,?)', 'Film de l\'année', 'Meilleur film', 'Meilleur film d\'action, Meilleur acteur dans un film d\'action, Meilleure actrice dans un film d\'action', 5);
    db.run('INSERT INTO awards (Oscars, Golden_Globes, BAFTA_Awards, movie_id) VALUES(?,?,?,?)', 'Meilleurs décors, Meilleurs effets spéciaux', 'Meilleure musique de film', 'Meilleure Photographie, Meilleurs Costumes, Meilleurs Décors, Meilleur Montage, Meilleurs Maquillages, Meilleure Musique, Meilleur Son, Meilleurs Effets Spéciaux', 6);
    db.run('INSERT INTO awards (BAFTA_Awards, Festival_De_Cannes, César, movie_id) VALUES(?,?,?,?)', 'Meilleur Montage', 'Prix de la mise en scène', 'Meilleur film étranger', 7);
    db.run('INSERT INTO awards (Festival_De_Cannes, Satellite_Awards, movie_id) VALUES(?,?,?)', 'Prix de la mise en scène', 'Meilleur Acteur, Meilleur acteur, Meilleur acteur dans un second rôle, Meilleur réalisateur, Meilleur son', 8);
    db.run('INSERT INTO awards (Oscars, Satellite_Awards, movie_id) VALUES(?,?,?)', 'Meilleur film d\'animation', 'Meilleur film d\'animation', 10);

    db.run('INSERT INTO comments (movie_id) VALUES (?)', 1);
    db.run('INSERT INTO comments (movie_id) VALUES (?)', 2);
    db.run('INSERT INTO comments (movie_id) VALUES (?)', 3);
    db.run('INSERT INTO comments (movie_id) VALUES (?)', 4);
    db.run('INSERT INTO comments (movie_id) VALUES (?)', 5);
    db.run('INSERT INTO comments (movie_id) VALUES (?)', 6);
    db.run('INSERT INTO comments (movie_id) VALUES (?)', 7);
    db.run('INSERT INTO comments (movie_id) VALUES (?)', 8);
    db.run('INSERT INTO comments (movie_id) VALUES (?)', 9);
    db.run('INSERT INTO comments (movie_id) VALUES (?)', 10);


})

app.listen(3000, function (error) {
    if (!error) {
        console.log('ok');
    }
});

app.get('/', function (req, res) {

    db.all('SELECT * FROM movie NATURAL JOIN awards', function (error, data) {
        res.send(data);
    });

});

app.post('/comments', function (request, response) {
    db.run('INSERT INTO comments (comments_name, comments_text, movie_id) VALUES (?,?,?)', request.body.comments_name, request.body.comments_text, request.body.movie_id,function(error,data){
        response.send(data);
    });
});

app.get('/movies', function(request, response){
    db.all('SELECT * FROM movie WHERE movie_id', function (error, data) {
        response.send(data);
    });
})


app.get('/awards', function(request, response){
    db.all('SELECT * FROM awards WHERE awards_id', function(error,data){
        response.send(data);
    });
});