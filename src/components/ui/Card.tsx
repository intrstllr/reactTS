import React, { FC } from "react";

export enum CardVariants {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactNode
    variant?: CardVariants
    className?: string
}

const Card: FC<CardProps> = ({ width, height, children, variant, className }) => {
    return (
        <div style={{
            width, height,
            border: variant === CardVariants.outlined ? '1px solid black' : ' none',
            background: variant === CardVariants.primary ? 'lightgray' : '',
        }} className={`some-css-className ${className}`}>
            {children}
        </div>

    )
}


export default Card