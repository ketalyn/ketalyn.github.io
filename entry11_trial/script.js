document.addEventListener('DOMContentLoaded', function () {
    const typingContainer = document.getElementById('typing-text');
    const linesOfText = [
        "Wait hold on, I’m starting my car.",
        "Ah. Okay.",
        "How are you?",
        "Hi mommy.",
        "Ah…you had a good time yesterday?",
        "Yeah. It was good. I’m calling right now because I’m trying to…it’s for a project.",
        "Okay hold on. It’s gonna connect to my phone now. Can you hear me?",
        "Yes. Hello hello?",
        "Hello?",
        "Hello? I can hear you? Can you hear me?",
        "Hello? Helloooo?",
        "Hello?",
        "Can you hear me?",
        "Katelyn?",
        "…",
        "Hello?",
        "…",
        "Hello?",
        "…",
        "Hello?",
        "There you go.",
        "Hello?",
        "Hello? Now—here we go.",
        "Okay.",
        "Okay okay.",
        "How are you?",
        "I’m good—honestly I think I might be getting a little sick cuz my throat is kinda scratchy but.. // I miss you!",
        "…",
        "Anyway, I’m calling because of like—a project. From what you remember, what would you say I was like when I was younger?",
        "What you were like when you were younger?",
        "Mm.",
        "Okay. What? What do you want me to say?",
        "Just like describe *laughs* what I was like.",
        "*laughs* Oh okay.",
        "And I’ll ask you—compared to like what I’m like now.",
        "Ah.",
        "Sorry, I was getting a little shaky—I had to drink something.",
        "Oh.",
        "What? In what context?",
        "Just like personality-wise, I guess. How would you say I compare when I was younger to like, now.",
        "Oh. Oh—you’re definitely more talkative.",
        "Mm. *laughs*",
        "*laughs* Before, like when you were very little—before kindergarten, no, not even before kindergarten—before preschool—",
        "Mm.",
        "…",
        "No.",
        "Mm?",
        "Like how early are we comparing? What age?",
        "Nah, just like anytime, I guess.",
        "Well when you were like, 1 or 2—you didn’t—you were very serious.",
        "Mm.",
        "You didn’t smile much. *laughs*",
        "Oh.",
        "Yeah. You were very very serious. You didn’t talk too much or smile.",
        "Mhm.",
        "So that’s one thing. And then—what else? But you were always very—once you started like going to preschool and school I mean you were so friendly, right? You were like very social, very, um, uh…I mean you would introduce Allie’s mom to other moms and teachers, right?",
        "*laughs*",
        "Yeah.",
        "Mhm.",
        "So that started once you started going to school, um, I have to look for differences? Or—",
        "Uh…",
        "It has to be different? Like",
        "You can just like—",
        "And then you can figure out if you’re different or not?",
        "Yeah, yeah. Or like differences/similarities, anything yeah that you notice.",
        "Um, there was a time where we thought you were very anal, very OCD.",
        "*laughs*",
        "You had to—*laughs* you had to like, line up things, you know?",
        "Mm.",
        "You were about putting things in line, like all the things had to be lined up and organized, and then we noticed—just like anything, I think, all of us—as you got older, you were not that—you didn’t have to do that on everything.",
        "Mm.",
        "But it would come out in certain areas—certain things, yeah. So I think we all have that, yeah. All of us.",
        "Mm.",
        "Um, what else? Uh… You always liked to eat.",
        "*laughs*",
        "You used to eat more seafood, more fish, but you don’t eat fish anymore or seafood.",
        "Mhm.",
        "Mm. You always loved meat. Mm…Oh, I guess that’s probably for everybody but you used to wake up super early, like 5 AM and read.",
        "Oh yeah.",
        "Yeah. And you didn’t come to us, that was really nice.",
        "*laughs*",
        "Like mommy, I can’t go to sleep, yeah. So you would just—we’d find you like—yeah, turn the light on and read on your own, yeah. That was nice. Uh…yeah, you always loved to learn. Um…loved to dance and sing. And always drew.",
        "…",
        "So anyways, you always drew. You always—you know, being our first child—we didn’t really have a phone anyway, at that time—for you to watch Youtube or whatever.",
        "Yeah.",
        "And maybe it did but we didn’t really care—so we always carried a piece of paper and crayons and you were always drawing, sketching. So that was—I think that helped. And I took you everywhere, oh my God—took you to all the museums, and",
        "Mm.",
        "And all these little experiences, right? Even when we went to San Diego. We took you to like this musical puppet show, and like—although you don’t remember any of it—",
        "Yeah—",
        "It’s okay *laughs*",
        "*laughs*",
        "We even paid for like, you know, all these like—there was a Cinderella coach that you can ride.",
        "What?",
        "We pay, and it was like a horse carriage that—",
        "*laughs*",
        "But it was a horse carriage like, you know—",
        "What? *laughs*",
        "Yeah, so we even did that, and",
        "*laughs*",
        "But you don’t remember. *laughs*",
        "No. *laughs*",
        "It’s okay. *laughs*",
        "But you know, I think to a certain extent all of those things are how you became so artistic. I’m sure it’s in your genes, but it helped. Hm…what else?",
    ];

    function typeText(index) {
        if (index < linesOfText.length) {
            const currentLine = linesOfText[index];
            let charIndex = 0;

            const typingInterval = setInterval(function () {
                if (charIndex < currentLine.length) {
                    typingContainer.textContent += currentLine[charIndex];
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                    typingContainer.innerHTML += '<br>';
                    typeText(index + 1);
                }
            }, 50);
        }
    }

    typeText(0);
});
