---
difficulty: 3
training: true
chapter: "Chapter 4 - Advanced TypeScript and JavaScript"
tags: angular
---

# Create a service to store favorites in local storage

# Challenge Description

In this challenge, we want to persist favorite movies in local storage so we can restore favorites after an app reload.

## Requirements

- Create a new service called `StorageService`. This service has to implement both `setValue` and `getValue` methods.
- `getValue` takes a `key` and an optional `defaultValue` as parameters. `defaultValue` is returned if `localStorage` doesn't have a value for that `key`.
- Your service must use the browser's `localStorage` to store and retrieve data.
  > 💡 HINT: Read more about [local storage](https://www.angulartraining.com/daily-newsletter/localstorage-and-sessionstorage/)
- Your service must be generic and work with all types of data. Do not use the types `any` or `unknown`.
  > 💡 HINT: Use generic types as much as possible.
- Change `FavoritesService` so it uses `StorageService` to store and retrieve data from `localStorage`.
- Everything else should work just like it did before. The "favorites" feature should still be functional, with the addition that favorites are persisted across browser reloads.

## Other Considerations

- If you see the `data-test` attribute anywhere in the boilerplate don't remove it.

## Example of Finished Application

This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

![Finished app in this challenge](https://s3.amazonaws.com/images.certificates.dev/l3-training-code-challenge-chapter3.gif)
