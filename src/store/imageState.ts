import { atom, selector } from "recoil";
import { ImageItemType } from "types/item";

export const selectedImageState = atom({
  key: "selectedImageState",
  default: 1
});

export const imageListState = atom({
  key: "recoilImageState",
  default: Array<ImageItemType>()
});

export const recoilImageSelector = selector({
  key: "recoilImageSelector",
  get: ({ get }) => {
    const id = get(selectedImageState);
    const list = get(imageListState);
    return list.filter((item: ImageItemType) => id === item.id)[0];
  }
});
