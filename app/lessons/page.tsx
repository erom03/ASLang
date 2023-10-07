import React from 'react';
import Navigation from "../components/navigation";
import GetOutput from "../components/get_output"
import util from 'node:util';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const exec = util.promisify(require('node:child_process').exec);

// Define the BasicStack function outside of JSX
function BasicStack() {
  return (
    <Box sx={{ width: '100%' }}>
      {/* Center align the Stack */}
      <Stack spacing={6} sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Button variant="outlined" color="error" href="lessons"> View Our Courses </Button>
        <Button variant="outlined" color="error" href="lessons"> View Our Courses </Button>
        <Button variant="outlined" color="error" href="lessons"> View Our Courses </Button>
      </Stack>
    </Box>
  );
}

const Lessons = () => {
  return (
    <section>
      <header><Navigation /></header>
      <BasicStack /> {/* Use the BasicStack component here */}
      <div>lessons page here</div>
      <GetOutput />
    </section>
  )
}

export default Lessons;
