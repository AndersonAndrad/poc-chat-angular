export interface Message {
  payload: string;
  statusMessage: 'send' | 'received' | 'read',
  author: Participant;
  date: Date;
  conversationKey: Conversation['conversationKey'];
}

export interface Participant {
  name: string;
  email: string;
}

export interface Conversation {
  participants: Participant[];
  lastMessage: Date;
  messages: Message[];
  title: string;
  conversationKey: string;
}
