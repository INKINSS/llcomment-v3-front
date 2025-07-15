import { create } from 'zustand';
import { api } from '../components/api/axios/axios';
import type { AuthState } from '../types/userTypes';

export const useAuthStore = create<AuthState>((set) => ({
	user: null,
	loading: false,
	error: null,
	exp: 0,
	iat: 0,
	fetchUser: async () => {
		try {
			const response = await api.get('/public/dashboard', {
				withCredentials: true,
			});
			console.log(response.data);
			set({ user: response.data });
		} catch (error) {
			console.log(error);
		} finally {
			set({ loading: false });
		}
	},
	logout: () => {
		set({ user: null });
	},
}));
