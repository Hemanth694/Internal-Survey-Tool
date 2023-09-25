import * as React from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";
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
  console.log(currentDate);

  return (
    <React.Fragment>
    <TopNavigation
      identity={{
        href: "#",
        title: "Internal Survey Tool",
        logo: {
          src:"https://cdn4.vectorstock.com/i/1000x1000/88/53/document-with-stamp-and-pen-business-documents-vector-31048853.jpg",
        alt: "Service"
        }
      }}
      utilities={[
        {
          type: "button",
          iconName: "notification",
          title: "Notifications",
          ariaLabel: "Notifications (unread)",
          badge: true,
          disableUtilityCollapse: false
        },
        {
          type: "menu-dropdown",
          text: "Hemanth Potti",
          description: "email@example.com",
          iconName: "user-profile",
          items: [
            { id: "profile", text: "Profile" },
            { id: "preferences", text: "Preferences" },
            { id: "security", text: "Security" },
            {
              id: "support-group",
              text: "Support",
              items: [
                {
                  id: "documentation",
                  text: "Documentation",
                  href: "#",
                  external: true,
                  externalIconAriaLabel:
                    " (opens in new tab)"
                },
                { id: "support", text: "Support" },
                {
                  id: "feedback",
                  text: "Feedback",
                  href: "#",
                  external: true,
                  externalIconAriaLabel:
                    " (opens in new tab)"
                }
              ]
            },
            { id: "signout", text: "Sign out" }
          ]
        }
      ]}
    />
    
    <ContentLayout
      disableOverlap
      header={
        <SpaceBetween size="m" direction="horizontal">
        <div className="parent">
          <div className="child">
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



