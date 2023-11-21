let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let autoplay = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');

let All_song = [
    {
        name: "1",
        path: "audios/1.mp3",
        img: "imgs/1.jpg",
        singer: "..."
    },

    {
        name: "2",
        path: "audios/2.mp3",
        img: "imgs/2.jpg",
        singer: "..."
    },

    {
        name: "3",
        path: "audios/3.mp3",
        img: "imgs/3.jpg",
        singer: "..."
    },

    {
        name: "4",
        path: "audios/4.mp3",
        img: "imgs/4.jpg",
        singer: "..."
    },

    {
        name: "5",
        path: "audios/5.mp3",
        img: "imgs/5.jpg",
        singer: "..."
    },

    {
        name: "6",
        path: "audios/6.mp3",
        img: "imgs/6.jpg",
        singer: "..."
    },

    {
        name: "7",
        path: "audios/7.mp3",
        img: "imgs/7.jpg",
        singer: "..."
    },

    {
        name: "8",
        path: "audios/8.mp3",
        img: "imgs/8.jpg",
        singer: "..."
    },

    {
        name: "9",
        path: "audios/9.mp3",
        img: "imgs/9.jpg",
        singer: "..."
    },

    {
        name: "10",
        path: "audios/0.mp3",
        img: "imgs/10.jpg",
        singer: "..."
    },

    {
        name: "11",
        path: "audios/11.mp3",
        img: "imgs/11.jpg",
        singer: "..."
    },

    {
        name: "12",
        path: "audios/12.mp3",
        img: "imgs/12.jpg",
        singer: "..."
    },

    {
        name: "13",
        path: "audios/13.mp3",
        img: "imgs/13.jpg",
        singer: "..."
    },

    {
        name: "14",
        path: "audios/14.mp3",
        img: "imgs/14.jpg",
        singer: "..."
    },

    {
        name: "15",
        path: "audios/15.mp3",
        img: "imgs/15.jpg",
        singer: "..."
    },

    {
        name: "16",
        path: "audios/16.mp3",
        img: "imgs/16.jpg",
        singer: "..."
    },

    {
        name: "17",
        path: "audios/17.mp3",
        img: "imgs/17.jpg",
        singer: "..."
    },

    {
        name: "18",
        path: "audios/18.mp3",
        img: "imgs/18.jpg",
        singer: "..."
    },

    {
        name: "19",
        path: "audios/19.mp3",
        img: "imgs/19.jpg",
        singer: "..."
    }
];


function load_track(index_no){
    track_src = ALL_song[index_no].path;
    title.innerHTML = ALL_song[index_no].name;
    track_image.src = ALL_song[index_no].img;
    artist.innerHTML = ALL_song[index_no].singer;
    track.load();
}
load_track[index_no];

function justplay(){
    if(playing_song==false){
        playing_song();
    }else{
        pausesong();
    }
}

function playsong(){
    track.play();
    playing_song = true;
    play_innerHTML = '<i class="fa fa-pause"></i>';
}

function pausesong(){
    track.play();
    playing_song = true;
    play_innerHTML = '<i class="fa fa-play"></i>';
}

function next_song(){
    if (index_no < ALL_song.length - 1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}