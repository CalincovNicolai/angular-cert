---
difficulty: 3
training: true
chapter: "Chapter 2: Advanced Components and Async Pipe"
tags: angular
---

# Improve a component and use template syntax tricks

# Challenge Description

In this challenge, we want to change the `MovieItemComponent` to support any custom template instead of the "Details" button.
That way, we could use this component with no button at all, or any number of buttons or other items displayed in it.
We also want to display the total number of movies in the filter box.

## Requirements

- Remove the "Details" button from `MovieItemComponent` and implement a strategy to pass that button from the parent component.
- > 💡 HINT: Read our training section on content projection.
- Change `HomeComponent` to display the number of movies as follows:
  - "No result found" when no movies are displayed
  - "One result found" when one movie is displayed
  - "n results found" when n movies are displayed (n being greater than one)
    > 💡 HINT: A pipe from the Angular framework might help here.
- Everything else should work just like it did before. The "Details" button should still be functional.

## Other Considerations

- If you see the `data-test` attribute anywhere in the boilerplate don't remove it.

## Example of Finished Application

This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

![Finished app in this challenge](https://s3.amazonaws.com/images.certificates.dev/l3-training-code-challenge-chapter2.gif)
