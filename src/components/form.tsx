import '../styles/form.css'
import {useState, FormEvent} from 'react';

interface FormProps {
    setUser: React.Dispatch<React.SetStateAction<string[]>>;
  }

export function Form( { setUser } : FormProps){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if (email === '' || password === ''){
            setError(true);
            return 
        }

        setError(false);
        setUser([email])
    }

    
    return(
        <section className='login-form-container'>
            <h1 className='login-title'>Bienvenido a <span className='login-title-bigger'>Clas<span className='login-title-bigger-bold'>sBrid</span>ge</span></h1>

            <form 
                action="" 
                className='form-container'
                onSubmit={handleSubmit}>
                <div className='login-form-group'>
                    <input 
                        id='email'
                        type='email'
                        name='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder=' '/>
                    <label className='login-label' htmlFor='email'>Correo Electrónico</label>
                </div>
                
                <div className='login-form-group'>
                    <input 
                        id='password'
                        name='password'
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder=''/>
                    <label className='login-label' htmlFor='password'>Contraseña</label>
                </div>
                
                <div className='login-accountSaver'>
                    <label htmlFor="recoverAccount">
                        <input
                            id='recoverAccount'
                            type='checkbox'
                            />
                        Recordar Cuenta
                    </label>
                    <a href="">Olvidé mi contraseña</a>
                </div>

                <button className='login-button'>Ingresar</button>


            </form>
            <div className="signIn">
                <p>¿No tienes cuenta? <a className='signIn-link' href='https://www.youtube.com/watch?v=v7GMG1aLyPw' target='_blank'> Registrarte</a></p>
            </div>
            {error && <h6 className='login-warning'>Todos los campos son obligatorios</h6>}
        </section>
    );
}