//todo bugfix 500 500 necks showing

const data = JSON.parse(document.querySelector("body > pre").innerHTML);
const dictName = [[["arcana"], ["empress", "empress's grace"], ["emperor"], ["sorc"], ["co", "CO"], ["bt", "BT"], ["destro"], ["rh", "RH"], ["gt", "GT"], ["red", "redlancer"], ["blue", "bluelancer"], ["shock"], ["taijutsu", "tai"], ["EO", "eo"], ["wd", "WD"], ["ese", "ESE"], ["fi", "FI"], ["arti"], ["barrage"], ["fpe", "FPE"], ["de", "DE"], ["ew", "EW"], ["gs", "GS"], ["tth", "TTH"], ["pm", "PM"], ["machinist"], ["arthetinean skill"], ["evolutionary legacy"], ["ss", "SS"], ["lc", "LC"], ["lunar"], ["sh", "SH"], ["di", "DI"], ["ps", "PS"], ["se", "SE"], ["ne", "NE"], ["full moon", "fm", "FM", "fmh", "FMH"], ["aero"], ["wf", "WF", "windfury"]], ["arcanist", "empress' grace", "order of the emperor", "sorceress", "communication overflow", "berserker's technique", "destroyer", "rage hammer", "gravity training", "lone knight", "combat readiness", "shock training", "taijutsu", "energy overflow", "wardancer", "esoteric skill enhancement", "first intention", "artillerist", "barrage enhancement", "firepower enhancement", "deadeye", "enhanced weapon", "gunslinger", "time to hunt", "peacemaker", "scouter", "AT", "evo", "sharpshooter", "loyal companion", "lunar voice", "shadowhunter", "demonic impulse", "perfect suppression", "souleater", "night's edge", "full moon harvester", "aeromancer", "wind fury"]];
const dictArgs = [[["e", "eng", "engs"]], ["engravings"]];
const dictEngs = [[["hm"], ["cd"], ["kbw", "keen blunt"], ["doe", "DOE"], ["aoa", "AOA", "all-out attack"], ["barri"], ["vph, VPH"], ["rc", "RC"], ["ep", "EP"], ["mb", "MB"], ["mi", "MI", "mass", "increase mass"]], ["hit master", "cursed doll", "keen blunt weapon", "drops of ether", "all out attack", "barricade", "vital point hit", "raid captain", "ether predator", "master brawler", "mass increase"]];
const dictStats = ["spec", "crit", "swift"];
while (true) {
    let command = prompt("enter command or \"help\"");
    console.log("");
    if (command === "help") {
        console.log("commands:\nprint --[SUBJECT] name --[CONTENT]\n\tSUBJECT: class-name, spec-name\n\tCONTENT: standard-builds, stat-distribution, engravings, notes\nsearch\n\tsearch if an accessory is used");
    }
    switch (command.substring(0, command.indexOf(" "))) {
        case "print":
            cmdPrint(data, command);
            break;
        case "search":
            cmdSearch(data, command);
            break;
    }
}
function cmdSearch(data, command) {
    let args = commandToArgs(command);
    let stats = [];
    let engravings = [[],[]]; //[[name], [nodes]]
    let pushed = false;
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < dictStats.length; ++j) {
            if (args[i] === dictStats[j]) {
                stats.push(args[i]);
                pushed = true;
                break;
            }
        }
        if (pushed === false && isNaN(parseInt(args[i + 1])) === true) {
            engravings[0].push(spellcheck(spellcheck(args[i], dictEngs), dictName)); //engravings prioritized over name if dupe
            engravings[1].push(0);
        } else if (pushed === false && isNaN(parseInt(args[i + 1])) === false) {
            engravings[0].push(spellcheck(spellcheck(args[i], dictEngs), dictName));
            engravings[1].push(args[i + 1]);
            i++;
        }
        pushed = false;
    }
    // for (let i = 0; i < engravings.length; ++i) {
    //     for (let j = 0; j < engravings[i].length; j++) {
    //         console.log(engravings[i][j]);
    //     }
    // }
    console.log(); //make sure this prints before others
    if (engravings[1].length > 1) {
        printAccessory(stats, engravings);
    }
    console.log("");
    let engMatches = searchEngravings(engravings);
    let statMatches = searchStats(stats);
    let perfectMatches = [];
    let temp = {};
    for (let i = 0; i < engMatches.length; ++i) {
        for (let j = 0; j < statMatches.length; ++j) {
            if (engMatches[i].class === statMatches[j].class && engMatches[i].spec === statMatches[j].spec) {
                temp.class = engMatches[i].class;
                temp.spec = engMatches[i].spec;
                temp.warnings = engMatches[i].warnings;
                perfectMatches.push(temp);
                temp = {};
                break;
            }
        }
    }
    for (let i = 0; i < perfectMatches.length; ++i) {
        console.log("[MATCH] class: " + perfectMatches[i].class + ", spec: " + perfectMatches[i].spec);
        for (let j = 0; j < perfectMatches[i].warnings.length; ++j) {
            for (let k = 0; k < perfectMatches[i].warnings[j].length; k++) {
                console.log("WARNING: " + perfectMatches[i].warnings[j][k]);
            }
        }
    }
    if (perfectMatches.length === 0) {
        console.log("no matches found");
    }
}
function commandToArgs(command) {
    const whitespaces = getWhitespaces(command);
    //remove stats
    let args = [];
    for (let i = 0; i < whitespaces.length - 1; ++i) {
        args.push(command.substring(whitespaces[i] + 1, whitespaces[i + 1]).replaceAll(new RegExp("[-_]", "g"), " "));
    }
    args.push(command.substring(whitespaces[whitespaces.length - 1] + 1).replaceAll(new RegExp("[-_]", "g"), " "));
    return args;
}
function cmdPrint(data, command) {
    //print arcana all
    const whitespaces = getWhitespaces(command);
    let arg1 = command.substring(whitespaces[0] + 1, whitespaces[1]);
    let arg2;
    if (whitespaces.length > 1) {
        arg2 = command.substring(whitespaces[1] + 1);
        arg2 = spellcheck(arg2.replaceAll(new RegExp("[-_]", "g"), " "), dictArgs);
    }
    arg1 = spellcheck(arg1.replaceAll(new RegExp("[-_]", "g"), " "), dictName);
    for (let i = 0; i < data.length; ++i) {
        if (data[i].className === arg1) {
            printClass(data[i]);
        } else {
            for (let j = 0; j < data[i].specs.length; ++j) {
                if (data[i].specs[j].specName === arg1 && arg2 == undefined) {
                    printSpec(data[i].specs[j]);
                } else if (data[i].specs[j].specName === arg1) {
                    switch(arg2) {
                        case "engravings":
                            printSpecEngravings(data[i].specs[j]);
                            break;
                        case "stats":
                            printSpecStats(data[i].specs[j]);
                            break;
                        case "builds":
                            printSpecBuilds(data[i].specs[j]);
                            break;
                        case "all":
                            printSpec(data[i].specs[j]);
                            break;
                    }
                }
            }
        }
    }
}
function printAccessory(stats, engravings) {
    if (stats.length > 1) {
        console.log("necklace");
    } else {
        console.log("(ear)ring");
    }
    for (let i = 0; i < stats.length; ++i) {
        console.log(stats[i]);
    }
    for (let i = 0; i < engravings[0].length; ++i) {
        if (engravings[1][i] != undefined) {
            console.log(engravings[0][i] + " " + engravings[1][i])
        } else {
            console.log(engravings[0][i]);
        }
    }
}
function getWhitespaces(command) {
    let whitespaces = [];
    let lastIndex = -1;
    while (command.indexOf(" ", lastIndex + 1) != -1) {
        whitespaces.push(command.indexOf(" ", lastIndex + 1));
        lastIndex = command.indexOf(" ", lastIndex + 1);
    }
    return whitespaces;
}
function spellcheck(word, dict) {
    for (let i = 0; i < dict[0].length; ++i) {
        for (let j = 0; j < dict[0][i].length; ++j) {
            if (word === dict[0][i][j]) {
                return dict[1][i];
            }
        }
    }
    return word;
}
function searchEngravings(query) {
    let matches = []
    let temp = {};
    temp.warnings = [];
    let engMatches = 0;
    for (let i = 0; i < data.length; ++i) {
        for (let j = 0; j < data[i].specs.length; ++j) {
            for (let k = 0; k < data[i].specs[j].engravings[0].length; ++k) {
                for (let m = 0; m < query[0].length; ++m) {
                    if (data[i].specs[j].engravings[0][k] === query[0][m]) {
                        engMatches++;
                        if (isNaN(query[1][m]) === false) {
                            temp.warnings.push(getEngWarnings(data[i].specs[j], k, query[1][m]));
                        }
                    }
                }
            }
            if (engMatches === query[0].length) {
                temp.class = data[i].className;
                temp.spec = data[i].specs[j].specName;
                matches.push(temp);
            }
            temp = {};
            temp.warnings = [];
            engMatches = 0;
        }
    }
    return matches;
}
function getEngWarnings(specData, engravingIndex, engravingNodes) {
    let data = JSON.parse(JSON.stringify(specData));
    let notes = [];
    if (engravingNodes > 3 && data.specName === data.engravings[0][engravingIndex]) {
        if (data.engravings[1][engravingIndex].length === 1 && data.engravings[1][engravingIndex][0] === 3) {
            notes.push(data.engravings[0][engravingIndex] + " is a class engraving that is only used at level 3. a legendary book is normally used, and this accessory has " + engravingNodes + " nodes.");
        }
    }
    if (engravingNodes > 3 && data.engravings[1][engravingIndex].length === 1 && data.engravings[1][engravingIndex][0] === 2) {
        notes.push(data.engravings[0][engravingIndex] + " is only used at level 2 - most likely the +2 in 5x3+2. 9/7 stone is required so the +2 must be 3 nodes. this accessory has " + engravingNodes + " nodes.");
    }
    if (engravingNodes < 5) {
        if (data.engravings[1][engravingIndex].length === 1 && data.engravings[1][engravingIndex][0] === 1) {
            notes.push(data.engravings[0][engravingIndex] + " is only used at level 1. accessory with only " + engravingNodes + " nodes can't be used");
        }
    }
    return notes;
}
function searchStats(query) {
    let matches = []
    let temp = {};
    let statMatches = 0;
    let isNecklace = false;
    if (query.length > 1) {
        isNecklace = true;
    }
    for (let i = 0; i < data.length; ++i) {
        for (let j = 0; j < data[i].specs.length; ++j) {
            for (let k = 0; k < data[i].specs[j].stats[0].length; ++k) {
                for (let l = 0; l < query.length; ++l) {
                    if (data[i].specs[j].stats[0][k] === query[l] && ((isNecklace === false && data[i].specs[j].stats[1][k] === 500) === false)) {
                        statMatches++;
                    }
                }
            }
            if (statMatches === query.length) {
                temp.class = data[i].className;
                temp.spec = data[i].specs[j].specName;
                matches.push(temp);
            }
            temp = {};
            statMatches = 0;
        }
    }
    return matches;
}
function printClass(data) {
    let classData = JSON.parse(JSON.stringify(data));
    let specData;
    console.log(classData.className);
    for (let i = 0; i < classData.specs.length; ++i) {
        specData = classData.specs[i];
        printSpec(specData);
        if (i < classData.specs.length - 1) {
            console.log("");
        }
    }
}

