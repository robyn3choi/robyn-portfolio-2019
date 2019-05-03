
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
        `responsive design`,
      ]
    },

    { // stu website
      "image": "stu.png",
      "summaryParagraphs": [
      `A unique yet simple portfolio website for music producer Stuart Brookes.`
      ,
      `The front end is built with React and deployed with Netlify. 
      The site uses headless CMS Prismic.io to allow the client to easily edit information on the website without needing to look at code.
      `
      ],
      "features": [
        `original art and animations`,
        `music section displays songs in a filterable grid`,
        `easily editable by the client using Prismic.io`,
        `responsive design`
      ]
    },

    { // fury website
      "image": "fury.png",
      "summaryParagraphs": [
      `A website for music duo WE ARE FURY that displays their top tracks, tour dates, and merchandise for sale.`
      ,
      `The was built using jQuery and is hosted on HostGator (planning to migrate to GitHub Pages).`
      ],
      "features": [
        `Shopify integration`,
        `image parallax effect`,
        `responsive design`
      ]
    },

    { // old portfolio
      "image": "old-portfolio.png",
      "summaryParagraphs": [
      `My previous portfolio website, geared towards game development. As you scroll down the page, a pixel art avatar of myself walks down
      and gives you a tour of Vancouver. The site won 1st place in the Judges' Choice category and runner-up in the People's Choice category at 
      the University of British Columbia's e-Portfolio Competition 2017.`
      ,
      `The was built using jQuery and is hosted on GitHub Pages.`
      ],
      "features": [
        `original art and animations`,
        `responsive design`
      ]
    }
  ]
}

const injectWorks = () => 
{
  let html = '';
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