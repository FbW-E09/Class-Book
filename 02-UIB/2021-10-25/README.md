# 2021-10-25

## Topics

- search article on the difference between strong, em, b, i
- search about #top

### Hyperlinks
- [x] Anchoring with `<a>`
- [x] linking pages
- [x] ID linking
- [x] web links
- [x] Sending emails with `mailto:`
### Color in CSS
- [x] Using keywords, RGB, RGBA, hex
- [x] Transparency and opacity
- [x] Combining multiple selectors with `,`
- [x] HSL, HSLA for self study"
### Pseudo Classes
- [x] Introducing state pseudo class
- [x] Coloring links with `:hover`, `:active` and `:visited`
- [x] The importance of state in UI/UX - feedback and predictability 
- [x] Using MDN to locate additional selectors, combinators, elements and rules
### Using Images
- [x] Introducing the `<img>` tag
- [x] Importance of the `alt` attribute
- [x] Absolute and Relative links
- [x] Framing our image with `border`
- [x] Controlling corners with `border-radius`
- [x] `width` and `object-fit` to control the aspect-ratio


## Overview

### Link to a specific section within the same page

```html
<a href="#color-theory">Link to color theory section</a>

...

<h2 id="color-theory">Color theory</h2>
```


### Target a list of selectors in a single CSS rule

```css
h1, h2, h3 {}
.class1, .class2, .class3 {}
h1, .class1 {}
/* 
    - target all h1 elements
    - target all li elements that are descendants of ul elements
*/
h1, ul li {}
```

### Different ways of specifying colors in CSS

- color names (only about 140)
- rgb
- hexadecimal
- hsl

- rgba
- hsla

```css
color: tomato;
color: #123abc;
color: rgb(135, 128, 59);
color: hsl(100, 50%, 75%);

color: rgba(135, 128, 59, 0.6);
color: hsla(100, 50%, 75%, 0.5);
```

### Set the transparency/opacity level of a color

```css
color: rgba(135, 128, 59, 0.6);
color: hsla(100, 50%, 75%, 0.5);
```

### Basics of pseudo-classes

- :hover
- :active
- :visited

Preferred order:
:visited, :hover, :active

```css
a:visited {}
a:hover {}
a:active {}
```

### Add a border to an HTML element

- border-style: solid;
- border-width: 3px;
- border-color: tomato;

Shorthand:
border: 3px solid tomato;

```css
.container {
    border-color: tomato;
    border-style:solid;
    border-width: 3px;
}
.box {
    border: 3px solid tomato;
}
```

### Make elements with rounded corners

```css
.box {
    border-radius: 16px;
}

.box-alt {
    border-radius: 16px 32px;
}
```

### Make a perfect circle 

```css
.circle {
    border-radius: 50%;
}
```

### Set a specific size for an HTML element

```css
.box {
    height: 200px;
    width: 100px;
}
```

### Add an alternative text for images

```html
<img alt="Description of the image" src="giraffe.jpg">
```

### Change the size of a picture while maintaing the original aspect ratio

object-fit:

- contain (will show the whole picture, leaving empty spaces on the sides or on top and bottom)
- cover (will cut part of the picture)

```css
.fit {
    height: 100px;
    object-fit: contain;
    width: 200px;
}

.square {
    height: 100px;
    object-fit: cover;
    width: 100px;
}

.circle {
    border-radius: 50%;
    height: 100px;
    object-fit: cover;
    width: 100px;
}
```

### Position the object-fit image

```css
.circle {
    border-radius: 50%;
    height: 100px;
    object-fit: cover;
    object-position: top;
    width: 100px;
}
```

### Resources

- [HSLA color picker](https://hslpicker.com/)
- [Link pseudo-classes (in order)](https://css-tricks.com/snippets/css/link-pseudo-classes-in-order/) - CSS-tricks article
- Color theory in depth:
  - [RGB HexColors explained](https://www.youtube.com/watch?v=hhI4x6hx21s) - Youtube
  - [Additive vs Subtractive color mixing](https://www.youtube.com/watch?v=Qqv0K0Y7uO8) - Youtube 
  - [Color theory](https://www.youtube.com/watch?v=HeHaZok_dAI) - Youtube