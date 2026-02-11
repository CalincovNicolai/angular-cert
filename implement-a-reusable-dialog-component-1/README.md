---
difficulty: 3
training: true
chapter: "Chapter 8 - Challenges Roundup"
tags: angular
---

# Implement a reusable dialog component


# Challenge Description

In this challenge, we want to evolve a quiz application by creating a reusable dialog component to ask the user whether they want to submit their quiz or not.


## Requirements

- Use the pre-generated `DialogComponent`. No need to worry about CSS, you can use what's in the template.
- The component must have a way to pass a `title` input as a string, and two templates to render inside the dialog: One for the body of the dialog and one for the footer.
- The implementation must be generic so your component must expose ways to open and close the dialog.
- Use the dialog to have the user confirm whether they want to submit their quiz or not:
  - The title must be "Are you sure?"
  - The body must be "Please confirm you want to submit your quiz"
  - The footer has two buttons. "OK" will submit the quiz and move on to the next screen. "Not yet" closes the dialog.

## Other Considerations

- If you see the `data-test` attribute anywhere in the boilerplate don't remove it.

## Example of Finished Exercise

This is an example of what the result should look like after the exercise is completed:

![Example screenshot](https://api.certificates.dev/storage/ng-l3-roundup/screenshot-r2.gif)
