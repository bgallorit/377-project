let data = {
    'init': {
        'id': 'initid',
        'text': 'You can hear your alarm blaring. It takes you a moment, but you remember that you set your alarm for 8:30. You have to be in class in an hour.',
        'choices': [
            { 'text': 'Get up', 'next': 'wakeUp' },
            { 'text': 'Snooze', 'next': 'snooze1' },
        ]
    },
    'Get up': {
        'id': 'wakeUp',
        'text': 'You lift yourself out of bed. You should probably take a shower.',
        'backgroundImage': 'bedroom.jpg',
        'choices': [
            { 'text': 'Take shower', 'next': 'shower' },
            { 'text': 'Skip the shower', 'next': 'noShower' },
        ]
    },
    'shower': {
        'id': 'shower',
        'text': 'After taking a shower, you make your way to class. It seems like today will be focused on solving practice problems.',
        'backgroundImage': 'classroom.jpg',
        'choices': [
            {'text': 'Take a look at the problems', 'next': 'help1'}
        ]
        
    },
    'skip': {
        'id': 'noShower',
        'text': "You decide it's probably fine to skip the shower... probably. You make your way to your first class.\nAs you sit down, you notice other students moving their chairs a little bit. There are practice problems on the board.",
        'backgroundImage': 'classroom.jpg',
        'choices': [
            {'text': 'Take a look at the problems', 'next': 'help1'} 
        ]
    },
    'Snooze1': {
        'id': 'snooze1',
        'text': 'You decide to give yourself just five more minutes of sleep. Those five minutes go by seemingly instantly, and your alarm goes off again.',
        'choices': [
            { 'text': 'Get up', 'next': 'wakeUp' },
            { 'text': 'Snooze', 'next': 'snooze2' }
        ]
    },
    'Snooze2': {
        'id': 'snooze2',
        'text': "Another five minutes couldn't hurt. Just as you close your eyes, you hear your alarm again.",
        'choices': [
            { 'text': 'Get up', 'next': 'wakeUp' },
            { 'text': 'Snooze', 'next': 'snooze3' }
        ]
    },
    'Snooze3': {
        'id': 'snooze3',
        'text': "You feel very tired... five more minutes... the alarm beeps again...",
        'choices': [
            { 'text': 'Get up', 'next': 'wakeUp' },
            { 'text': 'Snooze', 'next': 'snooze4' }
        ]
    },
    'Snooze4': {
        'id': 'snooze4',
        'text': "You don't even remember if you closed your eyes before you hear your alarm for the fourth time.",
        'choices': [
            { 'text': 'Get up', 'next': 'wakeUp' },
            { 'text': 'Snooze', 'next': 'snooze5' }
        ]
    },
    'Snooze5': {
        'id': 'snooze5',
        'text': "You're not even sure if you can muster up the energy to physically get up now. Your alarm goes off yet again.",
        'choices': [
            { 'text': 'Get up', 'next': 'wakeUp' },
            { 'text': 'Snooze', 'next': 'snooze6' }
        ]
    },
    'Snooze6': {
        'id': 'snooze6',
        'text': "You've lost track of how many times you've snoozed. As you wonder what time it even is, your alarm sounds off.",
        'choices': [
            { 'text': 'Get up', 'next': 'wakeUp' },
            { 'text': 'Snooze', 'next': 'snooze7' }
        ]
    },
    'Snooze7': {
        'id': 'snooze7',
        'text': "You don't even need to open your eyes to snooze the alarm anymore. You debate taking the loss on attendance for today as your alarm beeps for the nth time.",
        'choices': [
            { 'text': 'Get up', 'next': 'wakeUp' },
            { 'text': 'Snooze', 'next': 'snooze8' }
        ]
    },
    'Snooze8': {
        'id': 'snooze8',
        'text': 'You try to hit the snooze button, but you accidentally knock your alarm off of your desk. As it falls, it gets unplugged. If you don’t get up now, who knows how long you’ll sleep.',
        'choices': [
            { 'text': 'Get up', 'next': 'wakeUpLate' },
            { 'text': 'Snooze', 'next': 'snooze9' }
        ]
    },
    'Snooze9': {
        'id': 'snooze9',
        'text': 'You know the consequences of missing your classes today, but your brain is too tired to really care. You immediately fall back into a deep sleep.',
        'choices': [
            { 'text': '...', 'next': 'snooze10' },
        ]
    },
    'Snooze10': {
        'id': 'snooze10',
        'text': "When you wake up again, it's dark outside. You have texts from friends wondering where you are. You should probably let them know you're alive, but you're way too tired...",
        'choices': [
            { 'text': 'Go back to sleep', 'next': 'snooze11' },
        ]
    },
    'Snooze11': {
        'id': 'snooze11',
        'text': "You drop your phone as your eyes start to close again. You pass out the moment your head hits your pillow. Maybe you won't be as tired tomorrow, but for now, all you can do is sleep...",
        'choices': [
            { 'text': 'Sleep Ending', 'next': 'initid' },
        ]
    },
    'Wake up late': {
        'id': 'wakeUpLate',
        'text': 'It takes an amount of energy you didn’t know you possessed, but you manage to open your eyes and get out of bed. You’re already pushing for time, but you should still probably take a shower.',
        'choices': [
            { 'text': 'Take a shower', 'next': 'shower' },
            { 'text': 'Skip the shower', 'next': 'noShower' }
        ]
    },
    'askForHelp': {
        'id': 'help1',
        'text': 'You try to solve the first question, but you find yourself completely stuck. You should probably ask someone for help, but who?',
        'choices': [
            { 'text': 'The TA', 'next': 'ta1' },
            { 'text': 'The Professor', 'next': 'professor1' },
            { 'text': 'A classmate', 'next': 'classmate1' },
        ]
    },
    'TA': {
        'id': 'ta1',
        'text': "You ask the TA for help with the first question. They're a little busy helping another student, and tell you to just use ChatGPT 'or something.' Should you take their advice?",
        'choices': [
            { 'text': 'Use ChatGPT', 'next': 'chatGpt' + Math.floor(Math.random() * 2) },
            { 'text': 'Ask the professor', 'next': 'professor1' },
            { 'text': 'Ask a classmate', 'next': 'classmate' },
        ]
    },
    'Professor help': {
        'id': 'professor1',
        'text': "The professor didn't seem to be doing much, so you asked him for help. He was glad to help you, and even stayed after class to let you ask him questions about the next assignment.\nBy the time you're done talking, it's almost time for your next class.",
        'choices': [
            { 'text': 'Next', 'next': 'nextClass1' },
        ]
    },
    'ChatGPT success': {
        'id': 'chatGpt0',
        'text': 'You use ChatGPT to help you solve the practice problems and nobody seems to notice. You feel like you have a better grasp of the material!',
        'choices': [
            { 'text': 'The TA', 'next': 'ta1' },
            { 'text': 'The Professor', 'next': 'professor1' },
            { 'text': 'A classmate', 'next': 'classmate' },
        ]
    },
    'ChatGPT fail': {
        'id': 'chatGpt1',
        'text': 'You use ChatGPT to help you solve the practice problems. Unfortunately, you fail to notice your professor patrolling the room and he catches you in the act. Even though you can tell he is very unhappy with you, he says nothing to you and class ends like normal.',
        'choices': [
            { 'text': 'Next', 'next': 'interrogation1' },
        ]
    },
    'Next class 1': {
        'id': 'nextClass1',
        'text': "Once you arrived at your second class, the professor split everyone into groups and initiated group discussions. The professor isn't really paying attention, so you can do whatever you want.",
        'choices': [
            { 'text': 'Talk about class topic', 'next': 'topic1' },
            { 'text': 'Talk about extracurriculars', 'next': 'extracurricular1' },
            { 'text': 'Go on your phone', 'next': 'phone1' },
        ]
    },
    'Topic 1': {
        'id': 'topic1',
        'text': "You chat with your group about the topic given by the professor. You learn your groupmates' opinions on the ethics of using technology in education. How interesting!",
        'choices': [
            { 'text': 'Next', 'next': 'askToHangOut' },
        ]
    },
    'Extracurricular 1': {
        'id': 'extracurricular1',
        'text': "You chat with your group about your extracurricular activities. One person mentions being a part of a club where you duel with medieval European swords. You had no idea such a thing existed at this school, but you suddenly really want to join it.",
        'choices': [
            { 'text': 'Next', 'next': 'askToHangOut' },
        ]
    },
    'Phone 1': {
        'id': 'phone1',
        'text': "You don't feel like participating in class today, so you decide to just scroll on your phone while your groupmates talk to each other. Once class is over, you decide to go back to your dorm.",
        'choices': [
            { 'text': 'Next', 'next': 'askToHangOut' },
        ]
    },
    'Home 1': {
        'id': 'home1',
        'text': "It wasn't very eventful, but you're done with class for the day. You can spend the rest of the day however you please.",
        'backgroundImage': 'bedroom.jpg',
        'choices': [
            { 'text': 'Work on assignments', 'next': 'assignments' },
            { 'text': 'Play games', 'next': 'games' },
        ]
    },
    'assignments': {
        'id': 'assignments',
        'text': "You decide to get a head start on some assignments due in the coming week. After a couple of hours, you start to get sleepy and decide to go to bed.",
        'backgroundImage': 'bedroom.jpg',
        'choices': [
            { 'text': 'Good Student ending', 'next': 'assignments' },
        ]
    },
    'games': {
        'id': 'games',
        'text': "Even though you have assignments due very soon, you decide to spend the rest of the day playing video games with some online friends. By the time you remember you have an assignment due by the end of the day, it's already too late. Taking the loss, you decide to just go to sleep.",
        'backgroundImage': 'bedroom.jpg',
        'choices': [
            { 'text': 'Mediocre Student ending', 'next': 'games' },
        ]
    },
    'Asked to hang out': {
        'id': 'askToHangOut',
        'text': "After your discussion, your groupmates ask you if you want to hang out after class. You haven't talked with them much before, but it could be a good opportunity to make some new friends.",
        'choices': [
            { 'text': 'Hang out', 'next': 'hangOut' },
            { 'text': 'Go home', 'next': 'goHome' },
        ]
    },

    ///INTERROGATION
    'Interrogation 1': {
        'id': 'interrogation1',
        'text': "The rest of the day goes by like normal, and after finishing up some assignments, you get to bed. You're free tomorrow morning, so you can sleep in.",
        'backgroundImage': 'bedroom.jpg',
        'choices': [
            { 'text': 'Go to sleep', 'next': 'interrogation2' },
        ]
    },
    'Interrogation 2': {
        'id': 'interrogation2',
        'text': "*KNOCK* *KNOCK* *KNOCK*\n...huh? You've been woken up in the middle of the night by someone knocking at the door. Very loudly, in fact.",
        'backgroundImage': 'black',
        'choices': [
            { 'text': 'Answer the door', 'next': 'interrogation3' },
        ]
    },
    'Interrogation 3': {
        'id': 'interrogation3',
        'text': 'You scramble to put something on and open the door. Standing in front of you are two very not-college-aged men in black suits.',
        'backgroundImage': 'bedroom.jpg',
        'choices': [
            { 'text': 'Next', 'next': 'interrogation4' },
        ]
    },
    'Interrogation 4': {
        'id': 'interrogation4',
        'text': '"We know you used ChatGPT on your classwork today. You’re coming with us."\n...what?',
        'backgroundImage': 'bedroom.jpg',
        'choices': [ 
            { 'text': 'Answer the door', 'next': 'interrogation5' },
        ]
    },
    'Interrogation 5': {
        'id': 'interrogation5',
        'text': "Before you can respond, they drag you outside to a van armed with security guards. After shoving you in, they speed away.\nYou don't know where you're headed, but you feel you won't be back for a long time...",
        'backgroundImage': 'bedroom.jpg',
        'choices': [ 
            { 'text': 'Cheating Ending', 'next': 'interrogation' },
        ]
    },
    'Classmate1': {
        'id': 'classmate1',
        'text': "You ask a classmate you know for help. You go through the practice problems together, and before you know it, class is over. You decide to get lunch together.",
        'choices': [
            { 'text': 'Next', 'next': 'classmate2' },
        ]
    },
    'Classmate2': {
        'id': 'classmate2',
        'text': "You've both gotten your food and have just sat down. What should you talk about?",
        'backgroundImage': 'gracies.jpg',
        'choices': [
            { 'text': 'Weather', 'next': 'nonsense1' },
            { 'text': 'Relationships', 'next': 'relationship1' },
            { 'text': 'Weeb stuff', 'next': 'weeb1' },
        ]
    },
    'Relationship stuff': {
        'id': 'relationship1',
        'text': "The conversation with your friend shifts to your relationship statuses. Just as you declare that you’re single, you feel a sharp presence nearby. Weird. Definitely means nothing. You shouldn't read into it. Presence? That's silly.",
        'choices': [
            { 'text': 'Next', 'next': 'relationship2' },
        ]
    },
    'Relationship2': {
        'id': 'relationship2',
        'text': "You and your friend leave the dining area and you both part ways. You catch a glimpse of someone you recognize. Or maybe not. This is such a huge school so maybe it’s someone you just think looks like someone you know.",
        'backgroundImage': 'hallway.jpg',
        'choices': [
            { 'text': 'Ignore', 'next': 'ignore1' },
            { 'text': 'Say hi', 'next': 'sayHi' }
        ]
    },
    'Ignore1': {
        'id': 'ignore1',
        'text': 'As you keep walking, you continue to feel that presence. Something is watching you. You probably know what it is at this point. But you could keep ignoring it if you really want to…',
        'choices': [
            { 'text': 'Ignore again', 'next': 'ignore2' },
            { 'text': 'Say hi', 'next': 'sayHi' }
        ]
    },
    'Ignore again': {
        'id': 'ignore2',
        'text': 'Suddenly, the presence sharply grows behind you and ends up in front of your face.\n"H-hey. Wow what a coincidence seeing you here. I know you from c-class… right?"',
        'spriteImage': 'guy.png',
        'choices': [
            { 'text': 'Do I?', 'next': 'doI' }
        ]
    },
    'Say hi': {
        'id': 'sayHi',
        'text': '“H-hey. Wow what a coincidence seeing you here. I know you from c-class… right?”',
        'spriteImage': 'guy.png',
        'choices': [
            { 'text': 'Do I?', 'next': 'doI' }
        ]
    },
    'Do I?': {
        'id': 'doI',
        'text': 'You do indeed know him from class. You had to work with him on a project once and nothing about the experience particularly stands out as you think back.\nWhat was his name again? Oh yeah. You say hi to Guy.',
        'choices': [
            { 'text': '"Hi Guy."', 'next': 'hiGuy' }
        ]
    },
    '"Hi Guy."': {
        'id': 'hiGuy',
        'text': 'Guy: “HAHAhaA WOW you really DO remember my name. M-maybe this means… um… so anyways…”\nHe didn’t finish his sentence, but he did keep walking with you.',
        'choices': [
            { 'text': 'Keep walking', 'next': 'askedOut' }
        ]
    },
    'Keep walking': {
        'id': 'askedOut',
        'text': 'Guy: “Um so since… we know each other and everything… would you want to like. Um. Hang out sometime? We can eat at the fanciest place on campus and I can… p-pay for all of it. You know. To be a g-gentleman. You can eat as m-much as you want too. Sometimes I h-hear that the food is so good that it doesn’t want to stay in your, um… stomach.”',
        'choices': [
            { 'text': '"Sure."', 'next': 'accept' },
            { 'text': '"No thanks."', 'next': 'pass' }
        ]
    },
    '"No thanks."': {
        'id': 'pass',
        'text': '“OH so NOW you think you’re too GOOD for me?? Even after all the time we spent together strengthening our bond over that group project and how I even OFFERED TO SPEND MY OWN MONEY FOR YOU??? MAYBE YOU’RE JUST A [meanie jerkface] WHO [makes kissy faces at a lot of boys] BECAUSE YOU LOOOOVE THE ATTENTION FROM LEADING PEOPLE ON YOU DUMB FAT [person who seeks attention]! I’LL HAVE YOU KNOW I HAVE SOOOOOO MANY OTHER [people] I COULD BE [making kissy kissy with] SO I DON’T NEED YOU ANYWAYS!',
        'spriteImage': 'guyCry.png',
        'choices': [
            { 'text': 'Give in', 'next': 'giveIn' },
            { 'text': 'Run away', 'next': 'runAway1' }
        ]
    },
    'Sure': {
        'id': 'accept',
        'text': 'You’re captivated by his offer and feel all tingly at the fact that he wants to pay for all of it. You get the feeling that he can treat you like a queen on this little outing. He also mentioned that you can eat as much as you want? There’s nobody in the world more generous or gentlemanly than this Guy. You accept his offer as you’re quivering with excitement at being able to be alone with such a valuable man.',
        // 'spriteImage': 'guyCry.png',
        'choices': [
            { 'text': 'Later that day...', 'next': 'later1' },
        ]
    },
    'Give in': {
        'id': 'giveIn',
        'text': 'You know what? On second thought the way he insulted you and called you a big fat meanie jerkface who kisses a lot of boys for attention was kind of hot. Maybe this is the kind of man you need in your life. His words really spoke to you. Plus that little bit at the end? Oh man, you think about how awful it would be to miss out on the opportunity to go to the fanciest place on campus with this guy and for some other person to take that from you. His confidence and charisma could easily land him a boat of people to make kissy faces with if he’s not careful.',
        'spriteImage': 'none',
        'choices': [
            { 'text': 'Later that day...', 'next': 'later1' }
        ]
    },
    'Later that day...': {
        'id': 'later1',
        'text': 'Later that day, Guy shows up to your dorm, grabs your hand, and kisses it. Wow! He didn’t even need to ask where you were living. He could just sense the force of your deep connection together and followed its energy to where you are. He’s so amazing…',
        'backgroundImage': 'bedroom.jpg',
        'spriteImage': 'guy.png',
        'choices': [
            { 'text': 'Next', 'next': 'later2' }
        ]
    },
    'Later2': {
        'id': 'later2',
        'text': 'Guy leads you gently to your destination with his hands over your eyes and once he grants you the permission to look, you realize your excitement was not for nothing.',
        'spriteImage': 'none',
        'backgroundImage': 'black',
        'choices': [
            { 'text': 'Next', 'next': 'gracies' }
        ]
    },
    'Gracies': {
        'id': 'gracies',
        'text': 'Guy brought you to the famed Grace Watson Hall for tonight’s dining experience. It’s like a dream come true.\n“Table for two, please. Haha, don’t worry, I can pay ahead.”\nHe swipes his card and you both find your seating. With such expensive prices, you begin to wonder how he’s able to afford something this high class. You decide to ask.',
        'spriteImage': 'guy.png',
        'backgroundImage': 'gracies.jpg',
        'choices': [
            { 'text': '"How can you afford this?"', 'next': 'affordQuestion' }
        ]
    },
    'Afford': {
        'id': 'affordQuestion',
        'text': '“Oh, me? I have around maybe a thousand dollars left on my card but I don’t enjoy flexing around my wealth too much. You see, I’m wary of those gold diggers out there who are looking to just use me for my status. I can see it in their eyes how much they want my attention for the chance to take advantage of me, but I’m so smart that I never give them the opportunity. But you?”',
        'choices': [
            { 'text': 'Next', 'next': 'eyeZoom' }
        ]
    },
    'Eyes': {
        'id': 'eyeZoom',
        'text': 'Guy stares into your eyes.\n"I’m sure you’re different." He pulls out a box with a ring and presents it to you.',
        'spriteImage': 'guyClose.png',
        'choices': [
            { 'text': 'Next', 'next': 'proposal' }
        ]
    },
    'Proposal': {
        'id': 'proposal',
        'text': '"Will you marry me?"',
        'choices': [
            { 'text': 'Of course', 'next': 'accept1' },
            { 'text': '...What?', 'next': 'reject1' }
        ]
    },

    ///ACCEPT MARRIAGE
    'AcceptMarriage': {
        'id': 'accept1',
        'text': '"Yes! Of course!", you say. You cry tears of joy and he pulls you in for a kiss.\nEveryone around you starts clapping. This is the happiest day of your life. A horse appears and carries the both of you into the sunset, which also doubles as his house he bought for both of you with his enormous wealth. How sweet of him to think of you like that!',
        'backgroundImage': 'kissing.png',
        'spriteImage': 'none',
        'choices': [
            { 'text': 'Next', 'next': 'accept2' },
        ]
    },
    'AcceptMarriage2': {
        'id': 'accept2',
        'text': '“We’re gonna have soooo many kids together, you beautiful radiant enchanting elegant dazzling adorable breathtaking luminous excellent new partner! I’m going to provide so much for you and you’ll never have to work in your life.”\nOh. Well you kind of had dreams of working as a-',
        'choices': [
            { 'text': 'Next', 'next': 'accept3' },
        ]
    },
    'AcceptMarriage3': {
        'id': 'accept3',
        'text': '*smack*\n”Hey, baby, don’t think about stuff like that. Just let me handle everything. You can just rely on me. Just understand I can get a little rough sometimes because I love you so much. hehehehehehe.”',
        'choices': [
            { 'text': 'Married Ending', 'next': 'initid' },
        ]
    },

    //REJECT MARRIAGE
    'RejectMarriage1': {
        'id': 'reject1',
        'text': 'You get a stomach ache and feel sick. Before you can answer, you run to the bathroom and throw up in the first toilet you can find. Right outside the stall, you hear a voice.”',
        'choices': [
            { 'text': 'Next', 'next': 'reject2' },
        ]
    },
    'RejectMarriage2': {
        'id': 'reject2',
        'text': '“So instead of replying, you ran away and ghosted me. Of course you wouldn’t appreciate what I’ve done for you because you’re all the same. NO MORE MISTER NICE GUY! AWOOOOOOOO! GRRRRRRR”\nHe started… growling? What did you get yourself into? You look for escape routes. Can you crawl under the stall? No, that would be too slow. Think, think thi-',
        'spriteImage': 'none',
        'backgroundImage': 'bathroom.jpg',
        'choices': [
            { 'text': 'Next', 'next': 'reject3' },
        ]
    },
    'RejectMarriage3': {
        'id': 'reject3',
        'text': 'He opens the door before you can do anything else and pushes you down against the toilet seat. Gross.\n“WE WERE HAVING SUCH A GREAT NIGHT! WHY DID YOU HAVE TO RUIN IT?? ALL YOU HAVE TO DO IS BE WITH ME AND I CAN BE HAPPY FOR THE REST OF MY LIFE!”',
        'spriteImage': 'guyEyes.png',
        'choices': [
            { 'text': 'Next', 'next': 'reject4' },
        ]
    },
    'RejectMarriage4': {
        'id': 'reject4',
        'text': 'He pushes you down further and you get an idea. You flip him over and dunk his face into the toilet. You run as fast as you can into Grace Watson’s tunnel entrance and remember that he knows where you live. You decide to wait in the nearest laundry room and hope he doesn’t find you.',
        'choices': [
            { 'text': 'Next', 'next': 'reject5' },
        ]
    },
    'RejectMarriage5': {
        'id': 'reject5',
        'text': "After waiting a while, you decide to go back to your room hoping he gave up. He doesn’t seem to be there luckily. You open the door.\nSomething is on your bed. It's a note.",
        'spriteImage': 'none',
        'backgroundImage': 'bedroom.jpg',
        'choices': [
            { 'text': 'Read the note', 'next': 'reject6' },
        ]
    },
    'RejectMarriage6': {
        'id': 'reject6',
        'text': '“pls forgive me i got too heated. ill even forgive u for dunking my face in barf and we can be happy. lets go on one more date i promise it will never happen again.”\nYou’re way too tired to try processing any of this and just collapse into bed.',
        'choices': [
            { 'text': '...', 'next': 'reject7' },
        ]
    },
    'RejectMarriage7': {
        'id': 'reject7',
        'text': "When you wake up, you hear a knock on your door. Ugh. You know where this is going.",
        'choices': [
            { 'text': 'Open the door', 'next': 'reject8' },
        ]
    },
    'RejectMarriage8': {
        'id': 'reject8',
        'text': '"S-so you’ll forgive me, right?\n...How do you apply for a restraining order?',
        'spriteImage': 'guyEyes.png',
        'choices': [
            { 'text': 'Restraining Order Ending', 'next': 'reject8' },
        ]
    },

    //RUNNING AWAY
    'RunAway1': {
        'id': 'runAway1',
        'text': 'You decide to ask for his phone number and tell him you’ll text him later so that you can plan things out. After typing it in your phone and then deleting it, you high tail it back to your dorm and consider dropping out of the class you’re with him in. The next day you get a mysterious text.',
        // 'spriteImage': 'guyEyes.png',
        'choices': [
            { 'text': 'Read text', 'next': 'runAway2' },
        ]
    },
    'RunAway2': {
        'id': 'runAway2',
        'text': '"hey"\nYou don’t know the number so you block it. You then hear a knock on the door.',
        'spriteImage': 'none',
        'choices': [
            { 'text': 'Open the door', 'next': 'runAway3' },
        ]
    },
    'RunAway3': {
        'id': 'runAway3',
        'text': '“I-It doesn’t seem like… you answered… yet. I’m sorry for my… um… outburst at you. I’m actually really nice if you can give me a ch-chance. S-soooo…”\nHe starts loudly sobbing and you have several questions. You text the mystery number and his phone makes a notification noise out of his pocket. Uh oh.\nYou don’t know what to do other than close the door to come up with time to think.',
        'spriteImage': 'guyCry.png',
        'choices': [
            { 'text': 'Open the door', 'next': 'runAway4' },
        ]
    },
    'RunAway4': {
        'id': 'runAway4',
        'text': '“HUH? YOU DON’T EVEN LIKE MEN WHO ARE VULNERABLE WITH THEIR FEELINGS? WHAT ARE YOU, SOME KIND OF ROBOT??? WHAT DO I NEED TO DO TO IMPRESS YOU?”\nYou hear some jingling outside the door and it seems like the door knob is… being messed with. You open the window as you see it turn and jump out of it. You run without looking back. Actually maybe one peek wouldn’t hurt. Don’t worry, he isn’t following you.',
        'spriteImage': 'none',
        'choices': [
            { 'text': 'Look behind you', 'next': 'runAway5' },
        ]
    },
    'RunAway5': {
        'id': 'runAway5',
        'text': 'Oh. He is.\nWhy are you even running? You can’t think of anywhere to go. ',
        'spriteImage': 'guyCry.png',
        'choices': [
            { 'text': 'Look behind you', 'next': 'runAway6' },
        ]
    },
    'RunAway6': {
        'id': 'runAway6',
        'text': '“YOU STUPID LITTLE UGLY TRICKSTER! ABSOLUTE BUTTFACE ICKY TURD CRETIN HORSE! WHEN I GET YOU YOU’LL UNDERSTAND WHAT YOU’VE BEEN MISSING OUT ON ALL THIS TIME! I’LL-”',
        // 'spriteImage': 'guyCry.png',
        'choices': [
            { 'text': 'Is that...', 'next': 'runAway7' },
        ]
    },
    'RunAway7': {
        'id': 'runAway7',
        'text': 'Oh. Looks like campus safety got to him.',
        'choices': [
            { 'text': 'Run Away Ending', 'next': 'runAway7' },
        ]
    }
   
}

