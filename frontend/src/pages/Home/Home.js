import Hero from '../../parts/Hero/Hero'
import HeroHeader from '../../parts/Hero/HeroHeader'

const Home = () => {
	return (
		<div className='home flex flex-column' style={{height: '100vh'}}>
			<HeroHeader />
            <Hero />
		</div>
	)
}


export default Home
