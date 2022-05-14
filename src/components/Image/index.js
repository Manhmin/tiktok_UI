import classNames from 'classnames'
import { forwardRef, useState } from 'react'
import image from '~/assets/images'
import style from './Image.module.scss'

const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallback: customFallback = image.noImage,
            ...props
        },
        ref,
    ) => {
        const [fallback, setFallback] = useState('')

        const handleError = () => {
            setFallback(customFallback)
        }

        return (
            <img
                className={classNames(style.wrapper, className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        )
    },
)

export default Image
