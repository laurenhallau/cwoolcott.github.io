const music = {
  band: "The Beatles",
  album: "Abbey Road"
};

// write code between the <p> tags to output the data from the music object above
const songSnippet = `${music.band} had an album ${music.album}!`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;
