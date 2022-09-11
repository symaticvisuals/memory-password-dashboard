import React, { useState } from 'react';
import { Box, Button, ButtonBase, Container, Stack, Typography } from '@mui/material';

function EmailAuth() {
  return (
    <div>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '10px',
          padding: '10px 20px',
          borderRadius: '10px',
          background: '#e8eef7',
        }}
      >
        <Typography variant="h3" style={{ fontWeight: '500', fontStyle: 'oblique' }}>
          An email has been sent to you for verification. Check your registered email id.
        </Typography>
      </Box>
      <Box mt={10} />
    </div>
  );
}

export default EmailAuth;
