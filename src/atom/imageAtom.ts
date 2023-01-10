import { atom, atomFamily } from "recoil";

const getImage = async (id: number) => {
  return new Promise((res: any) => {
    const url = `https://picsum.photos/id/${id}/200/300`;
    const image = new window.Image();
    image.onload = () =>
      res({
        id,
        name: `Image ${id}`,
        url
      });
    image.src = url;
  });
};

export const imageState = atomFamily({
  key: "imageState",
  default: async (id: number) => getImage(id)
});

export const selectedImageState = atom({
  key: "selectedImageState",
  default: 1
});

export const imageListState = atom({
  key: "imageListState",
  default: [1, 2, 3]
});
