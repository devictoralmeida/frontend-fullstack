import styled from "styled-components";

interface INavStylesProps {
  isbutton: "true" | "false";
}

export const NavStyles = styled.nav<INavStylesProps>`
  width: 100%;
  min-height: 2.5rem;
  display: flex;
  justify-content: ${({ isbutton }) => (isbutton == "true" ? "space-between" : "center")};
  align-items: center;
  margin: 0 auto;

  p {
    color: var(--color-color-primary);
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
  }
  
  .buttons-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
