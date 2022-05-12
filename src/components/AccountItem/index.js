import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://cloutnews.com/wp-content/uploads/2021/08/HD-wallpaper-lisa-blackpink-bp-jennie-jisoo-lalisa-lisa-manoban-rose.jpg"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Haillee Steinfeld</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={cx('username')}>@lisa_haillee</span>
            </div>
        </div>
    )
}

export default AccountItem
