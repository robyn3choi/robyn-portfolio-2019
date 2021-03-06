const data = {
  works: [
    {
      // weather app
      image: 'howsthesky.png',
      summaryParagraphs: [
        `A sleek, minimal weather web app for when you just want the weather and nothing else. 
      It uses the Dark Sky API for weather data and the OpenCage API for geocoding.`,
        `The front end is built with React and deployed with Netlify, and the back end is built with
      Node/Express and hosted on a DigitalOcean droplet with Dokku.`,
      ],
      features: [
        'location detection',
        'Google Maps Places Search Box',
        "stores user’s location in browser's local storage",
        'CSS animations',
        'responsive design',
      ],
      website: 'https://howsthesky.com',
      github: 'https://github.com/robyn3choi/simple-weather',
    },

    {
      // stu website
      image: 'stu.png',
      summaryParagraphs: [
        'A unique yet simple portfolio website for music producer Stuart Brookes.',
        `The site is built with React and deployed with Netlify. 
      It also uses headless CMS Prismic.io to allow the client to easily edit information on the website without needing to look at code.
      `,
      ],
      features: [
        'original art and animations',
        'music section displays songs in a filterable grid',
        'easily editable by the client using Prismic.io',
        'responsive design',
      ],
      website: 'https://stuartbrookes.com',
      github: 'https://github.com/robyn3choi/stu-website',
    },

    {
      // path of trade
      image: 'pathoftrade.png',
      summaryParagraphs: [
        `A web app that assists with trading in online game <a href='https://www.pathofexile.com/game'>Path of Exile</a> by 
        comparing current item prices in a table and providing profit margins.`,
        `The front end is built with React and Redux, and deployed with Netlify, and the back end is built with
      Node/Express and hosted on a DigitalOcean droplet with Dokku.`,
      ],
      features: [
        'requests stored in a cache which is refreshed every 5 minutes to maximize speed while displaying the latest stats',
        'displays items in a sortable table',
        'able to view data from different leagues',
        "stores the user's last selected league in browser's local storage",
      ],
      website: 'https://pathoftrade.com',
      github: 'https://github.com/robyn3choi/poe-trade-helper',
    },

    {
      // fury website
      image: 'fury.png',
      summaryParagraphs: [
        'A website for music duo WE ARE FURY that displays their top tracks, tour dates, and merchandise for sale.',
        'The was built using jQuery and is hosted on HostGator (planning to migrate to GitHub Pages).',
      ],
      features: [
        'Shopify integration',
        'image parallax effect',
        'responsive design',
      ],
      website: 'https://wearefurymusic.com',
      github: 'https://github.com/robyn3choi/fury-website',
    },

    {
      // old portfolio
      image: 'old-portfolio.png',
      summaryParagraphs: [
        `My previous portfolio website, geared towards game development. As you scroll down the page, a pixel art avatar of myself walks down
      and gives you a tour of Vancouver. The site won 1st place in the Judges' Choice category and runner-up in the People's Choice category at 
      the University of British Columbia's e-Portfolio Competition 2017.`,
        'The was built using jQuery and is hosted on GitHub Pages.',
      ],
      features: ['original art and animations', 'responsive design'],
      website: 'https://old.robynchoi.me',
      github: 'https://github.com/robyn3choi/eportfolio',
    },
  ],
};

const injectWorks = () => {
  let html = '';
  for (let i = 0; i < data.works.length; i++) {
    const work = data.works[i];
    let summaryParagraphsHtml = '';
    for (let j = 0; j < work.summaryParagraphs.length; j++) {
      summaryParagraphsHtml +=
        '<p class="enter-anim--hidden">' + work.summaryParagraphs[j] + '</p>';
    }

    let featuresHtml = '';
    for (let j = 0; j < work.features.length; j++) {
      featuresHtml +=
        '<li class="enter-anim--hidden">' + work.features[j] + '</li>';
    }

    html += `
    <div class='work-container scroll-section scroll-section--stacked'>
      <div class='work'>
      <button class='work__image' style='background-image: url("images/${work.image}")'>
        <div class='work__arrow-button work__arrow-button_info'></div>
        <div class='work__arrow-button work__arrow-button--back'></div>
      </button>
      <div class='work__info subsection'>
          <section class='heading-with-text'>
            <div class='graphic-heading-container enter-anim--hidden'>
                <div class='graphic-heading graphic-heading--back'></div>
                <div class=' graphic-heading graphic-heading--front'></div>
                <h3 class='graphic-heading__text'>Summary</h3>
            </div>
          ${summaryParagraphsHtml}
          </section>
          <section class='heading-with-text'>
            <div class='graphic-heading-container enter-anim--hidden'>
                <div class='graphic-heading graphic-heading--back'></div>
                <div class=' graphic-heading graphic-heading--front'></div>
                <h3 class='graphic-heading__text'>Features</h3>
            </div>
            <ul class='work__features'>
              ${featuresHtml}
            </ul>
          </section>
          <hr class='work__hr enter-anim--hidden' />
          <a class='work__link-button enter-anim--hidden' href=${work.website} 
            target='_blank' rel='noopener noreferrer'>Visit Website</a>
          <a class='work__link-button enter-anim--hidden' href=${work.github}
            target='_blank' rel='noopener noreferrer'>View On GitHub</a>
          <button class='work__exit-button'>
            <img src='images/x-white.svg' />
          </button>
      </div>
    </div>
  </div>
`;
  }

  document.getElementsByClassName(
    'section__content--works',
  )[0].innerHTML += html;
};

export default injectWorks;
