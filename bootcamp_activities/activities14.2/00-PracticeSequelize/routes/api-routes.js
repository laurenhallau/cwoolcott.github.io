

var db = require("../models/");

//In db, there is a Oscars model so it is called db.Oscars IE: db.Oscars.findAll({})

/*

Using "Oscars" table/model (BA = best actor noms/ BSA = best supporting actor noms)
+----+----------------------+----+-----+-------+------+-------------------------------------------------------------------------------------------------------------+
| id | actor                | ba | bsa | total | wins | films                                               |
+----+----------------------+----+-----+-------+------+-------------------------------------------------------------------------------------------------------------+
|  1 | Meryl Streep         | 17 |   4 |    21 |    3 | Kramer vs. Kramer (1979), Sophie's Choice (1982), The Iron Lady (2011)                                      |
|  2 | Katharine Hepburn    | 12 |   0 |    12 |    4 | Morning Glory (1933), Guess Who's Coming to Dinner (1967), The Lion in Winter (1968), On Golden Pond (1981) |
|  3 | Jack Nicholson       |  8 |   4 |    12 |    3 | One Flew over the Cuckoo's Nest (1975), Terms of Endearment (1983), As Good as It Gets (1997)               |
|  4 | Bette Davis[A]       | 10 |   0 |    10 |    2 | Dangerous (1935), Jezebel (1938)                                                                            |
|  5 | Laurence Olivier[B]  |  9 |   1 |    10 |    1 | Hamlet (1948)                                                                                               |
|  6 | Spencer Tracy        |  9 |   0 |     9 |    2 | Captains Courageous (1937), Boys Town (1938)                                                                |
|  7 | Paul Newman          |  8 |   1 |     9 |    1 | The Color of Money (1986)                                                                                   |
|  8 | Marlon Brando        |  7 |   1 |     8 |    2 | On the Waterfront (1954), The Godfather (1972)                                                              |
|  9 | Jack Lemmon          |  7 |   1 |     8 |    2 | Mister Roberts (1955), Save the Tiger (1973)                                                                |
| 10 | Denzel Washington[C] |  6 |   2 |     8 |    2 | Glory (1989), Training Day (2001)                                                                           |
| 11 | Al Pacino            |  5 |   3 |     8 |    1 | Scent of a Woman (1992)                                                                                     |
| 12 | Geraldine Page       |  4 |   4 |     8 |    1 | The Trip to Bountiful (1985)                                                                                |
+----+----------------------+----+-----+-------+------+-------------------------------------------------------------------------------------------------------------+

*/

// Routes each will return JSON 
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the oscars (Done for you)
  app.get("/api/oscars", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Oscars.findAll({}).then(function (result) {
      res.json(result);
    });
  });

  // GET route for getting one oscar by id params
  app.get("/api/oscars/:id", function (req, res) {

    //SEQUELIZE GOES HERE / RETURN RESULTS
    db.Oscars.findOne({
      where: { id: req.params.id }
    }).then(function (result) {
      res.json(result);
    });

  });

  // GET route for getting all oscars that have 10 or more Total 
  app.get("/api/lots_o_oscars", function (req, res) {

    //SEQUELIZE GOES HERE / RETURN RESULTS
    db.Oscars.findAll({
      where: { total: { $gte: 10 } },
      order: [["total", "DESC"]]
    }).then(function (result) {
      res.json(result);
    });

  });

  // POST route for saving a new oscar winner 

  app.post("/api/oscars", function (req, res) {
    let newActor = {
      actor: req.body.actor,
      ba: req.body.ba,
      bsa: req.body.bsa,
      total: req.body.ba + req.body.bsa,
      films: req.body.films
    }
    db.Oscars.create(newActor).then(function (results) {
      res.json(results)
    })
    //SEQUELIZE GOES HERE / RETURN RESULTS


  });

  // delete an actor by id
  app.delete("/api/oscars/:id", function (req, res) {


    //SEQUELIZE GOES HERE / RETURN RESULTS


  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/oscars", function (req, res) {

    let total = parseInt(req.body.ba) + parseInt(req.body.bsa);
    let updateActor = {
      id: req.body.id,
      actor: req.body.actor,
      ba: req.body.ba,
      bsa: req.body.bsa,
      total: total,
      films: req.body.films
    }


    //SEQUELIZE GOES HERE / RETURN RESULTS


  });
};
