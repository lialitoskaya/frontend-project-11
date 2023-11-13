import { object, string } from "yup";
const schema = object({
  url: string().url(),
});
const render = (path, value, prevValue) => {
  if (path === "formUiState.url") {
    schema.validate((url, err) => {
      if (err) {
        console.log(err);
      }
      console.log(url);
    });
  }
};
export default render;
