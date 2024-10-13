import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { AnimatePresence, motion } from 'framer-motion';
// import { useState } from 'react';
import { Fragment } from 'react';

const menuLinks = [
	{ title: <span>About</span>, href: '/about/' },
	{ title: <span>Blog</span>, href: '/posts/' },
	{
		title: (
			<>
				<span className='icon-[mdi--instagram] mr-1 relative top-[2.5px]'></span>
				<span>Instagram</span>
			</>
		),
		href: 'https://www.instagram.com/hwachonginfocomm/',
	},
];

function MobileMenu() {
	return (
		<Menu>
			{({ open }) => {
				document.documentElement.style.overflow = 'auto';

				return (
					<>
						<MenuButton
							as={motion.button}
							className='px-3 cursor-pointer outline-none active:outline-none'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							{({ open }) => (
								<span
									className={`icon-[mdi--${open ? 'close' : 'menu'}] text-xl transition-transform duration-300`}
									style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
								></span>
							)}
						</MenuButton>

						<AnimatePresence>
							{open && (
								<MenuItems static as={Fragment}>
									<motion.div
										layout
										initial={{ opacity: 0, x: 20, y: -40, scale: 0.1 }}
										animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
										exit={{ opacity: 0, x: 20, y: -40, scale: 0.1 }}
										transition={{
											duration: 0.2,
											type: 'spring',
											damping: 20,
											stiffness: 120,
										}}
										className='outline-none active:outline-none focus:outline-none'
									>
										{menuLinks.map((link, i) => (
											<MenuItem key={i}>
												{() => (
													<a
														href={link.href}
														className={`block px-3 py-2`}
														target={
															link.href.startsWith('http') ? '_blank' : ''
														}
													>
														{link.title}
													</a>
												)}
											</MenuItem>
										))}
									</motion.div>
								</MenuItems>
							)}
						</AnimatePresence>
					</>
				);
			}}
		</Menu>
	);
}

// function MobileMenu() {
// 	const [open, setOpen] = useState(false);

// 	return (
// 		<DropdownMenu.Root open={open} onOpenChange={setOpen}>
// 			<DropdownMenu.Trigger asChild>
// 				<motion.button
// 					className='px-3 cursor-pointer outline-none active:outline-none'
// 					whileHover={{ scale: 1.1 }}
// 					whileTap={{ scale: 0.9 }}
// 				>
// 					<span className='icon-[mdi--menu] text-xl'></span>
// 				</motion.button>
// 			</DropdownMenu.Trigger>

// 			<DropdownMenu.Content sideOffset={5} alignOffset={0} asChild>
// 				<AnimatePresence>
// 					{open && (
// 						<motion.div
// 							className='mr-5 duration-200'
// 							initial={{ opacity: 0, x: 20, y: -40, scale: 0.1 }}
// 							animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
// 							exit={{ opacity: 0, x: 20, y: -40, scale: 0.1 }}
// 							// transition={{
// 							// 	duration: 0.2,
// 							// 	type: 'spring',
// 							// 	damping: 20,
// 							// 	stiffness: 200,
// 							// }}
// 						>
// 							{menuLinks.map((link, i) => (
// 								<a
// 									key={i}
// 									href={link.href}
// 									className='block px-3 py-2'
// 									target={link.href.startsWith('http') ? '_blank' : ''}
// 								>
// 									{link.title}
// 								</a>
// 							))}
// 						</motion.div>
// 					)}
// 				</AnimatePresence>
// 			</DropdownMenu.Content>
// 		</DropdownMenu.Root>
// 	);
// }

export function Navbar() {
	return (
		<div className='px-5 pt-4 text-right font-fira bg-transparent fixed top-0 w-full z-50 text-sm select-none'>
			<a
				href='/'
				className='outline-none focus:outline-none active:outline-none'
			>
				<img
					src='/favicon.ico'
					alt='logo'
					className='w-10 inline-block float-left'
				/>
			</a>
			<div className='md:inline-block hidden float-right mt-2'>
				{menuLinks.map((link, i) => (
					<a
						key={i}
						href={link.href}
						className='px-3'
						target={link.href.startsWith('http') ? '_blank' : ''}
					>
						{link.title}
					</a>
				))}
			</div>
			<div className='md:hidden inline-block float-right mt-2 pr-0'>
				<MobileMenu />
			</div>
		</div>
	);
}
