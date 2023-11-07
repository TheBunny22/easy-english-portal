import styled from "@emotion/styled";
import React from "react";
import LessonPresentation from "./LessionPresentation";


const Wrapper = styled.div`
  display: flex;
  max-height: 89vh;
  background: var(--light);

`;

const SideBar = styled.div`
  flex: 0.3; /* Adjust the width of the sidebar */
  display: flex;
  position: static;
  flex-direction: column;
  background: var(--light);
  padding: 1rem;
  max-height: 90vh;
  overflow-y: scroll;
  overflow-y: auto; /* Enable vertical scrolling for the sidebar */
`;

const TabTiles = styled.div`
  padding: 1rem;
  background: var(--primary);
  color:var(--white);
  font-weight: 500;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  cursor: pointer; /* Add a pointer cursor to indicate interactivity */

  transition: background-color 0.3s; /* Add a transition for smooth hover effect */

  &:hover {
    color:var(--dark);
    background-color: #f0f0f0; /* Change background color on hover */
  }
`;

const Content = styled.div`
  flex: 2; /* Adjust the width of the content area */
  background: #fff;
  padding: 1rem;
  overflow-y: auto; /* Enable vertical scrolling for the content */
`;

const PhoneticsCourse = () => {
  return (
    <Wrapper>
      <SideBar>
        <TabTiles>1. Introduction</TabTiles>
        <TabTiles>2. Introduction</TabTiles>
        {/* Add more tabs as needed */}
      </SideBar>
      <Content>
        <LessonPresentation />
      </Content>
    </Wrapper>
  );
};

export default PhoneticsCourse;
