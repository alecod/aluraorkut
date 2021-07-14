import styled from "styled-components";

const Maingrid =  styled.main`
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-gap: 10px;
    padding: 16px;
    .profileArea {
      display: none;
        @media (min-width: 860px){
          display: block;
        }
      
    }
    @media(min-width: 860px){
      max-width: 1110px;
      grid-template-columns: 160px 1fr 312px;
      grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    }
   
`

export default Maingrid