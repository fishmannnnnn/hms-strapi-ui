import styles from './page.module.scss';
import TextButton from '@/components/textButton/TextButton';
import OutlinedButton from '@/components/outlinedButton/OutlinedButton';
import FilledButton from '@/components/filledButton/FilledButton';
const Home = () => {
	return (
		<div className={styles.page}>
			<FilledButton text='Связаться с нами' />
		</div>
	);
};
export default Home;
