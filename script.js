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

let onLecture = true
