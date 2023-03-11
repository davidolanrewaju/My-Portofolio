const project = [
  {
    name: 'Tonic',
    imageMobile: './assets/Snapshoot Portfolio.png',
    imageDesktop: './assets/desktop/Snapshoot Portfolio(3).png',
    position: 'Back End Dev',
    year: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    index: 0,
  },
  {
    name: 'Multi-Post Stories',
    imageMobile: './assets/Snapshoot Portfolio (1).png',
    imageDesktop: './assets/desktop/Snapshoot Portfolio.png',
    position: 'Full Stack Dev',
    year: '2015',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'css', 'Ruby on rails', 'javascript'],
    index: 0,
  },
  {
    name: 'Facebook 360',
    imageMobile: './assets/Snapshoot Portfolio (2).png',
    imageDesktop: './assets/desktop/Snapshoot Portfolio(1).png',
    position: 'Full Stack Dev',
    year: '2015',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ['html', 'css', 'Ruby on rails', 'javascript'],
    index: 0,
  },
  {
    name: 'Uber Navigation',
    imageMobile: './assets/Snapshoot Portfolio (3).png',
    imageDesktop: './assets/desktop/Snapshoot Portfolio(2).png',
    position: 'Lead Developer',
    year: '2015',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'css', 'Ruby on rails', 'javascript'],
    index: 0,
  },
];

project.forEach((element, i) => {
  const projects = document.querySelector('#works');
  const displayCard = document.createElement('div');
  displayCard.classList.add('display-card');

  // Add reverse class to second element
  if (i === 1) {
    displayCard.classList.add('reverse');
  }

  displayCard.innerHTML = `
    <div class="image-container">
        <img src="${
  project[i].imageMobile
}" alt="Snapshoot Portfolio" class="mobile" />
        <img src="${
  project[i].imageDesktop
}" alt="Snapshoot Portfolio" class="desktop" />
    </div>
    <div class="text-container desktop">
        <h1>${project[i].name}</h1>
        <div class="inline-text">
        <h4>${project[i].position}</h4>
        <ul class="inline-list">
            <li>${project[i].year}</li>
        </ul>
        </div>
        <p class="body">${project[i].description}</p>
        <ul class="stack">
        ${project[i].technologies
    .map(
      (technology) => `<li class="border-background">${technology}</li>`,
    )
    .join('')}
        </ul>
        <button class="button see-project" data-index="${
  project[i].index
}">See Project</button>
    </div>
    <div class="text-container mobile">
        <h1>${project[i].name}</h1>
        <div class="inline-text">
        <h4>${project[i].position}</h4>
        <ul class="inline-list">
            <li>${project[i].year}</li>
        </ul>
        </div>
        <p class="body">${project[i].description}</p>
        <ul class="stack">
        ${project[i].technologies
    .map(
      (technology) => `<li class="border-background">${technology}</li>`,
    )
    .join('')}
        </ul>
        <button class="button see-project" data-index="${
  project[i].index
}">See Project</button>
    </div>
    `;

  // Add reverse class to last element
  if (i === project.length - 1) {
    displayCard.classList.add('reverse');
  }

  projects.appendChild(displayCard);
});