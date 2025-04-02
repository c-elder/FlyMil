export type AircraftContent = [
  {
    name: string;
    code: string;
    icon: {
      asset: {
        _id: string;
        url: string;
      };
    };
    type: string;
    manufacturer: string;
  },
];
