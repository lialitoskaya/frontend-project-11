import { object, string } from "yup";
const schema = object({
  url: string().url(),
});
const render = (path, value, prevValue) => {
  if (path === "formUiState.url") {
    const valid = new Promise(schema.validate(value));
    valid.then((result) => console.log(result));
  }
};
export default render;
