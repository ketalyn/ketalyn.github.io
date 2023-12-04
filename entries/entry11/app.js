
const prompts = [
     "Which scent do you find the most soothing?",
     "What is a language you love to listen to even if you dont speak or understand it?",
    "Oceans or mountains? Why?",
   "Describe the most captivating painting or artwork youve ever seen.",
   "Do you remember the first novel you ever read? If so, what was it?",
   "What is your favorite thing about your personality?",
   "If you could have a fictional superhero for a best friend, who would it be?",
   "What color would you choose to describe yourself?",
   "What is something you have accomplished as an adult that your younger self would be proud of?",
   "Is there a place in the world that you feel most represents who you are?",
   "Where is one place youd love to travel to again?",
   "If your pet could talk, what would their voice sound like? What would they say about you?",
   "What tasks make you feel like your best self?",
   "Where do you feel most centered and happy?",
   "Whats your favorite comfort food?",
   "What do you wear when youre feeling your very best, and why?",
   "What is the best meal youve ever had, and whats the best meal youve ever cooked for yourself?",
   "What do you love most about your home?",
   "Whats a yearbook-style superlative youd give to your high school self? Whats one for your current self?",
   "What gives you goosebumps?",
   "Do you know your astrology sign? How about your birth chart?",
   "Do you have any tattoos?",
   "Scuba diving or skydiving?",
   "What are you most grateful for in this season of life?",
   "Do you give back or volunteer with any organizations?",
   "Whats your love language?",
   "What do you look for and need in your friendships?",
   "How do you feel that you best offer love and support to your friends?",
   "Tell me about your childhood best friend.",
   "When do you feel most authentically yourself?",
   "Whats one form of self-expression youve been too hesitant to explore?",
    "Whats one habit you want to get rid of and one habit you want to keep?",
   "If you were to perform a duet with a famous musician, who would it be and why?",
   "Do you have any recurring dreams? If so, what do you think they are trying to tell you?",
   "Who do you most admire, and how has that impacted the way you live your life?",
   "What was the first big purchase you made as an adult?",
   "How did you know when you fell in love?",
   "Have you kept any memorabilia from your childhood?",
   "What do you miss most about being a child? A teenager? My age?",
   "What about the current world would be most surprising to your younger self?",
   "If you could travel back in time, which part of your life would you go back to?",
   "Who did you vote for in past elections? Why?",
   "What are some of your favorite memories about your parents?",
   "Tell me about you.",
   "Working on anything exciting/good lately?",
   "Whats your story?",
   "What personal passion project are you working on right now?",
   "What was the highlight of your day today?",
   "What was the highlight of your week?",
   "Have you eaten today?",
   "When was the last time you drank water?",
   "What was the high-point and low-point of your day so far?",
   "Has this been a busy time for you?",
   "What are you doing this weekend?",
   "What are your favorite restaurants around here?",
   "If you had to pick any character in a book, movie, or TV show who is most similar to you, who would you choose? Why?",
   "When you were growing up, what was your dream job? Is any part of that still true?",
   "Whats your biggest fear?",
   "Whats your biggest regret?", 
   "Who is your role model?",
   "Is there a charitable cause you support?",
   "What job did you want to do when you were a kid?",
   "If you had to pick one–skydiving, bungee jumping, or scuba diving–which would you do?",
   "Whats the most important thing I should know about you?",
   "When you were a kid, what did you think your life would look like now?",
   "Which of your family members are you most like?",
   "Do you think there are aliens on other planets?",
   "If you were an animal, what animal would you be? Why?",
   "Who would win in a fight, a robot or a dinosaur?",
   "What was your worst fashion disaster?",
   "Whats the most embarrassing thing you did at school / when you were a kid?",
   "If you had a reality TV show about your life, what would your theme song be?",
   "Whats your plan if there was a zombie apocalypse?",
   "What made you smile today?",
   "What is your favorite form of social media?",
   "What was the last good book you read?",
   "Do you listen to any podcasts? Which is your favorite?",
   "What do you think is the best show on Netflix right now?",
   "Have you been on any interesting trips lately?",
   "What do you think has been the best movie of the year so far?",
   "What song do you wish you could put on right now?",
   "Are you a cat person or a dog person?",
   "Do you think you are an introvert or an extrovert?",
   "What is your strangest hidden talent?",
   "What is something people are always surprised to learn about you?",
   "Where do you want to be in five years?",
   "What superpower do you wish you could have?",
   "Where would you go on vacation if you had no budget?",
   "If you could travel back in time, what decade would you choose to live in?",
   "What is the best thing you have ever bought off Amazon?",
   "What was the last concert you went to?",
   "What is one thing you cannot live without?",
   "What was the strangest dream you have had recently?",
   "What is your favorite book of all time?",
   "How many countries have you been to?",
   "What is your favorite city you have visited?",
   "Would you rather travel via plane or boat?",
   "Would you rather be really hot or really cold?",
   "What are your thoughts on the British royal family?",
   "Do you like documentaries? Have you watched any good ones recently?"
];

function generatePrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomIndex];

    const currentTime = new Date().toLocaleString();
    document.getElementById('current-time').innerText = currentTime;
    document.getElementById('prompt-text').innerText = randomPrompt;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function showOverlay() {
    const randomPrompt = getRandomPrompt();
    document.getElementById('randomPrompt').innerText = randomPrompt;
    document.getElementById('overlay').style.display = 'flex';
  }

  function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    return prompts[randomIndex];
  }

  // Function to show the overlay and display a random prompt
  function showOverlay() {
    const randomPrompt = getRandomPrompt();
    document.getElementById('randomPrompt').innerText = randomPrompt;
    document.getElementById('overlay').style.display = 'flex';
  }

  // Function to hide the overlay
  function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
  }

  // Create buttons and add them to the grid
  const gridContainer = document.querySelector('.grid-container');

  for (let row = 0; row < 15; row++) {
    for (let col = 0; col < 15; col++) {
      const button = document.createElement('button');
      button.classList.add('grid-button');
      button.style.top = `${(row / 15) * 100}%`;
      button.style.left = `${(col / 15) * 100}%`;
      button.style.width = `${(1 / 15) * 100}%`;
      button.style.height = `${(1 / 15) * 100}%`;
      button.addEventListener('click', showOverlay);
      gridContainer.appendChild(button);
    }
  }
