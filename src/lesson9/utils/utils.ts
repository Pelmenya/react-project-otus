export const ImageLink = "https://picsum.photos/id";
export const DefaultImageHeight = 800;
export const DefaultImageWidth = 1200;
export const HundredPercent = 100;

type getRandomNumberFromMinToMaxNumbersFunction = (
  min: number,
  max: number,
  parametr?: number
) => number;
type GetURLFunction = (id: number, height?: number, width?: number) => string;
type GetRandomMatrix2DFunction = (
  xSize: number,
  ySize: number,
  fillPercentage: number,
  playerMarks: string
) => Array<Array<string>>;

export const getRandomNumberFromMinToMaxNumbers: getRandomNumberFromMinToMaxNumbersFunction = (
  min: number,
  max: number,
  parametr?: number
) => {
  if (parametr) return Math.floor(Math.random() * (max - min + parametr)) + min;
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getUrl: GetURLFunction = (
  id,
  height = DefaultImageHeight,
  width = DefaultImageWidth
) => {
  const goodId = getRandomNumberFromMinToMaxNumbers(200, 300, id);
  return `${ImageLink}/${goodId}/${width}/${height}`;
};

type GetAsyncURLFunction = (
  id: number,
  height?: number,
  width?: number
) => Promise<string>;

export const getAsyncUrl: GetAsyncURLFunction = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getUrl(id));
    }, 0);
  });
};

export const getRandomMatrix2D: GetRandomMatrix2DFunction = (
  xSize: number,
  ySize: number,
  fillPercentage: number,
  playerMarks: string
) => {
  const fullnessAll = Math.round(
    (fillPercentage * xSize * ySize) / HundredPercent
  );

  let isFull = false;

  if (fillPercentage === 0 || playerMarks === "" || fillPercentage === 100)
    isFull = true;

  let symbol = "";
  if (fillPercentage === 100) symbol = playerMarks;

  let fullness = 0;
  const arr = Array.from({ length: ySize }).map(() =>
    Array.from({ length: xSize }).fill(symbol)
  ) as string[][];
  while (!isFull) {
    const indexY = getRandomNumberFromMinToMaxNumbers(0, ySize);
    const indexX = getRandomNumberFromMinToMaxNumbers(0, xSize);
    if (arr[indexY][indexX] === "") {
      arr[indexY][indexX] = playerMarks;
      fullness += 1;
    }
    if (fullness >= fullnessAll) isFull = true;
  }
  return arr;
};
