import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ username }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 1000);
            })
    }, [username])

    return (
        <div className="container">
            {estaCarregando && (
                <h3 className={styles.load}>Carregando...</h3>
            )}
            {!estaCarregando && (
                <div>
                    <h3 className={styles.load}>Você possui {repos.length} repositórios públicos:</h3>
                    <ul className={styles.list}>
                        {repos.map(repositorio => (
                            <li key={repositorio.id} className={styles.listItem}>
                                <div className={styles.itemName}>
                                    <b>Nome:</b> {repositorio.name} <br />
                                </div>
                                <div className={styles.itemLanguage}>
                                    <b>Linguagem:</b> {repositorio.language} <br />
                                </div>
                                <a className={styles.itemHtmlUrl} target="_blank" href={repositorio.html_url}>Ver no GitHub</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ReposList;