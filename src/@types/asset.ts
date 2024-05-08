type AssetType = AssetAllType & AssetTextType & AssetTextAreaType;

type AssetAllType = {
  id: number;
  type: "text" | "textarea";
  location: {
    x: number;
    y: number;
  };
};

type AssetTextType = {
  font: {
    size: number;
    weight: number;
  };
  value: string;
};

type AssetTextAreaType = {
  location: {
    w: number;
    h: number;
  };
  font: {
    size: number;
    weight: number;
  };
  value: string;
};

export type { AssetType };
