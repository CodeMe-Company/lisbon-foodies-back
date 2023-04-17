const express = require("express");
const app = express();
const axios = require("axios");

//* get all restaurants
app.get("/restaurant-list", (req, res) => {
  const options = {
    headers: {
      accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization:
        "Bearer LhgMafKGB-TTN1QsQ9rvNM7BMio765gCO_4fVoP71OIL8STkFNb1C_pNdwpRBQhtmLRXJ3C3JRd9Kz0AR3ehQjhNo-x0p2zXMrfTsjJA_qLjr0UycN9ShC2imogdZHYx",
    },
  };
  axios
    .get(
      "https://api.yelp.com/v3/businesses/search?location=lisbon&term=restaurants&categories=vegetarian&sort_by=best_match&limit=50",
      options
    )
    .then((response) => {
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.send(response.data);
    })
    .catch((error) => console.error(error));
});

//* get single restaurant
app.get("/restaurant-details/:id", (req, res) => {
  const id = req.params.id;
  const options = {
    headers: {
      accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization:
        "Bearer LhgMafKGB-TTN1QsQ9rvNM7BMio765gCO_4fVoP71OIL8STkFNb1C_pNdwpRBQhtmLRXJ3C3JRd9Kz0AR3ehQjhNo-x0p2zXMrfTsjJA_qLjr0UycN9ShC2imogdZHYx",
    },
  };
  axios
    .get(`https://api.yelp.com/v3/businesses/${id}`, options)
    .then((response) => {
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.send(response.data);
    })
    .catch((error) => console.error(error));
});

//* get all reviews from a single restaurant
app.get("/restaurant-reviews/:id", (req, res) => {
  const id = req.params.id;
  const options = {
    headers: {
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer LhgMafKGB-TTN1QsQ9rvNM7BMio765gCO_4fVoP71OIL8STkFNb1C_pNdwpRBQhtmLRXJ3C3JRd9Kz0AR3ehQjhNo-x0p2zXMrfTsjJA_qLjr0UycN9ShC2imogdZHYx",
      },
  };

  axios
    .get(
      `https://api.yelp.com/v3/businesses/${id}/reviews?limit=20`,
      options
    )
    .then((response) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        console.log(response.data.reviews)
        res.send(response.data.reviews);
      })
    .catch((err) => console.error(err));
});

app.listen(8080, (req, res) => {
  console.log("listening on port 8080");
});


//*get event list
app.get("/event-list", (req, res) => {
  const options = {
    headers: {
      accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization:
        "Bearer LhgMafKGB-TTN1QsQ9rvNM7BMio765gCO_4fVoP71OIL8STkFNb1C_pNdwpRBQhtmLRXJ3C3JRd9Kz0AR3ehQjhNo-x0p2zXMrfTsjJA_qLjr0UycN9ShC2imogdZHYx",
    },
  };
  axios
    .get(
      "https://api.yelp.com/v3/events?limit=50&sort_by=desc&sort_on=popularity&excluded_events=&location=portugal&categories=food-and-drink",
      options
    )
    .then((response) => {
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.send(response.data.events);
    })
    .catch((error) => console.error(error));
});