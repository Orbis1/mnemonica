const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const randomize = (arr: number[]) => {
  const newArr = arr.slice();
  const replaces = getRandomInt(1, arr.length + 1);
  for (let i = 0; i < replaces; i++) {
    const index = getRandomInt(0, arr.length);
    newArr[index] = newArr[index] === 0 ? 1 : 0; 
  }
  return newArr;
}

export { randomize };