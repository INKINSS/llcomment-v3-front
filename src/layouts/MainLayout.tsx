import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/navBars/NavBar';

export const MainLayout = () => {
	return (
		<div className="relative h-full w-full bg-slate-950">
			<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] px-8">
				<NavBar />
				<Outlet />
			</div>
		</div>
	);
};
