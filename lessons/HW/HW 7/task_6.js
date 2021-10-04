document
  .querySelector("#validation-input")
  .addEventListener("focus", function (e) {
    let dataset = { ...this.dataset };
    let { length } = dataset;
    let lengthStr = Number(length);
    // this.placeholder = `Введи ${lengthStr} символов`;
    if (this.value.length === lengthStr) {
      this.classList.remove("invalid");
      this.classList.add("valid");
    }
    if (this.value.length < lengthStr || this.value.length > lengthStr) {
      this.classList.remove("valid");
      this.classList.toggle("invalid");
    }
  });
