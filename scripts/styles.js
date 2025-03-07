// Add custom CSS using JS
const divs = (document.querySelectorAll('div'));
for(div of divs){
    console.log(div);
    div.style.color = 'red';
    div.style.border = '2px solid aliceblue';
}

// Add a class
document.getElementById('h4').classList.add('colorBlue');

// Remove a class
document.getElementById('h4').classList.remove('redbg');

// createElement, appendChild