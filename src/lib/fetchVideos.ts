async function fetchVideos(id: number) {
  const res = await fetch(
    `https://api.rawg.io/api/games/${id}/movies?key=fd9de0b1e991460c9c45169d797ae783`
  );
  return res.json();
}

export default fetchVideos;