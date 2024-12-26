import classNames from 'classnames';
import styles from './Home.module.scss';
import Image from '~/components/Images';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home-page')}>
            <Image src={images.backgroundImage} alt="Freshy" className="background-image" />
        </div>
    );
}

export default Home;
