---
difficulty: 3
training: true
chapter: "Chapter 7 - Advanced RxJs and Forms"
tags: angular
---

# Add ratings component as a custom form element

# Challenge Description

In this challenge, we want to create a `RatingsComponent` that allows the user to select a rating from 1 to 5 stars for each movie.

## Requirements

- Use `MoviesService` to get a Signal that contains the current rating for a given movie using the `getRating(movie: Movie)` method. Do not update that service, you must use it as-is.
- Update `ratings.component.ts` so it supports the following syntax to set a rating and update it: 
   `<app-ratings [(ngModel)]="rating"  />`
- Ensure that a rating can be set by clicking on a star and that proper styling is applied to reflect the movie rating (see screenshot below)
- If the user navigate to a different tab or movie and comes back to a movie rating later, the value stored in `MoviesService` should be displayed.
- Everything else should work just like it did before.

## Other Considerations

- If you see the `data-test` attribute anywhere in the boilerplate don't remove it.

## Example of Finished Exercise

This is an example of what the unit tests result should look like for the completed exercise.

![Finished unit tests in this challenge](https://s3.amazonaws.com/images.certificates.dev/screenshot.gif)
