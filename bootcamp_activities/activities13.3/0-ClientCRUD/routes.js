var connection = require("./connection");

//Pass app from server.js
module.exports = function (app) {

  /* HTML ROUTES */

  // ** Route for HTML Index View ** 
  app.get("/", function (req, res) {
    connection.query("SELECT * FROM clients order by first_name;", function (err, data) {
      if (err) {
        return res.status(500).end();
      }

      res.render("index", { clients: data });
    });
  });

  // ** Route for HTML Create View ** 
  app.get("/add", function (req, res) {
    res.render("create");
  });

  // ** Route for HTML Update View ** 
  app.get("/update/:id", function (req, res) {

    connection.query("SELECT * FROM clients where id = ?;", req.params.id, function (err, data) {
      if (err) {
        return res.status(500).end();
      }

      res.render("update", data[0]);
    });

  });

  /* API ROUTES */

  // Create
  app.post("/api/clients", function (req, res) {
    connection.query(
      "INSERT INTO clients (first_name, last_name, email) VALUES (?, ?, ?)",
      [
        req.body.first_name,
        req.body.last_name,
        req.body.email
      ],
      function (err, result) {
        if (err) {
          return res.status(500).end();
        }
        res.status(200).end();
      }
    );
  });

  // Read
  app.get("/api/clients", function (req, res) {
    connection.query("SELECT * FROM clients;", function (err, data) {
      if (err) {
        return res.status(500).end();
      }

      res.json(data);
    });
  });

  // Update
  app.put("/api/clients/:id", function (req, res) {

    connection.query(
      "UPDATE clients SET first_name = ?, last_name = ?, email = ? WHERE id = ?",
      [req.body.first_name, req.body.last_name, req.body.email, req.params.id],
      function (err, result) {
        if (err) {
          // If an error occurred, send a generic server failure
          return res.status(500).end();
        }

        res.status(200).end();
      }
    );
  });

  // Delete 
  app.delete("/api/clients/:id", function (req, res) {
    connection.query(
      "DELETE FROM clients WHERE id = ?",
      [req.params.id],
      function (err, result) {
        if (err) {
          // If an error occurred, send a generic server failure
          return res.status(500).end();
        } else if (result.affectedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
};
