import { output } from './DriverFunction.js'
const consoleDiv = document.getElementById('console');
const inputField = document.getElementById('commandInput');
let commandHistory = [];
let historyIndex = -1;

function processCommand(command) {
    addOutput(`>>> ${command}`);
    addOutput(output(command));
    switch (command) {
        case "cls":
            document.getElementById('console').innerHTML = "";
            break;
        case "exit":
            window.close();
            break;
    }
    commandHistory.unshift(command);
    historyIndex = -1;
}

function addOutput(output) {
    const lines = output.split('\n');
    lines.forEach(line => {
        const newLine = document.createElement('div');
        const lineWithTabs = line.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;'); // Replace tabs with four non-breaking spaces
        newLine.innerHTML = lineWithTabs;
        consoleDiv.appendChild(newLine);
    });
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}



inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = inputField.value.trim();
        if (command !== '') {
            processCommand(command);
            inputField.value = '';
        }
    } else if (event.key === 'ArrowUp') {
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            inputField.value = commandHistory[historyIndex];
            setTimeout(function() {
                inputField.selectionStart = inputField.selectionEnd = inputField.value.length;
            }, 0);
        }
    } else if (event.key === 'ArrowDown') {
        if (historyIndex > 0) {
            historyIndex--;
            inputField.value = commandHistory[historyIndex];
            setTimeout(function() {
                inputField.selectionStart = inputField.selectionEnd = inputField.value.length;
            }, 0);
        } else if (historyIndex === 0) {
            inputField.value = '';
            historyIndex = -1;
        }
    }
});

