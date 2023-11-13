import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "on-change";
import render from "./view.js";

const app = () => {
  const state = {
    uiFormState: {
      valid: true,
      state: "filling",
      url: "",
    },
  };
  const watchedState = onchange(state, render);
  const form = document.querySelector(".rss-form");
  form.addEventListener("input", (e) => {
    watchedState.uiFormState.url = e.target.value;
  });
};
app();
