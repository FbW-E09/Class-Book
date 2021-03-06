# 2021-11-17

## Topics

- flexbox
- flexbox container properties
- flex directions
- wrapping flex items in multiple rows
- changing the order of individual flex items
- aligning items with justify-content and align-items
- aligning flexbox rows with align-content
- align individual flex items
- use `margin: auto;` on flex items

---

## Flexbox

Flexbox is a module of CSS that lets us lay out elements in one dimension:

- in a row
- or in a column

To start using flexbox we simply need to create a container and change its display property to `flex`.

```html
<div class="container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>
```

```css
.container {
    display: flex;
}
```

## Terminology

flex container: the element whose display property is set to `flex`

flex item: every direct children of a flex container becomes automatically a `flex item`

## Flexbox axis

In flexbox there are 2 axis:

- the main axis
- the cross axis

The axis depend a lot on the language writing mode: in western languages, where the text is read horizontally, from left to riht, the `main axis` is the horizontal one, the `cross axis` is the vertical one.

## flex-direction

As mentioned at the beginning, in flexbox we can lay out elements in a row or a column. We control this thorugh the `flex-direction` property. Its possible values are:

- `row` (default)
- `row-reverse`
- `column`
- `column-reverse`

## Alignment

### justify-content

`justify-content` controls the way items are distributed (or aligned) along the `main-axis` by distributing the empty space between them.

- `flex-start` (default)
- `flex-end`
- `center`
- `space-between`
- `space-around`

**IMPORTANT**: we often think as `justify-content` as a way to center items horizontally. This is only true if the `flex-direction` is set to `row` (which is the default value). If we change the direction to `column`, then the `main-axis` will be vertical and so `justify-content` will distribute the elements vertically.


### align-items 

`align-items` controls the way items are aligned on the `cross-axis`.

- `stretch` (stretch)
- `center`
- `flex-start`
- `flex-end`
- `baseline`

### align-content 

`align-content` works only when a flex container wraps over multiple lines. The moment we have more than one line of flex items, this property lets us control the way the empty space between those lines is distributed along the `cross-axis`.

It works the same way as `justify-content`, but for rows of flex items.

- `stretch` (default)
- `flex-start` 
- `flex-end`
- `center`
- `space-between`
- `space-around`

## Resources

- [css-tricks: a guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox MDN page](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [What the flexbox?!](https://flexbox.io/) - great free video course
- [Flexbox Froggy](https://flexboxfroggy.com/) - interactive game
- [Flexbox Zombies](https://mastery.games/flexboxzombies/) - interactive game