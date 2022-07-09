//GOING TO THE NEXT SCREEN

let opponent = document.getElementById("second");
let battle = document.getElementById("third");

opponent.style.display = "none";
battle.style.display = "none";

function addOpponentForm() {
    opponent.style.display = "block";
}

function addBattleSection() {
    battle.style.display = "block";
}

//STORING POKEMON DATA

let ourpokemon;
let opponentpokemon;

/* our pokemon */

let bulbasaur = {
    name: "BULBASAUR",
    type: "grass",
    move1: "POUND",
    move2: "RAZOR LEAF",
    move3: "VINE WHIP",
    hp: 50,
}

let charmander = {
    name: "CHARMANDER",
    type: "fire",
    move1: "CUT",
    move2: "EMBER",
    move3: "FLAMETHROWER",
    hp: 50,
};

let squirtle = {
    name: "SQUIRTLE",
    type: "water",
    move1: "TACKLE",
    move2: "BUBBLE",
    move3: "WATER GUN",
    hp: 50,
};

/* opponent pokemon */

let growlithe = {
    name: "GROWLITHE",
    type: "fire",
    move1: "TACKLE",
    move2: "FIRE WHEEL",
    move3: "FLAMETHROWER",
    hp: 50,
};

let bellsprout = {
    name: "BELLSPROUT",
    type: "grass",
    move1: "CUT",
    move2: "RAZOR LEAF",
    move3: "VINE WHIP",
    hp: 50,
};

let poliwag = {
    name: "POLIWAG",
    type: "water",
    move1: "POUND",
    move2: "BUBBLE",
    move3: "WATER GUN",
    hp: 50,
};

//SELECTING OUR POKEMON

let buttonbulbasaur = document.getElementById("bulbasaur");
let buttoncharmander = document.getElementById("charmander");
let buttonsquirtle = document.getElementById("squirtle");

//SELECTING OPPONENT POKEMON

let buttongrowlithe = document.getElementById("growlithe");
let buttonbellsprout = document.getElementById("bellsprout");
let buttonpoliwag = document.getElementById("poliwag");

//CREATING IMG ELEMENT CONTAINING BOTH POKEMON

let showourpokemon = document.createElement("img");
showourpokemon.style.width = "150px";
showourpokemon.style.height = "150px";

let showopponentpokemon = document.createElement('img');
showopponentpokemon.style.width = "150px";
showopponentpokemon.style.height = "150px";

//STORING 

let moveone = document.getElementById("moveone");
let movetwo = document.getElementById("movetwo");
let movethree = document.getElementById("movethree");

buttonbulbasaur.addEventListener("click", function() {
    ourpokemon = bulbasaur; /* storing bulbasaur to our pokemon */
    document.getElementById("looks").appendChild(showourpokemon); 
    showourpokemon.setAttribute('alt', "bulbasaur")
    showourpokemon.setAttribute('src', "https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png");
    document.getElementById("name").innerText = "BULBASAUR";
    document.getElementById("whatwill").innerText = "WHAT WILL BULBASAUR DO?";
    moveone.innerText = bulbasaur.move1;
    movetwo.innerText = bulbasaur.move2;
    movethree.innerText = bulbasaur.move3;
});

buttoncharmander.addEventListener("click", function() {
    ourpokemon = charmander;
    document.getElementById("looks").appendChild(showourpokemon);
    showourpokemon.setAttribute('alt', "charmander")
    showourpokemon.setAttribute('src', "https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png");
    moveone.innerText = charmander.move1;
    movetwo.innerText = charmander.move2;
    movethree.innerText = charmander.move3;
});

buttonsquirtle.addEventListener("click", function() {
    ourpokemon = squirtle;
    document.getElementById("looks").appendChild(showourpokemon);
    showourpokemon.setAttribute('alt', "squirtle")
    showourpokemon.setAttribute('src', "https://archives.bulbagarden.net/media/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png");
    document.getElementById("name").innerText = "SQUIRTLE";
    document.getElementById("whatwill").innerText = "WHAT WILL SQUIRTLE DO?";
    moveone.innerText = squirtle.move1;
    movetwo.innerText = squirtle.move2;
    movethree.innerText = squirtle.move3;
});

