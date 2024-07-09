import Image from 'next/image';
import styles from './page.module.scss';
import Header from '@/components/header/header';
import TextButton from '@/components/textButton/textButton';
const Home = () => {
	return (
		<div className={styles.page}>
			<Header />
			<TextButton text='dsd' />
			dfdsf
		</div>
	);
};
export default Home;
