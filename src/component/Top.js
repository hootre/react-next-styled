import Gnb from "./Gnb";
import styled from "styled-components";
export default function Top() {
  const StyledLogoBox = styled.div`
    display: flex;
    padding-top: 20;
  `;
  const StyledLogo = styled.div`
    flex: "100px 0 0";
  `;
  return (
    <>
      <StyledLogoBox>
        <StyledLogo>
          <img src="/images/logo.jpg" alt="logo" />
        </StyledLogo>
        <header as="h1">코르동주</header>
      </StyledLogoBox>
      <Gnb />
    </>
  );
}
