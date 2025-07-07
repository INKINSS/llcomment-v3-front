import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';

export const NavBar = () => {
	const links = [
		{ to: '/', label: 'Inicio' },
		{ to: '/about', label: 'Acerca de' },
		{ to: '/contact', label: 'Contacto' },
	];

	return (
		<header className="flex items-center justify-between text-textPrimary py-6">
			<Logo />
			<nav>
				<ul className="flex gap-4">
					{links.map((link) => (
						<li key={link.to}>
							<Link className="font-medium" to={link.to}>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
