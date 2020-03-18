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
The index.html file serves as the main and only page of the password generator. Minimalist in design, it was changed very little from the version on the class repository. Minor styling comes from Bootstrap of the button and font family.

### Features of style.css
The style.css file remains unchanged from the version on the class repository with the exception of the styling of the .btn class, which was commented out to allow Bootstrap styling to take precedence.

### Features of script.js
The script.js file contains the engine for the password generator. It is commented within the file to provide context to different lines of code. Notably, two custom functions were created outside of the version from the class repository. It is likely that the author is still updating this file in order to code around edge cases and malicious users.

### Known bugs and glitches
Several bugs and glitches are present at the time of this writing. They are listed below.
* Entering a string and then an integer value greater than 128 generates a password.
* Entering a non-integer value and then an integer value greater than 128 generates a password.
* Entering a string and then a non-zero integer value less than 8 generates a password.
* Entering a non-integer value and then a non-zero integer value less than 8 generates a password.
* Entering a string and then a negative value gives the user prompts but does not generate a password.
* Entering a non-integer value and then a negative value gives the user prompts but does not generate a password.




### Additional comments and notes
The creation of this website was made possible by using Bootstrap CSS Framework. 

> Collaborated in part with Louis, Yared, Marissa, and Zahra.

```
Special thanks to Bootstrap. Could not have done it without their never ending SUPPORT.
```

© 2020 DCL. Very Few Rights Reserved, but More Rights than Ever Thought Possible.