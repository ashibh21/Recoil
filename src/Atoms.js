import { atom, selector } from "recoil";

export const notifAtom = atom({
  key: "notifAtom",
  default: 14,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 12,
});
export const JobsAtom = atom({
  key: "JobsAtom",
  default: 0,
});
export const networkAtom = atom({
  key: "netwAtom",
  default: 12,
});
export const sum = selector({
  key: "sum",
  get: ({ get }) => {
    const notif = get(notifAtom);
    const msg = get(messagingAtom);

    return notif + msg;
  },
});
