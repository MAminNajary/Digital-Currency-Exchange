import React from 'react';

// styles
import styles from '../styles/Coin.module.css';

const Coin = ({img, name, symbol, price, marketCap, priceChange}) => {
    return (
        <div className={styles.container}>
            <img src={img} alt={name} />
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? styles.greenPrice : styles.redPrice}>% {priceChange}</span>
            <span>$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;