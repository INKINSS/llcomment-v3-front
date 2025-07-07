import { Description, DialogTitle } from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../commons/logos/Logo';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const links = [
		{ to: '/', label: 'Inicio' },
		{ to: '/about', label: 'Acerca de' },
		{ to: '/contact', label: 'Contacto' },
	];

	const closeSheet = () => setIsOpen(false);

	return (
		<header className="flex items-center justify-between text-textPrimary py-10 px-4 md:px-6">
			<Logo />

			{/* Desktop Navigation */}
			<nav className="hidden md:block">
				<ul className="flex gap-10">
					{links.map((link) => (
						<li key={link.to}>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'font-medium md:text-lg text-white underline underline-offset-8'
										: 'font-medium md:text-lg hover:text-white transition-colors'
								}
								to={link.to}
							>
								{link.label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>

			{/* Mobile Navigation */}
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<Button
						size="icon"
						variant="ghost"
						className="md:hidden hover:bg-transparent hover:text-white"
						aria-label="Abrir menú de navegación"
					>
						{isOpen ? null : <Menu className="size-6" />}
					</Button>
				</SheetTrigger>
				<SheetContent
					side="right"
					className="w-[300px] sm:w-[400px] bg-indigo-800 border-l border-slate-800"
				>
					<DialogTitle />
					<Description />
					<div className="flex flex-col">
						<div className="flex items-center justify-end pr-5">
							<Button
								className="hover:bg-transparent hover:text-white cursor-pointer"
								variant="ghost"
								size="icon"
								onClick={closeSheet}
								aria-label="Cerrar menú"
							>
								<X className="text-white size-6" />
							</Button>
						</div>
						<nav>
							<ul className="flex flex-col">
								{links.map((link) => (
									<li key={link.to}>
										<NavLink
											className={({ isActive }) =>
												isActive
													? 'block font-light text-lg hover:text-white transition-colors py-2 text-white px-10 underline underline-offset-8'
													: 'block font-light text-lg hover:text-white hover:underline hover:underline-offset-8 transition-colors py-2 text-white px-10'
											}
											to={link.to}
											onClick={closeSheet}
										>
											{link.label}
										</NavLink>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</SheetContent>
			</Sheet>
		</header>
	);
};
