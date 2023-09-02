declare global {
  interface Array<T> {
    shiftWithValue(index: number, value: T): T[];
  }
}

Array.prototype.shiftWithValue = function (index: number, value: any) {
  return [...this.slice(0, index), value, ...this.slice(index, this.length)];
};

export {};
