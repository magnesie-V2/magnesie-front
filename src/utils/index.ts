const getPosOrNeg = () => Math.round(Math.random()) * 2 - 1;

const getPositionInBound = (maxPosition: number) =>
  Math.floor(Math.random() * (0.25 * maxPosition)) * getPosOrNeg();

export const getRandomPosition = (maxWidth: number, maxHeight: number) => [
  getPositionInBound(maxWidth),
  getPositionInBound(maxHeight),
  Math.random() * 10 - 5,
];
