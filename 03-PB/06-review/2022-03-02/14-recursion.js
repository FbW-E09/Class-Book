// [[1, 2], [3, 4], [5, 6], [7]] => [1, 2, 3, 4, 5, 6, 7]

// [[1, 2], [3, 4], [5, 6], [7, [8, 9]]] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
// [[1, 2], [3, 4], [5, 6], [7, [8, 9, [10, [11]]]] => [1, 2, 3, 4, 5, 6, 7, 8, 9]

// program to find the factorial of a number
function factorial(x) {
  // if number is 0
  // exit condition
  if (x === 0) {
    return 1;
  }

  // if number is positive
  else {
    return x * factorial(x - 1);
  }
}

// 5 * 4 * 3 * 2 * 1  => 120
console.log(factorial(5));

/**
 * factorial(5)
 *   return 5 * factorial(4)
 *                return 4 * factorial(3)
 *                              return 3 * factorial(2)
 *                                          return 2 * factorial(1)
 *                                                       return 1 * factorial(0)
 *                                                                   return 1     
 *                                                       return 1 * 1
 *                                          return 2 * 1
 *                              return 3 * 2
 *                return 4 * 6
 *   return 5 * 24 
 * return 120
 */