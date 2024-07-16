import styles from './page.module.scss';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Advantages from '@/components/advantages/Advantages';
const Home = () => {
	return (
		<div className={styles.page}>
			<Hero />
			<About />
			<Advantages />
		</div>
	);
};
export default Home;
