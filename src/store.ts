import { create } from "zustand";
import { AssetType } from "./@types/asset";

const useCanvasStore = create((set) => ({
  assets: [[]],
  addPage: () => set((state: any) => (state.assets = [...state.assets, []])),
  appendAsset: (index: number, asset: AssetType) =>
    set(
      (state: any) => (state.assets[index] = [...state.assets[index], asset])
    ),
  updateAsset: (index: number, id: number, asset: AssetType) =>
    set((state: any) =>
      state.assets[index].splice(
        state.assets[index].findIndex((target: AssetType) => target.id == id),
        1,
        asset
      )
    ),
}));

export { useCanvasStore };
