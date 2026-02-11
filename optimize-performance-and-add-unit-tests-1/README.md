---
difficulty: 3
training: true
chapter: "Chapter 6 - Performance, security, and unit testing"
tags: angular
---

# Optimize performance and add unit tests

# Challenge Description

In this challenge, we want to use the `onPush` change detection strategy on as many components as possible, as well as write unit tests to validate
the movie filtering method of `MoviesService`.

## Requirements

- Go through all components in the application and determine if you could enable the `onPush` change detection strategy on them.
> 💡 HINT: Read more about change detection in the "Performance" chapter of our self-training
- Update `movies.service.spec.ts` to add at least 3 different unit tests for the `filterMovieList()` method. It should:
  - Return all movies by default (when no params are passed)
  - Filter movies by title only when a title is passed (no year)
  - Filter movies by year only when a year is passed (no title)
- Everything should work just like it did before. We're not adding or removing any functionality here.

## Other Considerations

- If you see the `data-test` attribute anywhere in the boilerplate don't remove it.

## Example of Finished Exercise

This is an example of what the unit tests result should look like for the completed exercise.

![Finished unit tests in this challenge](https://api.certificates.dev/storage/screenshot.png)
