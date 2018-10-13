window.onload = () => {
    'use strict';

    // Retrieve a reference to the <body> element, assigning it to the body variable.
    let body = document.getElementsByTagName(`body`)[0];

    // Create a new <p> element.
    let p = document.createElement(`p`);

    // Create a text node.
    let content = document.createTextNode(`hello, world`);

    p.appendChild(content);
    body.appendChild(p);
};
