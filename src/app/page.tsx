import styles from './page.module.scss';
import Hero from '@/components/hero/Hero';
const Home = () => {
	return (
		<div className={styles.page}>
			<Hero />
		</div>
	);
};
export default Home;
