window.addEventListener("keydown", function (e) {
    const audio = document.querySelector   (`audio[data-key="${e.keyCode}"]`);  // selecting an element from the dom whose name matches audio who has an attribute of data-key. It is grabbing the specific keyCode number of the key that was pressed so this way it is not hard coded.

    const key = document.querySelector   (`.key[data-key="${e.keyCode}"]`); // same thing here, but now, we are selecting an element who has a matching class name of 'key' and also has a data attribute of 'data-key'


    if (!audio) return; // stop the function from running altogether
    audio.currentTime = 0; // rewind to the start of the sound at every keydown
    audio.play();
});