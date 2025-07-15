import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainLayout } from './layouts/MainLayout';
import { WelcomePage } from './pages/WelcomePage';
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';

function App() {
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
