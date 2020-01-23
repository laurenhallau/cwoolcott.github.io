let fullGuestList = [];
let myChart;

function populateTable() {
  const tbody = $("#tbody");
  tbody.html("");

  fullGuestList.forEach(guest => {
    // create and populate a table row
    newRow = $("<tr>");
    firstName = $("<td>" + guest.firstName + "</td>")
    lastName = $("<td>" + guest.lastName + "</td>")
    guests = $("<td>" + guest.guests + "</td>")

    newRow.append(firstName).append(lastName).append(guests);
    tbody.append(newRow);
  });
}

function sendGuests() {
  const firstName = $("#firstName").val();
  const lastName = $("#lastName").val();
  const guests = $("#guests").val();

  // validate form
  if (firstName === "" || lastName === "" || guests === "")  {
    $(".error").html("Missing Information");
    return;
  } else {
    $(".error").html("");
  }

  // create record
  const guestObj = {
    firstName: firstName,
    lastName: lastName,
    guests: guests,
    date: new Date().toISOString()
  };

  // add to beginning of current array of data
  fullGuestList.unshift(guestObj);

  populateTable();

  if (!navigator.onLine) {
      console.log("Offline Saving Locally");
      saveRecord(guestObj);
      return true;
  }

  //  send to server
  $.ajax({
    type: "POST",
    url: "/api/guests",
    data: guestObj,
    success: function(msg){
      console.log("success01");
        $("#firstName").val("");
        $("#lastName").val("");
        $("#guests").val(0);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("error01");
      console.log("Failed to Save DB - Saving Locally");
      saveRecord(guestObj);

    }
  });

}

// pull guests from mongo
$.ajax("/api/guests")
  .then(request => {
  fullGuestList = request;
  populateTable();
});

$("#add-btn").click(function(e){
  e.preventDefault();
  sendGuests();
});
