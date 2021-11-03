# 2021-10-27

## Topics

### Modeling Boxes
- [ ] Setting box width with `box-sizing: border-box;`
- [ ] Spacing out our boxes - `margin` is for outside, `padding` for inside
- [ ] Reset me softly - `* {margin: 0; padding:0; box-sizing: border-box;}`
- [ ] Margins, paddings, width and height

### Containing Content
- [ ] The default box: the `<main>` tag
- [ ] Shrink Wrapping our content: 
  putting everything in a `<main class=""container"">`
- [ ] Changing width and centering: css `width` and `margin: auto`
- [ ] Limiting the height: USE css `height` ONLY in specific situations,
- [ ] Full height content with the `vh` unit

## Overview


### Box model
Every HTML element we put on the page is a box, a 2D rectangle. Its shape and size is controlled by 4 properties:

- `content`: the actual content of an element: could be text, or an image. We can control the content size using the `width` and `height` properties
- `padding`: a gap between the content and the border
- `border`: a line along the perimeter of the element
- `margin`: a space outside of the element, that separates elements from one another

Altogether, these properties make what we call the `box model`

### Box sizing

The `box-sizing` property can have 2 possible values:

- `content-box` (default)
- `border-box` (the one we prefer to use)

For elements with `box-sizing` set to `content-box`, the `border-width` and the `padding` is added on top of the `width`. The `box` below, for example, will have a final width of 142px (100 + 16 + 16 + 5 + 5) on the page. 

```css
.box {
    box-sizing: content-box;
    border: 5px solid tomato;
    height: 100px;
    padding: 16px;
    width: 100px;
}
```


```css
.box {
    box-sizing: border-box;
    border: 5px solid tomato;
    height: 100px;
    padding: 16px;
    width: 100px;
}
```