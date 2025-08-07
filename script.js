const moodMap = {
  happy: {
    bg: "#fff9c4",
    song: `<iframe width="300" height="180" src="https://www.youtube.com/embed/ZbZSe6N_BXs" title="Happy - Pharrell Williams" frameborder="0" allowfullscreen></iframe>`
  },
  sad: {
    bg: "#b3cde0",
    song: `<iframe width="300" height="180" src="https://www.youtube.com/embed/0put0_a--Ng" title="Let Her Go - Passenger" frameborder="0" allowfullscreen></iframe>`
  },
  energetic: {
    bg: "#ffcccb",
    song: `<iframe width="300" height="180" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Energetic Song" frameborder="0" allowfullscreen></iframe>`
  },
  calm: {
    bg: "#c8e6c9",
    song: `<iframe width="300" height="180" src="https://www.youtube.com/embed/2OEL4P1Rz04" title="Weightless - Marconi Union" frameborder="0" allowfullscreen></iframe>`
  }
};

function setMood(mood) {
  document.body.style.backgroundColor = moodMap[mood].bg;
  document.getElementById('suggestion').innerHTML = `
    <h2>Here's a song for your ${mood} mood:</h2>
    ${moodMap[mood].song}
  `;
}
