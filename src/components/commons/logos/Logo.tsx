import { Link } from 'react-router-dom';

export const Logo = () => {
	return (
		<Link
			className="font-semibold text-[1.7rem] hover:text-indigo-400 transform transition-colors duration-200"
			to={'/'}
		>
			llcomment
		</Link>
	);
};
