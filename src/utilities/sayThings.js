export function sayThis() {
  console.log('sayThis');
}

export function unusedFn() {
  console.log('this function should be tree shaken');
}
