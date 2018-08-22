
export class BoardData {
  id: string;
  title: string;
  date?: string;
  votingStarsRange?: string;
  votingStarsNumber?: number;
  tabset1?: TabsetDescription;
  tabset2?: TabsetImages;
  // description?: string;
  // features?: string;
  // dimentions: Dimention[];
  price?: string;
  // images?: BoardImage[];
}

export class Dimention {
  size?: string;
  width?: string;
  thickness?: string;
  volume?: string;
}

export class BoardImage {
  bigImage: string;
  smallImage: string;
  alt?: string;
}

export class TabsetDescription {
  tabseId: string;
  description?: string;
  features?: string;
  dimentions: Dimention[];
}

export class TabsetImages {
  tabseId: string;
  images?: BoardImage[];
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++

export class ActivatedTab {
  slideId: string;
  tabsets: Tabset[];
}

export class Tabset {
  id: string;
  activeTabNumber?: number;
  tabChangeObj: {
    activeId: string;
    nextId: string;
  };
}
