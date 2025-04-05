import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface MessageData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const api = {
    sendMessage: async (data: MessageData) => {
        try {
            const response = await axios.post(`${API_URL}/messages`, data);
            return response.data;
        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }
    }
}; 