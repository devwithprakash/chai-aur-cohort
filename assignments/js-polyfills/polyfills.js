Array.prototype.myMap = function (fun) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const currentElement = this[i];

    const num = fun(currentElement, i);

    result.push(num);
  }

  return result;
};

String.prototype.capitalize = function () {
  const strArr = this.split(" ");
  const capArr = [];

  for (let i = 0; i < strArr.length; i++) {
    const firstChar = strArr[i].charAt(0).toUpperCase();

    const remChar = strArr[i].slice(1, strArr[i].length);

    const capStr = firstChar + remChar;

    capArr.push(capStr);
  }

  return capArr.join(" ");
};

Array.prototype.myFlat = function () {
  const result = [];

  function fun(arr) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        fun(item);
      } else {
        result.push(item);
      }
    }
  }

  fun(this);

  return result;
};

Array.prototype.myForEach = function (fun) {
  for (let i = 0; i < this.length; i++) {
    const currentElement = this[i];

    fun(currentElement, i);
  }
};

Array.prototype.myReduce = function (fun, currValue) {
  let accumulator = currValue;

  for (let i = 0; i < this.length; i++) {
    const currentElement = this[i];

    const result = fun(accumulator, currentElement, i);

    accumulator = result;
  }

  return accumulator;
};

Array.prototype.myPush = function (element) {
  this[this.length] = element;

  return this.length;
};

Array.prototype.myPop = function () {
  if (this.length === 0) {
    return undefined;
  }

  const lastElement = this[this.length - 1];
  this.length--;

  return lastElement;
};

Array.prototype.myShift = function () {
  if (this.length === 0) {
    return undefined;
  }

  const first = this[0];

  for (let i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }

  this.length--;
  return first;
};

Array.prototype.myUnShift = function (element) {
  const len = this.length;

  for (let i = len; i > 0; i--) {
    this[i] = this[i - 1];
  }

  this[0] = element;
  this.length = len + 1;

  return this.length;
};

Array.prototype.myFilter = function (fun) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const currentElement = this[i];

    if (fun(currentElement, i)) {
      result.push(this[i]);
    }
  }

  return result;
};
