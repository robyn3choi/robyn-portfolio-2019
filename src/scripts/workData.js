import Handlebars from 'handlebars/runtime';
// import './templatesCompiled';
var temp = require('./templatesCompiled.js')

var context = {
  "works" : [

    { // weather app
      "image": "howsthesky.png",
      "summaryParagraphs": [
      `A sleek, minimal weather web app for when you just want the weather and nothing else. 
      It uses the Dark Sky API for weather data and the OpenCage API for geocoding.`
      ,
      `The front end is built with React and deployed with Netlify, and the back end is built with
      Node/Express and hosted on a DigitalOcean droplet with Dokku.`
      ],
      "features": [
        `location detection`,
        `Google Maps Places Search Box`,
        `stores user’s location in browser's local storage`,
        `CSS animations`,
        `CSS animations`
      ]
    },

    { // weather app
      "summary": [
      `A sleek, minimal weather web app for when you just want the weather and nothing else. 
      It uses the Dark Sky API for weather data and the OpenCage API for geocoding.`
      ,
      `The front end is built with React and deployed with Netlify, and the back end is built with
      Node/Express and hosted on a DigitalOcean droplet with Dokku.`
      ],
      "features": [
        `location detection`,
        `Google Maps Places Search Box`,
        `stores user’s location in browser's local storage`,
        `CSS animations`,
        `CSS animations`
      ]
    },

  ]
}
var html = Handlebars.templates.works(context);
document.getElementsByClassName('section__content_works')[0].innerHTML += html;