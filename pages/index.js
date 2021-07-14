import Maingrid from "../src/components/Maingrid";
import Box from "../src/components/Box";

function ProfileSideBar(props) {
  
  return (
    <Box>
    <img src={`https://github.com/${props.gitHubUser}.png`} style={{ borderRadius: '8px' }} />
     </Box>
  )
}

export default function Home() {
  const gitHubUser = "alecod";

  return (
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
        <Box>bem vindo</Box>
      </div>
      <div
        className="profileRelationsArea"
        style={{
          gridArea: "profileRelationsArea",
        }}
      >
        <Box>comunidades</Box>
        <Box>Pessoas comunidades</Box>
      </div>
    </Maingrid>
  );
}
