import * as React from "react";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import ContentLayout from "@cloudscape-design/components/content-layout";
import AppLayout from "@cloudscape-design/components/app-layout";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Badge from "@cloudscape-design/components/badge";
import Box from "@cloudscape-design/components/box";

export default function UserHomePage () {
  const [surveys, setSurveys] = React.useState([
    { title: "Employee survey 1", due: '2023-10-20', id:1 },
    { title: "Employee survey 2", due: '2023-09-30', id:2 },
    { title: "Employee survey 3", due: '2023-09-12', id:3 }
  ]);
  const todayDate = new Date();

  return (
    <AppLayout 
      navigationHide={true} 
      toolsHide={true}
      content={
      <ContentLayout
        disableOverlap={true}
        header={
          <Box margin={{ top: "xxxl", bottom: "xxxl" }} textAlign="center" variant="h1">
            Welcome back Hemanth!
          </Box>
        }>
          <Box margin={{ top: "l" }}>
            <SpaceBetween size="l">
            {
              surveys.map(survey => (
                <Container key={survey.id}
                  header={
                    <Header variant="h2" 
                            actions={<Button variant="primary">Start</Button>}>
                      {survey.title}
                    </Header>}>
                  <SpaceBetween direction="horizontal" size="xs">
                    <span style={{ color: '#414d5c' }}>
                      Due: {survey.due}
                    </span>
                    { Date.parse(survey.due) < todayDate.getTime() && <Badge color="red">Overdue</Badge> }
                  </SpaceBetween>
                </Container>
              ))
            }
            </SpaceBetween>
          </Box>
      </ContentLayout>
      } 
    />
  );
}
