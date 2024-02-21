var arr = [
  { songName: "Unforgettable", url: "./songs/French-Montana-Unforgettable.mp3", img: "./images/frech-montana.jpg", length: "3:56" },
  { songName: "Tu hai ki nahi", url: "./songs/Tu Hai Ki Nahi - Roy 320 Kbps.mp3", img: "./images/roy.jpg", length: "5:34" },
  { songName: "Sunflower", url: "./songs/Post_Malone_-_Sunflower.mp3", img: "./images/spiderman.jpg", length: "2:41" },
  { songName: "Heat Waves", url: "./songs/Heat-Waves_320(PagalWorld).mp3", img: "./images/heat-waves.jpg", length: "3:55" }
];

var allSongs = document.querySelector("#all-songs");

var audio = new Audio();
var selectedSong = 0;

var playingSong = document.querySelector("#left");

var play = document.querySelector("#play");
var prev = document.querySelector("#backward");
var next = document.querySelector("#forward");

function main(){
  var clutter = "";
  arr.forEach((song, index) => {
    clutter += `<div class="song-card" id="${index}">
    <div class="part-1">
      <img src="${song.img}" alt="" >
      <h2>${song.songName}</h2>
    </div>
    <h5>${song.length}</h5>
  </div>`
  });

  audio.src = arr[selectedSong].url;
  allSongs.innerHTML = clutter;

  playingSong.style.backgroundImage = `url(${arr[selectedSong].img})`;
};

main();


allSongs.addEventListener("click", function(details) {
  selectedSong = details.target.id
  main()
  play.innerHTML = `<i class="ri-pause-fill"></i>`
  flag = 1
  audio.play();
  // console.log(arr[0].url);
});

var flag = 0;

play.addEventListener("click", () => {
 if(flag == 0){
  play.innerHTML = `<i class="ri-pause-fill"></i>`
  main()
  audio.play()
  flag = 1;
 }else{
  play.innerHTML = `<i class="ri-play-fill"></i>`;
  main()
  audio.pause()
  flag = 0;
 }
});

next.addEventListener("click", () => {
  if(selectedSong < arr.length - 1){
    selectedSong++
    main()
    audio.play();
  } else{
    selectedSong = 0;
  }
});

prev.addEventListener("click", () => {
  if(selectedSong > 0){
    selectedSong--
    main()
    audio.play();
  } else{
    selectedSong = arr.length - 1;
  }
});


