export async function useFetch(endPoint: string) {
  const res = await fetch(
    `https://api.rawg.io/api/${endPoint}?key=fd9de0b1e991460c9c45169d797ae783`
  );
  return res.json();
}
