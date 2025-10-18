const QUESTIONS = [
  { audio:'audio/clip1.mp3', images:['images/1a.jpg','images/1b.jpg','images/1c.jpg'], correct:0 },
  { audio:'audio/clip2.mp3', images:['images/2a.jpg','images/2b.jpg','images/2c.jpg'], correct:1 },
  { audio:'audio/clip3.mp3', images:['images/3a.jpg','images/3b.jpg','images/3c.jpg'], correct:2 },
  { audio:'audio/clip4.mp3', images:['images/4a.jpg','images/4b.jpg','images/4c.jpg'], correct:2 },
  { audio:'audio/clip5.mp3', images:['images/5a.jpg','images/5b.jpg','images/5c.jpg'], correct:0 },
  { audio:'audio/clip6.mp3', images:['images/6a.jpg','images/6b.jpg','images/6c.jpg'], correct:1 },
  { audio:'audio/clip7.mp3', images:['images/7a.jpg','images/7b.jpg','images/7c.jpg'], correct:2 },
  { audio:'audio/clip8.mp3', images:['images/8a.jpg','images/8b.jpg','images/8c.jpg'], correct:1 },
  { audio:'audio/clip9.mp3', images:['images/9a.jpg','images/9b.jpg','images/9c.jpg'], correct:0 },
  { audio:'audio/clip10.mp3', images:['images/10a.jpg','images/10b.jpg','images/10c.jpg'], correct:1 },
  { audio:'audio/clip11.mp3', images:['images/11a.jpg','images/11b.jpg','images/11c.jpg'], correct:2 },
  { audio:'audio/clip12.mp3', images:['images/12a.jpg','images/12b.jpg','images/12c.jpg'], correct:1 },
  { audio:'audio/clip13.mp3', images:['images/13a.jpg','images/13b.jpg','images/13c.jpg'], correct:1 },
  { audio:'audio/clip14.mp3', images:['images/14a.jpg','images/14b.jpg','images/14c.jpg'], correct:2 },
  { audio:'audio/clip15.mp3', images:['images/15a.jpg','images/15b.jpg','images/15c.jpg'], correct:0 },
  { audio:'audio/clip16.mp3', images:['images/16a.jpg','images/16b.jpg','images/16c.jpg'], correct:2 },
  { audio:'audio/clip17.mp3', images:['images/17a.jpg','images/17b.jpg','images/17c.jpg'], correct:1 },
  { audio:'audio/clip18.mp3', images:['images/18a.jpg','images/18b.jpg','images/18c.jpg'], correct:0 },
  { audio:'audio/clip19.mp3', images:['images/19a.jpg','images/19b.jpg','images/19c.jpg'], correct:2 },
  { audio:'audio/clip20.mp3', images:['images/20a.jpg','images/20b.jpg','images/20c.jpg'], correct:0 },
  { audio:'audio/clip21.mp3', images:['images/21a.jpg','images/21b.jpg','images/21c.jpg'], correct:1 },
  { audio:'audio/clip22.mp3', images:['images/22a.jpg','images/22b.jpg','images/22c.jpg'], correct:2 },
  { audio:'audio/clip23.mp3', images:['images/23a.jpg','images/23b.jpg','images/23c.jpg'], correct:2 },
  { audio:'audio/clip24.mp3', images:['images/24a.jpg','images/24b.jpg','images/24c.jpg'], correct:1 },
  { audio:'audio/clip25.mp3', images:['images/25a.jpg','images/25b.jpg','images/25c.jpg'], correct:1 },
  { audio:'audio/clip26.mp3', images:['images/26a.jpg','images/26b.jpg','images/26c.jpg'], correct:0 },
  { audio:'audio/clip27.mp3', images:['images/27a.jpg','images/27b.jpg','images/27c.jpg'], correct:1 },
  { audio:'audio/clip28.mp3', images:['images/28a.jpg','images/28b.jpg','images/28c.jpg'], correct:2 },
  { audio:'audio/clip29.mp3', images:['images/29a.jpg','images/29b.jpg','images/29c.jpg'], correct:0 },
  { audio:'audio/clip30.mp3', images:['images/30a.jpg','images/30b.jpg','images/30c.jpg'], correct:0 },
  { audio:'audio/clip31.mp3', images:['images/31a.jpg','images/31b.jpg','images/31c.jpg'], correct:1 },
  { audio:'audio/clip32.mp3', images:['images/32a.jpg','images/32b.jpg','images/32c.jpg'], correct:0 },
  { audio:'audio/clip33.mp3', images:['images/33a.jpg','images/33b.jpg','images/33c.jpg'], correct:1 },
  { audio:'audio/clip34.mp3', images:['images/34a.jpg','images/34b.jpg','images/34c.jpg'], correct:0 },
  { audio:'audio/clip35.mp3', images:['images/35a.jpg','images/35b.jpg','images/35c.jpg'], correct:2 },
  { audio:'audio/clip36.mp3', images:['images/36a.jpg','images/36b.jpg','images/36c.jpg'], correct:0 },
  { audio:'audio/clip37.mp3', images:['images/37a.jpg','images/37b.jpg','images/37c.jpg'], correct:0 },
  { audio:'audio/clip38.mp3', images:['images/38a.jpg','images/38b.jpg','images/38c.jpg'], correct:1 },
  { audio:'audio/clip39.mp3', images:['images/39a.jpg','images/39b.jpg','images/39c.jpg'], correct:2 },
  { audio:'audio/clip40.mp3', images:['images/40a.jpg','images/40b.jpg','images/40c.jpg'], correct:1 },
  { audio:'audio/clip41.mp3', images:['images/41a.jpg','images/41b.jpg','images/41c.jpg'], correct:0 },
  { audio:'audio/clip42.mp3', images:['images/42a.jpg','images/42b.jpg','images/42c.jpg'], correct:1 },
  { audio:'audio/clip43.mp3', images:['images/43a.jpg','images/43b.jpg','images/43c.jpg'], correct:0 },
  { audio:'audio/clip44.mp3', images:['images/44a.jpg','images/44b.jpg','images/44c.jpg'], correct:2 },
  { audio:'audio/clip45.mp3', images:['images/45a.jpg','images/45b.jpg','images/45c.jpg'], correct:0 },
  { audio:'audio/clip46.mp3', images:['images/46a.jpg','images/46b.jpg','images/46c.jpg'], correct:2 },
  { audio:'audio/clip47.mp3', images:['images/47a.jpg','images/47b.jpg','images/47c.jpg'], correct:1 },
  { audio:'audio/clip48.mp3', images:['images/48a.jpg','images/48b.jpg','images/48c.jpg'], correct:1 },
  { audio:'audio/clip49.mp3', images:['images/49a.jpg','images/49b.jpg','images/49c.jpg'], correct:0 },
  { audio:'audio/clip50.mp3', images:['images/50a.jpg','images/50b.jpg','images/50c.jpg'], correct:1 },
  { audio:'audio/clip51.mp3', images:['images/51a.jpg','images/51b.jpg','images/51c.jpg'], correct:1 },
  { audio:'audio/clip52.mp3', images:['images/52a.jpg','images/52b.jpg','images/52c.jpg'], correct:2 },
  { audio:'audio/clip53.mp3', images:['images/53a.jpg','images/53b.jpg','images/53c.jpg'], correct:2 },
  { audio:'audio/clip54.mp3', images:['images/54a.jpg','images/54b.jpg','images/54c.jpg'], correct:0 },
  { audio:'audio/clip55.mp3', images:['images/55a.jpg','images/55b.jpg','images/55c.jpg'], correct:0 },
  { audio:'audio/clip56.mp3', images:['images/56a.jpg','images/56b.jpg','images/56c.jpg'], correct:1 },
  { audio:'audio/clip57.mp3', images:['images/57a.jpg','images/57b.jpg','images/57c.jpg'], correct:1 },
  { audio:'audio/clip58.mp3', images:['images/58a.jpg','images/58b.jpg','images/58c.jpg'], correct:0 },
  { audio:'audio/clip59.mp3', images:['images/59a.jpg','images/59b.jpg','images/59c.jpg'], correct:1 },
  { audio:'audio/clip60.mp3', images:['images/60a.jpg','images/60b.jpg','images/60c.jpg'], correct:0 },
  { audio:'audio/clip61.mp3', images:['images/61a.jpg','images/61b.jpg','images/61c.jpg'], correct:1 },
  { audio:'audio/clip62.mp3', images:['images/62a.jpg','images/62b.jpg','images/62c.jpg'], correct:0 },
  { audio:'audio/clip63.mp3', images:['images/63a.jpg','images/63b.jpg','images/63c.jpg'], correct:2 },
  { audio:'audio/clip64.mp3', images:['images/64a.jpg','images/64b.jpg','images/64c.jpg'], correct:1 },
  { audio:'audio/clip65.mp3', images:['images/65a.jpg','images/65b.jpg','images/65c.jpg'], correct:0 },
  { audio:'audio/clip66.mp3', images:['images/66a.jpg','images/66b.jpg','images/66c.jpg'], correct:1 },
  { audio:'audio/clip67.mp3', images:['images/67a.jpg','images/67b.jpg','images/67c.jpg'], correct:0 },
  { audio:'audio/clip68.mp3', images:['images/68a.jpg','images/68b.jpg','images/68c.jpg'], correct:1 },
  { audio:'audio/clip69.mp3', images:['images/69a.jpg','images/69b.jpg','images/69c.jpg'], correct:0 },
  { audio:'audio/clip70.mp3', images:['images/70a.jpg','images/70b.jpg','images/70c.jpg'], correct:1 },
  { audio:'audio/clip71.mp3', images:['images/71a.jpg','images/71b.jpg','images/71c.jpg'], correct:0 },
  { audio:'audio/clip72.mp3', images:['images/72a.jpg','images/72b.jpg','images/72c.jpg'], correct:2 },
  { audio:'audio/clip73.mp3', images:['images/73a.jpg','images/73b.jpg','images/73c.jpg'], correct:0 },
  { audio:'audio/clip74.mp3', images:['images/74a.jpg','images/74b.jpg','images/74c.jpg'], correct:1 },
  { audio:'audio/clip75.mp3', images:['images/75a.jpg','images/75b.jpg','images/75c.jpg'], correct:2 },
  { audio:'audio/clip76.mp3', images:['images/76a.jpg','images/76b.jpg','images/76c.jpg'], correct:2 },
  { audio:'audio/clip77.mp3', images:['images/77a.jpg','images/77b.jpg','images/77c.jpg'], correct:1 },
  { audio:'audio/clip78.mp3', images:['images/78a.jpg','images/78b.jpg','images/78c.jpg'], correct:0 },
  { audio:'audio/clip79.mp3', images:['images/79a.jpg','images/79b.jpg','images/79c.jpg'], correct:1 },
  { audio:'audio/clip80.mp3', images:['images/80a.jpg','images/80b.jpg','images/80c.jpg'], correct:1 },
];

