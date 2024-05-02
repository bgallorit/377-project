let data = {
    'init': ['initid', 'You wake up to your alarm blaring. It is 8:30. You have to be in class in an hour.', 'Get up', 'Snooze', 'Relationship stuff'],
    'Get up': ['wakeup', 'You lift yourself out of bed. You should probably take a shower. ', 'Take shower', 'Skip the shower', 'Secret third choice to test flexbox'],
    'Take shower': ['shower', 'After taking a shower, you make your way to class.'],
    'Skip the shower': ['noshower', "You decide it's probably fine to skip the shower... hopefully..."],
    'Snooze1': ['snooze1', 'You decide to give yourself just five more minutes of sleep. Those five minutes go by seeminly instantly, and your alarm goes off again.', 'Get up', 'Snooze'],
    'Snooze2': ['snooze2', "Another five minutes couldn't hurt. Just as you close your eyes, you hear your alarm again.", 'Get up', 'Snooze'],
    'Snooze3': ['snooze3', "You feel very tired... five more minutes... the alarm beeps again...", 'Get up', 'Snooze'],
    'Snooze4': ['snooze4', "You don't even remember if you closed your eyes before you hear your alarm for the fourth time.", 'Get up', 'Snooze'],
    'Snooze5': ['snooze5', "You're not even sure if you can muster up the energy to physically get up now.", 'Get up', 'Snooze'],
    'Snooze6': ['snooze6', 'Instead of hitting the snooze button, you accidentally turn your alarm off. You fall into a deep sleep.'],
    'Relationship stuff': ['relationship1', "The conversation with your friend shifts to your relationship statuses. Just as you declare that you’re single, you feel a sharp presence nearby. Weird. Definitely means nothing. You shouldn't read into it. Presence? That's silly.</br>You and your friend leave the dining area and you both part ways. You catch a glimpse of someone you recognize. Or maybe not. This is such a huge school so maybe it’s someone you just think looks like someone you know.", 'Ignore', 'Say hi'],
    'Ignore': ['ignore1', 'As you keep walking, you continue to feel that presence. Something is watching you. You probably know what it is at this point. But you could keep ignoring it if you really want to…', 'Ignore again', 'Say hi'],
    'Ignore again': ['ignore2', 'Suddenly, the presence sharply grows behind you and ends up in front of your face.</br>"H-hey. Wow what a coincidence seeing you here. I know you from c-class… right?"', 'Do I?'],
    'Say hi': ['sayhi', '“H-hey. Wow what a coincidence seeing you here. I know you from c-class… right?”', 'Do I?'],
    'Do I?': ['doi', 'You do indeed know him from class. You had to work with him on a project once and nothing about the experience particularly stands out as you think back.</br>What was his name again? Oh yeah. You say hi to Guy.', '"Hi Guy."'],
    '"Hi Guy."': ['higuy', 'Guy: “HAHAhaA WOW you really DO remember my name. M-maybe this means… um… so anyways…”\nHe didn’t finish his sentence, but he did keep walking with you.', 'Keep walking'],
    'Keep walking': ['askedout','Guy: “Um so since… we know each other and everything… would you want to like. Um. Hang out sometime? We can eat at the fanciest place on campus and I can… p-pay for all of it. You know. To be a g-gentleman. You can eat as m-much as you want too. Sometimes I h-hear that the food is so good that it doesn’t want to stay in your, um… stomach.”', '"Sure."', '"No thanks."'],
    '"No thanks."': ['reject','“OH so NOW you think you’re too GOOD for me?? Even after all the time we spent together strengthening our bond over that group project and how I even OFFERED TO SPEND MY OWN MONEY FOR YOU??? MAYBE YOU’RE JUST A [meanie jerkface] WHO [makes kissy faces at a lot of boys] BECAUSE YOU LOOOOVE THE ATTENTION FROM LEADING PEOPLE ON YOU DUMB FAT [person who seeks attention]! I’LL HAVE YOU KNOW I HAVE SOOOOOO MANY OTHER [people] I COULD BE [making kissy kissy with] SO I DON’T NEED YOU ANYWAYS!', 'Give in', 'Run away']

    // 'Choice 1': ['You selected choice 1! What now?', 'Choice 1A', 'Choice 1B'],
    // 'Choice 2': ['You selected choice 2! What now?', 'Choice 2A', 'Choice 2B'],
    // 'Choice 1A': ['You selected choice 1A!'],
    // 'Choice 1B': ['You selected choice 1B!'],
    // 'Choice 2A': ['You selected choice 2A!'],
    // 'Choice 2B': ['You selected choice 2B!']              
}

let currentChoice;
let snoozeCount = 0;
let grade = 0;
let social = 0;
let values = Object.values(data);
 

// function init() {       //initial text and button creation, doesn't need to be dynamic
//     document.getElementById('choices').innerHTML = '';
//     document.getElementById('textbox').innerText = data.init[1];
//     let initButton1 = document.createElement('button');
//     initButton1.innerText = "Get up";
//     initButton1.onclick = function(){
//         changeText(initButton1.innerText);
//     }
//     let initButton2 = document.createElement('button');
//     initButton2.innerText = "Snooze";
//     initButton2.onclick = function(){
//         changeText(initButton2.innerText);
//     }
//     document.getElementById('choices').append(initButton1);
//     document.getElementById('choices').append(initButton2);
// }


//Takes the choice made and edits the buttons/text on screen to match the data
function changeText(choice){
    //wipe out current data
    //edit textbox to be description
    //create buttons for each new choice

    //currently hard codes certain cases, could be made to take custom IDs

    console.log(choice);
    document.getElementById('choices').innerHTML = '';
    if(choice == 'Snooze'){
        snoozeCount++;
        choice = choice + snoozeCount.toString();
        console.log(choice);
    }
    document.getElementById('textbox').innerHTML = data[choice][1];

    for(let i=2; i<data[choice].length; i++) {
        let button = document.createElement('button');
        button.innerText = data[choice][i];
        document.getElementById('choices').append(button);
        button.onclick = function(){
            changeText(button.innerText);
        }
    }
}

function init() {       //initial text and button creation, doesn't need to be dynamic
    document.getElementById('choices').innerHTML = '';
    document.getElementById('textbox').innerText = data.init[1];
    for(let i=2; i<data.init.length; i++) {
        let button = document.createElement('button');
        button.innerText = data.init[i];
        document.getElementById('choices').append(button);
        button.onclick = function(){
            changeText(button.innerText);
            //comment
        }
    }
    
    
    // let initButton1 = document.createElement('button');
    // initButton1.innerText = "Get up";
    // initButton1.onclick = function(){
    //     changeText(initButton1.innerText);
    // }
    // let initButton2 = document.createElement('button');
    // initButton2.innerText = "Snooze";
    // initButton2.onclick = function(){
    //     changeText(initButton2.innerText);
    // }
    // document.getElementById('choices').append(initButton1);
    // document.getElementById('choices').append(initButton2);
}