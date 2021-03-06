const increment = (array) => {
  let i = array.length - 1;
  while (i >= 0) {
    if (array[i] !== 9) {
      array[i]++;
      break;
    } else {
      array[i] = 0;
      if (i === 0) array.splice(i, 0, 1);
    }
    i--;
  }
  return array;
};