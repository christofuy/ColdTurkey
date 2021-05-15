import {Link} from 'react-router-dom'
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

			</div>
		</header>
	)
}



export default Header
