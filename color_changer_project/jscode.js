const buttons = document.querySelectorAll('.button'); // Now we have access to all buttons
// console.log(buttons); // We got a node list with details of all buttons
const body = document.querySelector("body");

// Since we got a node list, we have to use forEach and write a callback function
buttons.forEach(function(button) {
    console.log(button); // We got button with all attributes and innerHTML
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target); // Our click function is being returned in the backend
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        } // by doing this, colour of our page's background is being synced to the colour we click and wer've achieved this using DOM.
    });
});
