import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import {
    HomeIcon,
    UserIcon,
    ExploreIcon,
    LiveIcon,
    HomeActiveIcon,
    UserActiveIcon,
    ExploreActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import SuggestedLogin from '~/components/SuggestedLogin';
import FooterSide from './FooterSide';
import { useContext, useRef } from 'react';
import { LoginContext } from '~/components/LoginProvider';

const cx = classNames.bind(styles);

function Sidebar() {
    const contextLogin = useContext(LoginContext);
    const sidebarRef = useRef(null);
    return (
        <aside className={cx('wrapper')}>
            <div ref={sidebarRef} className={cx('sidebar-nav')}>
                <Menu className={cx('menu')}>
                    <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserIcon />}
                        activeIcon={<UserActiveIcon />}
                    />
                    <MenuItem
                        title="Explore"
                        to={config.routes.explore}
                        icon={<ExploreIcon />}
                        activeIcon={<ExploreActiveIcon />}
                    />
                    <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                </Menu>
                {contextLogin.data ? (
                    <div>
                        <SuggestedAccounts label="Suggested accounts" />
                        <SuggestedAccounts label="Following accounts" />
                    </div>
                ) : (
                    <SuggestedLogin />
                )}
                <FooterSide />
                <div style={{ display: 'none' ,height: 'calc(100% - 450px)' }} className={cx('scrollbar-control')}></div>
            </div>
        </aside>
    );
}

export default Sidebar;
