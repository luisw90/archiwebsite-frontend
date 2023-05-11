type ArchData = {
  _id?: string;
  title: string;
  description: string;
  date?: string;
  image: string;
};

type ArchTeam = {
  _id?: string;
  name: string;
  profession: string;
  email: string;
};

export type { ArchData, ArchTeam };

// type ArchImages = {
//   urls: {
//     regular: string;
//   };
// };
