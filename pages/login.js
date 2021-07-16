import React from 'react'

import { useRouter } from 'next/router'

export default function LoginPage() {

    const router = useRouter()

    const [githubUser, setGithubUser] = React.useState('')

    function handleSubmit(e){ 
        e.preventDefault()
        router.push('/')
    }

    return (
        <main style={{ 
            display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'
        }}>
            <div className="loginScreen">
                <section className="logoArea">
                    <img src="https://alurakut.vercel.app/logo.svg" />
                    <p><strong>Conecte-se</strong> com seus amigos</p>
                    <p><strong>Conheça</strong> novas pessoas</p>
                    <p><strong>Compartilhe</strong> seus videos, fotos e paixaoes em um só lugar</p>
                </section>

                <section className="formArea">
                    <form className="form" onSubmit={handleSubmit}>
                        <p>Acesse agora mesmo com seu usuario <strong>Github</strong></p>
                        <input  placeholder="Usuario"  value={githubUser}  onChange={(evento)  => {
                                setGithubUser(evento.target.value)
                        }} />
                        <button type="submit">Login</button>
                    </form>
                    <fotter className="box">
                        <p>Ainda não é membro?
                            <br />
                            <a href="/">
                                <strong>
                                Entrar já
                                </strong>
                            </a>
                        </p>
                    </fotter>

                </section>

                <footer className="footerArea">
                    <p>2021 alura.com.br - <a>Sobre o Orkut</a> - <a>Centro de ações</a> </p>
                </footer>
            </div>
        </main>
    )
}