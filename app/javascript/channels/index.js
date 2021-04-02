// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

const element = document.getElementById("all-todos");
element.style.display = checked;
element.style.display = "";
