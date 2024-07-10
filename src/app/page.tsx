import styles from './page.module.scss';
import Header from '@/components/header/header';
import TextButton from '@/components/textButton/TextButton';
import OutlinedButton from '@/components/outlinedButton/OutlinedButton';
import FilledButton from '@/components/filledButton/FilledButton';
const Home = () => {
	return (
		<div className={styles.page}>
			<Header />
			<TextButton text='Связаться с нами' />
			<OutlinedButton text='Связаться с нами' />
			<FilledButton text='Связаться с нами' />
		</div>
	);
};
export default Home;
