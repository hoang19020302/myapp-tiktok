import { create } from 'zustand';

const useStore = create((set) => ({
    // Trạng thái
    isDarkMode: false,
    language: 'en',

    // Hành động: Thay đổi trạng thái
    toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    changeLanguage: (lang) => set(() => ({ language: lang })),
}));

export default useStore;
