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

  async #createScript(path) {
    var script = await document.createElement("script");
    script.src = await String(path);
    script.defer = true;
    script.type = "module";
    await document.body.appendChild(script);
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
          await this.#createScript(
            `../controller/${this.#dynamicComp}Controller.js`
          );
          await this.#createScript(`../utils/littleScript.js`);
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
