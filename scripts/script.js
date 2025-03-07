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