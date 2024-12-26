import React from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

const InputHolder = ({
                         children,
                         className,
                         labelTitle,
                         id,
                         error,
                     }) => {
    return (
        <div
            className={cx(styles.container, className)}
        >
            <label htmlFor={id} className={styles.title}>
                {labelTitle}
            </label>
            {children}
            {error && <p className={styles.error}>
                <div className={styles.dot}>.</div>
                {error}
            </p>}
        </div>
    )
}

export default InputHolder
