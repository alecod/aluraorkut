import Maingrid from "../src/components/Maingrid";
import Box from "../src/components/Box";
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from "../src/lib/AluraCommons"

import React, {useState} from "react"

import {ProfileRelationsBoxWrapper} from "../src/components/ProfileRelations"

function ProfileSideBar(props) {
  
  return (
    <Box as="aside">

    <img src={`https://github.com/${props.gitHubUser}.png`} style={{ borderRadius: '8px' }} />
    <hr />
    <a className="boxLink" href={`https://github.com/${props.gitHubUser}`}> 
      @{props.gitHubUser}
    </a>
    <hr />

    <AlurakutProfileSidebarMenuDefault />
     </Box>
  )
}

export default function Home() {
  const gitHubUser = "alecod"


  const [comunidades, setComunidades] = useState([
   {
     id: '237817',
     title: 'Eu odeio acordar cedo',
     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvNFmfmweHT22Id-2sOvGEVpaAbkUpfqfQcdjvse_YTNP_jnKOlUwvV5YryEvqvxLcEA&usqp=CAU'
   }
  ])

  const pessoasFavoritas = [
        'juunegreiros',
        'omariosouto',
        'peas',
        'rafaballerini',
        'marcobrunodev',
        'felipefialho' 
]

  return (
    <>
    <AlurakutMenu />
    <Maingrid>
      <div
        className="profileArea"
        style={{
          gridArea: "profileArea",
        }}
      >
      <ProfileSideBar gitHubUser={gitHubUser}/>
      </div>
      <div
        className="welcomeArea"
        style={{
          gridArea: "welcomeArea",
        }}
      >
        <Box>
          <h1 className="title">Bem Vindo(a)</h1>
          <OrkutNostalgicIconSet />
        </Box>
        <Box>
          <h2 className="subTitle">O que voçê deseja fazer?</h2>
          <form onSubmit={function handleCriarComunidade(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target)

              const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image')
              }


              const comunidadesAtualizadas = [...comunidades, comunidade]
              setComunidades(comunidadesAtualizadas)
          }}>
            <div>
            <input placeholder="Qual vai ser o nome da sua comunidade?" 
            name="title" 
            aria-label="Qual vai ser o nome da sua comunidade"
            type="text"
            />
            </div>

            <div>
            <input placeholder="Coloque uma URL para a capa" 
            name="image" 
            aria-label="Coloque uma URL para a capa"
            type="text"
            />
            </div>
            <button type="submit">
              Criar comunidade
            </button>
          </form>
        </Box>
      </div>
      <div
        className="profileRelationsArea"
        style={{
          gridArea: "profileRelationsArea",
        }}
      >
       <ProfileRelationsBoxWrapper>
       <h2 className="smallTitle">Comunidades {comunidades.length} </h2>
       <ul>
          {comunidades.map((itemAtual) => {
              return (
                <li key={itemAtual.id}>
                <a href={`/users/${itemAtual.title}`} >
                  <img src={itemAtual.image} />
                  <span>{itemAtual.title}</span>
                </a>
                </li>
              )
          }) }
          </ul>

       </ProfileRelationsBoxWrapper>

        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">Amigos {pessoasFavoritas.length} </h2>
          <ul>
          {pessoasFavoritas.map((itemAtual) => {
              return (
                <li key={itemAtual}>
                <a href={`/users/${itemAtual}`} >
                  <img src={`https://github.com/${itemAtual}.png`} />
                  <span>{itemAtual}</span>
                </a>
                </li>
              )
          }) }
          </ul>
        </ProfileRelationsBoxWrapper>
        
      </div>

    </Maingrid>
    </>
  );
}
