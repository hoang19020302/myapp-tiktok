import classNames from 'classnames/bind';
import styles from './SuggestedLogin.module.scss';
import { useContext } from 'react';
import { ModalContext } from '~/components/ModalProvider';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function SuggestedLogin() {
    const contextModal = useContext(ModalContext);

    const handleOpenFormLogin = () => {
        contextModal.handleShowModal();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h4 className={cx('title')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</h4>
                <Button onClick={handleOpenFormLogin} className={cx('btn-login')} large outline>
                    Log in
                </Button>
            </div>
        </div>
    );
}

export default SuggestedLogin;