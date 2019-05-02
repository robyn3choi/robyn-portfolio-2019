
const data = {
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

  ]
}

const injectWorks = () => 
{
  let html;
  for (let work of data.works) 
  {
    let summaryParagraphsHtml = '';
    for (let paragraph of work.summaryParagraphs) 
    {
      summaryParagraphsHtml += '<p>' + paragraph + '</p>';
    }

    let featuresHtml = '';
    for (let feature of work.features) 
    {
      featuresHtml += '<li>' + feature + '</li>';
    }

    html += `
      <div class='work card'>
        <div class='work__image' style='background-image: url("assets/images/${work.image}")'>
          <div class='work__details-button-container'>
              <button class='work__details-button'>
              <div class="arrow"></div>
              </button>
          </div>
          <div class='work__details'>
              <section class='subsection'>
                <div class='graphic-heading-container'>
                    <div class='graphic-heading graphic-heading_back'></div>
                    <div class=' graphic-heading graphic-heading_front'></div>
                    <h3 class='graphic-heading__text'>Summary</h3>
                </div>
              ${summaryParagraphsHtml}
              </section>
              <section class='subsection'>
                <div class='graphic-heading-container'>
                    <div class='graphic-heading graphic-heading_back'></div>
                    <div class=' graphic-heading graphic-heading_front'></div>
                    <h3 class='graphic-heading__text'>Features</h3>
                </div>
                <ul class='work__features'>
                  ${featuresHtml}
                </ul>
              </section>
          </div>
        </div>
      </div>
    `
  }
  
  document.getElementsByClassName('section__content_works')[0].innerHTML += html;
}

export default injectWorks;