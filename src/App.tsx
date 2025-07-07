import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainLayout } from './layouts/MainLayout';
import { WelcomePage } from './pages/WelcomePage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<WelcomePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