const END_BG_GIF = 'images/end-bg.svg';
const END_MUSIC = 'audio/end-music.mp3';

// Language translations
const translations = {
  ka: {
    start: 'დაწყება',
    options: 'პარამეტრები',
    about: 'მაიუ',
    back: 'დაბრუნება',
    volume: 'მუსიკის ხმა:',
    language: 'ენა:',
    georgian: 'ქართული',
    english: 'English',
    listen: 'მოუსმინე',
    ready: 'მზადება',
    title: 'მოუსმინეთ ხმას და აირჩიეთ სწორი სურათი',
    next: 'შემდეგი ხმა',
    score: 'ქულა',
    round: 'რაუნდი',
    correct: 'სწორი',
    wrong: 'არასწორი',
    gameOver: 'თამაში დასრულდა',
    yourScore: 'თქვენი ქულა',
    restart: 'თავიდან ჩართვა',
    close: 'დახურვა',
    noQuestions: 'არ არის კონფიგურირებული კითხვები. გახსენით script.js და დაამატეთ ფაილები.'
  },
  en: {
    start: 'Start',
    options: 'Options',
    about: 'About',
    back: 'Back',
    volume: 'Volume:',
    language: 'Language:',
    georgian: 'Georgian',
    english: 'English',
    listen: 'Listen',
    ready: 'Ready',
    title: 'Listen to the sound and choose the correct image',
    next: 'Next Sound',
    score: 'Score',
    round: 'Round',
    correct: 'Correct',
    wrong: 'Wrong',
    gameOver: 'Game Over',
    yourScore: 'Your Score',
    restart: 'Restart',
    close: 'Close',
    noQuestions: 'No questions configured. Open script.js and add files.'
  },
};

