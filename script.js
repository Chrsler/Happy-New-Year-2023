var message = ["you missed", "try again", "bleee!"];

function moveButton() {
    var button = document.getElementById("1");
    if (button.value == null) {
        button.value = 0;
    } else {

        if (button.value == 5) {
            button.remove();
            var header = document.getElementsByClassName("__buttonContainer");
            console.log(header);
            var text = document.createElement("h2");
            text.innerHTML = `Happy New Year Faye! <br>
            Thank you for being there to listen to all my rants, <br>
            my stories and my nonsense chats HAHA. <br>
            more rants to come char <br> <br>
            I'm grateful i met you, you are graduating in a few months and it will be a new journey towards your dreams or goals, <br>
            so I wish this year will be an easy life for you HAHAH hirap na ako mag english ha, ayaw ko na. <br> <br>
            So yun gusto ko lang sabihin sayo na have a courage and faith para ma overcome mo lahat ng mga problems that you may face, <br>
            i hope this year will bring you peace and happiness at maabot mo yung gusto mo. <br> <br>
            May the new year bring you love, wishing you and to your family a Happy New Year more blessings to come. <br>
            <3 `;
            text.style.textAlign = "center";
            text.style.marginTop = "30%";
            text.style.fontSize = "3rem";
            text.style.color = "rgb(134, 134, 134)";
            header[0].appendChild(text);
            play()
        };

        if (button.value == 5) {
            button.innerHTML = "This is the last one";
            button.value++;
        } else {
            button.innerHTML = message[Math.floor(Math.random() * 3)];
            button.value++;
        }
    }
    button.style.top = Math.floor(Math.random() * 50) + "%";
    button.style.left = Math.floor(Math.random() * 50) + "%";
    button.addEventListener("click", moveButton);
}

function start() {
    var submit = document.getElementById("newyear");
    var button = document.createElement("button");
    if (document.forms["newyear"]["name"].value != "") {
        var name = document.forms["newyear"]["name"].value;
        button.id = "1";
        button.name = name;
        button.innerHTML = "Tap me";
        button.style.position = "absolute";
        button.style.top = "10%";
        button.style.left = "10%";
        var container = document.getElementsByClassName("__buttonContainer");
        container[0].appendChild(button);
        button.addEventListener("click", moveButton);
        submit.remove();
    }

}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}