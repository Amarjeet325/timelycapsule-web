import { create } from "zustand";

export interface Capsule {
  id: string;
  name: string;
  collaborationType: "single" | "collaborators";
  collaborators?: string[];

  senderName: string;
  openDate: Date;

  message?: string;
  funds?: number;
  currency?: string;
  medias?: File[];
  shareLink?: string;
  recipientEmail?: string;
  password?: string;
  type?: string;
  endDate?: Date;
}

interface CapsuleState {
  capsules: Capsule[];
  currentCapsule: Capsule | null;
  loading: boolean;
  error: string | null;
  setCapsules: (capsules: Capsule[]) => void;
  addCapsule: (capsule: Capsule) => void;
  updateCapsule: (capsule: Capsule) => void;
  deleteCapsule: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  loadCapsule: (id: Capsule["id"]) => void;
}

const mockCapsules: Capsule[] = [
  {
    id: "4d869a52-cc87-456e-9925-439f025a5240",
    collaborationType: "single",
    name: "The First Capsule",
    senderName: "The Creator",
    openDate: new Date("2025-01-01 08:00:00"),
    message: `Hey User,
I wrote this message to you [X] months ago, knowing that today would be special. Life moves fast, and I just wanted to remind you of how far you’ve come. I hope you're smiling right now. You deserve all the happiness in the world. 🌎✨
Take a deep breath, and remember—you are loved. Always. ❤️
Sending you a virtual hug from the past! 🤗`,
  },
  {
    id: "c77dc201-3219-4743-b3f3-d95a3f512a9d",
    collaborationType: "single",
    name: "The Sealed Capsule",
    senderName: "The Sealed Man",
    openDate: new Date("2027-01-01 08:00:00"),
    message: `This is a sealed capsule
    
    YOU SHOULD NOT BEEN ABLE TO SEE IT
    `,
  },
];

export const useCapsuleStore = create<CapsuleState>((set, get) => ({
  capsules: mockCapsules,
  currentCapsule: null,
  loading: false,
  error: null,
  setCapsules: (capsules) => set({ capsules }),
  addCapsule: (capsule) =>
    set((state) => ({
      capsules: [...state.capsules, capsule],
    })),
  updateCapsule: (capsule) =>
    set((state) => ({
      capsules: state.capsules.map((c) => (c.id === capsule.id ? capsule : c)),
    })),
  deleteCapsule: (id) =>
    set((state) => ({
      capsules: state.capsules.filter((c) => c.id !== id),
    })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  async loadCapsule(id) {
    const capsules = get().capsules;
    console.log("loadCapsule");
    const foundCapsule = capsules.find((capsule) => capsule.id === id);
    console.log("foundCapsule", foundCapsule);
    set(() => ({
      currentCapsule: foundCapsule || null,
    }));
  },
}));

export function useCurrentCapsule() {
  return useCapsuleStore((state) => state.currentCapsule);
}

export function useCapsuleList() {
  return useCapsuleStore((state) => state.capsules);
}
