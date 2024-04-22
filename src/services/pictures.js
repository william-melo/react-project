export const searchPictures = async ({ search }) => {
  //const API_KEY = import.meta.env.API_KEY;
  //const API_URL = import.meta.env.API_URL;

  if (search === "") return null; //if there is no input, we don't make an api call

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/search/photos/?client_id=${
        import.meta.env.VITE_API_KEY
      }&query=${search}&page=1&per_page=30`
    );
    const json = await response.json();

    const responsePictures = json.results;
    return responsePictures;
  } catch (error) {
    throw new Error("Could not load pictures from Unsplash");
  }
};
