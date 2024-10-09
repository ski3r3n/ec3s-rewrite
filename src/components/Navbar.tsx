import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { motion } from 'framer-motion';

const menuLinks = [
	{ title: <span>About</span>, href: '/#about' },
	{ title: <span>Projects</span>, href: '/#projects' },
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
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<motion.button
					className='px-3 cursor-pointer outline-none active:outline-none'
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					<span className='icon-[mdi--menu]'></span>
				</motion.button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content sideOffset={5} alignOffset={5}>
				<motion.div
					className='mr-5'
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2 }}
				>
					{menuLinks.map((link, i) => (
						<a
							key={i}
							href={link.href}
							className='block px-3 py-2'
							target={link.href.startsWith('http') ? '_blank' : ''}
						>
							{link.title}
						</a>
					))}
				</motion.div>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
}

export default function Navbar() {
	return (
		<div className='px-5 pt-4 text-right font-fira bg-[rgba(0,0,0,0.8)] fixed top-0 w-full z-50 text-sm select-none'>
			<a href='/'>
				<img
					src='/favicon.ico'
					alt='logo'
					className='w-10 inline-block float-left'
				/>
			</a>
			<div className='sm:inline-block hidden float-right mt-2'>
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
			<div className='sm:hidden inline-block float-right mt-2'>
				<MobileMenu />
			</div>
		</div>
	);
}
