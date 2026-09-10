// ⭐ Stars

const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {

    let star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 2 + "s";

    stars.appendChild(star);

}
startEasterEggs();

// ⭐ Main container

const container = document.querySelector(".container");
function slideTo(nextScene){

    container.classList.add("slideOut");

    setTimeout(function(){

        nextScene();

        container.classList.remove("slideOut");

        container.classList.add("slideIn");

        setTimeout(function(){

            container.classList.remove("slideIn");

        },450);

    },450);

}
let memoriesDone = false;
let lettersDone = false;
let gameDone = false;

// ⭐ Start the website

setupIntro();

// ⭐ Intro Scene

function setupIntro(){

    const beginButton = document.getElementById("beginButton");

    beginButton.addEventListener("click", function(){

        container.style.opacity = "0";

        setTimeout(function(){

            showTypingScene();

            container.style.opacity = "1";

        },800);

    });

}
function showTypingScene(){

    container.innerHTML = `
        <p class="small" id="smallText"></p>

        <h1 id="mainText"></h1>

        <button id="continueButton" style="display:none;">
            Continue
        </button>
    `;

    const small = document.getElementById("smallText");
    const main = document.getElementById("mainText");
    const button = document.getElementById("continueButton");

    const line1 = "Soo Iku ji...";
    const line2 = "I have a surprise for you🫣";

    let i = 0;

    function typeSmall(){

        if(i < line1.length){

            small.textContent += line1.charAt(i);

            i++;

            setTimeout(typeSmall,50);

        }else{

            i = 0;

            setTimeout(typeMain,500);

        }

    }

    function typeMain(){

        if(i < line2.length){

            main.textContent += line2.charAt(i);

            i++;

            setTimeout(typeMain,50);

        }else{

            button.style.display = "block";
button.addEventListener("click", function(){

    container.style.opacity = "0";

    setTimeout(function(){

        showChoiceScene();

        container.style.opacity = "1";

    },800);

});

        }

    }

    typeSmall();

}
function showChoiceScene(){

    container.innerHTML = `
        <h1>Choose a path</h1>

        <div class="choices">

            <div class="choice ${memoriesDone ? "completed" : ""}" id="memory">
                <div class="circle">${memoriesDone ? "✓" : "📸"}</div>
                <p>Memories</p>
                ${memoriesDone ? '<span class="doneText">Completed ✓</span>' : ""}
            </div>

            <div class="choice ${lettersDone ? "completed" : ""}" id="letter">
                <div class="circle">${lettersDone ? "✓" : "💌"}</div>
                <p>Letters</p>
                ${lettersDone ? '<span class="doneText">Completed ✓</span>' : ""}
            </div>

            <div class="choice ${gameDone ? "completed" : ""}" id="game">
                <div class="circle">${gameDone ? "✓" : "🎮"}</div>
                <p>Game</p>
                ${gameDone ? '<span class="doneText">Completed ✓</span>' : ""}
            </div>

        </div>
    `;

    document.getElementById("memory").addEventListener("click", function(){

    this.classList.add("opening");

    setTimeout(function(){

        showMemories();

    },450);

});

document.getElementById("letter").addEventListener("click", function(){

    this.classList.add("opening");

    setTimeout(function(){

        showLetters();

    },450);

});

document.getElementById("game").addEventListener("click", function(){

    this.classList.add("opening");

    setTimeout(function(){

        showGame();

    },450);

});

}
function showMemories(){

    const memories = [

        {
            image:"memory1.jpg",
            text:"Our cutest pic everrrrr"
        },

        {
            image:"memory2.jpg",
            text:"Pre Board ke aakhri din"
        },

        {
            image:"memory3.jpg",
            text:"Placeholder Memory 3"
        }

    ];

    let current = 0;

    displayMemory();

    function displayMemory(){

        container.innerHTML = `
            <h1>Memories</h1>

            <img id="memoryImage"
                 src="${memories[current].image}">

            <p id="memoryText">
                ${memories[current].text}
            </p>

            <button id="previous">Previous</button>

            <button id="next">
                ${current==memories.length-1 ? "Finish" : "Next"}
            </button>
        `;

        document.getElementById("previous").disabled = current==0;

        document.getElementById("previous").addEventListener("click",function(){

            current--;

            displayMemory();

        });

        document.getElementById("next").addEventListener("click",function(){

            if(current < memories.length-1){

                current++;

                displayMemory();

            }else{

                memoriesDone = true;
                

                if(memoriesDone && lettersDone && gameDone){

                    showFinalChapter();

                }else{

                    showChoiceScene();

                }

            }

        });

    }

}


