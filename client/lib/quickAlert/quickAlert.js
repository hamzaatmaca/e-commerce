class QuickAlert {
  #layout;
  #button;
  #styleLayout;
  #styleButton;
  constructor(layoutText, alertType, closeTime) {
    this.closeTime = closeTime;
    this.alertType = alertType;
    this.layoutText = layoutText;
    this.buttonText = "Kapat";
    this.#layout = document.createElement("DIV");
    this.#button = document.createElement("BUTTON");
    this.#styleLayout =
      "font-size:2rem;padding:3rem;overflow:hidden;display:flex;justify-content:center;align-items:center;box-shadow:0 0 10px grey,inset 0 0 2px grey;border-radius:10px;width:35rem;height:17rem;background-color:white;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);";
    this.#styleButton =
      "font-size:1.5rem;color:white;background-color:black;letter-spacing:2px;cursor:pointer;border:none;outline:none;border-radius:10px;width:10rem;height:2.5rem;position:fixed;top:70%;left:50%;transform:translate(-50%,50%);";
  }
  async #createLayout() {
    this.#layout.setAttribute("style", this.#styleLayout);
    this.#button.setAttribute("style", this.#styleButton);
    this.#button.innerHTML = this.buttonText;
    this.#layout.innerHTML = this.layoutText;

    await this.#layout.appendChild(this.#button);
    await document.body.appendChild(this.#layout);
  }
  #destroyLayout() {
    switch (this.alertType) {
      case "timeOut":
        this.#layout.removeChild(this.#button);
        setTimeout(() => {
          document.body.removeChild(this.#layout);
        }, this.closeTime);
        break;
      case "modal":
        this.#button.addEventListener("click", () => {
          document.body.removeChild(this.#layout);
        });
        break;
      default:
        break;
    }
  }
  fire() {
    this.#createLayout();
    this.#destroyLayout();
  }
}

export default QuickAlert;
