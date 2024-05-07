type AssetType = {
  id: number;
  location: {
    x: number;
    y: number;
  };
  font: {
    size: number;
    weight: number;
  };
  value: string;
};

export type { AssetType };
