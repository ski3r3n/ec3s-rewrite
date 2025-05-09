import { motion, useScroll } from 'motion/react';
import { useState, useEffect } from 'react';

export function ScrollToTopBtn() {
	const { scrollYProgress } = useScroll();
	const [borderPercent, setBorderPercent] = useState(0);
	const [show, setShow] = useState(false);

	useEffect(() => {
		const scrollYListener = scrollYProgress.on('change', (latest) => {
			setBorderPercent(latest * 100);
		});

		// show the button if document height exceeds window height
		setShow(document.documentElement.scrollHeight > window.innerHeight);

		window.addEventListener('resize', () => {
			setShow(document.documentElement.scrollHeight > window.innerHeight);
		});

		return () => {
			scrollYListener();
		};
	}, []);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	if (show)
		return (
			<>
				<motion.button
					className='fixed bottom-5 right-5 z-50 rounded-full h-8 w-8 outline-none focus:outline-none active:outline-none flex flex-col items-center justify-center'
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={handleClick}
					style={{
						background:
							'conic-gradient(red, orange, yellow, green, cyan, blue, magenta, purple, red)',
					}}
				>
					<div
						className='rounded-full h-9 w-9 flex flex-col items-center justify-center'
						style={{
							background: `conic-gradient(transparent 0% ${borderPercent}%, black ${borderPercent}% 100%)`,
						}}
					>
						<div className='bg-black rounded-full p-1 h-7 w-7 cursor-pointer'>
							<span className='icon-[mdi--chevron-up] text-xl'></span>
						</div>
					</div>
				</motion.button>
			</>
		);
	else return null;
}
