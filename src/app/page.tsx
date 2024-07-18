import styles from './page.module.scss';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Advantages from '@/components/advantages/Advantages';
import Stats from '@/components/stats/Stats';
import Clients from '@/components/clients/Clients';
const Home = () => {
	return (
		<div className={styles.page}>
			<Hero />
			<About />
			<Advantages />
			<Stats />
			<Clients />
		</div>
	);
};
export default Home;
