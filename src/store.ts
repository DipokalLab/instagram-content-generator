import { create } from "zustand";
import { AssetType } from "./@types/asset";

const useCanvasStore = create((set) => ({
  assets: [],
  appendAsset: (asset: AssetType) =>
    set((state: any) => ({ assets: [...state.assets, asset] })),
  updateAsset: (id: number, asset: AssetType) =>
    set((state: any) =>
      state.assets.splice(
        state.assets.findIndex((target: AssetType) => target.id == id),
        1,
        asset
      )
    ),
}));

export { useCanvasStore };