let current=0, score=0, correctCount=0, wrongCount=0, currentLang='ka';
const answers=[];


// DOM elements
const audioPlayer=document.getElementById('audioPlayer');
const replayBtn=document.getElementById('replayBtn');
const choicesRoot=document.getElementById('choices');
const scoreCount=document.getElementById('correctCount');
const correctEl=document.getElementById('correctCount');
const wrongEl=document.getElementById('wrongCount');
const roundIdx=document.getElementById('roundIdx');
const roundTotal=document.getElementById('roundTotal');
const statusText=document.getElementById('statusText');
const endModal=document.getElementById('endModal');
const endScore=document.getElementById('endScore');
const reviewList=document.getElementById('reviewList');
const bgGifEl=document.getElementById('bgGif');
const bgMusic=document.getElementById('bgMusic');
const backToMenuBtn=document.getElementById('backToMenuBtn');
const audioCorrect=document.getElementById('audioCorrect');
const audioWrong=document.getElementById('audioWrong');
const gameCard=document.querySelector('.game-card');
const nextBtn=document.getElementById('nextBtn');
const audioVolumeSlider=document.getElementById('audioVolumeSlider');

// Menu elements
const menuContainer=document.getElementById('menuContainer');
const startBtn=document.getElementById('startBtn');
const optionsBtn=document.getElementById('optionsBtn');
const aboutBtn=document.getElementById('aboutBtn');
const optionsContainer=document.getElementById('optionsContainer');
const aboutContainer=document.getElementById('aboutContainer');
const gameContainer=document.getElementById('gameContainer');
const gameSelectContainer=document.getElementById('gameSelectContainer');
const volumeSlider=document.getElementById('volumeSlider');
const languageSelect=document.getElementById('languageSelect');
const backFromOptions=document.getElementById('backFromOptions');
const backFromAbout=document.getElementById('backFromAbout');
const memeGameBtn=document.getElementById('memeGameBtn');
const quizGameBtn=document.getElementById('quizGameBtn');
const backToMenu=document.getElementById('backToMenu');

