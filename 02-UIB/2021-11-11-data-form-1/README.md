# 2021-11-11

## Topics

- Forms and Dynamic Data
    - Searching - `<form>`, `<input>`
    - Sending forms to a URL - the `action` attribute
    - Importance of names: `<input name=[...]>` attribute, 
    `<label for=[...]>`
    - URL structure & anatomy 
    - HTTP verbs - `GET`, `POST` and the `method` attribute
    - `<form>`, `<fieldset>`, `<legend>`"
- The Wonderful World of Inputs
    - Text inputs: `type="email"`, `type="password"`, `type="search"`
    - Default text - the `placeholder` attribute
    - <checkbox> - the `value` and `checked` attributes
    - Many choices - `type="radio"`, `<select>`, `<option>`
    - <textarea>
    - Set up example with formspree.io
    - `<input type="file">` and using MDN to find more inputs


## Overview

We create a form by wrapping all the input controls that we need inside a `<form>` element.

```html
<form>
    <input type="text" name="first-name">
    <input type="submit">
</form>
```

The `<form>` element two fundamental attributes that we need to use:

- `action`: sets the url that will process our data or the url to which we send our data
- `method`:
  - `post`: normally used when we want to send data
  - `get`: normally used when we want to receive data

### Input types

The most common form control is the `<input>` element. We have different types of inputs, that we can change through the `type` attribute.

Some of the most common ones:

- text
- email
- password
- radio
- checkbox
- submit
- date
- color

Find a complete list here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types

### Name attribute 

Each input field should have a `name` attribute. This is useful when we retrieve and process the data in the backend.

```html
<input type="text" name="first-name">
```

### Labels

Each input field needs to have a label associated with it. We use the element `<label>` to create the label and then we can associate it to a specific input in 2 ways:

#### Using the `for` and `id` attributes

The value of the `for` attribute in the label must match the value of the `id` in the input.
```html
<label for="first-name">First name</label>
<input id="first-name" name="first-name" type="text">
```

#### Wrapping an input field inside the label

```html
<label>
    <input type="checkbox" name="accept-terms" value="yes">
    Accept terms and conditions
</label>
```

## Resources

- [How to style forms](https://blog.logrocket.com/how-to-style-forms-with-css-a-beginners-guide/)