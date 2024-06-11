import { CreateSlice } from '.';

type Popup = {
  open: boolean;
  title: string;
};

export type PopupSlice = {
  popup: Popup;
  // eslint-disable-next-line no-unused-vars
  setPopup: (popup: Partial<Popup>) => void;
  resetPopup: () => void;
};

const initialPopup: Popup = {
  open: false,
  title: '',
};

export const createPopupSlice: CreateSlice<PopupSlice> = (set) => ({
  popup: structuredClone(initialPopup),
  setPopup: (popup) =>
    set((state) => ({
      popup: { ...state.popup, ...popup },
    })),
  resetPopup: () => set({ popup: structuredClone(initialPopup) }),
});
