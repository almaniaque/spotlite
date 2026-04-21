let chemin = document.getElementById("play");
let audio = document.getElementById("audio");
let piste = document.getElementById("piste");
//    cheminplay/pause
let lecture = false
chemin.addEventListener("click", changeIconePlay);
function changeIconePlay() {
    if (lecture) {
        audio.pause();
        chemin.innerHTML = '<i class="fa-solid fa-play"></i>';
        lecture = false;
    } else {
        audio.play();
        chemin.innerHTML = '<i class="fa-solid fa-pause"></i>';
        lecture = true;
    }
}

audio.addEventListener("timeupdate", () => {
    let valeur = (audio.currentTime / audio.duration) * 100;
    piste.value = valeur;
});

piste.addEventListener("input", () => {
    let temps = (piste.value / 100) * audio.duration;
    audio.currentTime = temps;
});

// java volume

let slider = document.getElementById("vrange");

const plus = document.getElementById("plus")
const moins = document.getElementById("moins")

slider.addEventListener("input", () => {
    audio.volume = slider.value / 100;
});


plus.addEventListener("click", () => {
    let valeur = parseInt(slider.value, 10);
    valeur = Math.min(100, valeur + 10);
    console.log(slider.value);


    slider.value = valeur;

});
moins.addEventListener("click", () => {
    let valeur = parseInt(slider.value, 10);
    valeur = Math.max(0, valeur - 10);
    console.log(slider.value);


    slider.value = valeur;

});


const bibliotheque = [
    chanson1 = {
        titre = "powerful-dramatic-trailer",
        artiste = "artmylife",
        audio = ("./bibliotehqueMusical/artmylife-powerful-dramatic-trailer-514242")
    },
    chanson2 = {
        titre = "joyful-rhythm-walk-funk",
        artiste = "lightbeatsmusic",
        audio = ("./bibliotehqueMusical/lightbeatsmusic-joyful-rhythm-walk-funk-513936"),
    },
    chanson3 = {
        titre = "stomp-drum-percussion",
        artiste = "energysound",
        audio = ("./bibliotehqueMusical/energysound-stomp-drum-percussion-513744"),
    },
    chanson4 = {
        titre = "stomp-action-music",
        artiste = "energysound-stomp",
        audio = ("./bibliotehqueMusical/energysound-stomp-action-music-513718"),
    },
    chanson5 = {
        titre = "dance-playful-night",
        artiste = "alexzavesa",
        audio = ("./bibliotehqueMusical/alexzavesa-dance-playful-night-510786"),
    },
    chanson6 = {
        titre = "powerful-percussion",
        artiste = "energysound",
        audio = ("./bibliotehqueMusical/energysound-powerful-percussion-513717"),
    },
    chanson7 = {
        titre = "action-trailer-promo-rock",
        artiste = "magpiemusic",
        audio = ("./bibliotehqueMusical/magpiemusic-action-trailer-promo-rock-513687"),
    },
    chanson8 = {
        titre = "action-man-the-action-sport",
        artiste = "magpiemusic",
        audio = ("./bibliotehqueMusical/magpiemusic-action-man-the-action-sport-513684")
    }
];
