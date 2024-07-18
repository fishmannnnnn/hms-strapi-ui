import styles from './page.module.scss';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Advantages from '@/components/advantages/Advantages';
import Stats from '@/components/stats/Stats';
const Home = () => {
	return (
		<div className={styles.page}>
			<Hero />
			<About />
			<Advantages />
			<Stats />
		</div>
	);
};
export default Home;
