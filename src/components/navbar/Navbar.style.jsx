import styled from "@emotion/styled";

const Nav_Outer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: var(--white);
  color:var(--cyan);
  box-shadow: 0 0 5px 1px var(--gray-dark);
`;

const Nav_right = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export { Nav_Outer, Nav_right };
