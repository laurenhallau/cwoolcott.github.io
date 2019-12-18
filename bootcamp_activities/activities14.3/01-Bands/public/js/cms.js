$(document).ready(function () {
  // Getting jQuery references to the song title, form, and band select
  var titleInput = $("#title");
  var cmsForm = $("#cms");
  var bandSelect = $("#band");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a song)
  var url = window.location.search;
  var songId;
  var bandId;
  // Sets a flag for whether or not we're updating a song to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the song id from the url
  // In '?song_id=1', songId is 1
  if (url.indexOf("?song_id=") !== -1) {
    songId = url.split("=")[1];
    getSongData(songId, "song");
  }
  // Otherwise if we have an band_id in our url, preset the band select box to be our Band
  else if (url.indexOf("?band_id=") !== -1) {
    bandId = url.split("=")[1];
  }

  // Getting the bands, and their songs
  getBands();

  // A function for handling what happens when the form to create a new song is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the song if we are missing a title, or band
    if (!titleInput.val().trim() || !bandSelect.val()) {
      return;
    }
    // Constructing a newSong object to hand to the database
    var newSong = {
      title: titleInput
        .val()
        .trim(),
      BandId: bandSelect.val()
    };

    // If we're updating a song run updateSong to update a song
    // Otherwise run submitSong to create a whole new song
    if (updating) {
      newSong.id = songId;
      updateSong(newSong);
    }
    else {
      submitSong(newSong);
    }
  }

  // Submits a new song and brings user to song page upon completion
  function submitSong(song) {
    $.post("/api/songs", song, function () {
      window.location.href = "/song";
    });
  }

  // Gets song data for the current song if we're editing, or if we're adding to an band's existing songs
  function getSongData(id, type) {
    var queryUrl;
    switch (type) {
      case "song":
        queryUrl = "/api/songs/" + id;
        break;
      case "band":
        queryUrl = "/api/bands/" + id;
        break;
      default:
        return;
    }
    $.get(queryUrl, function (data) {
      if (data) {
        console.log(data.BandId || data.id);
        // If this song exists, prefill our cms forms with its data
        titleInput.val(data.title);
        bandId = data.BandId || data.id;
        // If we have a song with this id, set a flag for us to know to update the song
        // when we hit submit
        updating = true;
      }
    });
  }

  // A function to get Bands and then render our list of Bands
  function getBands() {
    $.get("/api/bands", renderBandList);
  }
  // Function to either render a list of bands, or if there are none, direct the user to the page
  // to create an band first
  function renderBandList(data) {
    if (!data.length) {
      window.location.href = "/bands";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createBandRow(data[i]));
    }
    bandSelect.empty();
    console.log(rowsToAdd);
    console.log(bandSelect);
    bandSelect.append(rowsToAdd);
    bandSelect.val(bandId);
  }

  // Creates the band options in the dropdown
  function createBandRow(band) {
    var listOption = $("<option>");
    listOption.attr("value", band.id);
    listOption.text(band.name);
    return listOption;
  }

  // Update a given song, bring user to the song page when done
  function updateSong(song) {
    $.ajax({
      method: "PUT",
      url: "/api/songs",
      data: song
    })
      .then(function () {
        window.location.href = "/song";
      });
  }
});
