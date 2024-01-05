var notes = {
  1:{
    title: "Tajuk 1",
    body:"Isi dari catatan pertama",
    video: ""
  },
  2:{
    title: "Tajuk 2",
    body:"Isi dari catatan pertama",
    video: ""
  },
  3:{
    title: "Tajuk 3",
    body:"Isi dari catatan pertama",
    video: ""
  },
  4:{
    title: "Tajuk 4",
    body:"Isi dari catatan pertama",
    video: ""
  },
  5:{
    title: "Tajuk 5",
    body:"Isi dari catatan pertama",
    video: ""
  },
}
 
  
  function next(item) {
    var title = document.getElementById("noteTitle")
    var desc = document.getElementById("noteDesc")
    var video = document.getElementById("videoSection")

    title.innerHTML = notes[item].title
    desc.innerHTML = notes[item].body
    video.innerHTML = notes[item].video
    

  }

  