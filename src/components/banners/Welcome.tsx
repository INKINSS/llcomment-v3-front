import { MainButton } from '../commons/buttons/MainButton';
import { SecondButton } from '../commons/buttons/SecondButton';
import { BlurFade } from '../magicui/blur-fade';

export const Welcome = () => {
	return (
		<section className="flex flex-col items-center justify-center md:w-4/6 lg:w-3/6">
			<BlurFade duration={0.7} inView={true}>
				<h1 className="text-center font-semibold text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-t from-slate-100 to-indigo-500">
					comparte tu conocimiento con el mundo
				</h1>
			</BlurFade>
			<BlurFade delay={0.2} duration={0.7} inView={true}>
				<p className="text-textSecondary text-center text-lg lg:text-2xl prose">
					un sitio dedicado a las personas apasionadas por compartir su
					conocimiento con el mundo
				</p>
			</BlurFade>
			<BlurFade delay={0.4} duration={0.7} inView={true}>
				<div className="flex mt-5 gap-3">
					<MainButton />
					<SecondButton />
				</div>
			</BlurFade>
		</section>
	);
};
