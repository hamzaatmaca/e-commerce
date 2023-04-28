class TPL {
  #dynamicComp;

  constructor(dynamicComp) {
    this.#dynamicComp = dynamicComp;
  }

  #handleError(param) {
    if (
      param === null ||
      param === "" ||
      (param === undefined && !(param instanceof String))
    )
      return false;
  }

  async #fetchTpl() {
    if (this.#handleError(this.#dynamicComp)) {
      throw new Error(this.#dynamicComp + " Components Can Not Be Null");
    } else {
      const urls = [
        "./template/components/static/nav.html",
        `./template/pages/${this.#dynamicComp}.html`,
        "./template/components/static/footer.html",
      ];

      return Promise.all(
        urls.map((url) => fetch(url).then((response) => response.text()))
      )
        .then(async (data) => {
          var script = await document.createElement("script");
          script.src = await `../controller/${this.#dynamicComp}Controller.js`;
          script.defer = true;
          script.type = "module";
          await document.body.appendChild(script);

          return data.join("");
        })
        .catch((error) => {
          throw new Error("TPL Fetch Error " + error);
        });
    }
  }

  collectTpl() {
    return this.#fetchTpl();
  }
}

export default TPL;
