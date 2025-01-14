const data = {
  works: [    
      {
      // ten candles vtt
      image: 'candles.png',
      summaryParagraphs: [
        'A multiplayer virtual tabletop web app for the tabletop roleplaying game, Ten Candles (https://cavalrygames.com/ten-candles-info). The frontend was built with React, Vite, TypeScript, and Tailwind, and the backend was built with Express.js. Socket.IO is used for realtime communication between the server and clients.',
      ],
      features: [
        'Particle animations for candle flames and wisps of smoke when you extinguish them.',
        'Roll and drag dice between dice pools',
        'Create cards for Vices, Virtues, etc. and pass them to other players',
        `See the above actions happening between all the players in real time`,
      ],
      website: 'https://bumpinthedark-diceroller.vercel.app',
      github: 'https://github.com/robyn3choi/bumpinthedark-diceroller',
    },
    {
      // bump in the dark dice roller
      image: 'bump.png',
      summaryParagraphs: [
        'A multiplayer dice roller & clock tracker web app for the tabletop roleplaying game, Bump in the Dark (https://jexjthomas.itch.io/bump-in-the-dark). The frontend was built with React/Next.js, TypeScript, and Tailwind, and the backend was built with Express.js. Socket.IO is used for realtime communication between the server and clients.',
      ],
      features: [
        'Choose between different types of dice rolls and provide instructions for the keeper depending on the roll result.',
        'The keeper can add and edit clocks which get saved in their browser storage so they can pick up where they left off last session.',
        `Players' views are updated in real time whenever a player joins, rolls, and leaves the room.`,
        'Responsive design',
      ],
      website: 'https://bumpinthedark-diceroller.vercel.app',
      github: 'https://github.com/robyn3choi/bumpinthedark-diceroller',
    },

    {
      // stu website
      image: 'stu.png',
      summaryParagraphs: [
        'A unique yet simple portfolio website built with React for music producer Stuart Brookes. It uses headless CMS Prismic.io to allow the client to easily edit information on the website without needing to look at code.',
      ],
      features: [
        'Original art and animations',
        'Music section displays songs in a filterable grid',
        'Easily editable by the client using Prismic.io',
        'Responsive design',
      ],
      website: 'https://stuartbrookes.com',
      github: 'https://github.com/robyn3choi/stu-website',
    },

    // {
    //   // write together
    //   image: 'write-together.png',
    //   summaryParagraphs: [
    //     `This was my LFGrow Hackathon 2022 submission which won in multiple prize categories. It's a dapp that allows users to collaborate on written stories and make branches of existing stories. Kind of like GitHub but for stories`,
    //     `This project is currently not deployed because Lens Protocol has drastically changed its API since the hackathon, but feel free to click the "website" button below see a video demo and read a more in-depth summary.`,
    //   ],
    //   features: [
    //     'Powered by Lens Protocol (a social graph protocol) and Polygon',
    //     'Wallet connect via Metamask',
    //     'Frontend built with React/Next.js',
    //     'My own Solidity smart contract to fill in the gaps by Lens Protocol',
    //   ],
    //   website: 'https://showcase.ethglobal.com/lfgrow/write-together-urtpp',
    //   github: 'https://github.com/robyn3choi/write-together',
    // },

    {
      // old portfolio
      image: 'old-portfolio.png',
      summaryParagraphs: [
        `My previous portfolio website, geared towards game development. As you scroll down the page, a pixel art avatar of myself walks down
      and gives you a tour of Vancouver. The site won 1st place in the Judges' Choice category and runner-up in the People's Choice category at 
      the University of British Columbia's e-Portfolio Competition 2017.`,
        'The was built using jQuery and is hosted on GitHub Pages.',
      ],
      features: ['Original art and animations', 'Responsive design'],
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
