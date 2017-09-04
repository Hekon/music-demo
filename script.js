// Kintamasis h1 title elemento keitimui
let titleElement = document.getElementsByClassName("main-title")[0];

// H1 pavadinimo keitimas
titleElement.innerHTML = "Muzoniuks";

//Pridedam papildoma klase
titleElement.classList.add("header-title");

//Pakeiskim stiliu - mygtuko spalva
titleElement.style.fontStyle = "italic";

//Kai paspaudzia addAlbum
// function addAlbum() {
//     console.log ("pridedu Albuma");
// };

// let addAlbumButton = document.getElementsByClassName(".btn-save-album")[0];
let addAlbumButton = document.querySelector(".btn-save-album");

addAlbumButton.addEventListener("click", addAlbum);

// function addAlbum() {
//     console.log ("pridedu Albuma");
// };

//album listas
let albumList = [];

//Formos elementai
let artistElement = document.querySelector("#artist");
let albumElement = document.querySelector("#album");
let releaseDateElement = document.querySelector("#releaseDate");
let imageElement = document.querySelector("#image");

function addAlbum() {
    //Nuskaitom reiksmes
    let artist = artistElement.value;
    let album = albumElement.value;
    let date = releaseDateElement.value;
    let image = imageElement.files[0];
    console.log("Atlikejas", artist, album, date, image);
    
    if (!artist || !album || !date || !image) {
        alert("Neivesti laukeliai");
        return;
    }

    albumList.push({
        "Artist": artist,
        "Album": album,
        "Release_date": date,
        "Cover": image.name
    });
}