#1. Here is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


getElementById : it's return a single element
getElementsByClassName : it's return   an HTML collection 
querySelector : it's return a single element .But only first element which is match
querySelectorAll: 




const newHead = document.createElement('h1');
newHead.textContent = 'This is head';
newHead.style.color = 'blue';
document.body.appendChild(newHead);


 When we click an element, the click doesn't just stay there—it "bubbles up" to its parents, like an air bubble rising in water.

Event Delegation is a technique where you add a single event listener to a parent element instead of adding individual listeners to every single child element.

preventDefault() :Stop a built-in action.	
stopPropagation() :	Stop the bubble .