roundTotal.textContent=QUESTIONS.length;
scoreCount.textContent=score;
roundIdx.textContent=current+1;


function updateLanguage() {
  const t = translations[currentLang];
  document.getElementById('startBtn').textContent = t.start;
  document.getElementById('optionsBtn').textContent = t.options;
  document.getElementById('aboutBtn').textContent = t.about;
  document.getElementById('backFromOptions').textContent = t.back;
  document.getElementById('backFromAbout').textContent = t.back;
  document.querySelector('label[for="volumeSlider"]').textContent = t.volume;
  document.querySelector('label[for="languageSelect"]').textContent = t.language;
  document.querySelector('option[value="ka"]').textContent = t.georgian;
  document.querySelector('option[value="en"]').textContent = t.english;
  document.querySelector('.options-card h2').textContent = t.options;
  document.querySelector('.about-card h2').textContent = t.about;
  document.getElementById('replayBtn').lastChild.textContent = t.listen;
  document.getElementById('questionTitle').textContent = t.title;
  document.getElementById('nextBtn').textContent = t.next;
  document.querySelector('.score-panel h4').textContent = t.score;
  document.querySelector('.round-info').childNodes[0].textContent = t.round + ': ';
  // Labels are now hardcoded in HTML for Georgian, no need to update dynamically
  document.querySelector('.modal-card h2').textContent = t.gameOver;
  document.getElementById('restartBtnModal').textContent = t.restart;
  document.getElementById('closeReview').textContent = t.close;
}

