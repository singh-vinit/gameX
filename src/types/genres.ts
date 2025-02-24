type Genre = {
  id: number;
  name: string;
  slug: string;
  image_background: string;
};

export type Genres = {
  results: Genre[];
};