function showLetters(){

    container.innerHTML = `
        <div id="letterScene">

            <h1>A Letter For You 💌</h1>

            <div id="envelope">

                <div class="envelopeBack"></div>

                <div class="letterPaper">

    <h2>For IKU JI ONLYYYY❤️</h2>

    <p>
        Happy Birthdayyyyy Ikuuuuu!!!!😭😭
    </p>

    <p>
        Well this brings back memories😭 i dont know where to start
    </p>

    <p>
        I just wanna start by saying…IKUU tu mere literally literally boht khaas h, i never would have thought i would still be making these letters for you bday. You are literally one of the most important person in my life, whom im the most comfortable with.
    </p>

    <p>
        It all literally started in 8TH and now we are in 12TH!!see mtlb how fast time passes…itne mei hum dost bn liye, couple bn liye, fir exes bhi bn liye, aur fir bhi vapis saath hogye. I still even now sometimes cant believe it😭
    </p>

    <p>
        Topic se deviate hogya😅…but just know im SOO PROUD OF YOU IKUUU literally. Tu boht mehnat krti h and ek din this all will be worth it. I never want myself to be a distraction for you. Im always rooting for you and supporting you iku and i will ALWAYS be there for you no matter whattt!!!
    </p>

    <p>
        Ab jo dimaag mei aaya vo likh diya😭 ab app agli cheeze dekho.
    </p>

    <p>
        HAPPY BIRTHDAY CUTU I LOVE YOUUU ❤️
    </p>

    <p>
        -Babaji🙏
    </p>

</div>
                <div class="envelopeFront"></div>

                <div class="envelopeFlap"></div>

            </div>

            <p id="letterHint">
                Tap the letter to open it.
            </p>

            <button id="letterBack" style="display:none;">
                Back
            </button>

        </div>
    `;

    const envelope = document.getElementById("envelope");
    const hint = document.getElementById("letterHint");
    const backButton = document.getElementById("letterBack");

    envelope.addEventListener("click", function(){

        if(envelope.classList.contains("opened")) return;

        envelope.classList.add("opened");

        hint.textContent = "❤️ A little something for you...";

        setTimeout(function(){

    envelope.classList.add("letterFullyOpen");

    hint.style.display = "none";

    backButton.style.display = "block";

},1000);
    });

    backButton.addEventListener("click", function(){

        lettersDone = true;

        showChoiceScene();

    });

}

