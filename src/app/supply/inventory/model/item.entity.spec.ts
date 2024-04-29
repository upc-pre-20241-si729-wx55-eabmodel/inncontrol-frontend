import {Item} from "./item.entity";

describe('ItemEntity', () => {
  it('should create an instance', () => {
    expect(new Item("", "", "", 1)).toBeTruthy();
  });
});
