$(document).ready(function () {

  // songContainer holds all of our songs
  var songContainer = $(".song-container");
  var songCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handleSongDelete);
  $(document).on("click", "button.edit", handleSongEdit);
  // Variable to hold our songs
  var songs;

  // The code below handles the case where we want to get songs for a specific band
  // Looks for a query param in the url for band_id
  var url = window.location.search;
  var bandId;
  //looks in the url for bandid
  if (url.indexOf("?band_id=") !== -1) {
    bandId = url.split("=")[1];
    getSongs(bandId);
  }
  // If there's no bandId we just get all songs as usual
  else {
    getSongs();
  }


  // This function grabs songs from the database and updates the view
  function getSongs(band) {
    bandId = band || "";
    if (bandId) {
      bandId = "/?band_id=" + bandId;
    }
    $.get("/api/songs" + bandId, function (data) {
      console.log("Songs", data);
      songs = data;
      if (!songs || !songs.length) {
        displayEmpty(band);
      }
      else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete songs
  function deleteSong(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/songs/" + id
    })
      .then(function () {
        getSongs(songCategorySelect.val());
      });
  }

  // InitializeRows handles appending all of our constructed song HTML inside songContainer
  function initializeRows() {
    songContainer.empty();
    var songsToAdd = [];
    for (var i = 0; i < songs.length; i++) {
      songsToAdd.push(createNewRow(songs[i]));
    }
    songContainer.append(songsToAdd);
  }

  // This function constructs a song's HTML
  function createNewRow(song) {

    var newSongRow = $("<div>");
    newSongRow.addClass("row");
    newSongRow.data("song", song);

    var newSongCol = $("<div>");
    newSongCol.addClass("col-md-3 lead");
    newSongCol.text(song.title);

    var newBandCol = $("<div>");
    newBandCol.addClass("col-md-3 lead");
    newBandCol.text(song.Band.name);

    var formattedDate = new Date(song.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");

    var newDateCol = $("<div>");
    newDateCol.addClass("col-md-4 small");
    newDateCol.html("Added:<br>" + formattedDate);

    var newButtonCol = $("<div>");
    newButtonCol.addClass("col-md-2");

    var deleteBtn = $("<button>");
    deleteBtn.text("Delete");
    deleteBtn.addClass("delete btn btn-danger");

    var editBtn = $("<button>");
    editBtn.text("Edit");
    editBtn.addClass("edit btn btn-info");

    newButtonCol.append(editBtn);
    newButtonCol.append(deleteBtn);

    newSongRow.append(newSongCol);
    newSongRow.append(newBandCol);
    newSongRow.append(newDateCol);
    newSongRow.append(newButtonCol);


    $(".song-container").prepend(newSongRow);


    return newSongRow;
  }

  // This function figures out which song we want to delete and then calls deleteSong
  function handleSongDelete() {
    var currentSong = $(this)
      .parent()
      .parent()
      .data("song");
    deleteSong(currentSong.id);
  }

  // This function figures out which song we want to edit and takes it to the appropriate url
  function handleSongEdit() {
    var currentSong = $(this)
      .parent()
      .parent()
      .data("song");
    window.location.href = "/cms?song_id=" + currentSong.id;
  }

  // This function displays a message when there are no songs
  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for Band #" + id;
    }
    songContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No songs yet" + partial + ", navigate <a href='/cms" + query +
      "'>here</a> in order to get started.");
    songContainer.append(messageH2);
  }

});
