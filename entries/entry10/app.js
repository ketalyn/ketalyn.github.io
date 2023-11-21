let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

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
        path: "audios/10.mp3",
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
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);

function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }

 function reset_slider(){
    slider.value = 0;
}

function playsong(){
    track.play();
    Playing_song = true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
  }

function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}

function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}

// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#148F77";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }