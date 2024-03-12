const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // we are taking the values from our inputs after form's event listener to get dynamic values
    const height = parseInt(document.querySelector('#height').value); //we are using parseInt because we will get the value in a string form.
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results'); // Change this line
 
    if ((height === '' || height < 0 || isNaN(height)) && (weight === '' || weight < 0 || isNaN(weight))) {
        alert("Please enter valid height and weight.");
    } else if (height === '' || height < 0 || isNaN(height)) {
        alert(`Please give a valid height ${height}`);
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        alert(`Please give a valid weight ${weight}`);
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }
});