buttongrowlithe.addEventListener("click", function() {
    opponentpokemon = growlithe;
    document.getElementById("opponentlooks").appendChild(showopponentpokemon);
    showopponentpokemon.setAttribute('alt', "growlithe")
    showopponentpokemon.setAttribute('src', "https://archives.bulbagarden.net/media/upload/thumb/3/3d/058Growlithe.png/250px-058Growlithe.png");
    document.querySelector("#opponentname").innerText = "GROWLITHE";
});

buttonbellsprout.addEventListener("click", function() {
    opponentpokemon = bellsprout;
    document.getElementById("opponentlooks").appendChild(showopponentpokemon);
    showopponentpokemon.setAttribute('alt', "bellsprout")
    showopponentpokemon.setAttribute('src', "https://archives.bulbagarden.net/media/upload/thumb/a/a2/069Bellsprout.png/600px-069Bellsprout.png");
});

buttonpoliwag.addEventListener("click", function() {
    opponentpokemon = poliwag;
    document.getElementById("opponentlooks").appendChild(showopponentpokemon);
    showopponentpokemon.setAttribute('alt', "poliwag")
    showopponentpokemon.setAttribute('src', "https://archives.bulbagarden.net/media/upload/thumb/4/49/060Poliwag.png/250px-060Poliwag.png");
    document.querySelector("#opponentname").innerText = "POLIWAG";
});

let fight = document.getElementById("fight");
let movelist = document.getElementById("fightoptions");
let whatwill = document.getElementById("whatwill");

fight.addEventListener("click", function() {
    movelist.style.display = "flex";
    whatwill.style.display = "none";
})


let okay = document.querySelector(".ok");
let opponentmove = document.getElementById("opponentmove");
let criticalhit = 0;
let opponentmoverandom = 0;
let THEopponentmove = 0;
let ourDamage;
let ourhealthbar = document.getElementById("healthbarinside");

