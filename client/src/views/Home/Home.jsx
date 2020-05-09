import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
	return (
		<>
			<Navbar transparent />
			<main>
				<div
					className='relative pt-16 pb-32 flex content-center items-center justify-center'
					style={{
						minHeight: '100vh',
					}}
				>
					<div
						className='absolute top-0 w-full h-full bg-center bg-cover'
						style={{
							backgroundImage:
								"url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80')",
						}}
					>
						<span
							id='blackOverlay'
							className='w-full h-full absolute opacity-75 bg-black'
						></span>
					</div>
					<div className='container relative mx-auto'>
						<div className='items-center flex flex-wrap'>
							<div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
								<div className='pr-12'>
									<h1 className='text-white font-semibold text-5xl'>
										Welcome To Your Lift Tracker!
									</h1>
									<p className='mt-4 text-lg text-gray-300'>
										Login with your favorite service or create a new account to
										get started. More features to come in the near future.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
