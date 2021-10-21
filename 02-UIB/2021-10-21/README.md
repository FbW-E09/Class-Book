# 2021-10-21


Questions

- how to make a single paragraph look different than others?

- differences between class and id
  - id must be unique withing the same page
  - specifity differences (we'll see this later)


## Topics

- Introducing Style
    - History of Cascading Style Sheets
    - Writing CSS inline, internally and externally
    - Anatomy of a declaration (selector, declaration, property, value)
    - The `<link>` tag
    - Commenting with `\*[comment]*\`"
- Separation of Concerns - content and presentation
    - HTML is for content, CSS is for presentation
    https://en.wikipedia.org/wiki/Separation_of_content_and_presentation"
- Lists: Indentation and Family
    - `<ol>`, `<ul>`, `<li>`
    - Changing presentation with `list-style-type`
    - Descendent combinator
    - Understanding nesting, parent - child relationship
- Classes and IDs
    - Targeting a unique element with the `id` attribute
    - Targeting a group of elements with the `class` attribute
- using browser devtools
- Live Share?
- list-style-type
- target attribute
- nesting HTML elements
- img inside link


### Inline CSS

To write CSS inline we simply add a style attribute to a specific HTML element.

```html
<p style="background-color: tomato; font-size: 18px;">Lorem ipsum...</p>
```

It's easy, but there are more cons than benefits:

1. lot of repetition is created
2. keeping styles consistent is really hard
3. to change a color or a property of multiple elements, one has to change  every single element
4. CSS harder to maintain
5. easier to make errors

### Style tag in `<head>`

An improvement is to write the CSS for our website in the `<style>` tag inside `<head>`.

```html
<head>
    <style>
        p {
            font-size: 18px;
        }
    </style>
</head>
```

It's a much better approach, but it shows its limitations when we have more than one HTML file.

### Separate stylesheet

The best approach normally is to create a separate file containing all the CSS for our website and link to that file from every HTML document.

```css
/* inside the style.css file */
body {
    background: tomato;
}

p {
    font-size: 16px;
}
```

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```


## Target elements with CSS

- type selector (h1, h2, p, div, a ...)
- class selector (.my-class, .special, .important ...)
- id selector (#main-title, #nav)

## CSS Combinator

- descendant combinator (empty space " ")

## Exercises

- https://github.com/FbW-E09/UIB-1021-basic-css
- https://github.com/DigitalCareerInstitute/UIB-content-listmania/tree/master

## Resources

- [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) - MDN page