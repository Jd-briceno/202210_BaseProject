export class Banda {

  id: number;
  name: string;
  numberOfMembers: number;
  description: string;
  popularSongs: Array<string>;
  imge: string;

  constructor(id: number, name: string, numberOfMembers: number, descriprion: string, popularSongs: Array<string>, imge: string) {

      this.id = id;
      this.name = name;
      this.numberOfMembers = numberOfMembers;
      this.description = descriprion;
      this.popularSongs = popularSongs;
      this.imge = imge;
  }
}
