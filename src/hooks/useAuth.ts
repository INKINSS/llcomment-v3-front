import { useEffect, useState } from 'react';
import { api } from '../components/api/axios/axios';

type User = {
	id: string;
	username: string;
	email: string;
};

export const useAuth = () => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await api.get('/api/public/dashboard', {
					withCredentials: true,
				});
				setUser(response.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchUser();
	}, []);

	return { user, loading };
};