okay.addEventListener("click", function() {
    if (damagetext.style.display === "block") {
        opponentmoverandom = Math.floor((Math.random()*3)+1);
        if (opponentmoverandom === 1){
            THEopponentmove = opponentpokemon.move1;
            criticalhit = Math.floor((Math.random()*50)+1);
            if (opponentpokemon.move1 === "POUND") {
                if (criticalhit <= 3) {
                    ourDamage = Math.rounc(5 * 2);
                } else {
                    ourDamage = Math.rounc(5);
                }
            } else if (opponentpokemon.move1 === "CUT") {
                if (criticalhit <= 3) {
                    ourDamage = Math.round(5 * 2);
                } else {
                    ourDamage = Math.round(5);
                }
            } else if (opponentpokemon.move1 === "TACKLE") {
                if (criticalhit <= 3) {
                    ourDamage = Math.round(5 * 2);
                } else {
                    ourDamage = Math.round(5);
                }
            };
        } else if (opponentmoverandom === 2) {
            THEopponentmove = opponentpokemon.move2;
            criticalhit = Math.floor((Math.random()*50)+1);
            if (opponentpokemon.move2 === "RAZOR LEAF") {
                if (ourpokemon.type === "water") {
                    if (criticalhit <= 3) {
                        ourDamage = Math.round((5 * 2) * 2);
                    } else {
                        ourDamage = Math.round(5 * 2);
                    }
                } else if (ourpokemon.type === "fire") {
                    if (criticalhit <= 3) {
                        ourDamage = Math.round((5 / 2) * 2);
                    } else {
                        ourDamage = Math.round(5 / 2);
                    }
                } else if (ourpokemon.type === "grass") {
                    if (criticalhit <= 3) {
                        ourDamage = Math.round((5 / 1.5) * 2);
                    } else {
                        ourDamage = Math.round(5 / 1.5);
                    }
                }
            } else if (opponentpokemon.move2 === "FIRE WHEEL") {
                if (ourpokemon.type === "water") {
                    if (criticalhit <= 3) {
                        ourDamage = Math.round((5 / 2) * 2);
                    } else {
                        ourDamage = Math.round(5 / 2);
                    }
                } else if (ourpokemon.type === "fire") {
                    if (criticalhit <= 3) {
                        ourDamage = Math.round((5 / 1.5) * 2);
                    } else {
                        ourDamage = Math.round(5 / 1.5);
                    }
                } else if (ourpokemon.type === "grass") {
                    if (criticalhit <= 3) {
                        ourDamage = Math.round((5 * 2) * 2);
                    } else {
                        ourDamage = Math.round(5 * 2);
                    }
                }
            } else if (opponentpokemon.move2 === "BUBBLE") {
                if (ourpokemon.type === "water") {
                    if (criticalhit <= 3) {
                        ourDamage = (5 / 1.5) * 2;
                    } else {
                        ourDamage = 5 / 1.5;
                    }
                } else if (ourpokemon.type === "fire") {
                    if (criticalhit <= 3) {
                        ourDamage = (5 * 2) * 2;
                    } else {
                        ourDamage = 5 * 2;
                    }
                } else if (ourpokemon.type === "grass") {
                    if (criticalhit <= 3) {
                        ourDamage = 5 * 2;
                    } else {
                        ourDamage = 5;
                    }
                }
            }
        } else if (opponentmoverandom === 3) {
            THEopponentmove = opponentpokemon.move3;
            if (opponentpokemon.move3 === "VINE WHIP") {
                if (ourpokemon.type === "water") {
                    if (criticalhit <= 3) {
                        ourDamage = (12 * 2) * 2;
                    } else {
                        ourDamage = 12 * 2;
                    }
                } else if (ourpokemon.type === "fire") {
                    if (criticalhit <= 3) {
                        ourDamage = (12 / 2) * 2;
                    } else {
                        ourDamage = 12 / 2;
                    }
                } else if (ourpokemon.type === "grass") {
                    if (criticalhit <= 3) {
                        ourDamage = (12 / 1.5) * 2;
                    } else {
                        ourDamage = 12 / 1.5;
                    }
                }
            } else if (opponentpokemon.move3 === "FLAMETHROWER") {
                if (ourpokemon.type === "water") {
                    if (criticalhit <= 3) {
                        ourDamage = (12 / 2) * 2;
                    } else {
                        ourDamage = 12 / 2;
                    }
                } else if (ourpokemon.type === "fire") {
                    if (criticalhit <= 3) {
                        ourDamage = (12 / 1.5) * 2;
                    } else {
                        ourDamage = 12 / 1.5;
                    }
                } else if (ourpokemon.type === "grass") {
                    if (criticalhit <= 3) {
                        ourDamage = (12 * 2) * 2;
                    } else {
                        ourDamage = 12 * 2;
                    }
                }
            } else if (opponentpokemon.move3 === "WATER GUN") {
                if (ourpokemon.type === "water") {
                    if (criticalhit <= 3) {
                        ourDamage = (12 / 1.5) * 2;
                    } else {
                        ourDamage = 12 / 1.5;
                    }
                } else if (ourpokemon.type === "fire") {
                    if (criticalhit <= 3) {
                        ourDamage = (12 * 2) * 2;
                    } else {
                        ourDamage = 12 * 2;
                    }
                } else if (ourpokemon.type === "grass") {
                    if (criticalhit <= 3) {
                        ourDamage = (12 / 2) * 2;
                    } else {
                        ourDamage = 12 / 2;
                    }
                }
            }
        }
        damagetext.style.display = "none";
        opponentmove.style.display = "block";
        opponentmove.innerText = `${opponentpokemon.name} USED ${THEopponentmove}. ${ourpokemon.name} TOOK ${ourDamage} DAMAGE.`
        ourpokemon.hp = ourpokemon.hp - ourDamage;
        ourhealthbar.style.width = ourpokemon.hp * 2.98 + "px";
        if (ourpokemon.hp < 20) {
            ourhealthbar.style.backgroundColor = "red";
        }
        if (ourpokemon.hp <= 0) {
            document.getElementById("loser").style.display = "flex";
        }
    } else if (opponentmove.style.display === "block") {
        opponentmove.style.display = "none";
        whatwill.style.display = "block";
        options.style.display = "flex";
        ok.style.display = "none";
    }
});

