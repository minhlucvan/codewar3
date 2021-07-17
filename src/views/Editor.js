import { Card, CardContent, CardHeader, Container } from "@material-ui/core";
import Footer from "components/Footer";
import ProfileForm from "components/FormEdit/ProfileForm";
import Navbar from "components/Navbar";
import React from "react";

function Editor(props) {
  return (
    <>
      <Navbar transparnt />
      <Container style={{marginBottom:"20px"}}>
        <Card>
          <CardHeader title={<h2>Editor </h2>} />
          <CardContent>
            <ProfileForm />
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default Editor;
