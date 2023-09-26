import * as React from "react";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import ContentLayout from "@cloudscape-design/components/content-layout";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Badge from "@cloudscape-design/components/badge";

export default function UserHomePage (){
  const [data, setData] = React.useState([
    { title:"Employee survey 1", due: ('2023-10-20'),id:1},
    { title:"Employee survey 2", due: ('2023-09-30'),id:2},
    { title:"Employee survey 3", due: ('2023-09-12'),id:3}
  ]);

  const today = new Date();
  const month = today.getMonth()+1;
  const year = today.getFullYear();
  const date = today. getDate();
  const currentDate = year + "/" + month + "/" + date;

  return (
    <React.Fragment>
    <ContentLayout
      disableOverlap
      header={
        <SpaceBetween size="m" direction="horizontal">
        <div className="parent">

            <div className="popup-center-horizontal">
              <Header
                description={false}
                hasFrame={false}
                headerBaseCounter={false}
                headerBaseLinkVisible={false}
                type="page-dark-header"> Welcome back Hemanth! 
              </Header>;
            </div>
          </div>

        </SpaceBetween>
      }
    >
    </ContentLayout>
    <div>
      {data.map(list=>(
        <div key={list.id}>
          <Container header={<Header variant="h2" actions={
              <SpaceBetween direction="horizontal" size="xs">
                <Button variant="primary">Start</Button>
              </SpaceBetween>}>{list.title}</Header>}> {list.due}    <Badge color="red">Overdue</Badge>
              </Container>
        </div>
      ))}
    </div>
    </React.Fragment>
  );
}
