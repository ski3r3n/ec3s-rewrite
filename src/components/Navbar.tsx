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
				<a href='/#about' className='px-3'>
					About
				</a>
				<a href='/#projects' className='px-3'>
					Projects
				</a>
				<a href='/#contact' className='px-3'>
					Contact
				</a>
			</div>
		</div>
	);
}
