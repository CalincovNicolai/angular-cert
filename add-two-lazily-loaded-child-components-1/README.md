---
difficulty: 3
training: true
chapter: "Chapter 5 - Advanced Routing"
tags: angular
---

# Add two lazily-loaded child components

# Challenge Description

In this challenge, we want to change `MovieDetailsComponent` so it supports child navigation between two possible components, similar to tabs.
Instead of displaying all movie info in one place, we created two new components called `NumbersComponent` and `PeopleComponent` to display movie information in two distinct components.

## Requirements

- Update `app.route.ts` to support two new child routes with lazily-loaded components under "details/:id":
  - `PeopleComponent` when the URL ends with "/people", for instance "/details/21/people".
  - `NumbersComponent` when the URL ends with "/numbers" or any value that isn't "people".
  - Components must be loaded using the short syntax: `import('./movie-details/people/people.component')` without `.then`
- Update `MovieDetailsComponent` so it can render child components where the text "TODO: Display child route here" is located.
- In that same `MovieDetailsComponent`, add proper links on the two buttons "Numbers" and "People" so they allow navigation to these child routes.
- Fix `PeopleComponent` so it displays the names of all people instead of not having any data.
- Everything else should work just like it did before. The "favorites" feature should still be functional, with the addition that favorites are persisted across browser reloads.

## Other Considerations

- If you see the `data-test` attribute anywhere in the boilerplate don't remove it.

## Example of Finished Application

This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

![Finished app in this challenge](https://api.certificates.dev/storage/screenshot.gif)
