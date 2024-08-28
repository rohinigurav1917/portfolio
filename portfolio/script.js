let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.classList.add("out");
        }, i * 80);
    });

    setTimeout(() => {
        currentWord.style.opacity = "0";
        nextWord.style.opacity = "1";
    }, currentWord.children.length * 80);

    Array.from(nextWord.children).forEach((letter, i) => {
        letter.classList.add("behind");
        setTimeout(() => {
            letter.classList.replace("behind", "in");
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

setTimeout(() => {
    changeText();
    setInterval(changeText, 3000);
}, 3000);


  
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(elem => {
        var dots = elem.getAttribute("data-dots");
        var percent = elem.getAttribute("data-percent");
        var rotation = (percent / 100) * 360; // Calculate the rotation in degrees
        
        elem.style.setProperty('--percent', percent);
        elem.style.setProperty('--rotation', rotation + 'deg');
        
        var points = "";
        var rotate = 360 / dots;
    
        for (let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg;"></div>`;
        }
        elem.innerHTML = points;
    
        const pointsMarked = elem.querySelectorAll('.points');
        for (let i = 0; i < Math.floor(dots * percent / 100); i++) {
            pointsMarked[i].classList.add('marked');
        }
    });
});

    
//mix it up section
    var mixer = mixitup('.portfolio-gallery');

    //sticky header
    const header = document.querySelector("header");
    window.addEventListener("scroll",function(){
        header.classList.toggle("sticky",this.window.scrollY > 50 )
    })

