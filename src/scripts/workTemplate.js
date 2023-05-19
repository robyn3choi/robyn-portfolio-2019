const data = {
  works: [
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
      // neon city overdrive dice roller
      image: 'nco.png',
      summaryParagraphs: [
        `A Next.js dice roller app for tabletop roleplaying game, Neon City Overdrive (https://www.perilplanet.com/neon-city-overdrive/). I built this to help me run the game for my friends remotely.`,
      ],
      features: [
        'Choose the number of action dice and damage dice and calculate the roll result.',
        `Uses Socket.IO to update all players' views in real time whenever a player joins, rolls, or leaves.`,
      ],
      website: 'https://nco-diceroller.vercel.app',
      github: 'https://github.com/robyn3choi/nco-diceroller',
    },
    
    {
      // write together
      image: 'write-together.png',
      summaryParagraphs: [
        `This was my LFGrow Hackathon 2022 submission which won in multiple prize categories. It's a dapp that allows users to collaborate on written stories and make branches of existing stories. Kind of like GitHub but for stories`,
        `This project is currently not deployed because Lens Protocol has drastically changed its API since the hackathon, but feel free to click the "website" button below see a video demo and read a more in-depth summary.`,
      ],
      features: [
        'powered by Lens Protocol (a social graph protocol) and Polygon',
        'wallet connect via Metamask',
        'frontend built with React and Next.js',
        'my own Solidity smart contract to fill in the gaps by Lens Protocol',
      ],
      website: 'https://showcase.ethglobal.com/lfgrow/write-together-urtpp',
      github: 'https://github.com/robyn3choi/write-together',
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
          ${work.github ? `<a class='work__link-button enter-anim--hidden' href=${work.github}
            target='_blank' rel='noopener noreferrer'>View On GitHub</a>` : ''}
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
