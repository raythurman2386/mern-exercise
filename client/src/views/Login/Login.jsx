import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../queries';
import { useMutation } from '@apollo/react-hooks';
import { useInput } from '../../hooks/useInput';
import Navbar from '../../components/Navbar/Navbar';

const Login = props => {
	const [email, handleEmail] = useInput();
	const [password, handlePassword] = useInput();
	const [login] = useMutation(LOGIN);

	const handleSubmit = e => {
		e.preventDefault();
		login({ variables: { email, password } })
			.then(res => {
				localStorage.setItem('token', res.data.login.token);
				localStorage.setItem('username', res.data.login.user.username);
			})
			.then(data => props.history.push('/exercises'))
			.catch(err => alert(err.message));
	};

	return (
		<>
			<Navbar transparent />
			<main>
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
				<section className='absolute w-full h-full'>
					<div className='container mx-auto px-4 h-full'>
						<div className='flex content-center items-center justify-center h-full'>
							<div className='w-full lg:w-4/12 px-4'>
								<div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
									<div className='rounded-t mb-0 px-6 py-6'>
										<div className='text-center mb-3'>
											<h6 className='text-gray-600 text-sm font-bold'>
												Sign in with
											</h6>
										</div>
										<div className='btn-wrapper text-center'>
											<button
												className='bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs'
												type='button'
												style={{ transition: 'all .15s ease' }}
												disabled
											>
												{/* <svg
												className='w-5 mr-1'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M17.999 2C9.164 2 2 9.163 2 18c0 7.07 4.584 13.066 10.942 15.182.8.147 1.092-.347 1.092-.771 0-.38-.013-1.386-.021-2.721-4.45.966-5.39-2.145-5.39-2.145-.728-1.849-1.777-2.34-1.777-2.34-1.452-.993.11-.973.11-.973 1.606.113 2.451 1.649 2.451 1.649 1.427 2.445 3.745 1.738 4.657 1.329.145-1.033.559-1.739 1.015-2.138-3.552-.404-7.288-1.777-7.288-7.908 0-1.747.624-3.176 1.647-4.294-.165-.404-.714-2.032.158-4.234 0 0 1.342-.43 4.399 1.64A15.325 15.325 0 0118 9.737c1.36.007 2.728.184 4.006.54 3.055-2.071 4.395-1.641 4.395-1.641.874 2.202.325 3.83.16 4.234 1.026 1.118 1.645 2.547 1.645 4.294 0 6.146-3.741 7.499-7.305 7.895.574.494 1.085 1.47 1.085 2.962 0 2.14-.02 3.865-.02 4.39 0 .428.29.926 1.1.77C29.42 31.06 34 25.068 34 18 34 9.162 26.836 2 17.999 2'
													fill='#182359'
													fill-rule='evenodd'
												/>
											</svg> */}
												Facebook
											</button>
											<button
												className='bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs'
												type='button'
												style={{ transition: 'all .15s ease' }}
												disabled
											>
												{/* <svg
												className='w-5 mr-1'
												xmlns='http://www.w3.org/2000/svg'
											>
												<g fill='none' fill-rule='evenodd'>
													<path
														d='M34.437 18.602c0-1.15-.106-2.258-.301-3.32H18.549v6.28h8.907c-.384 2.029-1.55 3.748-3.302 4.9v4.072h5.348c3.13-2.826 4.935-6.988 4.935-11.932z'
														fill='#4285F4'
													/>
													<path
														d='M18.55 34.467c4.468 0 8.214-1.453 10.952-3.933l-5.348-4.073c-1.482.974-3.378 1.55-5.605 1.55-4.31 0-7.958-2.855-9.26-6.693H3.76v4.206c2.723 5.306 8.32 8.943 14.79 8.943z'
														fill='#34A853'
													/>
													<path
														d='M9.29 21.318a9.591 9.591 0 01-.52-3.084c0-1.07.188-2.11.52-3.085v-4.206H3.76a15.98 15.98 0 000 14.581l5.53-4.206z'
														fill='#FBBC05'
													/>
													<path
														d='M18.55 8.456c2.43 0 4.61.82 6.326 2.428l4.747-4.656C26.756 3.608 23.01 2 18.549 2 12.08 2 6.483 5.638 3.76 10.943l5.53 4.206c1.3-3.837 4.95-6.693 9.26-6.693z'
														fill='#EA4335'
													/>
												</g>
											</svg> */}
												Google
											</button>
										</div>
										<hr className='mt-6 border-b-1 border-gray-400' />
									</div>
									<div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
										<div className='text-gray-500 text-center mb-3 font-bold'>
											<small>Or sign in with credentials</small>
										</div>
										<form onSubmit={handleSubmit}>
											<div className='relative w-full mb-3'>
												<label
													className='block uppercase text-gray-700 text-xs font-bold mb-2'
													htmlFor='grid-password'
												>
													Email
												</label>
												<input
													type='email'
													className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
													placeholder='Email'
													style={{ transition: 'all .15s ease' }}
													value={email}
													onChange={e => handleEmail(e.target.value)}
												/>
											</div>

											<div className='relative w-full mb-3'>
												<label
													className='block uppercase text-gray-700 text-xs font-bold mb-2'
													htmlFor='grid-password'
												>
													Password
												</label>
												<input
													type='password'
													className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
													placeholder='Password'
													style={{ transition: 'all .15s ease' }}
													value={password}
													onChange={e => handlePassword(e.target.value)}
												/>
											</div>

											<div className='text-center mt-6'>
												<button
													className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
													type='submit'
													style={{ transition: 'all .15s ease' }}
												>
													Sign In
												</button>
											</div>
										</form>
									</div>
								</div>
								<div className='flex flex-wrap mt-6'>
									<div className='w-1/2'>
										<a
											href='#pablo'
											onClick={e => e.preventDefault()}
											className='text-gray-300'
										>
											<small>Forgot password?</small>
										</a>
									</div>
									<div className='w-1/2 text-right'>
										<Link to='/signup' className='text-gray-300'>
											<small>Create new account</small>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <FooterSmall absolute /> */}
				</section>
			</main>
		</>
	);
};

export default Login;
