import showAll from "./showAll.js";
import url from "./url.js";

const refresh = async () => {
  const response = await fetch(url);
  const data = await response.json();
  showAll(data.result);
}

export default refresh;