function showGame(){

    container.innerHTML = `
        <h1>❤️ Find My Hidden Hearts ❤️</h1>

        <p id="progress">Hearts Found: 0 / 3</p>

        <div id="gameGrid"></div>

        <div id="messageBox" style="display:none;">
            <p id="messageText"></p>
            <button id="closeMessage">Continue</button>
        </div>

        <button id="finishGame" style="display:none;">
            Back
        </button>
    `;

    const grid = document.getElementById("gameGrid");

    // 9 boxes
    const hearts = [1,4,7];   // <-- Change these later

    let heartsFound = 0;
    let currentButton = null;

    for(let i=0;i<9;i++){

        const box = document.createElement("button")
        box.className = "giftBox";
        box.textContent = "🎁";

        box.addEventListener("click",function(){

            if(box.disabled) return;

            box.disabled = true;

            currentButton = box;

            if(hearts.includes(i)){

             box.textContent="❤️";
             box.classList.add("popHeart");

                heartsFound++;

                document.getElementById("progress").textContent =
                `Hearts Found: ${heartsFound} / 3`;

                const messages=[
                    "Angels should be in heaven. How'd you escape?🤭",
                   "Itni Achi Kyu Lagne Lagi Ho\nItna Acha Koi Kaise Ho Sakta\nHai Tum Chand Jaise Toh Bilkul Nahi\nHaan Chand Tumhare Jaisa Ho Sakta Hai🫣",
                    "Ptani yaha kya likhu Happy Birthday agiannnn!😭"
                ];

                document.getElementById("messageText").textContent =
                messages[heartsFound-1];

           }else{

    box.textContent = "📦";

    const emptyMessages = [
        "Nothing here 😂",
        "Almost! Keep looking ❤️",
        "Just air... 😆",
        "No heart in this one 💔",
        "Try another gift 🎁",
        "You're getting closer 👀"
    ];

    document.getElementById("messageText").textContent =
    emptyMessages[Math.floor(Math.random() * emptyMessages.length)];

}

            const popup = document.getElementById("messageBox");

popup.style.display = "block";

setTimeout(function(){

    popup.classList.add("show");

},20);

        });

        grid.appendChild(box);

    }

    document.getElementById("closeMessage").addEventListener("click", function(){

    const popup = document.getElementById("messageBox");

    popup.classList.remove("show");

    setTimeout(function(){

        popup.style.display = "none";

        if(heartsFound === 3){

            document.getElementById("finishGame").style.display = "block";

        }

    },400);

});  

    document.getElementById("finishGame").addEventListener("click",function(){

        gameDone=true;
        

        if(memoriesDone && lettersDone && gameDone){

            showFinalChapter();

        }else{

            showChoiceScene();

        }

    });

}
function showFinalChapter(){

    container.innerHTML = `
        <h1>✨ Final Chapter Unlocked ✨</h1>

        <p>You discovered everything.</p>

        <button id="continueFinal">
            Continue
        </button>
    `;

    document.getElementById("continueFinal").addEventListener("click", function(){

        container.style.opacity = "0";

        setTimeout(function(){

            showPortraitScene();

            container.style.opacity = "1";

        },1000);

    });

}
function showPortraitScene(){

    container.innerHTML = `
        <div id="portraitContainer">

            <img id="portrait"
                 src="portrait.jpg"
                 alt="Portrait">

            <h1 id="birthdayText">
                Happy Birthday ❤️
            </h1>

            <button id="birthdayContinue" style="display:none;">
                Continue
            </button>

        </div>
    `;

    const portrait = document.getElementById("portrait");
    const text = document.getElementById("birthdayText");
    const button = document.getElementById("birthdayContinue");

    portrait.style.opacity = "0";
    portrait.style.transform = "scale(0.95)";
    text.style.opacity = "0";

    setTimeout(function(){

        portrait.style.opacity = "1";
        portrait.style.transform = "scale(1)";

    },300);

    setTimeout(function(){

        text.style.opacity = "1";

    },2500);

    setTimeout(function(){

        button.style.display = "block";

    },4200);

    button.addEventListener("click", function(){

        container.style.opacity = "0";

        setTimeout(function(){

            showCakeScene();

            container.style.opacity = "1";

        },800);

    });

}
function showCakeScene(){

    container.innerHTML = `
        <h1>🎂 Make a Wish 🎂</h1>

        <div id="cakeArea">

            <div id="flame">🔥</div>

            <div id="cake">🎂</div>

        </div>

        <p id="cakeMessage">
            Tap the flame to blow out the candle.
        </p>

        <button id="cakeContinue" style="display:none;">
            Continue
        </button>
    `;

    document.getElementById("flame").addEventListener("click", function(){

        document.getElementById("flame").textContent = "💨";

        document.getElementById("cakeMessage").textContent =
        "Yay! Happy Birthday! ❤️";

        startConfetti();

        document.getElementById("cakeContinue").style.display = "block";

    });

    document.getElementById("cakeContinue").addEventListener("click", function(){

        showVideoScene();

    });

}
function showVideoScene(){

    container.innerHTML = `
        <h1>One Last Thing-My Awkward Ahh😭</h1>

        <video id="birthdayVideo"
               controls
               playsinline>
            <source src="birthdayVideo.mp4" type="video/mp4">
        </video>

        <button id="videoContinue">
            Continue
        </button>
    `;

    document.getElementById("videoContinue").addEventListener("click", function(){

        showEndScene();

    });

}
function showEndScene(){

    container.innerHTML = `
        <h1>❤️</h1>

        <p>Thank you for going through everything.</p>

        <p>The End.</p>
    `;

}
function startConfetti(){

    const particles = [
        "❤️",
        "💖",
        "💕",
        "✨",
        "🎉",
        "🎊",
        "⭐"
    ];

    for(let i=0;i<80;i++){

        const particle = document.createElement("div");

        particle.textContent =
        particles[Math.floor(Math.random()*particles.length)];

        particle.style.position = "fixed";

        particle.style.left = Math.random()*100 + "vw";
        particle.style.top = "-50px";

        particle.style.fontSize =
        (18 + Math.random()*20) + "px";

        particle.style.pointerEvents = "none";

        particle.style.transition =
        (3 + Math.random()*2) + "s linear";

        particle.style.zIndex = "9999";

        document.body.appendChild(particle);

        const randomLeft =
        Math.random()*100;

        const rotation =
        720 + Math.random()*720;

        setTimeout(function(){

            particle.style.top = "110vh";

            particle.style.left =
            randomLeft + "vw";

            particle.style.transform =
            `rotate(${rotation}deg)`;

        },20);

        setTimeout(function(){

            particle.remove();

        },5000);

    }

}
function startEasterEggs(){

    const easterEggs = [

        {
            type: "photo",
            content: "herphoto1.jpg",
            message: "😂 Got you!"
        },

        {
            type: "text",
            content: "GENERATORR",
            message: "❤️ My favourite person."
        },

        {
            type: "photo",
            content: "herphoto2.jpg",
            message: "Okay... you found another one 😂"
        }

    ];

    function createEasterEgg(){

        const egg =
        easterEggs[Math.floor(Math.random() * easterEggs.length)];

        const element = document.createElement("div");

        element.className = "easterEgg";

        if(egg.type === "photo"){

            element.innerHTML = `
                <img src="${egg.content}">
            `;

        }else{

            element.textContent = egg.content;

        }

        element.style.top =
        (20 + Math.random() * 60) + "vh";

        element.style.left = "-150px";

        document.body.appendChild(element);

        setTimeout(function(){

            element.style.left = "110vw";

        },100);

        element.addEventListener("click",function(){

            element.classList.add("eggPop");

            element.innerHTML = `
                <span>❤️</span>
            `;

            setTimeout(function(){

                showEggMessage(egg.message);

            },400);

            setTimeout(function(){

                element.remove();

            },700);

        });

        setTimeout(function(){

            if(document.body.contains(element)){

                element.remove();

            }

        },10000);

        const nextTime =
        10000 + Math.random() * 15000;

        setTimeout(createEasterEgg,nextTime);

    }

    setTimeout(createEasterEgg,8000);

}
function showEggMessage(message){

    const messageElement =
    document.createElement("div");

    messageElement.className = "eggMessage";

    messageElement.textContent = message;

    document.body.appendChild(messageElement);

    setTimeout(function(){

        messageElement.classList.add("show");

    },50);

    setTimeout(function(){

        messageElement.classList.remove("show");

    },2500);

    setTimeout(function(){

        messageElement.remove();

    },3000);

}