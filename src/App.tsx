import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute';
import { MainLayout } from './layouts/MainLayout';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';
import { WelcomePage } from './pages/WelcomePage';
import { useAuthStore } from './stores/useAuthStores';

function App() {
	const { fetchUser } = useAuthStore();

	useEffect(() => {
		fetchUser();
	}, [fetchUser]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route path="/login" element={<LoginPage />} />
					<Route index element={<WelcomePage />} />
					<Route path="/dashboard" element={<ProtectedRoute />}>
						<Route index element={<DashboardPage />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
