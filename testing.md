# Testing

## Contents

- [Functional Testing](#functional-testing)
- [Validator Testing](#validator-testing)
  - [HTML](#html)
  - [CSS](#css)
  - [JS](#js)
- [WAVE](#wave)
- [LightHouse](#lighthouse)
- [Browser Compatibility](#browser-compatibility)
- [Responsivity](#responsivity)
- [Issues/ Bugs Found & Resolved](#issues-bugs)
- [Unresolved](#unresolved)

## <a name="functional-testing">Functional Testing</a>

---


| Page       | Test                                                                                   | Completed successfully |
| :--------- | :------------------------------------------------------------------------------------- | :--------------------: |
| All        | Navigation links to relevant pages                                                     |          Yes           |
| All        | Navigation hover effect                                                                |          Yes           |
| All        | Navigation takes over 100% of the screen when toggled on mobile                        |          Yes           |
| All        | Social media icons in the footer link to the correct external link and open in new tab |          Yes           |
| Homepage   | Images and text flex responsively                                                      |          Yes           |
| Homepage   | New game starts when user clicks 'Start' button                                        |          Yes           |
| Game       | Images and text flex responsively                                                      |          Yes           |
| Game       | New game loads a random question                                                       |          Yes           |
| Game       | Scoreboard increments number of questions, score and progress bar                      |          not yet       |
| Game       | Green border is applied to correct answer and red border is applied to incorrect answer|          Yes           |
| Game       | Push current question out of question array                                            |          Yes           |
| Game       | Final Score is displayed                                                               |          not yet       |
| Game       | Appropiate text depending on score is displayed                                        |          not yet       |
| Sign Up    | User can only sign up when all required fields are filled in                           |          yes           |
| Game Score | Previous scores are displayed                                                          |          not yet       |


**Navigation Links**

Testing was performed to ensure all navigation links on the respective pages, navigated to the correct pages as per design. 
This was done by clicking on the navigation links on each page. Links on all pages navigated to the correct pages as expected.

| Navigation Link | Page to Load  |
|-----------------|---------------|
| Home            |  index.html   |
| About Us        |  aboutus.html |
| Sign Up         |  sign-up.html |



## <a name="validator-testing">Validator Testing</a>

---

### <a name="html">HTML</a>

[W3C Markup Validator](https://validator.w3.org/)


- No errors were returned when passing through the official W3S validator

<details>
<summary>Result</summary>
Home Page

![HTML Validator Home Page](assets/images/index.html.validation.png)

About Us Page

![HTML Validator About Us Page](assets/images/aboutus.validation.png)

Sign Up Page 

![HTML Validator Sign Up Page](assets/images/signup.validation.png)

</details>


### <a name="css">CSS</a>

[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

This test returned no errors.
Results of the CSS test of style.css:

<details>
<summary>Result</summary>

- No errors were found when passing through the official (Jigsaw) validator
CSS Validator Results

![CSS Validator](assets/images/css_validation.png)


</details>

### <a name="js">JS</a>

[JSHint JS Validator](https://jshint.com/)

All JavaScript files were validated through JSHint.

<details>
<summary>Result</summary>

![Screenshot of JSHint testing](assets/testing/jshint.jpg)

</details>

## <a name="wave">WAVE</a>

---

[WAVE](https://wave.webaim.org/)

The WAVE WebAIM web accessibility evaluation tool was used to check for accessibility standards.

The first result gave a poor color contrast with the foreground text "Start" button with the white font. It was resolved by changing the font color to black.

<details>
<summary>Result</summary>

![Wave Testing Result](assets/images/wave_test.png)

Testing was focused to ensure the following criteria were met:

- All forms have associated labels or aria-labels so that this is read out on a screen reader to users who tab to form inputs.
- Color contrasts meet a minimum ratio as specified in WCAG 2.1 Contrast Guidelines.
- Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user.
- All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions.
- All not textual content had alternative text or titles so descriptions are read out to screen readers
- HTML page lang attribute has been set.
- Aria properties have been implemented correctly.
- WCAG 2.1 Coding best practices being followed.

</details>


## <a name="lighthouse">LightHouse</a>

---

Lighthouse was used (accessed through Developer Tools in Chrome) to analyse for the following:

- Performance
- Accessibility
- Best practice
- SEO


<details>
<summary>Homepage</summary>

![Lighthouse Test Home page](assets/images/lighthouse_homepage.png)

</details>
<details>
<summary>About Us Page</summary>

![Lighthouse About Us page](assets/images/lighthouse_aboutus.png)

</details>
<details>
<summary>Sign Up Page</summary>

![Lighthouse Sign Up page](assets/images/lighthouse_signup.png)

</details>


## <a name="browser-compatibility">Browser Compatibility</a>

---

This website was tested on Chrome, Microsoft Edge, and Firefox for desktop.

The website was tested on Safari for mobile and tablet.

- The outline hover effect for the house boxes appeared to be a problem in Safari. See [Unresolved](#unresolved).

## <a name="responsivity">Responsivity</a>

---

Responsiveness was tested through Chrome Developer tools. The devices tested include:

- iPhone SE
- iPhone XR
- iPhone 12 Pro
- Pixel 5
- Samsung Galaxy S8+
- Samsung Galaxy S20 Ultra
- iPad Air
- iPad Mini
- Surface Pro 7
- Surface Duo
- Galaxy Fold
- Samsung Galaxy A51

I was able to directly test the website on Samsung A10 and Samsung Galaxy S10


## <a name="issues-bugs">Issues/ Bugs Found & Resolved</a>

---

### Validation Issue

The initial test returned an error for JsHint
### Wave Issue

The first result gave a poor contrast  for the white font of "Start" button. I resolved it by changing the font color to black.

## <a name="unresolved">Unresolved</a>

### The Footer would not stick to the bottom of the page

During testing I found out that the footer would not stick to the
 bottom of the page. This bug is still unresolved.