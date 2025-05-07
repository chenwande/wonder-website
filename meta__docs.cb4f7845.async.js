"use strict";(self.webpackChunkwonder=self.webpackChunkwonder||[]).push([[904],{48650:function(a,e,n){n.r(e),n.d(e,{demos:function(){return o}});var r=n(75271),t=n(89690),o={}},41706:function(a,e,n){n.r(e),n.d(e,{demos:function(){return o}});var r=n(75271),t=n(99518),o={}},37421:function(a,e,n){n.r(e),n.d(e,{demos:function(){return o}});var r=n(75271),t=n(61652),o={}},13947:function(a,e,n){n.r(e),n.d(e,{demos:function(){return o}});var r=n(75271),t=n(15656),o={}},27963:function(a,e,n){n.r(e),n.d(e,{demos:function(){return o}});var r=n(75271),t=n(84044),o={}},21043:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var r=n(89690);const t=[]},11769:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var r=n(99518);const t=[{value:"\u51FD\u6570\u67EF\u91CC\u5316\u7684\u662F\u4E00\u4E2A\u4E3A\u591A\u53C2\u51FD\u6570\u5B9E\u73B0\u9012\u5F52\u964D\u89E3\u7684\u65B9\u5F0F\u3002\u5176\u5B9E\u73B0\u7684\u6838\u5FC3\u662F:\u8981\u601D\u8003\u5982\u4F55\u7F13\u5B58\u6BCF\u4E00\u6B21\u4F20\u5165\u7684\u53C2\u6570\u548C\u4F20\u5165\u7684\u53C2\u6570\u548C\u76EE\u6807\u51FD\u6570\u7684\u5165\u53C2\u505A\u6BD4\u8F83\u3002",paraId:0,tocIndex:0},{value:"\u95ED\u5305\u5B9E\u73B0",paraId:1,tocIndex:0},{value:`// \u95ED\u5305\u5B9E\u73B0
const curry = (fn) => {
  let params = [];
  const next = (...args) => {
    params = [...params, ...args];
    if (params.length < fn.length) {
      return next;
    } else {
      return fn.apply(fn, params);
    }
  };
  return next;
};

// \u4F7F\u7528
const sum = (a, b, c, d) => {
  return a + b + c + d;
};
const fn = curry(sum);
const res = fn(1)(2)(3)(4);
console.log(res);
`,paraId:2,tocIndex:0},{value:"map()",paraId:3,tocIndex:2},{value:"\u65B9\u6CD5\u6839\u636E\u56DE\u8C03\u51FD\u6570\u6620\u5C04\u4E00\u4E2A\u65B0\u6570\u7EC4",paraId:3,tocIndex:2},{value:`Array.prototype.map = function (fn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue; // \u5904\u7406\u7A00\u758F\u6570\u7EC4\u7684\u60C5\u51B5
    result.push(fn(this[i], i, this));
  }
  return result;
};

// \u4F7F\u7528
const arr = [1, 2, 3, , 5];
const mapArr = arr.map((item) => item * 2);
console.log(mapArr);
`,paraId:4,tocIndex:2},{value:"filter()",paraId:5,tocIndex:3},{value:"\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8FD4\u56DE\u7684\u6BCF\u4E00\u9879\u662F\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u6267\u884C\u7ED3\u679C true",paraId:5,tocIndex:3},{value:`Array.prototype.filter = function (fn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue; // \u5904\u7406\u7A00\u758F\u6570\u7EC4\u7684\u60C5\u51B5
    fn(this[i], i, this) && result.push(this[i]);
  }
  return result;
};

// \u4F7F\u7528
const arr = [1, 2, 3, , 5];
const filterArr = arr.filter((item) => item > 2);
console.log(filterArr);
`,paraId:6,tocIndex:3},{value:"reduce()",paraId:7,tocIndex:4},{value:"\u65B9\u6CD5\u5FAA\u73AF\u8FED\u4EE3\uFF0C\u56DE\u8C03\u51FD\u6570\u7684\u7ED3\u679C\u90FD\u4F1A\u4F5C\u4E3A\u4E0B\u4E00\u6B21\u7684\u5F62\u53C2\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570",paraId:7,tocIndex:4},{value:`Array.prototype.reduce = function (fn, initValue) {
  let result = initValue ? initValue : this[0];
  for (let i = initValue ? 0 : 1; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue; // \u5904\u7406\u7A00\u758F\u6570\u7EC4\u7684\u60C5\u51B5
    result = fn(result, this[i], i, this);
  }
  return result;
};

// \u4F7F\u7528
const arr = [1, 2, 3, , 5];
const reduceRes = arr.reduce((sum, item) => sum + item);
console.log(reduceRes);
`,paraId:8,tocIndex:4},{value:"every()",paraId:9,tocIndex:5},{value:" \u65B9\u6CD5\u6D4B\u8BD5\u4E00\u4E2A\u6570\u7EC4\u5185\u7684\u6240\u6709\u5143\u7D20\u662F\u5426\u90FD\u80FD\u901A\u8FC7\u67D0\u4E2A\u6307\u5B9A\u51FD\u6570\u7684\u6D4B\u8BD5\u3002\u5B83\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C",paraId:9,tocIndex:5},{value:`Array.prototype.every = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue; // \u5904\u91CC\u7A00\u758F\u6570\u7EC4
    if (!fn(this[i], i, this)) return false;
  }
  return true;
};

// \u4F7F\u7528
const arr = [1, 2, 3, , 5];
const everyRes = arr.every((item) => item > 0);
console.log(everyRes);
`,paraId:10,tocIndex:5},{value:"some()",paraId:11,tocIndex:6},{value:" \u65B9\u6CD5\u6D4B\u8BD5\u6570\u7EC4\u4E2D\u662F\u4E0D\u662F\u81F3\u5C11\u6709 1 \u4E2A\u5143\u7D20\u901A\u8FC7\u4E86\u88AB\u63D0\u4F9B\u7684\u51FD\u6570\u6D4B\u8BD5\u3002\u5B83\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5E03\u5C14\u503C",paraId:11,tocIndex:6},{value:`Array.prototype.some = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue; // \u5904\u91CC\u7A00\u758F\u6570\u7EC4
    if (fn(this[i], i, this)) return true;
  }
  return false;
};

// \u4F7F\u7528
const arr = [1, 2, 3, , 5];
const someRes = arr.some((item) => item > 5);
console.log(someRes);
`,paraId:12,tocIndex:6},{value:"find()",paraId:13,tocIndex:7},{value:" \u65B9\u6CD5\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6EE1\u8DB3\u63D0\u4F9B\u7684\u6D4B\u8BD5\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u503C\u3002\u5426\u5219\u8FD4\u56DE undefined",paraId:13,tocIndex:7},{value:`Array.prototype.find = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue; // \u5904\u91CC\u7A00\u758F\u6570\u7EC4
    if (fn(this[i], i, this)) return this[i];
  }
  return undefined;
};

// \u4F7F\u7528
const arr = [1, 2, 3, , 5];
const findRes = arr.find((item) => item > 2);
console.log(findRes);
`,paraId:14,tocIndex:7},{value:"ES6 \u8BED\u6CD5",paraId:15,tocIndex:8},{value:"flat(num)",paraId:15,tocIndex:8},{value:"reduce+\u9012\u5F52\u65B9\u6CD5",paraId:16,tocIndex:8},{value:`function flattening(arr) {
  if (!Array.isArray(arr)) return;
  return arr.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flattening(b) : b),
    [],
  );
}

const arr1 = [1, [2], [3, [4]], [5, [6, [7]]]];
const arr2 = [];
console.log(flattening(arr1));
`,paraId:17,tocIndex:8},{value:"\u6808\u5B9E\u73B0",paraId:18,tocIndex:8},{value:`function flattening(arr) {
  if (!Array.isArray(arr)) return;
  const stack = [...arr];
  const res = [];
  while (stack.length) {
    const value = stack.shift();
    Array.isArray(value) ? stack.push(...value) : res.push(value);
  }
  return res;
}

const arr1 = [1, [2], [3, [4]], [5, [6, [7]]]];
const arr2 = [];
console.log(flattening(arr1));
`,paraId:19,tocIndex:8},{value:"scroll",paraId:20,tocIndex:9},{value:"\u6EDA\u52A8\u4E8B\u4EF6\u76D1\u542C",paraId:20,tocIndex:9},{value:"getBoundClientRect \u7684\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u76D1\u542C scroll \u4E8B\u4EF6\uFF08\u5EFA\u8BAE\u7ED9\u76D1\u542C\u4E8B\u4EF6\u6DFB\u52A0\u8282\u6D41\uFF09\uFF0C\u56FE\u7247\u52A0\u8F7D\u5B8C\u4F1A\u4ECE img \u6807\u7B7E\u7EC4\u6210\u7684 DOM \u5217\u8868\u4E2D\u5220\u9664\uFF0C\u6700\u540E\u6240\u6709\u7684\u56FE\u7247\u52A0\u8F7D\u5B8C\u6BD5\u540E\u9700\u8981\u89E3\u7ED1\u76D1\u542C\u4E8B\u4EF6",paraId:21,tocIndex:9},{value:`const lazyLoad = function (imgs) {
  let count = 0;
  const deleteImgs = [];
  const handler = () => {
    imgs.forEach((img, index) => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        img.src = dataset.src;
        count++;
        deleteImgs.push(index);
        if (count === imgs.length) {
          document.removeEventListener('scroll', lazyLoad);
        }
      }
    });
    imgs = imgs.filter((_, index) => !deleteImgs.includes(index));
  };
  return handler();
};
`,paraId:22,tocIndex:9},{value:"IntersectionObserver ",paraId:23,tocIndex:9},{value:"\u81EA\u52A8\u89C2\u5BDF",paraId:23,tocIndex:9},{value:"intersectionObserver \u7684\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u5B9E\u4F8B\u5316\u4E00\u4E2A IntersectionObserver \uFF0C\u5E76\u4F7F\u5176\u89C2\u5BDF\u6240\u6709 img \u6807\u7B7E\uFF1B\u5F53 img \u6807\u7B7E\u8FDB\u5165\u53EF\u89C6\u533A\u57DF\u65F6\u4F1A\u6267\u884C\u5B9E\u4F8B\u5316\u65F6\u7684\u56DE\u8C03\uFF0C\u540C\u65F6\u7ED9\u56DE\u8C03\u4F20\u5165\u4E00\u4E2A entries \u53C2\u6570\uFF0C\u6BCF\u5F53\u4E00\u4E2A\u5143\u7D20\u8FDB\u5165\u53EF\u89C6\u533A\u57DF\uFF0C\u5C06\u771F\u6B63\u7684\u56FE\u7247\u8D4B\u503C\u7ED9\u5F53\u524D img \u6807\u7B7E\uFF0C\u540C\u65F6\u89E3\u9664\u5BF9\u5176\u7684\u89C2\u5BDF",paraId:24,tocIndex:9},{value:`const lazyLoad = function (imgs) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.src = dataset.src;
        observer.unobserve(entry.target);
      }
    });
  });
  imgs.forEach((img) => observer.observe(img));
};
`,paraId:25,tocIndex:9},{value:"\u540C\u4E00\u4E8B\u4EF6\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u591A\u6B21\u89E6\u53D1\uFF0C\u53EA\u6267\u884C\u7B2C\u4E00\u6B21\u89E6\u53D1\u7684\u4E8B\u4EF6",paraId:26,tocIndex:11},{value:`// \u7B2C\u4E00\u6B21\u6267\u884C
function throttle(fn, time) {
  let preTime = 0;
  function throttleFn(...args) {
    const nowTime = new Date();
    if (nowTime - preTime > time) {
      fn.apply(this, args);
      preTime = nowTime;
    }
  }
  return throttleFn;
}

// \u5EF6\u8FDF\u540E\u6267\u884C
function throttle(fn, time) {
  let timer = null;
  function throttleFn(...args) {
    const context = this;
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(context, args);
      timer = null;
    }, time);
  }
  return throttleFn;
}

// sleep\u51FD\u6570
const sleep = async (delay) => {
  return new Promise((resole) => {
    setTimeout(resole, delay);
  });
};

// \u6D4B\u8BD5
const f = throttle((count) => console.log(count), 2000);
(async function () {
  f(1); // \u6267\u884C
  await sleep(1000);
  f(2); // 1000 < 2000 \u4E0D\u6267\u884C
  await sleep(2000);
  f(3); // 1000 + 2000 > 2000 \u6267\u884C
  await sleep(1500);
  f(4); // 1500 < 2000 \u4E0D\u6267\u884C
  await sleep(1000);
  f(5); // 1000 + 1500 > 2000 \u6267\u884C
})();
`,paraId:27,tocIndex:11},{value:"\u540C\u4E00\u4E8B\u4EF6\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u591A\u6B21\u89E6\u53D1\uFF0C\u540E\u89E6\u53D1\u7684\u4E8B\u4EF6\u8986\u76D6\u4E4B\u524D\u7684\u4E8B\u4EF6\uFF0C\u91CD\u65B0\u8BA1\u65F6",paraId:28,tocIndex:12},{value:`// \u9632\u6296
function debounce(fn, delay) {
  let timer = null;
  function debounceFn(...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
  return debounceFn;
}

// sleep\u51FD\u6570
const sleep = async (delay) => {
  return new Promise((resole) => {
    setTimeout(resole, delay);
  });
};

// \u6D4B\u8BD5
const f = debounce((count) => console.log(count), 2000);
(async function () {
  f(1);
  await sleep(1000);
  f(2); // 1000 < 2000 \u8986\u76D6\u91CD\u65B0\u8BA1\u65F6
  await sleep(3000);
  f(3); // 3000 > 2000 \u4E0A\u4E00\u6B21\u53EF\u6267\u884C\uFF0C\u6253\u53702
  await sleep(1500);
  f(4); // 1500 < 2000 \u8986\u76D6\u91CD\u65B0\u8BA1\u65F6
  await sleep(2500);
  f(5); // 2500 > 2000 \u4E0A\u4E00\u6B21\u53EF\u6267\u884C\uFF0C\u6253\u53704\uFF0C\u672C\u6B21\u6267\u884C\u6253\u53705
})();
`,paraId:29,tocIndex:12},{value:"\u5EF6\u4F38\u5230\u4F7F\u7528 react \u7684 useEffect \u5B9E\u73B0\u4E00\u4E2A\u9632\u6296\u7684 hook",paraId:30,tocIndex:12},{value:`// \u9632\u6296
function debounce(fn, delay) {
  let timer = null;
  function debounceFn(...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
  return debounceFn;
}

// sleep\u51FD\u6570
const sleep = async (delay) => {
  return new Promise((resole) => {
    setTimeout(resole, delay);
  });
};

// \u6D4B\u8BD5
const f = debounce((count) => console.log(count), 2000);
(async function () {
  f(1);
  await sleep(1000);
  f(2); // 1000 < 2000 \u8986\u76D6\u91CD\u65B0\u8BA1\u65F6
  await sleep(3000);
  f(3); // 3000 > 2000 \u4E0A\u4E00\u6B21\u53EF\u6267\u884C\uFF0C\u6253\u53702
  await sleep(1500);
  f(4); // 1500 < 2000 \u8986\u76D6\u91CD\u65B0\u8BA1\u65F6
  await sleep(2500);
  f(5); // 2500 > 2000 \u4E0A\u4E00\u6B21\u53EF\u6267\u884C\uFF0C\u6253\u53704\uFF0C\u672C\u6B21\u6267\u884C\u6253\u53705
})();

// useDebounce
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
};
`,paraId:31,tocIndex:12},{value:`const myNew = (...args) => {
  const [fn, ...other] = args;
  // const obj = {};
  // obj.__proto__ = fn.prototype;
  const obj = Object.create(fn.prototype);
  const res = fn.apply(obj, other);
  return res instanceof Object ? res : obj;
};
`,paraId:32,tocIndex:13},{value:"instanceof \u8FD0\u7B97\u7B26\u7528\u4E8E\u68C0\u6D4B\u6784\u9020\u51FD\u6570\u7684 ",paraId:33,tocIndex:14},{value:"prototype",paraId:33,tocIndex:14},{value:" \u5C5E\u6027\u662F\u5426\u51FA\u73B0\u5728\u67D0\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A\u3002",paraId:33,tocIndex:14},{value:`const myInstanceof = (left, right) => {
  if (!left && !right) return;
  let proto = Object.getPrototypeOf(left);
  while (proto) {
    if (proto === right.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
};

const obj = [];
console.log(myInstanceof(obj, Object));
console.log(myInstanceof(obj, Array));
console.log(myInstanceof(obj, Function));
`,paraId:34,tocIndex:14},{value:`const type = (function () {
  const type = Object.create(null);
  const typeArr = [
    'String',
    'Number',
    'Object',
    'Array',
    'Null',
    'Undefined',
    'Boolean',
  ];
  typeArr.forEach((item) => {
    type[\`is\${item}\`] = function (args) {
      return Object.prototype.toString.call(args) === \`[object \${item}]\`;
    };
  });
  return type;
})();

console.log(type.isArray([]));
console.log(type.isArray({}));
console.log(type.isArray(12));
`,paraId:35,tocIndex:15},{value:`// \u624B\u5199Promise
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function resolvePromise(x, promise, resolve, reject) {
  if (x === promise) {
    return reject(
      new TypeError('Chaining cycle detected for promise #<Promise>'),
    );
  }
  if (x instanceof MyPromise) {
    x.then(resolve, reject);
  } else {
    resolve(x);
  }
}

class MyPromise {
  constructor(execute) {
    this.statue = PENDING;
    this.value = null;
    this.reason = null;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      execute(this.resolve, this.reject);
    } catch (e) {
      this.reject(e);
    }
  }
  resolve = (value) => {
    if (this.statue === PENDING) {
      this.statue = FULFILLED;
      this.value = value;
      while (this.onResolvedCallbacks.length) {
        this.onResolvedCallbacks.shift()(this.value);
      }
    }
  };
  reject = (reason) => {
    if (this.statue === PENDING) {
      this.statue = REJECTED;
      this.reason = reason;
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(this.reason);
      }
    }
  };
  then(onResolve, onReject) {
    const realOnResolve =
      typeof onResolve === 'function' ? onResolve : (value) => value;
    const realOnReject =
      typeof onReject === 'function'
        ? onReject
        : (reason) => {
            throw reason;
          };
    const newPromise = new MyPromise((resolve, reject) => {
      const resolvedMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnResolve(this.value);
            resolvePromise(x, newPromise, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      };
      const rejectedMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnReject(this.reason);
            resolvePromise(x, newPromise, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      };
      if (this.statue === FULFILLED) {
        resolvedMicrotask();
      } else if (this.statue === REJECTED) {
        rejectedMicrotask();
      } else if (this.statue === PENDING) {
        this.onResolvedCallbacks.push(resolvedMicrotask);
        this.onRejectedCallbacks.push(rejectedMicrotask);
      }
    });
    return newPromise;
  }
}

// \u6D4B\u8BD5
// const p = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('666')
//   }, 3000);
//   setTimeout(() => {
//     reject('999')
//   }, 2000)
// })

// p.then(res => {
//   console.log('success1', res);
//   return res;
// }, err => {
//   console.log('error1', err);
//   return err;
// }).then(res => {
//   console.log('success2', res);
//   return res;
// }, err => {
//   console.log('error2', err);
//   return err;
// }).then(res => {
//   console.log('success3', res);
//   return res;
// }, err => {
//   console.log('error3', err);
//   return err;
// })

const promise = new MyPromise((resolve, reject) => {
  resolve('success');
});

// \u8FD9\u4E2A\u65F6\u5019\u5C06promise\u5B9A\u4E49\u4E00\u4E2Ap1\uFF0C\u7136\u540E\u8FD4\u56DE\u7684\u65F6\u5019\u8FD4\u56DEp1\u8FD9\u4E2Apromise
const p1 = promise.then((value) => {
  console.log(1);
  console.log('resolve', value);
  return p1;
});

// \u8FD0\u884C\u7684\u65F6\u5019\u4F1A\u8D70reject
p1.then(
  (value) => {
    console.log(2);
    console.log('resolve', value);
  },
  (reason) => {
    console.log(3);
    console.log(reason.message);
  },
);
`,paraId:36,tocIndex:16},{value:`// Promise.all\u65B9\u6CD5
Promise.prototype._all = function (promiseList) {
  const result = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseList.length; i++) {
      const promise = promiseList[i]();
      promise.then(
        (res) => {
          result.push(res);
          if (result.length === promiseList.length) {
            resolve(result);
          }
        },
        (err) => {
          return reject(err);
        },
      );
    }
  });
};

// Promise.race\u65B9\u6CD5
Promise.prototype._race = function (promiseList) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseList.length; i++) {
      const promise = promiseList[i]();
      promise.then(
        (res) => {
          return resolve(res);
        },
        (err) => {
          return reject(err);
        },
      );
    }
  });
};

// Promise.finally\u65B9\u6CD5
Promise.prototype._finally = function (fn) {
  return this.then((res) => {
    Promise.resolve(fn()).then(
      () => {
        return res;
      },
      (err) => {
        Promise.reject(fn()).then(() => {
          throw err;
        });
      },
    );
  });
};
`,paraId:37,tocIndex:16},{value:"\u5355\u4F8B\u6A21\u5F0F\uFF1A\u4FDD\u8BC1\u4E00\u4E2A\u7C7B\u4EC5\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A\u8BBF\u95EE\u5B83\u7684\u5168\u5C40\u8BBF\u95EE\u70B9\u3002\u5B9E\u73B0\u65B9\u6CD5\u4E00\u822C\u662F\u5148\u5224\u65AD\u5B9E\u4F8B\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u5B58\u5728\u76F4\u63A5\u8FD4\u56DE\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5C31\u5148\u521B\u5EFA\u518D\u8FD4\u56DE\u3002",paraId:38,tocIndex:17},{value:`// \u95ED\u5305\u5B9E\u73B0
const getSingle = function (fn) {
  let result;
  return function () {
    return result || (result = fn.apply(this, arguments));
  };
};

// \u4F7F\u7528Proxy\u62E6\u622A
const proxy = function (fn) {
  let result;
  const handler = {
    construct: function () {
      if (!result) {
        result = Reflect.construct(fn, arguments);
      }
      return result;
    },
  };
  return new Proxy(fn, handler);
};
`,paraId:39,tocIndex:17},{value:"Object.create()\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u4F7F\u7528\u73B0\u6709\u7684\u5BF9\u8C61\u6765\u63D0\u4F9B\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\u7684",paraId:40,tocIndex:18},{value:"proto",paraId:40,tocIndex:18},{value:"\u3002",paraId:40,tocIndex:18},{value:`Object.prototype._create = function (obj) {
  function F() {}
  F.prototype = obj;
  return new F();
};
`,paraId:41,tocIndex:18},{value:"\u65E0\u9700\u6BCF\u6B21\u4F7F\u7528 async/await \u90FD\u5305\u88F9\u4E00\u5C42 try/catch",paraId:42,tocIndex:19},{value:`async function errorCaptured(fn) {
  try {
    const res = await fn();
    return [null, res];
  } catch (e) {
    return [e, null];
  }
}

// \u4F7F\u7528
const [err, res] = await errorCaptured(asyncFn);
`,paraId:43,tocIndex:19},{value:"\u901A\u8FC7 on \u65B9\u6CD5\u6CE8\u518C\u4E8B\u4EF6\uFF0Ctrigger \u65B9\u6CD5\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u6765\u8FBE\u5230\u4E8B\u4EF6\u4E4B\u95F4\u7684\u677E\u6563\u89E3\u8026\uFF0C\u5E76\u4E14\u989D\u5916\u6DFB\u52A0\u4E86 once \u548C off \u8F85\u52A9\u51FD\u6570\u7528\u4E8E\u6CE8\u518C\u53EA\u89E6\u53D1\u4E00\u6B21\u7684\u4E8B\u4EF6\u4EE5\u53CA\u6CE8\u9500\u4E8B\u4EF6",paraId:44,tocIndex:20},{value:`class EventEmitter {
  constructor() {
    this.subs = {};
  }
  on(event, cb) {
    (this.subs[event] || (this.subs[event] = [])).push(cb);
  }
  trigger(event, ...args) {
    this.subs[event] &&
      this.subs[event].forEach((cb) => {
        cb(...args);
      });
  }
  off(event, offCb) {
    if (this.subs[event]) {
      const index = this.subs[event].findIndex((cb) => cb === offCb);
      this.subs[event].splice(index, 1);
      if (!this.subs[event].length) delete this.subs[event];
    }
  }
  once(event, onceCb) {
    const cb = (...args) => {
      onceCb(...args);
      this.off(event, onceCb);
    };
    this.on(event, cb);
  }
}
`,paraId:45,tocIndex:20},{value:"reactive",paraId:46,tocIndex:21},{value:"\u63A5\u53D7\u4E00\u4E2A\u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5176\u8FD4\u56DE\u503C\u662F\u7ECF",paraId:46,tocIndex:21},{value:"reactive",paraId:46,tocIndex:21},{value:"\u51FD\u6570\u5305\u88C5\u8FC7\u540E\u7684\u6570\u636E\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5177\u6709\u54CD\u5E94\u5F0F",paraId:46,tocIndex:21},{value:`const targetMap = new WeakMap();
const effectStack = [];

const isObject = (value) => {
  const type = typeof value;
  return value != null && (type == 'object' || type == 'function');
};

const reactive = (obj) => {
  if (!isObject(obj)) return obj;
  const get = (target, key) => {
    track(target, key);
    const res = Reflect.get(target, key);
    return reactive(res);
  };
  const set = (target, key, value) => {
    trigger(target, key);
    return Reflect.set(target, key, value);
  };
  return new Proxy(obj, {
    get,
    set,
  });
};

// \u6536\u96C6\u4F9D\u8D56
const track = (target, key) => {
  const activeEffect = effectStack[effectStack.length - 1];
  if (!activeEffect) return;
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  let deps = depsMap.get(key);
  if (!deps) {
    depsMap.set(key, (deps = []));
  }
  deps.push(activeEffect);
};

// \u89E6\u53D1\u4FEE\u6539\u5C5E\u6027\u7684\u56DE\u8C03\u51FD\u6570
const trigger = (target, key) => {
  const deps = targetMap?.get(target)?.get(key);
  deps && deps.forEach((dep) => dep());
};

// \u76D1\u542C\u51FD\u6570\uFF0C\u5F53fn\u5185\u7528\u5230\u7684\u5BF9\u8C61\u5C5E\u6027\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1\u6267\u884Cfn
const effect = (fn) => {
  try {
    effectStack.push(fn);
    fn(); // \u9996\u6B21\u6267\u884C\u6536\u96C6\u4F9D\u8D56
  } finally {
    effectStack.pop();
  }
};

// \u6D4B\u8BD5
let obj = reactive({ a: 1, b: { c: 3 } });
effect(() => {
  console.log(obj.a);
  console.log(obj.b.c);
  console.log('----------');
});
setInterval(() => {
  obj.a++;
  obj.b.c++;
}, 1000);
`,paraId:47,tocIndex:21},{value:`let activeEffect = null;
const useState = (value) => {
  const fns = new Set();
  const getter = () => {
    if (activeEffect) {
      fns.add(activeEffect);
    }
    return value;
  };
  const setter = (newValue) => {
    value = newValue;
    for (const fn of [...fns]) {
      fn();
    }
  };
  return [getter, setter];
};

const useEffect = (fn) => {
  activeEffect = fn;
  try {
    fn();
  } finally {
    activeEffect = null;
  }
};

// \u81EA\u52A8\u6536\u96C6\u4F9D\u8D56\u7684useMemo
const useMemo = (callback) => {
  const [s, set] = useState();
  useEffect(() => set(callback()));
  return s;
};

// \u6D4B\u8BD5useEffect\u548CuseState
const [name1, setName1] = useState('1');
const [name2, setName2] = useState('a');
useEffect(() => {
  console.log('name1: ' + name1());
  console.log('name2: ' + name2());
});
setName1('666');
setName2('aaaa');

// \u6D4B\u8BD5useMemo
const [name1, setName1] = useState('KaSong');
const [name2, setName2] = useState('XiaoMing');
const [showAll, triggerShowAll] = useState(true);

const whoIsHere = useMemo(() => {
  if (!showAll()) {
    return name1();
  }
  return \`\${name1()} \u548C \${name2()}\`;
});

useEffect(() => console.log('\u8C01\u5728\u90A3\u513F\uFF01', whoIsHere()));
`,paraId:48,tocIndex:22},{value:"\u524D\u7AEF\u8FDB\u9636\u4E4B\u5FC5\u4F1A\u7684 JavaScript \u6280\u5DE7\u603B\u7ED3",paraId:49,tocIndex:23},{value:"\u4E00\u4E2A\u5408\u683C\u7684\u4E2D\u7EA7\u524D\u7AEF\u5DE5\u7A0B\u5E08\u9700\u8981\u638C\u63E1\u7684 28 \u4E2A JavaScript \u6280\u5DE7",paraId:50,tocIndex:23}]},46445:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var r=n(61652);const t=[{value:"TypeScript \u662F \u201C\u5F3A\u7C7B\u578B\u201D \u7248\u7684 JavaScript\uFF0C\u5F53\u6211\u4EEC\u5728\u4EE3\u7801\u4E2D\u5B9A\u4E49\u53D8\u91CF (\u5305\u62EC\u666E\u901A\u53D8\u91CF\u3001\u51FD\u6570\u3001\u7EC4\u4EF6\u3001hook \u7B49) \u7684\u65F6\u5019\uFF0CTypeScript \u5141\u8BB8\u6211\u4EEC\u5728\u5B9A\u4E49\u7684\u540C\u65F6\u6307\u5B9A\u5176\u7C7B\u578B\uFF0C\u8FD9\u6837\u4F7F\u7528\u8005\u5728\u4F7F\u7528\u4E0D\u5F53\u7684\u65F6\u5019\u5C31\u4F1A\u88AB\u53CA\u65F6\u62A5\u9519\u63D0\u9192\uFF1A",paraId:0,tocIndex:0},{value:`interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps['param']) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {};
`,paraId:1,tocIndex:0},{value:"\u6BD4\u8D77\u539F\u6765\u7684 JavaScript\uFF0CTypeScript \u5E26\u6765\u4E86\u5B8C\u5168\u4E0D\u4E00\u6837\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0Cbug \u5927\u5927\u51CF\u5C11\u4E86\uFF0C\u7F16\u8F91\u5668\u63D0\u793A\u5FEB\u4E86\uFF0C\u4EE3\u7801\u66F4\u6613\u8BFB\u4E86\uFF0C \u5F00\u53D1\u901F\u5EA6\u5FEB\u4E86\uFF08\u770B\u4F3C\u591A\u5199\u4EE3\u7801\uFF0C\u5176\u5B9E\u7531\u4E8E\u524D\u9762\u51E0\u70B9\u8282\u7701\u4E86\u5927\u91CF\u5F00\u53D1\u65F6\u95F4\uFF09\u3002",paraId:2,tocIndex:0},{value:"ts \u4E2D\u5E38\u7528\u7684 8 \u79CD\u7C7B\u578B\uFF1A number, string, boolean, \u51FD\u6570\uFF0Carray, any, void, object",paraId:3,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"\u6570\u5B57\u7C7B\u578B\uFF0C\u5305\u542B\u5C0F\u6570\u3001\u5176\u4ED6\u8FDB\u5236\u7684\u6570\u5B57\uFF1A",paraId:5,tocIndex:1},{value:`let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
`,paraId:6,tocIndex:1},{value:"string",paraId:7,tocIndex:1},{value:"\u5B57\u7B26\u4E32",paraId:8,tocIndex:1},{value:`let color: string = 'blue';
`,paraId:9,tocIndex:1},{value:"array",paraId:10,tocIndex:1},{value:"\u5728 TS \u4E2D\uFF0Carray \u4E00\u822C\u6307\u6240\u6709\u5143\u7D20\u7C7B\u578B\u76F8\u540C\u7684\u503C\u7684\u96C6\u5408\uFF0C\u6BD4\u5982\uFF1A",paraId:11,tocIndex:1},{value:`let list: Array<number> = [1, 2, 3];

// or

interface User {
  name: string;
}
const john = { name: 'john' };
const jack = { name: 'jack' };
let personList = [john, jack]; // \u8FD9\u91CC john \u548C jack \u90FD\u662F User \u7C7B\u578B\u7684
`,paraId:12,tocIndex:1},{value:"\u548C\u8FD9\u79CD\u6DF7\u5408\u7C7B\u578B\u7684 \u201C\u6570\u7EC4\u201D\uFF1A",paraId:13,tocIndex:1},{value:`let l = ['jack', 10];
`,paraId:14,tocIndex:1},{value:"\u5728 TS \u4E2D\u4E0D\u662F \u6570\u7EC4 /array\uFF0C\u5B83\u4EEC\u53EB\u4F5C tuple\uFF0C\u4E0B\u9762\u4F1A\u63D0\u5230\u3002",paraId:15,tocIndex:1},{value:"boolean",paraId:16,tocIndex:1},{value:"\u5E03\u5C14\u503C\uFF1A",paraId:17,tocIndex:1},{value:`let isDone: boolean = false;
`,paraId:18,tocIndex:1},{value:"\u51FD\u6570",paraId:19,tocIndex:1},{value:`\u4E24\u79CD\u65B9\u6CD5\uFF1A
\u5728\u6211\u4EEC\u719F\u6089\u7684 \u201CJS \u51FD\u6570\u201D \u4E0A\u76F4\u63A5\u58F0\u660E\u53C2\u6570\u548C\u8FD4\u56DE\u503C\uFF1A`,paraId:20,tocIndex:1},{value:`const isFalsy = (value: any): boolean => {
  return value === 0 ? false : !value;
};
`,paraId:21,tocIndex:1},{value:"\u76F4\u63A5\u58F0\u660E\u4F60\u60F3\u8981\u7684\u51FD\u6570\u7C7B\u578B\uFF1A",paraId:22,tocIndex:1},{value:`export const useMount = (fn: () => void) => {
  useEffect(() => {
    fn();
  }, []);
};

const isFalsy: (value: any) => boolean = (value) => {
  return value === 0 ? true : !!value;
};
`,paraId:23,tocIndex:1},{value:"any",paraId:24,tocIndex:1},{value:"any \u8868\u793A\u8FD9\u4E2A\u503C\u53EF\u4EE5\u662F\u4EFB\u4F55\u503C\uFF0C\u88AB\u5B9A\u4E49\u4E3A any \u5C31\u610F\u5473\u7740\u4E0D\u505A\u4EFB\u4F55\u7C7B\u578B\u68C0\u67E5\uFF1A",paraId:25,tocIndex:1},{value:`let looselyTyped: any = 4;
// looselyTyped \u7684\u503C\u660E\u660E\u662F\u4E2A4\uFF0C\u54EA\u91CC\u6765\u7684ifItExists\u65B9\u6CD5\u5462\uFF1F
// \u7531\u4E8E\u58F0\u660E\u4E3Aany\uFF0C\u6211\u4EEC\u6CA1\u6CD5\u5728\u9759\u6001\u68C0\u67E5\u9636\u6BB5\u53D1\u73B0\u8FD9\u4E2A\u9519\u8BEF
looselyTyped.ifItExists();
`,paraId:26,tocIndex:1},{value:"\u4E3A\u4E86\u8BA9 TS \u4E0D\u518D\u62A5\u9519\u800C\u4F7F\u7528\u5F88\u591A any\uFF0C\u8FD9\u6837\u505A\u4F1A\u5931 \u53BB TS \u7684\u4FDD\u62A4\u3002\u5E94\u8BE5\u5C3D\u91CF\u907F\u514D\u4F7F\u7528 any",paraId:27,tocIndex:1},{value:"void",paraId:28,tocIndex:1},{value:"\u7EDD\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u53EA\u4F1A\u7528\u5728\u8FD9\u4E00\u4E2A\u5730\u65B9\uFF1A\u8868\u793A\u51FD\u6570\u4E0D\u8FD4\u56DE\u4EFB\u4F55\u503C\u6216\u8005\u8FD4\u56DE undefined (\u56E0\u4E3A\u51FD\u6570\u4E0D\u8FD4\u56DE\u4EFB\u4F55\u503C\u7684\u65F6\u5019 === \u8FD4\u56DE undefined)",paraId:29,tocIndex:1},{value:`/**
 * \u4E0A\u8282\u8BFE\u5199\u7684 useMount
 */
export const useMount = (fn: () => void) => {
  useEffect(() => {
    fn();
  }, []);
};
`,paraId:30,tocIndex:1},{value:"object",paraId:31,tocIndex:1},{value:"\u9664\u4E86 number, string, boolean, bigint, symbol, null, or undefined\uFF0C\u5176\u4ED6\u90FD\u662F object\u3002",paraId:32,tocIndex:1},{value:"\u4E0B\u9762\u662F\u5176\u4ED6 TS \u7C7B\u578B\u3002",paraId:33,tocIndex:1},{value:"tuple",paraId:34,tocIndex:1},{value:"\u4E00\u4E2A\u5178\u578B\u7684 tuple\uFF1A",paraId:35,tocIndex:1},{value:`const [users, setUsers] = useState([]);
`,paraId:36,tocIndex:1},{value:"tuple \u662F \u201C\u6570\u91CF\u56FA\u5B9A\uFF0C\u7C7B\u578B\u53EF\u4EE5\u5404\u5F02\u201D \u7248\u7684\u6570\u7EC4\u3002",paraId:37,tocIndex:1},{value:"\u5728 React \u4E2D\u6709\u53EF\u80FD\u4F7F\u7528 tuple \u7684\u5730\u65B9\u5C31\u662F custom hook \u7684\u8FD4\u56DE\u503C\uFF0C\u6CE8\u610F isHappy \u2192 tomIsHappy \u4EE5\u53CA\u5176\u4ED6\u540D\u5B57\u7684\u53D8\u5316\uFF0C\u8FD9\u91CC\u4F7F\u7528 tuple \u7684\u597D\u5904\u5C31\u663E\u73B0\u51FA\u6765\u4E86\uFF1A\u4FBF\u4E8E\u4F7F\u7528\u8005\u91CD\u547D\u540D\uFF1A",paraId:38,tocIndex:1},{value:`const useHappy = () => {
  //....
  return [isHappy, makeHappy, makeUnHappy];
};

const SomeComponent = () => {
  const [tomIsHappy, makeTomHappy, makeTomUnHappy] = useHappy(false);
  // ...
};
`,paraId:39,tocIndex:1},{value:"enum",paraId:40,tocIndex:1},{value:`enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
`,paraId:41,tocIndex:1},{value:"null \u548C undefined",paraId:42,tocIndex:1},{value:"null \u548C undefined \u5728 TypeScript \u4E2D\u65E2\u662F\u4E00\u4E2A\u503C\uFF0C\u4E5F\u662F\u4E00\u4E2A\u7C7B\u578B\uFF1A",paraId:43,tocIndex:1},{value:`let u: undefined = undefined;
let n: null = null;
`,paraId:44,tocIndex:1},{value:"unknown",paraId:45,tocIndex:1},{value:"unknown \u8868\u793A\u8FD9\u4E2A\u503C\u53EF\u4EE5\u662F\u4EFB\u4F55\u503C\u3002",paraId:46,tocIndex:1},{value:"\u2753\u2753\u2753\u2753\u2753\u2753",paraId:47,tocIndex:1},{value:"\u8FD9\u53E5\u8BDD\u600E\u4E48\u8FD9\u4E48\u719F\u6089\uFF0C\u521A\u624D\u662F\u4E0D\u662F\u7528\u6765\u5F62\u5BB9 any \u7684\uFF1F",paraId:48,tocIndex:1},{value:'unknown \u7684\u7528\u6CD5\uFF1A\u5728\u4F60\u60F3\u7528 any \u7684\u65F6\u5019\uFF0C\u7528 unknown \u6765\u4EE3\u66FF\uFF0C\u7B80 \u5355\u6765\u8BF4\uFF0Cunknown \u662F\u4E00\u4E2A "\u4E25\u683C" \u7248\u7684 any\u3002',paraId:49,tocIndex:1},{value:`const isFalsy = (value: unknown) => {
  // \u5927\u5BB6\u4E0D\u7528\u8003\u8651\u8FD9\u6BB5console\u6709\u5565\u610F\u4E49\uFF0C\u628A\u5B83\u6253\u5728\u4F60\u7684\u4EE3\u7801\u91CC\u5BF9\u5E94\u7684  \u4F4D \u7F6E\uFF0C\u89C2\u5BDF\u7F16\u8F91\u5668\u4F1A\u4E0D\u4F1A\u62A5\u9519\uFF1B
  // \u518D\u601D\u8003\u5B83\u5E94\u4E0D\u5E94\u8BE5\u62A5\u9519
  console.log(value.mayNotExist);
  return value === 0 ? true : !!value;
};
`,paraId:50,tocIndex:1},{value:"never",paraId:51,tocIndex:1},{value:`// \u8FD9\u4E2A func\u8FD4\u56DE\u7684\u5C31\u662Fnever\u7C7B\u578B\uFF0C\u7528\u5230\u6BD4\u8F83\u5C11\uFF0C\u5728\u7C7B\u578B\u64CD\u4F5C\u7B49\u573A\u666F\u4F1A \u7528\u5230
const func = () => {
  throw new Error();
};
`,paraId:52,tocIndex:1},{value:"interface",paraId:53,tocIndex:1},{value:"interface \u4E0D\u662F\u4E00\u79CD\u7C7B\u578B\uFF0C\u5E94\u8BE5\u88AB\u7FFB\u8BD1\u6210\u63A5\u53E3\uFF0C\u6216\u8005\u8BF4\u4F7F\u7528\u4E0A\u9762\u4ECB\u7ECD\u7684 \u7C7B\u578B\uFF0C\u521B\u5EFA\u4E00\u4E2A\u6211\u4EEC\u81EA\u5DF1\u7684\u7C7B\u578B\uFF1A",paraId:54,tocIndex:1},{value:`interface User {
  id: number;
}
const u: User = { id: 1 };
`,paraId:55,tocIndex:1},{value:"\u5565\u65F6\u5019\u9700\u8981\u58F0\u660E\u7C7B\u578B",paraId:56,tocIndex:1},{value:"\u7406\u8BBA\u4E0A\u6765\u8BF4\u5728\u6211\u4EEC\u58F0\u660E\u4EFB\u4F55\u53D8\u91CF\u7684\u65F6\u5019\u90FD\u9700\u8981\u58F0\u660E\u7C7B\u578B\uFF08\u5305\u62EC\u666E\u901A\u53D8\u91CF\u3001\u51FD\u6570\u3001\u7EC4\u4EF6\u3001hook \u7B49\u7B49\uFF09\uFF0C\u58F0\u660E \u51FD\u6570\u3001\u7EC4\u4EF6\u3001hook \u7B49\u9700\u8981\u58F0\u660E\u53C2\u6570 \u548C \u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u3002",paraId:57,tocIndex:1},{value:"\u4F46\u662F\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\uFF0CTS \u53EF\u4EE5\u5E2E\u6211\u4EEC\u81EA\u52A8\u63A8\u65AD\uFF0C\u6211\u4EEC\u5C31\u4E0D\u7528\u58F0\u660E\u4E86\uFF0C\u6BD4\u5982\uFF1A",paraId:58,tocIndex:1},{value:`// \u8FD9\u91CC\u867D\u7136\u6CA1\u6709\u663E\u5F0F\u58F0\u660E\uFF0C\u4F46\u662Fts\u81EA\u52A8\u63A8\u65AD\u8FD9\u662F\u4E2Anumber
let a = 1;

// \u81EA\u52A8\u63A8\u65AD\u8FD4\u56DE\u503C\u4E3Anumber
function add(a: number, b: number) {
  return a + b;
}

// \u81EA\u52A8\u63A8\u65AD\u8FD4\u56DE\u503C\u4E3Aboolean
const isFalsy = (value: unknown) => {
  return value === 0 ? true : !!value;
};
`,paraId:59,tocIndex:1},{value:".d.ts",paraId:60,tocIndex:1},{value:"JS \u6587\u4EF6 + .d.ts \u6587\u4EF6 === ts \u6587\u4EF6\u3002",paraId:61,tocIndex:1},{value:".d.ts \u6587\u4EF6\u53EF\u4EE5\u8BA9 JS \u6587\u4EF6\u7EE7\u7EED\u7EF4\u6301\u81EA\u5DF1 JS \u6587\u4EF6\u7684\u8EAB\u4EFD\uFF0C\u800C\u62E5\u6709 TS \u7684\u7C7B\u578B\u4FDD\u62A4\u3002",paraId:62,tocIndex:1},{value:"\u4E00\u822C\u6211\u4EEC\u5199\u4E1A\u52A1\u4EE3\u7801\u4E0D\u4F1A\u7528\u5230\uFF0C\u4F46\u662F\u70B9\u51FB\u7C7B\u578B\u8DF3\u8F6C\u4E00\u822C\u4F1A\u8DF3\u8F6C\u5230 .d.ts \u6587\u4EF6\u3002",paraId:63,tocIndex:1}]},53656:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var r=n(15656);const t=[{value:"\u8054\u5408\u7C7B\u578B",paraId:0,tocIndex:0},{value:`const myFavoriteNumber: string | number;

myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// TS2322: Type '{}' is not assignable to type 'string | number'.
myFavoriteNumber = {};

const jackFavoriteNumber: string | number;
`,paraId:1,tocIndex:0},{value:"\u7C7B\u578B\u522B\u540D",paraId:2,tocIndex:0},{value:`// \u7C7B\u578B\u522B\u540D\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\u53EF\u4EE5\u548Cinterface\u4E92\u6362
// interface Person {
//   name: string
// }
type Person = { name: string };
const xiaoMing: Person = { name: 'xiaoming' };

// \u7C7B\u578B\u522B\u540D, interface \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u6CA1\u6CD5\u66FF\u4EE3type
type FavoriteNumber = string | number;
let roseFavoriteNumber: FavoriteNumber = '6';

// interface \u4E5F\u6CA1\u6CD5\u5B9E\u73B0Utility type
type Person = {
  name: string;
  age: number;
};
`,paraId:3,tocIndex:0},{value:"Partial<Type>",paraId:4},{value:"\u4F5C\u7528\uFF1A\u5C06 Type \u5185\u6240\u6709\u5C5E\u6027\u7F6E\u4E3A\u53EF\u9009\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u7ED9\u5B9A\u7C7B\u578B Type \u7684\u5B50\u96C6",paraId:5,tocIndex:1},{value:`/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};
`,paraId:6,tocIndex:1},{value:"\u6CDB\u578B",paraId:7,tocIndex:1},{value:"<T>",paraId:7,tocIndex:1},{value:"keyof \u8FD0\u7B97\u7B26\uFF1A\u83B7\u53D6",paraId:7,tocIndex:1},{value:"T",paraId:7,tocIndex:1},{value:"\u7684\u6240\u6709\u952E",paraId:7,tocIndex:1},{value:"[P in keyof T]",paraId:7,tocIndex:1},{value:"\uFF1A\u904D\u5386",paraId:7,tocIndex:1},{value:"T",paraId:7,tocIndex:1},{value:"\u7684\u6240\u6709 key\uFF0C\u6620\u5C04\u7C7B\u578B\u3001\u7D22\u5F15\u7B7E\u540D",paraId:7,tocIndex:1},{value:"?",paraId:7,tocIndex:1},{value:"\uFF1A\u53EF\u9009",paraId:7,tocIndex:1},{value:"Required<Type>",paraId:4},{value:"\u4F5C\u7528\uFF1A",paraId:8,tocIndex:2},{value:"Required",paraId:8,tocIndex:2},{value:"\u4E0E\u4E0A\u9762\u7684",paraId:8,tocIndex:2},{value:"Partial",paraId:8,tocIndex:2},{value:"\u76F8\u53CD\uFF0C\u6784\u5EFA\u8FD4\u56DE\u4E00\u4E2A Type \u7684\u6240\u6709\u5C5E\u6027\u4E3A\u5FC5\u9009\u7684\u65B0\u7C7B\u578B\u3002",paraId:8,tocIndex:2},{value:`/**
 * Make all properties in T required
 */
type Required<T> = {
  [P in keyof T]-?: T[P];
};
`,paraId:9,tocIndex:2},{value:"\u6620\u5C04\u7C7B\u578B\u5B83\u652F\u6301\u901A\u8FC7+\u6216\u8005-\u6765\u6DFB\u52A0 or \u79FB\u9664 readonly \u6216\u8005?\u4FEE\u9970\u7B26\u3002",paraId:10,tocIndex:2},{value:"Readonly<Type>",paraId:4},{value:"\u4F5C\u7528\uFF1A\u5C06 Type \u6240\u6709\u5C5E\u6027\u7F6E\u4E3A\u53EA\u8BFB\u3002",paraId:11,tocIndex:3},{value:`/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
`,paraId:12,tocIndex:3},{value:"readonly \u7684\u542B\u4E49\u8DDF JS \u7684 const \u4E0D\u80FD\u4FEE\u6539\u7684\u542B\u4E49\u4E00\u6837\uFF0C\u6307\u7684\u662F\u4E0D\u80FD\u91CD\u5199(\u91CD\u5199\u8D4B\u503C)\u3002",paraId:13,tocIndex:3},{value:"Pick<Type, Keys>",paraId:4},{value:"Keys \u7684\u7C7B\u578B\u6709\u8981\u6C42\uFF1Astring literal or union of string literals\u3002",paraId:14,tocIndex:4},{value:"\u4F5C\u7528\uFF1A\u6784\u5EFA\u8FD4\u56DE\u4E00\u4E2A\u6839\u636E Keys \u4ECE\u7C7B\u578B Type \u62E3\u9009\u6240\u9700\u7684\u5C5E\u6027\u7684\u65B0\u7C7B\u578B\u3002",paraId:15,tocIndex:4},{value:`/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
`,paraId:16,tocIndex:4},{value:"Exclude<Type, ExcludedUnion>",paraId:4},{value:"\u4F5C\u7528\uFF1A\u4ECE Type \u4E2D\u6392\u9664\u53EF\u4EE5\u5206\u914D\u7ED9 ExcludedUnion \u7684\u7C7B\u578B\u3002",paraId:17,tocIndex:5},{value:`/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;
`,paraId:18,tocIndex:5},{value:"Parameters<Type>",paraId:4},{value:"\u4F5C\u7528\uFF1A\u57FA\u4E8E\u7C7B\u578B Type \u7684\u53C2\u6570\u6784\u5EFA\u4E00\u4E2A\u65B0\u7684\u5143\u7EC4\u7C7B\u578B",paraId:19,tocIndex:6},{value:`// \u4F7F\u7528

import http form './util/http'

// \u83B7\u53D6\u51FD\u6570\u7684\u8BF7\u6C42\u53C2\u6570
Parameters<typeof http>
`,paraId:20,tocIndex:6},{value:`/**
 * Obtain the parameters of a function type in a tuple
 */
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
`,paraId:21,tocIndex:6},{value:"T extends (...args: any) => any",paraId:22,tocIndex:6},{value:"\uFF1A\u5B9A\u4E49\u4E86 Parameters \u7684\u6CDB\u578B\u7EA6\u675F\uFF0C\u517C\u5BB9\u76EE\u524D\u6240\u6709\u51FD\u6570\u7684\u7C7B\u578B\u5B9A\u4E49\u3002",paraId:22,tocIndex:6},{value:"infer P",paraId:23,tocIndex:6},{value:"\uFF1A\u7528\u4E8E\u8868\u793A\u5F85\u63A8\u65AD\u7684\u51FD\u6570\u53C2\u6570\u3002",paraId:23,tocIndex:6},{value:"T extends (...args: infer P) => any ? P : never",paraId:24,tocIndex:6},{value:"\uFF1A\u8868\u793A\u5982\u679C T \u80FD\u8D4B\u503C\u7ED9 ",paraId:24,tocIndex:6},{value:"(...args: infer P) => any",paraId:24,tocIndex:6},{value:"\uFF0C\u5219\u7ED3\u679C\u662F ",paraId:24,tocIndex:6},{value:"(...args: infer P) => any",paraId:24,tocIndex:6},{value:" \u7C7B\u578B\u4E2D\u7684\u53C2\u6570\u4E3A ",paraId:24,tocIndex:6},{value:"P",paraId:24,tocIndex:6},{value:"\uFF0C\u5426\u5219\u8FD4\u56DE\u4E3A ",paraId:24,tocIndex:6},{value:"never",paraId:24,tocIndex:6},{value:"\u3002",paraId:24,tocIndex:6},{value:"ReturnType<Type>",paraId:4},{value:"\u4F5C\u7528\uFF1A\u57FA\u4E8E\u51FD\u6570 Type \u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u521B\u5EFA\u4E00\u4E2A\u65B0\u7C7B\u578B\u3002",paraId:25,tocIndex:7},{value:`// \u4F7F\u7528

import http form './util/http'

// \u83B7\u53D6\u51FD\u6570\u7684\u8BF7\u6C42\u53C2\u6570
ReturnType<typeof http>
`,paraId:26,tocIndex:7},{value:`/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
`,paraId:27,tocIndex:7}]},13415:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var r=n(84044);const t=[{value:`// \u6761\u4EF6\u5224\u65AD
type isNumber<T> = T extends number ? true : false;
type isNumberRes = isNumber<1>;

// \u9012\u5F52\u5FAA\u73AF
type createArray<Len, Item, Arr extends Item[] = []> = Arr['length'] extends Len
  ? Arr
  : createArray<Len, Item, [...Arr, Item]>;
type createArrayRes = createArray<10, number>;

// ts\u64CD\u4F5C\u5B57\u7B26\u4E32
type left = 'aaa';
type right = 'bbb';
type str = \`\${left},\${right}\`;
type stringRes = str extends \`aaa,\${infer rest}\` ? rest : never;

// \u521B\u5EFA\u5BF9\u8C61\u4E86\u7C7B\u578B
type obj = {
  a: 1,
  b: '2'
}

type newObj = {
  [key in keyof obj]: obj[key]
}
`,paraId:0,tocIndex:0},{value:`// ts \u7684\u9AD8\u7EA7\u7C7B\u578B\u60F3\u505A\u6570\u5B57\u7684\u8FD0\u7B97\u53EA\u80FD\u7528\u6784\u9020\u4E0D\u540C\u957F\u5EA6\u7684\u6570\u7EC4\u518D\u53D6 length \u7684\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u6CA1\u6709\u7C7B\u578B\u7684\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97\u7B26
type createArr<Len, Item, Arr extends Item[] = []> = Arr['length'] extends Len
  ? Arr
  : createArr<Len, Item, [...Arr, Item]>;

type Add<A extends number, B extends number> = [...createArr<A, any>, ...createArr<B, any>]['length']

type testAdd = Add<2, 5> 
`,paraId:1,tocIndex:1},{value:`type repeatStr<
  S extends string,
  N extends number,
  StrArr extends S[] = [],
  Res extends string = ''
> = StrArr['length'] extends N
  ? Res
  : repeatStr<S, N, [...StrArr, S], \`\${Res}\${S}\`>;

type testRepeatStr = repeatStr<'Name', 5>;
`,paraId:2,tocIndex:2},{value:`type alphaChars = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm'
    | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'
    | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M'
    | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';


type parseFnName<
  SourceStr extends string,
  Res extends string = ''
> = SourceStr extends \`\${infer Char}\${infer Rest}\`
  ? Char extends alphaChars
    ? parseFnName<Rest, \`\${Res}\${Char}\`>
    : \`Res: \${Res}, Rest: \${SourceStr}\`
  : never;

  type testParseFnName = parseFnName<'add(1, 2)'>
`,paraId:3,tocIndex:3},{value:`type filterNumberValue<Params> = {
  [key in keyof Params]: Params[key] extends number ? Params[key]  : never;
}[keyof Params]

type testFilterNumberValue = filterNumberValue<{
  a: 1,
  b: '2',
  c: 3
}>
`,paraId:4,tocIndex:4}]}}]);
