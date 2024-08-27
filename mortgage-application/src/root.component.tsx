import React, { useState } from "react";
import { Box, Typography, Paper, Button, Grid } from "@mui/material";
import { navigateToUrl } from "single-spa";
interface Window {
  commonStore: {
    getStore: () => any;
  };
}

declare const window: Window;

const store = window.commonStore.getStore();
console.log('Current state in Your Application component:', store.getState());
const MortgageApplication: React.FC = () => {
  // const user = useSelector((state: UserState) => state);
  const { name, address } = store.getState();

  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    setCurrentSection(section);
    navigateToUrl(section);
  };

  if (currentSection) {
    return null; // Return null if a section is selected, the MFE will load
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 4, width: "80%", textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          Residential Mortgage Application
        </Typography>
        
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              color="primary"
              onClick={() => handleSectionClick("/your-details")}
            >
              Your Details - {name} - {address}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              color="primary"
              onClick={() => handleSectionClick("/client-details")}
            >
              Client Details
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              color="primary"
              onClick={() => handleSectionClick("/barclays-mortgage")}
            >
              Barclays Mortgage to be Changed
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default MortgageApplication;
