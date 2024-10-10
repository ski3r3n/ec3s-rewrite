import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

export function ScrollToTopBtn() {
	const { scrollYProgress } = useScroll();
	const [borderPercent, setBorderPercent] = useState(0);

	useEffect(() => {
		const scrollYListener = scrollYProgress.on('change', (latest) => {
			setBorderPercent(latest * 100);
		});

		return () => {
			scrollYListener();
		};
	}, []);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<motion.button
			className='fixed bottom-5 right-5 z-50 rounded-full h-8 w-8 flex flex-col items-center justify-center outline-none focus:outline-none active:outline-none'
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			onClick={handleClick}
			style={{
				background: `
					conic-gradient(
						red 0% ${borderPercent}%,
						transparent ${borderPercent}% 100%
					)
				`,
			}}
		>
			<motion.div className='bg-black rounded-full p-1 h-7 w-7'>
				<span className='icon-[mdi--chevron-up] text-xl glow'></span>
			</motion.div>
		</motion.button>
	);
}
