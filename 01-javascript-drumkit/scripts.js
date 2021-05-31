window.addEventListener("keydown", function (e) {
    const audio = document.querySelector   (`audio[data-key="${e.keyCode}"]`);  // selecting an element from the DOM whose name matches 'audio' who also has an attribute of 'data-key'. It is grabbing the specific keyCode number of the key that was pressed so this way it is not hard coded.

    const key = document.querySelector   (`.key[data-key="${e.keyCode}"]`); // same thing here, but now, we are selecting an element who has a matching class name of 'key' and also has a data attribute of 'data-key'


    if (!audio) return; // stop the function from running altogether
    audio.currentTime = 0; // rewind to the start of the sound at every keydown
    audio.play();

    key.classList.add("playing"); // adds the class 'playing' to the element that was selected with the key down stroke

    function removeTransition(e) {
        if (e.propertyName !== "transform") return;    // skip it if it's not a transform
        this.classList.remove("playing");
    };  // the class 'playing' will be removed when the transform completely finishes 

    const keys = document.querySelectorAll(".key");     // selects ALL of the elements with a class name of 'key'
    keys.forEach(key => key.addEventListener("transitionend", removeTransition));   // We are using iteration here to add an event listener to every element with the class name of 'key' to detect when the transition ends and then run the callback function, "removeTransition"

});