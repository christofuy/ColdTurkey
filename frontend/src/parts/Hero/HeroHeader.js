import {Link} from 'react-router-dom'
// import {Nav, NavLink} from '../../components/Nav/Nav'
import Button from '../../components/Button/Button'
import useAuth from '../../utils/useAuth'

import './heroheader.scss'

import ColdTurkeyLogo from '../../assets/img/cold_turkey_logo.png'

const Header = () => {
	const {user} = useAuth()
	return (
		<header className = 'header'
			style={{
				paddingTop: '1em',
				paddingBottom: '0.5em'
			}}>
				
			<div className = 'logo'>
				<Link to='/'>
					<img
						src={ColdTurkeyLogo}
						alt='Cold Turkey Logo'
						width='60'
						height='60'
					/>	
					<p className = 'text'>Cold Turkey</p>
				</Link>
				
				
			</div>
			<div className = 'links'>
				{/* <Nav>
					<NavLink to='/register'>
						<h1 className = 'link-text'>Register</h1>
					</NavLink>
					<NavLink to='/login'>
						<h1 className = 'link-text'> Login</h1>
					</NavLink>
				</Nav> */}
				<Button
					className = 'header-button'
					variant='outlined'
					color='secondary'
					to={user ? '/dashboard' : '/register'}
				>
					{user ? 'Dashboard' : 'Register'}</Button>
				<Button className = 'header-button'
					variant='outlined'
					color='secondary'
					to={user ? '/dashboard' : '/login'}
				>
					{user ? 'Dashboard' : 'Log in'}</Button>
			</div>
			
		</header>
	)
}



export default Header
