import { Container, Stack, Typography, Button } from '@mui/material';
import { Box } from '@mui/system'
import Image from 'next/image';
import * as React from 'react'
import avatar from '@/images/avatar_ex.png'

export function HeroSection () {
  return (
    <Box component="section" pt={18} pb={9}>
      <Container>
        <Stack direction="row" alignItems="flex-start" spacing={6}>
          <Box>
            <Typography component="h1" variant="h3" fontWeight="bold" mb={5}>
              Hi, I am Sinh, <br/>
              Full-stack Developer
            </Typography>

            <Typography mb={5}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor
              do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>

            <Button variant="contained">Download Resume</Button>
          </Box>
          <Box
            sx={{
              minWidth: '240px',
              boxShadow: '-5px 13px',
              color: 'secondary.light',
              borderRadius: '50%',
            }}
          >
            <Image src={avatar} layout="responsive" alt="avatar" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
