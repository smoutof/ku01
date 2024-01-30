// Sample logs array for demonstration purposes
var logs = [
    "The Fog",
    "The Walk to School",
    "Log entry 3: More things happened",
];

var log = [
    "The Fog\nDate: January 23, 2046\n\nI woke up today in absolute silence. There was no one home, so I went to look out of the window and saw this thick fog covering everything. Normally I wouldn't think anything of it, since fog is a pretty normal thing in Finland, but something still seemed off. I decided to check it out.\n\nEnd of log, type 'read 2' to continue",
    "The Walk to School\nDate: January 23, 2046"
];

function executeCommand() {
    var inputElement = document.getElementById("commandInput");
    var outputElement = document.getElementById("output");

    var commandInput = inputElement.value;
    inputElement.value = "";

    var commandParts = commandInput.split(" ");
    var command = commandParts[0].toLowerCase();

    switch (command) {
        case "images":
            listImages(outputElement);
            break;
        case "view":
            if (commandParts.length === 2) {
                var imageName = commandParts[1];
                viewImage(outputElement, imageName);
            } else {
                outputElement.innerText += "Usage: view [imageName.jpg]\n\n";
            }
            break;
        case "help":
            showHelp(outputElement);
            break;
        case "clear":
            clearOutput(outputElement);
            break;
        case "logs":
            listLogs(outputElement);
            break;
        case "read":
            if (commandParts.length === 2) {
                var logIndex = parseInt(commandParts[1]) - 1;
                viewLog(outputElement, logIndex);
            } else {
                outputElement.innerText += "Usage: read [2]\n\n";
            }
            break;
        default:
            outputElement.innerText += `$ ${commandInput}\nCommand not recognized. Type 'help' for a list of commands.\n\n`;
            break;
    }
}

function listLogs(outputElement) {
    if (logs.length > 0) {
        outputElement.innerText += "Logs:\n";
        for (var i = 0; i < logs.length; i++) {
            outputElement.innerText += `${i + 1}. ${logs[i]}\n`;
        }
        outputElement.innerText += "\n";
    } else {
        outputElement.innerText += "No logs available.\n\n";
    }
}

function viewLog(outputElement, logIndex) {
    if (logIndex >= 0 && logIndex < logs.length) {
        clearOutput(outputElement);
        outputElement.innerText += `Log ${logIndex + 1}: ${log[logIndex]}\n\n`;
    } else {
        outputElement.innerText += "Invalid log index.\n\n";
    }
}


function listImages(outputElement) {
    // Replace these image names with your actual image file names
    var imageNames = ["image1.jpg", "image2.jpg"];

    if (imageNames.length > 0) {
        outputElement.innerText += "Images in the folder:\n";
        for (var i = 0; i < imageNames.length; i++) {
            outputElement.innerText += imageNames[i] + "\n";
        }
        outputElement.innerText += "\n";
    } else {
        outputElement.innerText += "No images found in the folder.\n\n";
    }
}

function viewImage(outputElement, imageName) {
    // Replace this with the path to your image folder
    var imagePath = "kuvat/" + imageName;

    // Display the image
    outputElement.innerHTML += `<img src="${imagePath}" alt="${imageName}" style="max-width: 100%;">\n\n`;
}

function showHelp(outputElement) {
    outputElement.innerHTML +=
        "Available commands:\n" +
        "  - images: Lists all images\n" +
        "  - view [imageName.jpg]: Views the specified image\n" +
        "  - logs: Lists all logs\n" +
        "  - read [logIndex]: Read the specified log\n" +
        "  - help: Displays this help message\n" +
        "  - clear: Clears the terminal output\n\n";
}

function clearOutput(outputElement) {
    outputElement.innerHTML = "";
}
