import {Link} from 'react-router-dom'
import {Nav, NavLink} from '../../components/Nav/Nav'
//import Button from '../../components/Button/Button'

import ColdTurkeyLogo from '../../assets/img/cold_turkey_logo.png'

const Header = () => {
	return (
		<header
			style={{
				paddingTop: '1em',
				paddingBottom: '0.5em'
			}}
		>
			<div className='container flex ai-center jc-sb'>
				<Link to='/'>
					<img
						src={ColdTurkeyLogo}
						alt='Cold Turkey Logo'
						width='60'
						height='60'
					/>
				</Link>
				<h1>Cold Turkey</h1>
				<Nav>
					<NavLink to='/register'>Register</NavLink>
					<NavLink to='/login'>Login</NavLink>
				</Nav>
		
			</div>
		</header>
	)
}



export default Header
