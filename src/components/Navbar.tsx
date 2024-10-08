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
		</div>
	);
}
