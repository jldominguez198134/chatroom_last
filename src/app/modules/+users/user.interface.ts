export interface User {
  name: string;
  address?: {
    lat: number;
    long: number;
  };
};
