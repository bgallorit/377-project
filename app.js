let data = {
    'init': ['You wake up to your alarm blaring. It is 8:30. You have to be in class in an hour.', 'Get up', 'Snooze'],
    'Get up': ['You lift yourself out of bed. You should probably take a shower. ', 'Take shower', 'Skip the shower'],
    'Take shower': ['After taking a shower, you make your way to class.'],
    'Skip the shower': ["You decide it's probably fine to skip the shower... hopefully..."],
    'Snooze': ['You decide to give yourself just five more minutes of sleep. Those five minutes go by seeminly instantly, and your alarm goes off again.', 'Get up', 'Snooze again'],
    'Snooze again': ["Another five minutes couldn't hurt. Just as you close your eyes, you hear your alarm again.", 'Get up', 'Snooze once again'],
    'Snooze once again': ["You feel very tired... five more minutes... the alarm beeps again...", 'Get up', 'Snooze...'],
    'Snooze...': ["You don't even remember if you closed your eyes before you hear your alarm for the fourth time.", 'Get up', 'More sleep...'],
    'More sleep...': ["You're not even sure if you can muster up the energy to physically get up now.", 'Get up', '...'],
    '...': ['Instead of hitting the snooze button, you accidentally turn your alarm off. You fall into a deep sleep.']

    // 'Choice 1': ['You selected choice 1! What now?', 'Choice 1A', 'Choice 1B'],
    // 'Choice 2': ['You selected choice 2! What now?', 'Choice 2A', 'Choice 2B'],
    // 'Choice 1A': ['You selected choice 1A!'],
    // 'Choice 1B': ['You selected choice 1B!'],
    // 'Choice 2A': ['You selected choice 2A!'],
    // 'Choice 2B': ['You selected choice 2B!']              
}

let currentChoice;

function init() {       //initial text and button creation, doesn't need to be dynamic
    document.getElementById('textbox').innerText = data.init[0];
    let initButton1 = document.createElement('button');
    initButton1.innerText = "Get up";
    initButton1.onclick = function(){
        changeText(initButton1.innerText);
    }
    let initButton2 = document.createElement('button');
    initButton2.innerText = "Snooze";
    initButton2.onclick = function(){
        changeText(initButton2.innerText);
    }
    document.getElementById('choices').append(initButton1);
    document.getElementById('choices').append(initButton2);
}

function changeText(choice){
    console.log(choice);
    document.getElementById('choices').innerHTML = '';
    document.getElementById('textbox').innerHTML = data[choice][0];
    for(let i=1; i<data[choice].length; i++) {
        let button = document.createElement('button');
        button.innerText = data[choice][i];
        document.getElementById('choices').append(button);
        button.onclick = function(){
            changeText(button.innerText);
        }
    }

}