function printSpec(data) {
    let specData = JSON.parse(JSON.stringify(data));
    console.log(specData.specName);
    printSpecStats(data);
    printSpecEngravings(data);
    printSpecBuilds(data);
    printSpecNotes(data);
}
//todo loop through engravings[1]
function printSpecEngravings(data) {
    let line = "";
    let specData = JSON.parse(JSON.stringify(data));
    for (let i = 0; i < specData.engravings[0].length - 1; ++i) {
        line = line + specData.engravings[0][i] + "\t" + specData.engravings[1][i] + "\n";
    }
    line = line + specData.engravings[0][specData.engravings[0].length - 1] + "\t" + specData.engravings[1][specData.engravings[0].length - 1];
    console.log(line);
}
function printSpecStats(data) {
    let line = "";
    let specData = JSON.parse(JSON.stringify(data));
    for (let i = 0; i < specData.stats[0].length - 1; ++i) {
        line = line + specData.stats[0][i] + "\t" + specData.stats[1][i] + "\n";
    }
    line = line + specData.stats[0][specData.stats[0].length - 1] + "\t" + specData.stats[1][specData.stats[0].length - 1];
    console.log(line);
}
function printSpecBuilds(data) {
    let line = "";
    let specData = JSON.parse(JSON.stringify(data));
    for (let i = 0; i < specData.builds.length - 1; ++i) {
        line = line + specData.builds[i] + "\n";
    }
    line = line + specData.builds[specData.builds.length - 1];
    console.log(line);
}
function printSpecNotes(data) {
    let specData = JSON.parse(JSON.stringify(data));
    console.log("notes: " + specData.notes);
}
/*
search accessory
print [name][content]
    subject: union class name and spec names
    content: standard-builds, stat-distribution, engravings, notes

who-uses --engravings [engravings] --stat

accessory-search stat, engraving + node, engraving + node


function getParameters(string) {
print arcana stats
expected output: [[][[arcana][stats]]]



return [[options][[op1 params][op 2 params][op 3 params]]
}

*/