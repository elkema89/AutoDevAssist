import style from './Landing.module.css'

const Landing = () =>{
    return (
    <div className={style.container}>
        <h1 className={style.titulo}>AutoDevAssist</h1>
        <h2 className={style.bienvenida}>Bienvenidos</h2>
        <a href='/home' className={style.btn}>Entrar</a>
    </div>
    )
};
export default Landing;