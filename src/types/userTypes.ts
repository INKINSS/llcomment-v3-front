export interface User {
	id: string;
	username: string;
	email: string;
	role: string;
}

export interface AuthState {
	user: User | null;
	loading: boolean;
	error?: string | null;
	fetchUser: () => Promise<void>;
	exp: number;
	iat: number;
	logout: () => void;
}
