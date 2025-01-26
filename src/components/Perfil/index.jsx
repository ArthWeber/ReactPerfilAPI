import styles from './Perfil.module.css';

const Perfil = ({ username }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.name}>
                Olá, {username}!
            </h1>
            <img className={styles.avatar} src={`https://github.com/${username}.png`} />
        </header>
    )
}

export default Perfil;