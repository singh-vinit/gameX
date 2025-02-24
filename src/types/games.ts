type Platforms = {
  platform: {
    name: string;
    slug: string;
  };
};

type Genres = {
  name: string;
  slug: string;
};

type Game = {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  genres: Genres[];
  parent_platforms: Platforms[];
};

export type Games = {
  next: string;
  previous: string | null;
  results: Game[];
};
