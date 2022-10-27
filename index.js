class SortedList {
  constructor(items = []) {
    this.items = items;
  this.length = this.items.length;
  this.items.sort((a, b) => a - b);
  }

  add(item) {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items)
    }
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    for (i = 0, l = arr.length; i < l; i++) {
      min = Math.min(min, arr[i])
    }return this.items[0]
  }

  sum() {
    let result = 0
    if (this.length === 0) {
      return 0
    } else {
      for (let i = 0; i < this.length; i++ ){
        result += this.items[i]
      }
      return result;
    }
  }

  avg() {
    let result = 0
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      for (let i = 0; i < this.length; i++ ){
        result += this.items[i] / this.length
      }
      return result;
    }
  }
}

module.exports = SortedList;





class SortedList {
  constructor() {
    
  }
  
  add(item) {
    
  }
 
  get(pos) {
    
  }

  max() {}

  min() {
    for (i = 0, l = arr.length; i < l; i++) {
      min = Math.min(min, arr[i])
    }return this.items[0]
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
