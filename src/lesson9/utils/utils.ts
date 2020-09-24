export const ImageLink = "https://picsum.photos/id";
export const DefaultImageHeight = 800;
export const DefaultImageWidth = 1200;

type GetURLFunction = (id: number, height?: number, width?: number) => string;

export const getUrl: GetURLFunction = (
  id,
  height = DefaultImageHeight,
  width = DefaultImageWidth
) => {
  const goodId = Math.floor(Math.random() * (300 - 200 + id)) + 200;
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
