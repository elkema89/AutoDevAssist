import style from "./Home.module.css";
import useLLM from "usellm";
import { useState } from "react";
import validate from "../Validate/Validate";
import Option from "./option";

const Home = () => {

    const [result, setResult] = useState("");
    const [input, setInput] = useState({
        sector: "",
        lenguage: "",
        framework: "",
        library: "",
        product: ""
    });
    const llm = useLLM({ serviceUrl: 'https://usellm.org/api/llm' });
    const [error, setErrors] = useState();

    const handleChange = (event) => {
        //? Manejo del input
        const { name, value } = event.target;
        const error = validate(name, value);
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            //? Manejo de errores
            ...prevErrors,
            [name]: error,
        }));
    };
    const handlerSubmit = async () => {
        const data = await llm.chat({
            messages: [{
                role: "user",
                content: `solicito solo codigo del lado del ${input.sector} en el lenguaje ${input.lenguage} con framework ${input.framework} para realizar el ${input.product} `
            }],
            stream: true,
            onStream: ({ message }) => setResult(message.content)
        });
        console.log(result);
    };

    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={(e) => {
                e.preventDefault();
                handlerSubmit();
            }}>
                <h1 >AutoDevAssist</h1>
                <h2 >Seleccionar Sector</h2>
                <div className={style.checkbox}>
                    <div className={style.checked}>
                        <label className={style.titulo}>Frontend</label>
                        <input
                            type="radio" ponse
                            name="sector"
                            onChange={handleChange}
                            value="Frontend"
                        />
                    </div>
                    <div className={style.checked}>
                        <label className={style.titulo}>Backend</label>
                        <input
                            type="radio"
                            name="sector"
                            onChange={handleChange}
                            value="Backend"
                        />
                    </div>
                </div>
                {input.sector && (
                    <div className={style.checked}>
                        <label className={style.titulo}>Lenguage</label>
                        <select
                            className={style.input}
                            name="lenguage"
                            onChange={handleChange}
                        >
                            <option defaultChecked value=""></option>
                            {input.sector === "Frontend" ? (
                                <>
                                    <option value="javascript">Javascript</option>
                                    <option value="css">CSS</option>
                                </>
                            ) : (
                                <>
                                    <option value="nodejs">Node.js</option>
                                    <option value="php">PHP</option>
                                    <option value="python">Python</option>
                                </>
                            )}
                        </select>
                    </div>
                )}
                {input.lenguage && (


                    <div className={style.checked}>
                        {/* Agrega más selectores según sea necesario */}
                        <label className={style.titulo}>Framework</label>
                        <select
                            className={style.input}
                            name="framework"
                            onChange={handleChange}
                        >
                            {/* Opciones de frameworks según el lenguaje seleccionado */}
                            {input.lenguage === "javascript" ? (
                                <>
                                    <option defaultChecked value=""></option>
                                    <option name="framework" value="react">React</option>
                                    <option name="framework" value="angular">Angular</option>
                                    <option name="framework" value="vue">Vue</option>
                                    {/* Agrega más opciones según sea necesario */}
                                </>
                            ) : input.lenguage === "css" ? (
                                <>
                                    <option defaultChecked value=""></option>
                                    <option name="framework" value="bootstrap">Bootstrap</option>
                                    <option name="framework" value="tailwind">Tailwind</option>
                                    {/* Agrega más opciones según sea necesario */}
                                </>
                            ) : input.lenguage === "nodejs" ? (
                                <>
                                    <option defaultChecked value=""></option>
                                    <option name="framework" value="express">Express</option>
                                    <option name="framework" value="koa">Koa</option>
                                    {/* Agrega más opciones según sea necesario */}
                                </>
                            ) : input.lenguage === "php" ? (
                                <>
                                    <option defaultChecked value=""></option>
                                    <option name="framework" value="laravel">Laravel</option>
                                    <option name="framework" value="symfony">Symfony</option>
                                    {/* Agrega más opciones según sea necesario */}
                                </>
                            ) : input.lenguage === "python" ? (
                                <>
                                    <option defaultChecked value=""></option>
                                    <option name="framework" value="django">Django</option>
                                    <option name="framework" value="flask">Flask</option>
                                    {/* Agrega más opciones según sea necesario */}
                                </>
                            ) : null}
                        </select>
                    </div>)}
                {/*input.framework && (

                    <div className={style.checked}>
                        <label className={style.titulo}>Librería</label>
                        <input
                            type="text"
                            name="library"
                            className={style.input}
                            value={input.library}
                            onChange={handleChange}
                            placeholder="Ingresa la librería"
                        />
                    </div>
                )*/}

                <div className={style.checked}>
                    <label className={style.titulo}>Tipo de Producto</label>
                    <input
                        className={style.input}
                        name="product"
                        onChange={handleChange}
                        value={input.product}
                    />
                </div>
            </form>
            <button onClick={handlerSubmit} className={style.btn}>Solicitar Codigo</button>
            <div className={style.res}>
            <div className={style.result} style={{whiteSpace: "pre-wrap"}}>{result}</div>
            </div>
        </div>
    );

};

export default Home;
