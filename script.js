// Sample logs array for demonstration purposes
var logs = [
    "Something's Off",
    "Update",
    "Exploration",
    "Update 2",
    "The School",
    "Finder's Log"
];

var log = [
    "Something's Off\nDate: January 23, 2022\n\nI woke up today in absolute silence. No footsteps, no yelling and no cluttering of kitchenware. I checked my phone, no service. Weird. I went downstairs and realised I was alone. I went and looked through the whole house, nothing. I decided to look out of the window to see if our car was still outside, it was. While looking for our car I saw this thick “fog” covering everything. Normally I wouldn't think anything of it, since fog is common in Finland especially during winter time, but something just seemed so off about it. All quiet, no one around, thick “fog” everywhere, no phone service but still power?. I woke up quite late, due to the lack of noise in the house, normally I’d wake up to the yelling that my brothers make. While looking around I found this old Sony Alpha 100 from 2006. I remember using it to take pictures of our old dog, so I decided to keep it with me and document everything. I went outside to see if my neighbours were home.\n\n--Attachment ‘my_house.png’ (use ‘view’ to view image)--\n\nFrom the outside my house looked weirdly abandoned, but the power still works. This “fog” must’ve weathered the paint or something. I wonder how long I’ve been asleep for.\n\n--Attachment ‘neighbour.png’--\n\nThe neighbour’s house looked even worse, plants had grown on the walls and everything, but the power still worked... I tried to knock on their door, but no one answered. A house next to theirs was even burnt down.\n\n--Attachment ‘burnt_house.png’--\n\nWhere is everyone???? To be honest, I got a little freaked out and headed back inside.\n\nEnd of log, 'read 2' to continue",
    "Update\nDate: January 24, 2022\n\nIt’s really getting weird now. I also don’t know what to call these logs and even if anyone’s going to read them, since I haven’t heard from anyone in about 24 hours. I’m getting worried. My phone still doesn’t work so I can’t call anyone. I contemplated the whole morning whether I should go out and look for help or just stay home and wait. Whatever happened, that “fog” must have something to do with it. Anyways, I decided in favour of going out on a little expedition to look for help, I don’t think anyones looking for me. It’s getting too dark so I’ll go tomorrow. I’ll try to remember the camera as well.\n\nEnd of log, ‘read 3’ to continue",
    "Exploration\nDate: January 25, 2022\n\nDay 3 of being alone, this “fog” is really starting to fuck with me. I went outside, there’s literally no one around. What the hell happened to everyone. Even the animals are gone. I passed by this bridge nearby, you can see a shopping mall on the other side with a bunch of cars usually going by, but there were none there. Some cars that were there were shut off.\n\n--Attachment ‘foggy_buildings.png’--\n\nThe views look pretty cool, but it’s still so weird. There’s something eerily calm about the “fog”, it almost speaks to me in a way. I don’t know how to describe it. I also found these powerlines, someone must still be running the nearby power plant. I might be able to find some help there, but I’m pretty sure it’s quite far away. I don’t have any means of transport. Can’t drive a car, since I don’t have a license, no buses running and I don’t have a bike. I could try to find one somewhere, but that’ll be a future problem. Here’s the power lines I was talking about:\n\n--Attachment ‘powerlines.png’--\n\nNotice how there are no birds sitting on them. Yeah.. Nothing around. I also checked out a nearby store and got some supplies, a lot of things are already going bad. Took some tin canned foods, since they preserve well. Here’s also the road to the bridge I was talking about:\n\n--Attachment ‘empty_road.png’--\n\nEnd of log, ‘read 4’ to continue",
    "Update 2\nDate: January 31, 2022",
    "The School\nDate: February 12, 2022",
    "Finder's Log\nDate: February 2, 2024"
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
            outputElement.innerText += `$ ${commandInput}\n\n`;
            listImages(outputElement);
            break;
        case "view":
            outputElement.innerText += `$ ${commandInput}\n\n`;
            if (commandParts.length === 2) {
                var imageName = commandParts[1];
                if (imageName === "all"){
                    viewImage(outputElement, "abandoned_school.png")
                    viewImage(outputElement, "burnt_house.png")
                    viewImage(outputElement, "classroom.png")
                    viewImage(outputElement, "empty_road.png")
                    viewImage(outputElement, "exit_sign.png")
                    viewImage(outputElement, "foggy_buildings.png")
                    viewImage(outputElement, "glass_hallway.png")
                    viewImage(outputElement, "my_house.png")
                    viewImage(outputElement, "neighbour.png")
                    viewImage(outputElement, "powerlines.png")
                } else{
                    viewImage(outputElement, imageName);
                }
            } else {
                outputElement.innerText += "Usage: view [imageName.jpg] or view all\n\n";
            }
            break;
        case "help":
            outputElement.innerText += `$ ${commandInput}\n\n`;
            showHelp(outputElement);
            break;
        case "clear":
            clearOutput(outputElement);
            break;
        case "logs":
            outputElement.innerText += `$ ${commandInput}\n\n`;
            listLogs(outputElement);
            break;
        case "read":
            outputElement.innerText += `$ ${commandInput}\n\n`;
            if (commandParts.length === 2) {
                var logIndex = parseInt(commandParts[1]) - 1;
                viewLog(outputElement, logIndex);
            } else {
                outputElement.innerText += "Usage: read [number]\n\n";
            }
            break;
        default:
            outputElement.innerText += `$ ${commandInput}\nCommand not recognized. Type 'help' for a list of commands.\n\n`;
            break;
    }
}

function listLogs(outputElement) {
    if (logs.length > 0) {
        outputElement.innerText += "Logs found:\n";
        for (var i = 0; i < logs.length; i++) {
            outputElement.innerText += `Entry ${i + 1}: ${logs[i]}\n`;
        }
        outputElement.innerText += "\n";
    } else {
        outputElement.innerText += "No logs available.\n\n";
    }
}

function viewLog(outputElement, logIndex) {
    if (logIndex >= 0 && logIndex < logs.length) {
        clearOutput(outputElement);
        outputElement.innerText += `Log entry ${logIndex + 1}: ${log[logIndex]}\n\n`;
    } else {
        outputElement.innerText += "Invalid log index.\n\n";
    }
}


function listImages(outputElement) {
    // Replace these image names with your actual image file names
    var imageNames = ["my_house.png", "neighbour.png", "burnt_house.png", "empty_road.png", "foggy_buildings.png", "powerlines.png", "abandoned_school.png", "hallway.png", "classroom.png", "exit_sign.png", "glass_hallway.png"];

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
        "  - view: [image.png]: Views the specified image\n" +
        "  - logs: Lists all logs\n" +
        "  - read: [number]: Read the specified log\n" +
        "  - help: Displays this help message\n" +
        "  - clear: Clears the terminal\n\n";
}

function clearOutput(outputElement) {
    outputElement.innerHTML = "";
}
