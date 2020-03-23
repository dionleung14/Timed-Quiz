# Timed-Quiz

## Created by Dion Leung

### Summary of this documentation

This .md document (README_DCL.md) will describe features on the webpage https://dionleung14.github.id/Password-Generator/ in all supporting files. 
* Features of index.html 
* Features of style.css 
* Features of script.js 
* Known bugs and glitches
* Additional comments and notes

### Features of index.html
The index.html file serves as the main and only page of the timed Pokemon quiz. It is barebones by design to highlight the extensive use of JavaScript to populate the DOM, both creating elements that did not exist and also filling in text and forms in placeholder HTML elements.

### Features of style.css
The style.css file provides minimal styling that will be worked on once content and functionality is complete and running with few bugs and errors.

### Features of script.js
The script.js file contains the engine for the Pokemon quiz. It is commented within the file to provide context to different lines of code. It aims to dynamically change the question and answers being displayed, and also implements an algebraic scoring method. It contains two setInterval functions that serve as different timers; one timer to give the test taker 3 seconds to prepare for the quiz to begin, and another timer that both tracks the time remaining for the quiz and plays a factor in scoring. Once the quiz is over or the time runs out, the user has the option to save their score and name to their browser's local storage. At the time of this writing, the developer is still working on creating a page to display the high scores stored.

### Known bugs and glitches
Many bugs and glitches are present at the time of this writing. The list below is not an exhaustive and comprehensive list.
* There is no high scores screen.
* The script.js file is ridiculously unorganized and thus very difficult to troubleshoot. 
* The browser (Google Chrome) throws errors after answering the last question, likely due to the fact that the question tracker variable becomes greater than the length of the questions array, making it undefined.
* Upon replay, the initial pre-quiz countdown timer does not display.
* Upon replay, the quiz timer and score factor does not display.
* The developer ran into some poor time management the weekend prior to this homework's due date.

### Additional comments and notes
The creation of this website will be made possible by using Bootstrap CSS Framework once it works. The developer is also spending any spare time they have to rework and finish the functionality of the quiz, since it will be displayed on their portfolio.

> Collaborated in part with Louis, Brett, and Zahra. Special 

```
Special thanks to my assigned tutor Jacob Metzinger and TAs Clint Brodar and Denis Molloy.
```

© 2020 DCL. Very Few Rights Reserved, but More Rights than Ever Thought Possible.