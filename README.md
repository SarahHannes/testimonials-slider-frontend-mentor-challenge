# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

![Design preview for the Coding bootcamp testimonials slider coding challenge](./design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [What I learned](#what-i-learned)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard


## What I learned

- **Adding a shadow only at the bottom**  
  - Use the `box-shadow` property with negative spread:  
    ```css
    box-shadow: 0 65px 60px -60px var(--dark-blue);
    ```  
  - [Reference](https://stackoverflow.com/a/6245879)

- **Using `translate` to adjust positioning**  
  - Move an element relative to its original position:  
    ```css
    transform: translate(0, -50%); /* Moves up by 50% of its height */
    ```  
  - **Use case:** Center an element using `flexbox`, then apply `translate` for overlapping effects.

- **Allowing content to overflow its parent**  
  - Increase the child element's width to push it beyond the parent:  
    ```css
    width: 98%;
    ```
