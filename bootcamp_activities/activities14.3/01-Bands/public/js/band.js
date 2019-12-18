$(document).ready(function () {
  // Getting references to the name input and band container, as well as the table body
  var nameInput = $("#band-name");
  var bandList = $("tbody");
  var bandContainer = $(".band-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Band
  $(document).on("submit", "#band-form", handleBandFormSubmit);
  $(document).on("click", ".delete-band", handleDeleteButtonPress);

  // Getting the initial list of Bands
  getBands();

  // A function to handle what happens when the form is submitted to create a new Band
  function handleBandFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim()) {
      return;
    }
    // Calling the upsertBand function and passing in the value of the name input
    upsertBand({
      name: nameInput
        .val()
        .trim()
    });
  }

  // A function for creating an band. Calls getBands upon completion
  function upsertBand(bandData) {
    $.post("/api/bands", bandData)
      .then(getBands);
  }

  // Function for creating a new list row for bands
  function createBandRow(bandData) {
    var newTr = $("<tr>");
    newTr.data("band", bandData);
    newTr.append("<td>" + bandData.name + "</td>");
    if (bandData.Songs) {
      newTr.append("<td> " + bandData.Songs.length + "</td>");
    } else {
      newTr.append("<td>0</td>");
    }
    newTr.append("<td><a href='/song?band_id=" + bandData.id + "'>Go to Songs</a></td>");
    newTr.append("<td><a href='/cms?band_id=" + bandData.id + "'>Create a Song</a></td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-band'>Delete Band</a></td>");
    return newTr;
  }

  // Function for retrieving bands and getting them ready to be rendered to the page
  function getBands() {
    $.get("/api/bands", function (data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createBandRow(data[i]));
      }
      renderBandList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of bands to the page
  function renderBandList(rows) {
    bandList.children().not(":last").remove();
    bandContainer.children(".alert").remove();
    if (rows.length) {
      $("#error-message").html("");
      $("#bandsTable").css("display", "block");
      console.log(rows);
      bandList.prepend(rows);
    }
    else {
      $("#bandsTable").css("display", "none");
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no bands
  function renderEmpty() {
    var alertDiv = $("<div>");
    $("#error-message").text("You must create a Band before you can create a Song.");
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("band");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/bands/" + id
    })
      .then(getBands);
  }
});
