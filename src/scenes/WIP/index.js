import React from "react";
import styled from "styled-components";
import Button from "components/Button";
import { WIPArtwork } from "./_links";

const Container = styled.div`
   padding: 3vh;
   background: #fff;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   color: #333;
`;

const Image = styled.img`
   width: 100%;
   max-width: 600px;
`;

const ButtonContainer = styled.div`
   margin-top: 3vh;
`;

const WorkInProgress = ({ history }) => {
   return (
      <Container>
         <Image src={WIPArtwork} alt="" />
         <h2>Sadly, we do not have this page yet</h2>
         <ButtonContainer>
            <Button
               background="#3A3A50"
               color="white"
               onClick={() => history.push("/")}
            >
               Go to home page
            </Button>
         </ButtonContainer>
      </Container >
   );
};

export default WorkInProgress;
