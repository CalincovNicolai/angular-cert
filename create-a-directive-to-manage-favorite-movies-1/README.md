---
difficulty: 3
training: true
chapter: "Chapter 3: Dependency Injection and Advanced Directives"
tags: angular
---

# Create a directive to manage favorite movies

# Challenge Description

In this challenge, we want to change the `MovieItemComponent` so it doesn't need inputs/outputs to manage favorites anymore.
Instead, we want a `FavoriteDirective` to manage that feature (interacting with `FavoritesService` and toggling the icon CSS class accordingly)
In the end, the star icon HTML should look like this:

```
<span class="icon-star" [appFavorite]="movie()"></span>
```

## Requirements

- Remove the `isFavorite` input and `toggleFavorite` output from `MovieItemComponent`.
- Implement `FavoritesDirective` to handle the favorites styling and toggle feature.
  > 💡 HINT: If you're stuck, take a look at the contents on directives in the self-guided training for the mid-level certification exam.
- Everything else should work just like it did before. The "favorites" feature should still be functional.

## Other Considerations

- If you see the `data-test` attribute anywhere in the boilerplate don't remove it.

## Example of Finished Application

This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

![Finished app in this challenge](https://s3.amazonaws.com/images.certificates.dev/l3-training-code-challenge-chapter3.gif)
