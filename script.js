const btn=document.getElementById('btn');
const output=document.querySelector('.output')


const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];
btn.addEventListener("click",()=>{
    let random=Math.floor(Math.random()*quotes.length)
    output.textContent=quotes[random];
})