let opponentDamage;
let firstmove = document.getElementById("moveone");
let secondmove = document.getElementById("movetwo");
let thirdmove = document.getElementById("movethree");
let ok = document.getElementById("ok");
let options = document.getElementById("options");
let damagetext = document.getElementById("damagetext");
let opponenthealthbar = document.getElementById("opponenthealthbarinside");

firstmove.addEventListener("click", function() {
    criticalhit = Math.floor((Math.random()*50)+1);
    if (ourpokemon.move1 === "POUND") {
        if (criticalhit <= 3) {
            opponentDamage = Math.round(5 * 2);
        } else {
            opponentDamage = Math.round(5);
        }
    } else if (ourpokemon.move1 === "CUT") {
        if (criticalhit <= 3) {
            opponentDamage = Math.round(5 * 2);
        } else {
            opponentDamage = Math.round(5);
        }
    } else if (ourpokemon.move1 === "TACKLE") {
        if (criticalhit <= 3) {
            opponentDamage = Math.round(5 * 2);
        } else {
            opponentDamage = Math.round(5);
        }
    };
    options.style.display = "none";
    ok.style.display = "flex";
    movelist.style.display = "none";
    damagetext.style.display = "block";
    damagetext.innerText = `${opponentpokemon.name} TOOK ${opponentDamage} DAMAGE.`;
    opponentpokemon.hp = opponentpokemon.hp - opponentDamage;
    opponenthealthbar.style.width = opponentpokemon.hp * 2.98 + "px";
    if (opponentpokemon.hp <= 0) {
        document.getElementById("winner").style.display = "flex";
    }
});

secondmove.addEventListener("click", function() {
    criticalhit = Math.floor((Math.random()*50)+1);
    if (ourpokemon.move2 === "RAZOR LEAF") {
        if (opponentpokemon.type === "water") {
            if (criticalhit <= 3) {
                opponentDamage = Math.round((5 * 2) * 2);
            } else {
                opponentDamage = Math.round(5 * 2);
            }
        } else if (opponentpokemon.type === "fire") {
            if (criticalhit <= 3) {
                opponentDamage = Math.round((5 / 2) * 2);
            } else {
                opponentDamage = Math.round(5 / 2);
            }
        } else if (opponentpokemon.type === "grass") {
            if (criticalhit <= 3) {
                opponentDamage = Math.round((5 / 1.5) * 2);
            } else {
                opponentDamage = Math.round(5 / 1.5);
            }
        }
    } else if (ourpokemon.move2 === "EMBER") {
        if (opponentpokemon.type === "water") {
            if (criticalhit <= 3) {
                opponentDamage = Math.round((5 / 2) * 2);
            } else {
                opponentDamage = Math.round(5 / 2);
            }
        } else if (opponentpokemon.type === "fire") {
            if (criticalhit <= 3) {
                opponentDamage = Math.round((5 / 1.5) * 2);
            } else {
                opponentDamage = Math.round(5 / 1.5);
            }
        } else if (opponentpokemon.type === "grass") {
            if (criticalhit <= 3) {
                opponentDamage = Math.round((5 * 2) * 2);
            } else {
                opponentDamage = Math.round(5 * 2);
            }
        }
    } else if (ourpokemon.move2 === "BUBBLE") {
        if (opponentpokemon.type === "water") {
            if (criticalhit <= 3) {
                opponentDamage = Math.round((5 / 1.5) * 2);
            } else {
                opponentDamage = Math.round(5 / 1.5);
            }
        } else if (opponentpokemon.type === "fire") {
            if (criticalhit <= 3) {
                opponentDamage = Math.round((5 * 2) * 2);
            } else {
                opponentDamage = Math.round(5 * 2);
            }
        } else if (opponentpokemon.type === "grass") {
            if (criticalhit <= 3) {
                opponentDamage = Math.round(5 * 2);
            } else {
                opponentDamage = Math.round(5);
            }
        }
    }
    options.style.display = "none";
    ok.style.display = "flex";
    movelist.style.display = "none";
    damagetext.style.display = "block";
    damagetext.innerText = `${opponentpokemon.name} TOOK ${opponentDamage} DAMAGE.`;
    opponentpokemon.hp = opponentpokemon.hp - opponentDamage;
    opponenthealthbar.style.width = opponentpokemon.hp * 2.98 + "px";
    if (opponentpokemon.hp <= 0) {
        document.getElementById("winner").style.display = "flex";
    }
    if (opponentpokemon.hp < 20) {
        opponenthealthbar.style.backgroundColor = "red";
    }
});

