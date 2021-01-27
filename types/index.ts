export interface PokeData {
  id: number;
  name: string;
  sprites: Sprite[];
}

interface Sprite {
  front_default: string;
}
