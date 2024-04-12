let data = {
    'init': ['Make a selection: ', 'Choice 1', 'Choice 2'],
    'Choice 1': ['You selected choice 1! What now?', 'Choice 1A', 'Choice 1B'],
    'Choice 2': ['You selected choice 2! What now?', 'Choice 2A', 'Choice 2B'],
    'Choice 1A': ['You selected choice 1A!'],
    'Choice 1B': ['You selected choice 1B!'],
    'Choice 2A': ['You selected choice 2A!'],
    'Choice 2B': ['You selected choice 2B!']
}

let currentChoice;

function init() {       //initial text and button creation, doesn't need to be dynamic
    document.getElementById('textbox').innerText = data.init[0];
    let initButton1 = document.createElement('button');
    initButton1.innerText = "Choice 1";
    initButton1.onclick = function(){
        changeText(initButton1.innerText);
    }
    let initButton2 = document.createElement('button');
    initButton2.innerText = "Choice 2";
    initButton2.onclick = function(){
        changeText(initButton2.innerText);
    }
    document.getElementById('choices').append(initButton1);
    document.getElementById('choices').append(initButton2);
}

function addButtons(){

}

function changeText(choice){
    // console.log(id);
    // if(id == 'choice1') {
    //     document.getElementById('textbox').innerText = "you selected choice 1!";
    // }
    // else {
    //     document.getElementById('textbox').innerText = "you (hopefully) selected choice 2! if not then shits bugged";
    // }
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