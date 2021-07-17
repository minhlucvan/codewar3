import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import FormSpacer from "components/FormSpacer";
import React from "react";
import ImagePicker from "./components/ImagePicker";
import { structure } from "./structure";

function ProfileForm(props) {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (e) => {};
  return (
    <form>
      {structure.map((item, index) => {
        return (
          <>
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item.section}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  {item.fields.map((field, index) => {
                    if (field.type === "switch") {
                      return (
                        <Grid item xs={12} sm={field.grid}>
                          {field.component({ checked, handleChange })}
                        </Grid>
                      );
                    }
                    if (field.type === "image") {
                      return (
                        <Grid item xs={12} sm={field.grid}>
                          {field.component({ title: "Avatar" })}
                        </Grid>
                      );
                    }
                    return (
                      <Grid item xs={12} sm={field.grid}>
                        {field.component()}
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <FormSpacer />
          </>
        );
      })}
    </form>
  );
}

export default ProfileForm;
