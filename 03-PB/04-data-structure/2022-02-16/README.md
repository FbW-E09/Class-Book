- brief recap or array methods
- recap of `reduce()`
- sorting arrays with sort()

## Reduce

The `reduce()` array method takes 2 parameters as input:

- a callback (the reducer function)
- an initial value

```js
array.reduce(callback, initialValue)
```

The callback we pass to `reduce()` can take up to 4 different parameters. The first 2 parameters are mandatory, the other 2 are optional:

- previousValue: at every iteration, this will contain the result of the callback at the previous iteration, basically what the callback returned at the previous iteration
    - at the first iteration, this will be equal to the initialValue, if we specified
    - if we didn't specify any initiaValue, this will be equal to the first element of the array
- currentValue: at every iteration this will be equal to an element of the array
- index: the array index of the `currentValue`: it will go from `0` to `array.length - 1`
- array: the whole array on which we are calling `reduce()`

```js
function myCallback(previousValue, currentValue, index, array) {
    // do something
}

array.reduce(myCallback, initialValue)
```