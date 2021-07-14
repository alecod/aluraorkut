import Maingrid from "../src/components/Maingrid";
import Box from "../src/components/Box";
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from "../src/lib/AluraCommons"

import {ProfileRelationsBoxWrapper} from "../src/components/ProfileRelations"

function ProfileSideBar(props) {
  
  return (
    <Box>
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

  const pessoasFavoritas = [
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
          <form>
            <div>
            <input placeholder="Qual vai ser o nome da sua comunidade?" 
            name="title" 
            aria-label="Qual vai ser o nome da sua comunidade"
            type="text"
            />
            </div>

            <div>
            <input placeholder="Coloque uma URL para a capa" 
            name="" 
            aria-label="Coloque uma URL para a capa"
            type="text"
            />
            </div>
            <button>
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
        <Box>comunidades</Box>

        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">Pessoas da Comunidade {pessoasFavoritas.length} </h2>
          <ul>
          {pessoasFavoritas.map((itemAtual) => {
              return (
                <li>
                <a href={`/users/${itemAtual}`} key={itemAtual}>
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
