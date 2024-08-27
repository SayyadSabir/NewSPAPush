import React, { useState } from "react";
import { Box, Typography, Paper, Button, TextField, Grid } from "@mui/material";
import { navigateToUrl } from "single-spa";
// eslint-disable-next-line
interface UserState {
  name: string;
  address: string;
}
declare global {
  interface Window {
    commonStore: {
      setStore: (state: UserState) => void;
    };
  }
}
declare const window: Window;
const YourDetails: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleBackToOverview = () => {
    navigateToUrl("/");
  };
  const updateUser = () => {
    window.commonStore.setStore({ name, address });
  };

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
          Your Details
        </Typography>

        <Box sx={{ mt: 2 }}>
          <TextField
            label="Name"
            fullWidth
            sx={{ mb: 2 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Address"
            fullWidth
            sx={{ mb: 2 }}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {/* Add other form fields as needed */}
        </Box>

        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              onClick={updateUser}
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleBackToOverview}
            >
              Back to Overview
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default YourDetails;
