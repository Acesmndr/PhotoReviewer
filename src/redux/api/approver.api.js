import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
});

export const fetchImage = async () => {
  const { response } = await unsplash.photos.getRandom();
  return response;
}

export const fetchExistingImage = async ({ photoId }) => {
  const { response } = await unsplash.photos.get(
    { photoId },
  );
  return response;
}