let grade = 0;
let social = 0;
let imageCreated = false;;
let values = Object.values(data);

function changeBackgroundImage(image){
    if(image == 'black'){
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "black";
        return;
    }
    let imageRef = "assets/img/" + image;
    document.body.style.backgroundImage = "url(" + imageRef + ")";
    console.log(imageRef);
}

function changeSpriteImage(image) {
    if(imageCreated){
        document.getElementById('img').parentNode.removeChild(document.getElementById('img'));
    }
    if(image == 'none'){
        imageCreated = false;
        return;
    }
    let imageRef = "assets/img/" + image;
    let img = document.createElement('img');
    img.id = 'img';
    img.src = imageRef;
    document.getElementById('sprite-div').append(img);
    imageCreated = true;
}

//Takes the choice made and edits the buttons/text on screen to match the data
function changeText(choiceId) {
    // Find the scenario object with the given choiceId
    let scenario;
    console.log(Object.keys(data).length);
    for (let key in data) {
        if (data[key].id === choiceId) {
            scenario = data[key];
            break;
        }
    }
    if(choiceId == 'initid') {
        changeSpriteImage('none');
    }
    if(scenario.backgroundImage) {
        changeBackgroundImage(scenario.backgroundImage);
    }
    if(scenario.spriteImage) {
        changeSpriteImage(scenario.spriteImage);
    }

    // Clear current buttons
    document.getElementById('choices').innerHTML = '';

    // Set text box content based on the found scenario object
    if (scenario) {
        document.getElementById('textbox').innerText = scenario.text;

        // Create buttons for the next set of choices
        scenario.choices.forEach(choice => {
            let button = document.createElement('button');
            button.innerText = choice.text;
            document.getElementById('choices').append(button);
            button.onclick = function () {
                changeText(choice.next);
            };
        });
    } else {
        console.error(`Scenario with ID '${choiceId}' not found.`);
    }
}


function init() {
    // Initialize the game with initial text and buttons
    if(imageCreated){
        document.getElementById('img').parentNode.removeChild(document.getElementById('img'));
    }
    imageCreated = false;
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = "black";
    document.getElementById('choices').innerHTML = '';
    document.getElementById('textbox').innerText = data.init.text;
    data.init.choices.forEach(choice => {
        let button = document.createElement('button');
        button.innerText = choice.text;
        document.getElementById('choices').append(button);
        button.onclick = function () {
            changeText(choice.next);
        }
    });
}