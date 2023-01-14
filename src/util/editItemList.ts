import { ImageItemType } from "types/item";

export const replaceItemAtIndex = (
  arr: Array<ImageItemType>,
  index: number,
  newValue: ImageItemType
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export const removeItemAtIndex = (arr: Array<ImageItemType>, index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
