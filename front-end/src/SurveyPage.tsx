import { Box, Button, Container, ContentLayout, Form, FormField, Input, RadioGroup, Select, SpaceBetween } from "@cloudscape-design/components";
import AppLayout from "@cloudscape-design/components/app-layout";
import Multiselect from "@cloudscape-design/components/multiselect";
import React from "react";

export default function SurveyPage() {
    const [inputValue, setInputValue] = React.useState("");
    const [selectedOptions, setSelectedOptions] = React.useState([
    {

    }
    ]);
    return(
        <AppLayout 
            navigationHide={true} 
            toolsHide={true}
            content={
                <ContentLayout disableOverlap={true}>
                    <SpaceBetween size="xxl">
                        <Container header={
                            <Box textAlign="center" variant="h1">
                                Employee Engagement and Satisfaction Survey</Box>
                        }>
                        </Container>
                            <SpaceBetween size="xxl">
                                <form onSubmit={e => e.preventDefault()}>
                                <Form
                                    actions={
                                    <SpaceBetween direction="horizontal" size="xs">
                                            <div className="formbuttons">
                                            <Button formAction="none" variant="link"> Cancel </Button>
                                            <Button variant="primary">Submit</Button>
                                            </div>
                                        </SpaceBetween> 
                                    }>
                                    <SpaceBetween size="xxl">
                                        <FormField label="What is one thing that could improve your experience at work?">
                                        <Input
                                            placeholder="Placeholder Text"
                                            value={inputValue}
                                            onChange={event => setInputValue(event.detail.value)} />
                                        </FormField>
                                        <FormField label="How would you describe your overall satisfaction with your current role?">
                                        <RadioGroup items={[
                                            { value: "first", label: "Good" }, { value: "second", label: "Average" }, { value: "third", label: "Bad" }
                                        ]} value={null} />
                                        </FormField>
                                        <FormField label="Which department or team do you feel could benefit from more collaboration with your own?">
                                            <Select options={[
                                                { label: "Option 1" }, { label: "Option 2" }, { label: "Option 3" }, { label: "Option 4" }
                                        ]} selectedOption={null} />
                                        </FormField>
                                        <FormField label="Which of the following resources would you find beneficial for your professional growth? (Select all that apply)">
                                            <Multiselect
                                                selectedOptions = {selectedOptions}
                                                onChange={(selectedOptions) =>
                                                    setSelectedOptions(selectedOptions)
                                                }
                                                options={[
                                                    {
                                                        label: "Option 1",
                                                        value: "1",
                                                        description: "Description for option 1"
                                                    },
                                                    {
                                                        label: "Option 2",
                                                        value: "2",
                                                        description: "Description for option 2"
                                                    },
                                                    {
                                                        label: "Option 3",
                                                        value: "3",
                                                        description: "Description for option 3"
                                                    },
                                                    {
                                                        label: "Option 4",
                                                        value: "4",
                                                        description: "Description for option 4"
                                                    }
                                                ]}
                                                placeholder="Choose Options"
                                            />
                                        </FormField>
                                    </SpaceBetween>
                                </Form>
                                </form>
                            </SpaceBetween>
                    </SpaceBetween>
                </ContentLayout>
            }
        />
    );

}