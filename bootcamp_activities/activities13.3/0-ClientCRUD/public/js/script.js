/* Create */
$("#addclient").on("submit", function (event) {

  event.preventDefault();

  var newClient = {
    first_name: $("#first_name").val().trim(),
    last_name: $("#last_name").val().trim(),
    email: $("#email").val().trim()
  };

  $.ajax("/api/clients", {
    type: "POST",
    data: newClient
  }).then(function () {
    console.log("added new Client");
    //Redirect Location
    console.log("redirect");
    window.location.replace("/");
  });
});

/* Update / Edit */
$("#updateclient").on("submit", function (event) {
  event.preventDefault();

  var updatedClient = {
    first_name: $("#first_name").val().trim(),
    last_name: $("#last_name").val().trim(),
    email: $("#email").val().trim(),
    id: $("#id").val()
  };

  console.log(updatedClient);
  $.ajax("/api/clients/" + updatedClient.id, {
    type: "PUT",
    data: updatedClient
  }).then(function () {
    //Redirect Location
    window.location.replace("/");
  });
});

/* Delete */
$(".delete").on("click", function (event) {
  event.preventDefault();

  //Quick Confirm
  if (!confirm("Are you sure you want to delete?")) {
    return false;
  }

  var id = $(this).attr("clientid");

  $.ajax("/api/clients/" + id, {
    type: "DELETE"
  }).then(function () {
    console.log("deleted id ", id);
    // Reload the page to get the updated list
    location.reload();
  });
});
