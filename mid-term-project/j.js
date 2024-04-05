const story = {
    start: {
        text: "You find yourself in a deserted town. What do you do?",
        choices: ["Explore the town", "Leave the town"],
        consequences: ["explore", "leave"],
        images: ["deserted town.jpg"]
    },
    explore: {
        text: "You enter an abandoned building. What do you do?",
        choices: ["Search for supplies", "Leave the building"],
        consequences: ["supplies", "leave"],
        images: ["abandoned building.jpg"]
    },
    supplies: {
        text: "You find some useful supplies and continue exploring. Suddenly, you hear a noise. What do you do?",
        choices: ["Investigate the noise", "Ignore the noise"],
        consequences: ["monster", "end1"],
        images: ["supplies.png"]
    },
    monster: {
        text: "You encounter a monster! What do you do?",
        choices: ["Fight the monster", "Run away"],
        consequences: ["fight", "end2"],
        images: ["monster.avif"]
    },
    fight: {
        text: "You engage in a fierce battle with the monster. After a long struggle, you emerge victorious!",
        choices: [ ],
        consequences: ["celebration", "end8"],
        images: ["fight with monster.jpg"]
    },
    leave: {
        text: "You decide to leave the town and continue your journey.",
        choices: ["Reached Home", "Tragic end"],
        consequences: ["end8", "end5"],
        images: ["leave the town.jpg"]
    },
    end1: {
        text: "You ignore the noise and continue exploring. Unfortunately, you fall into a trap and perish.",
        choices: ["Keep quite", "Ask for help"],
        consequences: ["end6", "end4"],
        images: ["fall in a trap.jpg"]
    },
    end2: {
        text: "You try to run away from the monster, but it catches up to you and you meet a tragic end.",
        choices: ["Run away", "Tragic end"],
        consequences: ["end8", "Death"],
        images: ["from the monster.jpg"]
    },
    end3: {
        text: "You find a hidden stash of treasure and become rich!",
        choices: ["Become rich", "Ignore the treasure"],
        consequences: ["end7", "end5"],
        images: ["treasure.jpg"]
    },
    end4: {
        text: "You come across a friendly group of survivors and join them. You've found safety and companionship.",
        choices: ["Made new friends", "Ignore them"],
        consequences: ["end8", "end5"],
        images: ["group of survivors.webp"]
    },
    end5: {
        text: "You wander aimlessly and eventually succumb to exhaustion and hunger. It's a tragic end.",
        choices: [ ],
        consequences: [],
        images: ["food.avif"]
    },
    end6: {
        text: "You stumble upon a hidden portal and are transported to another dimension. The adventure continues!",
        choices: ["Restart Game"],
        consequences: ["start"],
        images: ["hidden portal.jpg"]
    },
    end7: {
        text: "You encounter a benevolent deity who grants you a wish. You wish for happiness and find eternal bliss.",
        choices: [],
        consequences: [],
        images: ["deity.jpg"]
    },
    end8: {
        text: "You find a vehicle and manage to escape the deserted town. You've survived!",
        choices: [],
        consequences: [],
        images: ["vehicle.webp"]
    }
};

function startGame() {
    currentStage = "start";
    updatePage();
}

function updatePage() {
    const current = story[currentStage];
    document.getElementById("story").innerText = current.text;
    document.getElementById("image").innerHTML = `<img src="${current.images[0]}" alt="Image">`;

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = ""; // Clear previous choices

    // Create a div to contain the buttons and center align them
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    current.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.addEventListener("click", () => {
            currentStage = current.consequences[index];
            updatePage();
        });
        buttonContainer.appendChild(button);
    });

    choicesContainer.appendChild(buttonContainer);
}


let currentStage;
startGame();