function loadQuestion(){
  if(!QUESTIONS[current]) return;
  const q=QUESTIONS[current];
  roundIdx.textContent=current+1;
  statusText.innerHTML='';

  // Change button text for last question
  if(current === QUESTIONS.length - 1) {
    nextBtn.textContent = 'დასრულება';
  } else {
    nextBtn.textContent = translations[currentLang].next;
  }

  nextBtn.style.display='none';
  audioPlayer.src=q.audio;
  audioPlayer.currentTime=0;
  // audioPlayer.play(); // removed auto play

  choicesRoot.innerHTML='';

  q.images.forEach((src,i)=>{
    const card=document.createElement('div');
    card.className='choice';
    card.tabIndex=0;
    card.innerHTML=`<img src="${src}" alt="choice ${i+1}">`;
    const img=card.querySelector('img');
    img.onerror=()=>{ img.src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240"><rect width="100%" height="100%" fill="#111"/><text x="50%" y="50%" fill="#888" font-size="18" dominant-baseline="middle" text-anchor="middle">image missing</text></svg>'; };
    card.addEventListener('click',()=>selectAnswer(i));
    card.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); selectAnswer(i); } });
    choicesRoot.appendChild(card);
  });

  gameCard.style.opacity='1';
}

function selectAnswer(i){
  const q=QUESTIONS[current];
  const nodes=choicesRoot.querySelectorAll('.choice');
  if(nodes[0].classList.contains('answered')) return;

  const correct=i===q.correct;
  if(correct) audioCorrect.play().catch(()=>{});
  else audioWrong.play().catch(()=>{});

  nodes.forEach((n,idx)=>{
    n.classList.add('answered');
    if(idx===q.correct) n.classList.add('correct');
    else if(idx===i) n.classList.add('wrong');
  });

  answers.push({round:current+1, selected:i, correct});
  if(correct){ score++; correctCount++; } else { wrongCount++; }
  scoreCount.textContent=score;
  correctEl.textContent=correctCount;
  wrongEl.textContent=wrongCount;
  statusText.innerHTML=correct?'<span style="color:#22c55e; font-size: 2em;">✔</span>':'<span style="color:#ef4444; font-size: 2em;">✘</span>';

  nextBtn.style.display='block';
}

function finishGame(){
   const t = translations[currentLang];
   endScore.textContent=`${t.yourScore}: ${score} / ${QUESTIONS.length}`;
    const endVideo = document.getElementById('endVideo');
    const bgOverlay = document.getElementById('bgOverlay');
    const bgGif = document.getElementById('bgGif');
    endVideo.src = 'video/end.mp4';
    endVideo.volume = 1; // Max volume
    endVideo.style.display = 'block';
    bgOverlay.style.display = 'none'; // Hide overlay when video is playing
    bgGif.style.display = 'none'; // Hide background gif when video is playing
    endVideo.play().catch(() => {});
    bgMusic.pause(); // Pause background music
    statusText.textContent=t.gameOver;
    gameContainer.style.display = 'none'; // Hide game container to remove scoreboard

    // Show modal after 15 seconds with fade effect
    setTimeout(() => {
      endModal.style.opacity = '0';
      endModal.classList.add('active');
      endModal.style.transition = 'opacity 1s ease-in-out';
      setTimeout(() => {
        endModal.style.opacity = '1';
      }, 50);
    }, 15000);
}

