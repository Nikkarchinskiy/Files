function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(`Resolved after ${ms}ms`);
    }, ms);
  });
}

delay(3000).then((value) => console.log(value));
