function executeCommand() {
    var inputElement = document.getElementById("commandInput");
    var outputElement = document.getElementById("output");

    var commandInput = inputElement.value;
    inputElement.value = "";

    var commandParts = commandInput.split(" ");
    var command = commandParts[0].toLowerCase();

    switch (command) {
        case "list":
            listImages(outputElement);
            break;
        case "view":
            if (commandParts.length === 2) {
                var imageName = commandParts[1];
                viewImage(outputElement, imageName);
            } else {
                outputElement.innerText += "Usage: viewimage [imageName]\n";
            }
            break;
        case "help":
            showHelp(outputElement);
            break;
        case "clear":
            clearOutput(outputElement);
            break;
        default:
            outputElement.innerText += `$ ${commandInput}\nCommand not recognized. Type 'help' for a list of commands.\n`;
            break;
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
    } else {
        outputElement.innerText += "No images found in the folder.\n";
    }
}

function viewImage(outputElement, imageName) {
    // Replace this with the path to your image folder
    var imagePath = "kuvat/" + imageName;

    // Display the image
    outputElement.innerHTML += `<img src="${imagePath}" alt="${imageName}" style="max-width: 100%;">\n`;
}

function showHelp(outputElement) {
    outputElement.innerHTML +=
        "Available commands:\n" +
        "  - list: Lists all images\n" +
        "  - view [imageName.jpg]: Views the specified image\n" +
        "  - help: Displays this help message\n" +
        "  - clear: Clears the terminal output\n";
}

function clearOutput(outputElement) {
    outputElement.innerHTML = "";
}
