// This logs a message in the dev tools console
console.log('Hello World!');

// There's also warn and error
console.warn('Oops, something went wrong!');
console.error('Oh no, it looks like something broke!');

// This is a variable
let index = 0;

// This is a function
const thisIsAFunction = function () {
    // We can use console.log() to debug code
    console.log('Function fired!');

    // This is a conditional
    // The code will only run if the condition is true
    if (index < 20) {
        // Here we select a DOM element using querySelector
        const body = document.querySelector('body');

        if (body) {
            // Here we create a new DOM element
            const p = document.createElement('p');

            // Here we set the element's inner html (text)
            p.innerHTML = `(${index}): This element was generated with JavaScript.`;

            // Here we append that element to the <body> tag
            body.appendChild(p);
        }

        // Here we set a timeout
        // Timeouts pause code execution
        setTimeout(() => {
            // Here we call this function again (recursively)
            thisIsAFunction();
        }, 1000);
    }

    // Here we increase the index so the loops doesn't run infinitely
    index++;
};

// Here we call the function on load
// This will run when the browser loads this JavaScript file
thisIsAFunction();