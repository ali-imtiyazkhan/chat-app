import { create } from 'zustand';

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (conversation) =>
    set({ selectedConversation: conversation }),

  messages: [],
  setMessages: (messages) => set({ messages }),

  // ✅ Add this function to append a new message
  addMessage: (msg) =>
    set((state) => ({
      messages: Array.isArray(state.messages)
        ? [...state.messages, msg]
        : [msg],
    })),
}));

export default useConversation;