// Menu navigation
startBtn.addEventListener('click', () => {
  menuContainer.style.display = 'none';
  gameContainer.style.display = 'flex';
  document.body.style.backgroundImage = 'none';
  bgGifEl.style.backgroundImage = 'url("images/bg.jpg")';
  loadQuestion();
});

optionsBtn.addEventListener('click', () => {
  menuContainer.style.display = 'none';
  optionsContainer.style.display = 'flex';
});

aboutBtn.addEventListener('click', () => {
  menuContainer.style.display = 'none';
  aboutContainer.style.display = 'flex';
  // Play video when entering about tab
  const video = document.getElementById('funnyVideo');
  video.currentTime = 0;
  video.play().catch(() => {});
});

backFromOptions.addEventListener('click', () => {
  optionsContainer.style.display = 'none';
  menuContainer.style.display = 'flex';
  document.body.style.backgroundImage = 'url("images/bg.jpg")';
  bgGifEl.style.backgroundImage = 'none';
});

backFromAbout.addEventListener('click', () => {
  aboutContainer.style.display = 'none';
  menuContainer.style.display = 'flex';
  document.body.style.backgroundImage = 'url("images/bg.jpg")';
  bgGifEl.style.backgroundImage = 'none';
});

// Volume control
volumeSlider.addEventListener('input', (e) => {
  bgMusic.volume = e.target.value;
});

// Language switching
languageSelect.addEventListener('change', (e) => {
  currentLang = e.target.value;
  updateLanguage();
});

replayBtn.addEventListener('click',()=>{ audioPlayer.currentTime=0; audioPlayer.play().catch(()=>{}); bgMusic.play().catch(()=>{}); });
nextBtn.addEventListener('click',()=>{
  audioPlayer.pause();
  gameCard.style.opacity='0';
  setTimeout(()=>{
    current++;
    if(current<QUESTIONS.length) loadQuestion();
    else finishGame();
  }, 200);
});
backToMenuBtn.addEventListener('click',()=>{
  endModal.classList.remove('active');
  gameContainer.style.display = 'none';
  menuContainer.style.display = 'flex';
  document.body.style.backgroundImage = 'url("images/bg.jpg")';
  bgGifEl.style.backgroundImage = 'none';
  const endVideo = document.getElementById('endVideo');
  const bgOverlay = document.getElementById('bgOverlay');
  const bgGif = document.getElementById('bgGif');
  endVideo.pause();
  endVideo.currentTime = 0;
  endVideo.style.display = 'none';
  bgOverlay.style.display = 'block'; // Show overlay again
  bgGif.style.display = 'block'; // Show background gif again
  bgMusic.play().catch(() => {}); // Resume background music
  // Reset game state
    current = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    answers.length = 0;
    scoreCount.textContent = score;
    correctEl.textContent = correctCount;
    wrongEl.textContent = wrongCount;
    roundIdx.textContent = current + 1;
});


window.addEventListener('load',()=>{
  if(!QUESTIONS||QUESTIONS.length===0){ alert(translations[currentLang].noQuestions); return; }
  bgMusic.src='audio/background1.mp3';
  bgMusic.volume = 0.02;
  bgMusic.play().catch(()=>{});
  updateLanguage();
  // Do not load question automatically, wait for start button
  roundTotal.textContent = QUESTIONS.length; // Set initial total for meme game
});

// Audio volume control
audioVolumeSlider.addEventListener('input', (e) => {
  audioPlayer.volume = e.target.value;
});
