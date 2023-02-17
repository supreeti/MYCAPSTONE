const bar = document.querySelector('.menubar');
const openbar = document.querySelector('.menuclick');
const closebar = document.querySelector('.exit');

function open() {
  openbar.style.display = 'block';
  openbar.classList.toggle('open');
  bar.style.visibility = 'hidden';
  closebar.style.visibility = 'visible';
}

function close() {
  openbar.style.display = 'none';
  openbar.classList.remove('open');
  bar.style.visibility = 'visible';
  closebar.style.visibility = 'hidden';
}

bar.addEventListener('click', open);
closebar.addEventListener('click', close);
openbar.addEventListener('click', close);

const lecturersInfo = [
  {
    image: 'images/lecturer1.png',
    name: 'Dr. Bright Shaw',
    title: 'Professor in Informatics',
    info: 'Phd in Information science and head of Informatics dept.',
  },
  {
    image: 'images/lecturer3.png',
    name: 'Jelyn Naa Barkey',
    title: 'Professor in Computer Science',
    info: 'Rich experience in  in Web Apps of various tech companies.',
  },
  {
    image: 'images/lecturer4.png',
    name: 'Dr. Shenorah Mingles',
    title: 'Professor in Information Technology',
    info: 'A tech savvy with in-depth knowledge of modern technologies.',
  },
  {
    image: 'images/lecturer5.png',
    name: 'Dr. Anastacia Clothworthy',
    title: 'Head of Edulearn',
    info: ' and connect people from aro.',
  },
  {
    image: 'images/lecturer2.png',
    name: 'Dr. George Greggory',
    title: 'Professor in Computer Science',
    info: 'Greg a Web Application fanatic with a rich portfolio of collaborative project with great tech companies.',
  },
  {
    image: 'images/lecturer6.png',
    name: 'Dr. Frederick Khan',
    title: 'Professor in Operation Research',
    info: 'Knowledge in simulating  human intelligence in machines that are programmed to think like humans and mimic their.',
  },
];

const lecturers = document.querySelector('#lecturer-list');

lecturersInfo.forEach((lecturer) => {
  const li = document.createElement('li');
  li.innerHTML = `<article class="dynamic">
    <div class="lecturer-image">
      <img src="${lecturer.image}" alt="${lecturer.name}'s photo">
    </div>
    <div class="lecturer-details">
      <h3>${lecturer.name}</h3>
      <i class="lecturer-title">${lecturer.title}</i>
      <hr class="grey-line">
      <p class="lecturer-info">${lecturer.info}</p>
    </div>
  </article>`;
  lecturers.appendChild(li);
});

const lecturersList = document.querySelectorAll('#lecturer-list>li');
const showMoreLecturers = document.querySelector('.more_lecturers');

showMoreLecturers.addEventListener('click', () => {
  for (let i = 2; i < lecturersList.length; i += 1) {
    lecturersList[i].style.display = 'flex';
  }
  showMoreLecturers.style.display = 'none';
});