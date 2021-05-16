import {Formik, Form} from 'formik'
import TextField from '../../components/Form/TextField'
import Button from '../../components/Button/Button'
import {Link} from 'react-router-dom'
import './registerform.scss'



const initialValues = {
	name: '',
	email: '',
	password1: '',
	password2: ''
}

const RegisterForm = () => {
	return (
		<div className='register-form'>
				<div className='form'>
					<Formik
						initialValues={initialValues}
					>
						{
							({dirty, isSubmitting, isValid}) => (
								<Form className='flex flex-column'>
									<h2>Register</h2>
									<TextField
										name='name'
										type='text'
										label='First and Last Name'
										autoComplete='name'
										required
										autoFocus
									/>
									<TextField
										name='email'
										type='email'
										label='Email'
										autoComplete='email'
										required
									/>
									<TextField
										name='password1'
										type='password'
										label='Password'
										autoComplete='new-password'
										required
									/>
									<TextField
										name='password2'
										type='password'
										label='Confirm Password'
										autoComplete='new-password'
										required
									/>
									<Button
										variant='contained'
										color='primary'
										disabled={!dirty || isSubmitting || !isValid}
										type='submit'
									>
										Register
									</Button>
								</Form>
							)
						}
					</Formik>
					<div className='helpLinks flex flex-column ai-center'>
						<Link to='/login'>Already committed with Cold Turkey? Log in.</Link>
						<Link to='/'>Back to Home</Link>
					</div>
				</div>
			<div className='background-auth' />
		</div>
	)
}


export default RegisterForm
