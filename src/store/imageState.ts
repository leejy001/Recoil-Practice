import { atom, selector } from "recoil";

interface ImageItem {
  id: number;
  title: string;
  url: string;
}

export const selectedImageState = atom({
  key: "selectedImageState",
  default: 1
});

export const imageListState = atom({
  key: "recoilImageState",
  default: Array<ImageItem>()
});

export const recoilImageSelector = selector({
  key: "recoilImageSelector",
  get: ({ get }) => {
    const id = get(selectedImageState);
    const list = get(imageListState);
    return list.filter((item: ImageItem) => id === item.id)[0];
  }
});
