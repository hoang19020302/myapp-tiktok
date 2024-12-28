import { useEffect, useState, useContext } from 'react';
import classNames from 'classnames/bind';

import Content from '~/layouts/components/Content';
import Image from '~/components/Image';
import images from '~/assets/images';
import * as getListVideoService from '~/service/GetVideoServices';
import { getComment } from '~/service/GetComment';
import ActionsApp from '~/components/ActionsApp';
import styles from './Home.module.scss';
import { LoginContext } from '~/components/LoginProvider';

const cx = classNames.bind(styles);

function Home() {
    const [contentData, setContentData] = useState([]);
    const [page, setPage] = useState(1);
    const contextLogin = useContext(LoginContext);

    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const result = await getListVideoService.getListVideo('for-you', page);
    //         setContentData((prev) => [...prev, ...result]);
    //     };

    //     fetchApi();
    // }, [page]);

    // Test chức năng comment
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getComment();
            console.log('ResultComment: ', result);
        };

        fetchApi();
    }, [page]);

    function handleScroll() {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            setPage((page) => page + 1);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{ height: '100%' }}>
            {/* <Image src={images.backgroundImage} alt="Freshy Image" className={cx('background-image')}/> */}
            <Content data={contentData} />
            <ActionsApp />
        </div>
    )
}

export default Home;
