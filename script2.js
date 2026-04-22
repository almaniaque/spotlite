let onLecture = true;
console.log("fonctionnelle")

let listeB = document.createElement("section");
listeB.setAttribute("id", "Main2")
document.querySelector("main").appendChild(listeB);

let menu = document.createElement("section");
menu.setAttribute("id", "menu")
document.getElementById("Main2").appendChild(menu);

let liste = document.createElement("ul");
document.getElementById("menu").appendChild(liste)
let music = document.createElement("li");
let video = document.createElement("li");
let podcast = document.createElement("li");
music.textContent = ("music");
video.textContent = ("video");
podcast.textContent = ("podcast");
document.querySelector("ul").appendChild(music);
document.querySelector("ul").appendChild(video);
document.querySelector("ul").appendChild(podcast);

let BIB = document.createElement("section");
BIB.setAttribute("id", "bibliotheque")
document.getElementById("Main2").appendChild(BIB);

let song = document.createElement("audio");
song.setAttribute("id", "audio");
document.querySelector("body").appendChild(song);

let Bibliotheque = [
    {
        image: "./jaquette/1.jpg",
        titre: "powerful-dramatic-trailer",
        artiste: "artmylife",
        music: "./bibliothequeMusical/artmylife-powerful-dramatic-trailer.mp3"
    },
    {
        image: "./jaquette/2.jpg",
        titre: "joyful-rhythm-walk-funk",
        artiste: "lightbeatsmusic",
        music: "./bibliothequeMusical/lightbeatsmusic-joyful-rhythm-walk-funk.mp3",
    },
    {
        image: "./jaquette/3.jpg",
        titre: "stomp-drum-percussion",
        artiste: "energysound",
        music: "./bibliothequeMusical/energysound-stomp-drum-percussion.mp3",
    },
    {
        image: "./jaquette/4.jpg",
        titre: "stomp-action-music",
        artiste: "energysound",
        music: "./bibliothequeMusical/energysound-stomp-action-music.mp3",
    },
    {
        image: "./jaquette/5.jpg",
        titre: "dance-playful-night",
        artiste: "alexzavesa",
        music: "./bibliothequeMusical/alexzavesa-dance-playful-night.mp3",
    },
    {
        image: "./jaquette/6.jpg",
        titre: "powerful-percussion",
        artiste: "energysound",
        music: "./bibliothequeMusical/energysound-powerful-percussion.mp3",
    },
    {
        image: "./jaquette/7.jpg",
        titre: "action-trailer-promo-rock",
        artiste: "magpiemusic",
        music: "./bibliothequeMusical/magpiemusic-action-trailer-promo-rock.mp3",
    },
    {
        image: "./jaquette/1.jpg",
        titre: "action-man-the-action-sport",
        artiste: "magpiemusic",
        music: "./bibliothequeMusical/magpiemusic-action-man-the-action-sport.mp3"
    }
];


Bibliotheque.forEach(creerElementHtml);
function creerElementHtml(element) {
    let listeLect = document.createElement("article");
    document.getElementById("bibliotheque").appendChild(listeLect);
    listeLect.setAttribute("class", "pochette")

    let img = document.createElement("img");
    let listeArtiste = document.createElement("p");
    let listeTitre = document.createElement("p");

    listeLect.appendChild(img);
    listeLect.appendChild(listeArtiste);
    listeLect.appendChild(listeTitre);

    img.setAttribute("src", element.image)
    listeArtiste.textContent = (element.artiste);
    listeTitre.textContent = (element.titre);

    listeLect.addEventListener("click", () => {
        audio.src = element.music;
        audio.play();
        enRoute = true
        lecture.innerHTML = '<i class="fa-solid fa-pause"></i>'
        enteteA.textContent = (element.artiste)
        enteteT.textContent = (element.titre)
    });

};

let lecture = document.getElementById("play");
let audio = document.getElementById("audio");
let piste = document.getElementById("piste");
let enteteA = document.getElementById("artiste");
let enteteT = document.getElementById("titre");

// lecture play/pause

let enRoute = false
lecture.addEventListener("click", changeIconePlay);
function changeIconePlay() {
    if (enRoute) {
        audio.pause();
        lecture.innerHTML = '<i class="fa-solid fa-play"></i>';
        enRoute = false
    }
    else {
        audio.play();
        lecture.innerHTML = '<i class="fa-solid fa-pause"></i>';
        enRoute = true;

    }
};

audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
        let valeur = (audio.currentTime / audio.duration) * 100;
        piste.value = valeur;
    }
});

piste.addEventListener("input", () => {
    let temps = (piste.value / 100) * audio.duration;
    audio.currentTime = temps;
});

let slider = document.getElementById("vrange");
let plus = document.getElementById("plus");
let moins = document.getElementById("moins");


slider.addEventListener("input", () => {
    audio.volume = slider.value / 100;
});

plus.addEventListener("click", () => {
    let valeur = parseInt(slider.value, 10);
    valeur = Math.min(100, valeur + 10);
    slider.value = valeur;
    audio.volume = slider.value / 100;
});

moins.addEventListener("click", () => {
    let valeur = parseInt(slider.value, 10);
    valeur = Math.max(0, valeur - 10);
    slider.value = valeur;
    audio.volume = slider.value / 100;

});

// fonction music suivante/precedente

let pass = document.getElementById("avant");
let retour = document.getElementById("arriere");

let chanson = 0;

pass.addEventListener("click", () => {

    if (chanson + 1 === Bibliotheque.length) {
        chanson = 0;
    } else {
        chanson++;
    }

    audio.src = Bibliotheque[chanson].music;
    audio.play();
    enRoute = true;
    lecture.innerHTML = '<i class="fa-solid fa-pause"></i>';

    enteteA.textContent = Bibliotheque[chanson].artiste;
    enteteT.textContent = Bibliotheque[chanson].titre;
});

retour.addEventListener("click", () => {

    if (chanson === 0) {
        chanson = Bibliotheque.length - 1;
    } else {
        chanson--;
    }

    audio.src = Bibliotheque[chanson].music;
    audio.play();
    enRoute = true;
    lecture.innerHTML = '<i class="fa-solid fa-pause"></i>';

    enteteA.textContent = Bibliotheque[chanson].artiste;
    enteteT.textContent = Bibliotheque[chanson].titre;
});



// lecture aleatoire