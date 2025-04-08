// Get elements by Tag name
const lists = document.getElementsByTagName('li');
console.log(lists);

// Get elements by ID
console.log(document.getElementById('head').innerText);

// Get elements by Class 
console.log(document.getElementsByClassName('lists'));

// Get elements By querySelector, querySelectorAll (Google it)

// Adding Custom CSS
document.getElementById('cse').style.color='crimson';

// Get the attributes
console.log(document.getElementById('cse').getAttribute('class'))

// Google a similar method like it, which is ClassList

// Set attribute
document.getElementById('kors').setAttribute("class", "colorBlue");

// Inner text
console.log(document.getElementById('h4').innerText)

// Inner HTML
document.getElementById('h4').innerHTML = `<h1>this is an changed text</h1>
                                            <h2> this is the proof</h2>`;
// Add Event Listener
const button = document.getElementById('btn');
const buttonText = document.getElementById('btn-p');
button.addEventListener("click", function(){
    alert("Button clicked!");
    buttonText.innerText = "You clicked the button";
    buttonText.style.color = "blue";
});   


/*

Imagine you click on a <button> inside a <div>.
JavaScript doesn't just say "cool, the button was clicked" — it bubbles that event up the DOM tree:

🔁 Event Flow:
1. Event happens on the button
2. Then it bubbles up to the parent div
3. Then to body, then to html, and so on...

[Search for it, event.stopPropagation();]

*/