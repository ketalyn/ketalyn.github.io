
const arr = [
     { question: "Which scent do you find the most soothing?"},
     { question: "What is a language you love to listen to even if you dont speak or understand it?"},
     {question: "Oceans or mountains? Why?"},
     {question:"Describe the most captivating painting or artwork youve ever seen."},
     {question:"Do you remember the first novel you ever read? If so, what was it?"},
     {question:"What is your favorite thing about your personality?"},
     {question:"If you could have a fictional superhero for a best friend, who would it be?"},
     {question:"What color would you choose to describe yourself?"},
     {question:"What is something you have accomplished as an adult that your younger self would be proud of?"},
     {question:"Is there a place in the world that you feel most represents who you are?"},
     {question:"Where is one place youd love to travel to again?"},
     {question:"If your pet could talk, what would their voice sound like? What would they say about you?"},
     {question:"What tasks make you feel like your best self?"},
     {question:"Where do you feel most centered and happy?"},
     {question:"Whats your favorite comfort food?"},
     {question:"What do you wear when youre feeling your very best, and why?"},
     {question:"What is the best meal youve ever had, and whats the best meal youve ever cooked for yourself?"},
     {question:"What do you love most about your home?"},
     {question:"Whats a yearbook-style superlative youd give to your high school self? Whats one for your current self?"},
     {question:"What gives you goosebumps?"},
     {question:"Do you know your astrology sign? How about your birth chart?"},
     {question:"Do you have any tattoos?"},
     {question:"Scuba diving or skydiving?"},
     {question:"What are you most grateful for in this season of life?"},
     {question:"Do you give back or volunteer with any organizations?"},
     {question:"Whats your love language?"},
     {question:"What do you look for and need in your friendships?"},
     {question:"How do you feel that you best offer love and support to your friends?"},
     {question:"Tell me about your childhood best friend."},
     {question:"When do you feel most authentically yourself?"},
     {question:"Whats one form of self-expression youve been too hesitant to explore?"},
     {question: "Whats one habit you want to get rid of and one habit you want to keep?"},
     {question:"If you were to perform a duet with a famous musician, who would it be and why?"},
     {question:"Do you have any recurring dreams? If so, what do you think they are trying to tell you?"},
     {question:"Who do you most admire, and how has that impacted the way you live your life?"},
     {question:"What was the first big purchase you made as an adult?"},
     {question:"How did you know when you fell in love?"},
     {question:"Have you kept any memorabilia from your childhood?"},
     {question:"What do you miss most about being a child? A teenager? My age?"},
     {question:"What about the current world would be most surprising to your younger self?"},
     {question:"If you could travel back in time, which part of your life would you go back to?"},
     {question:"Who did you vote for in past elections? Why?"},
     {question:"What are some of your favorite memories about your parents?"},
     {question:"Tell me about you."},
     {question:"Working on anything exciting/good lately?"},
     {question:"Whats your story?"},
     {question:"What personal passion project are you working on right now?"},
     {question:"What was the highlight of your day today?"},
     {question:"What was the highlight of your week?"},
     {question:"Have you eaten today?"},
     {question:"When was the last time you drank water?"},
     {question:"What was the high-point and low-point of your day so far?"},
     {question:"Has this been a busy time for you?"},
     {question:"What are you doing this weekend?"},
     {question:"What are your favorite restaurants around here?"},
     {question:"If you had to pick any character in a book, movie, or TV show who is most similar to you, who would you choose? Why?"},
     {question:"When you were growing up, what was your dream job? Is any part of that still true?"},
     {question:"Whats your biggest fear?"},
     {question:"Whats your biggest regret?"}, 
     {question:"Who is your role model?"},
     {question:"Is there a charitable cause you support?"},
     {question:"What job did you want to do when you were a kid?"},
     {question:"If you had to pick one–skydiving, bungee jumping, or scuba diving–which would you do?"},
     {question:"Whats the most important thing I should know about you?"},
     {question:"When you were a kid, what did you think your life would look like now?"},
     {question:"Which of your family members are you most like?"},
     {question:"Do you think there are aliens on other planets?"},
     {question:"If you were an animal, what animal would you be? Why?"},
     {question:"Who would win in a fight, a robot or a dinosaur?"},
     {question:"What was your worst fashion disaster?"},
     {question:"Whats the most embarrassing thing you did at school / when you were a kid?"},
     {question:"If you had a reality TV show about your life, what would your theme song be?"},
     {question:"Whats your plan if there was a zombie apocalypse?"},
     {question:"What made you smile today?"},
     {question:"What is your favorite form of social media?"},
     {question:"What was the last good book you read?"},
     {question:"Do you listen to any podcasts? Which is your favorite?"},
     {question:"What do you think is the best show on Netflix right now?"},
     {question:"Have you been on any interesting trips lately?"},
     {question:"What do you think has been the best movie of the year so far?"},
     {question:"What song do you wish you could put on right now?"},
     {question:"Are you a cat person or a dog person?"},
     {question:"Do you think you are an introvert or an extrovert?"},
     {question:"What is your strangest hidden talent?"},
     {question:"What is something people are always surprised to learn about you?"},
     {question:"Where do you want to be in five years?"},
     {question:"What superpower do you wish you could have?"},
     {question:"Where would you go on vacation if you had no budget?"},
     {question:"If you could travel back in time, what decade would you choose to live in?"},
     {question:"What is the best thing you have ever bought off Amazon?"},
     {question:"What was the last concert you went to?"},
     {question:"What is one thing you cannot live without?"},
     {question:"What was the strangest dream you have had recently?"},
     {question:"What is your favorite book of all time?"},
     {question:"How many countries have you been to?"},
     {question:"What is your favorite city you have visited?"},
     {question:"Would you rather travel via plane or boat?"},
     {question:"Would you rather be really hot or really cold?"},
     {question:"What are your thoughts on the British royal family?"},
     {question:"Do you like documentaries? Have you watched any good ones recently?"}
];

function onClickHandler() {
    const ul = document.getElementsByTagName('ul')[0];
    const item = arr[Math.floor(Math.random() * arr.length)];
    ul.innerHTML = `
            ${item.question}
        `;
}
