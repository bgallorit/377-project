let data = {
    'init': {
        'id': 'initid',
        'text': 'You wake up to your alarm blaring. It is 8:30. You have to be in class in an hour.',
        'choices': [
            { 'text': 'Get up', 'next': 'Get up' },
            { 'text': 'Snooze', 'next': 'snooze1' },
            { 'text': 'Relationship stuff', 'next': 'relationship1' }
        ]
    },
    'Get up': {
        'id': 'wakeup',
        'text': 'You lift yourself out of bed. You should probably take a shower.',
        'choices': [
            { 'text': 'Take shower', 'next': 'shower' },
            { 'text': 'Skip the shower', 'next': 'skip' },
        ]
    },
    'shower': {
        'id': 'shower',
        'text': 'After taking a shower, you make your way to class.'
    },
    'skip': {
        'id': 'noshower',
        'text': "You decide it's probably fine to skip the shower... hopefully..."
    },
    'Snooze1': {
        'id': 'snooze1',
        'text': 'You decide to give yourself just five more minutes of sleep. Those five minutes go by seemingly instantly, and your alarm goes off again.',
        'choices': [
            { 'text': 'Get up', 'next': 'Get up' },
            { 'text': 'Snooze', 'next': 'snooze2' }
        ]
    },
    'Snooze2': {
        'id': 'snooze2',
        'text': "Another five minutes couldn't hurt. Just as you close your eyes, you hear your alarm again.",
        'choices': [
            { 'text': 'Get up', 'next': 'Get up' },
            { 'text': 'Snooze', 'next': 'snooze3' }
        ]
    },
    'Snooze3': {
        'id': 'snooze3',
        'text': "You feel very tired... five more minutes... the alarm beeps again...",
        'choices': [
            { 'text': 'Get up', 'next': 'Get up' },
            { 'text': 'Snooze', 'next': 'snooze4' }
        ]
    },
    'Snooze4': {
        'id': 'snooze4',
        'text': "You don't even remember if you closed your eyes before you hear your alarm for the fourth time.",
        'choices': [
            { 'text': 'Get up', 'next': 'Get up' },
            { 'text': 'Snooze', 'next': 'snooze5' }
        ]
    },
    'Snooze5': {
        'id': 'snooze5',
        'text': "You're not even sure if you can muster up the energy to physically get up now.",
        'choices': [
            { 'text': 'Get up', 'next': 'Get up' },
            { 'text': 'Snooze', 'next': 'snooze6' }
        ]
    },
    'Snooze6': {
        'id': 'snooze6',
        'text': 'Instead of hitting the snooze button, you accidentally turn your alarm off. You fall into a deep sleep.'
    },
    'Relationship stuff': {
        'id': 'relationship1',
        'text': "The conversation with your friend shifts to your relationship statuses. Just as you declare that you’re single, you feel a sharp presence nearby. Weird. Definitely means nothing. You shouldn't read into it. Presence? That's silly.</br>You and your friend leave the dining area and you both part ways. You catch a glimpse of someone you recognize. Or maybe not. This is such a huge school so maybe it’s someone you just think looks like someone you know.",
        'choices': [
            { 'text': 'Ignore', 'next': 'ignore1' },
            { 'text': 'Say hi', 'next': 'sayhi' }
        ]
    // Add more choices as needed
    },
    'Ignore1': {
        'id': 'ignore1',
        'text': 'As you keep walking, you continue to feel that presence. Something is watching you. You probably know what it is at this point. But you could keep ignoring it if you really want to…',
        'choices': [
            { 'text': 'Ignore again', 'next': 'ignore2' },
            { 'text': 'Say hi', 'next': 'Say hi' }
        ]
    },
    'Ignore again': {
        'id': 'ignore2',
        'text': 'Suddenly, the presence sharply grows behind you and ends up in front of your face.</br>"H-hey. Wow what a coincidence seeing you here. I know you from c-class… right?"',
        'choices': [
            { 'text': 'Do I?', 'next': 'doI' }
        ]
    },
    'Say hi': {
        'id': 'sayhi',
        'text': '“H-hey. Wow what a coincidence seeing you here. I know you from c-class… right?”',
        'choices': [
            { 'text': 'Do I?', 'next': 'doI' }
        ]
    },
    'Do I?': {
        'id': 'doI',
        'text': 'You do indeed know him from class. You had to work with him on a project once and nothing about the experience particularly stands out as you think back.</br>What was his name again? Oh yeah. You say hi to Guy.',
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
            { 'text': '"No thanks."', 'next': 'reject' }
        ]
    },
    '"No thanks."': {
        'id': 'reject',
        'text': '“OH so NOW you think you’re too GOOD for me?? Even after all the time we spent together strengthening our bond over that group project and how I even OFFERED TO SPEND MY OWN MONEY FOR YOU??? MAYBE YOU’RE JUST A [meanie jerkface] WHO [makes kissy faces at a lot of boys] BECAUSE YOU LOOOOVE THE ATTENTION FROM LEADING PEOPLE ON YOU DUMB FAT [person who seeks attention]! I’LL HAVE YOU KNOW I HAVE SOOOOOO MANY OTHER [people] I COULD BE [making kissy kissy with] SO I DON’T NEED YOU ANYWAYS!',
        'choices': [
            { 'text': 'Give in', 'next': 'giveIn' },
            { 'text': 'Run away', 'next': 'runAway' }
        ]
    },
    'Give in': {
        'id': 'giveIn',
        'text': 'You know what? On second thought the way he insulted you and called you a big fat meanie jerkface who kisses a lot of boys for attention was kind of hot. Maybe this is the kind of man you need in your life. His words really spoke to you. Plus that little bit at the end? Oh man, you think about how awful it would be to miss out on the opportunity to go to the fanciest place on campus with this guy and for some other person to take that from you. His confidence and charisma could easily land him a boat of people to make kissy faces with if he’s not careful.',
        'choices': [
            { 'text': 'Later that day...', 'next': 'Later that day...' }
        ]
    },
    'Run away': {
        'id': 'runAway',
        'text': 'You quickly make an excuse and leave, avoiding any further interaction with Guy.',
        'choices': [
            { 'text': 'Continue running away', 'next': 'Continue running away' }
        ]
    },
    'Later that day...': {
        'id': 'later',
        'text': 'Later that day, Guy shows up to your dorm, grabs your hand, and kisses it. Wow! He didn’t even need to ask where you were living. He could just sense the force of your deep connection together and followed its energy to where you are. He’s so amazing… </br>Guy leads you gently to your destination with his hands over your eyes and once he grants you the permission to look, you realize your excitement was not for nothing.',
        'choices': [
            { 'text': 'Next', 'next': 'Next' },
            { 'text': 'Gracies', 'next': 'Gracies' }
        ]
    },
    'Gracies': {
        'id': 'gracies',
        'text': 'Guy brought you to the famed Grace Watson Hall for tonight’s dining experience. It’s like a dream come true.</br>“Table for two, please. Haha, don’t worry, I can pay ahead.”</br>He swipes his card and you both find your seating. With such expensive prices, you begin to wonder how he’s able to afford something this high class. You decide to ask.',
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
        'text': 'Guy stares into your eyes.</br>"I’m sure you’re different." He pulls out a box with a ring and presents it to you.',
        'choices': [
            { 'text': 'Next', 'next': 'eyeZoom' }
        ]
    }  
}

let grade = 0;
let social = 0;
let values = Object.values(data);
 

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