thirdmove.addEventListener("click", function() {
    if (ourpokemon.move3 === "VINE WHIP") {
        if (opponentpokemon.type === "water") {
            if (criticalhit <= 3) {
                opponentDamage = (5 * 1.5) * 2;
            } else {
                opponentDamage = 5 * 1.5;
            }
        } else if (opponentpokemon.type === "fire") {
            if (criticalhit <= 3) {
                opponentDamage = (5 / 1) * 2;
            } else {
                opponentDamage = 5 / 1;
            }
        } else if (opponentpokemon.type === "grass") {
            if (criticalhit <= 3) {
                opponentDamage = (5 / 1) * 2;
            } else {
                opponentDamage = 55 / 1;
            }
        }
    } else if (ourpokemon.move3 === "FLAMETHROWER") {
        if (opponentpokemon.type === "water") {
            if (criticalhit <= 3) {
                opponentDamage = (5 / 2) * 2;
            } else {
                opponentDamage = 5 / 2;
            }
        } else if (opponentpokemon.type === "fire") {
            if (criticalhit <= 3) {
                opponentDamage = (5 / 1) * 2;
            } else {
                opponentDamage = 5 / 1;
            }
        } else if (opponentpokemon.type === "grass") {
            if (criticalhit <= 3) {
                opponentDamage = (5 * 1.5) * 2;
            } else {
                opponentDamage = 5 * 2;
            }
        }
    } else if (ourpokemon.move3 === "WATER GUN") {
        if (opponentpokemon.type === "water") {
            if (criticalhit <= 3) {
                opponentDamage = (5 / 1.5) * 2;
            } else {
                opponentDamage = 5 / 1.5;
            }
        } else if (opponentpokemon.type === "fire") {
            if (criticalhit <= 3) {
                opponentDamage = (5 * 2) * 2;
            } else {
                opponentDamage = 5 * 2;
            }
        } else if (opponentpokemon.type === "grass") {
            if (criticalhit <= 3) {
                opponentDamage = (5 / 2) * 2;
            } else {
                opponentDamage = 5 / 2;
            }
        }
    }
    options.style.display = "none";
    ok.style.display = "flex";
    movelist.style.display = "none";
    damagetext.style.display = "block";
    damagetext.innerText = `${opponentpokemon.name} TOOK ${opponentDamage} DAMAGE.`;
    opponentpokemon.hp = opponentpokemon.hp - opponentDamage;
    opponenthealthbar.style.width = opponentpokemon.hp * 2.98 + "px";
    if (opponentpokemon.hp <= 0) {
        document.getElementById("winner").style.display = "flex";
    }
});