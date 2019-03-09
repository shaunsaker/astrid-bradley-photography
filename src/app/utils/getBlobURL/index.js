/* https://www.bignerdranch.com/blog/dont-over-react/ */

const urls = new WeakMap();

const getBlobURL = (blob) => {
  if (urls.has(blob)) {
    return urls.get(blob);
  }
  const url = URL.createObjectURL(blob);

  urls.set(blob, url);

  return url;
};

export default getBlobURL;
