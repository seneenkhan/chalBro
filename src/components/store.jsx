
import {create} from "zustand";

const useStore = create((set) => ({
  image: null,
  setImage: (image) => set({ image }),
}));

export default useStore;
