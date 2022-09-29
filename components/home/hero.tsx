import { Container, Stack, Typography, Button } from '@mui/material';
import { Box } from '@mui/system'
import Image from 'next/image';
import * as React from 'react'

export function HeroSection () {
  const avatar = 'https://res.cloudinary.com/dflcax7yz/image/upload/v1664337503/Portfolio_SINH/ava_circle_sc8pfc.png'
  return (
    <Box
      component="section"
      pt={{ xs:4, md:18 }}
      pb={{ xs:7, md:9 }}
    >
      <Container>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'start' }}
          spacing={6}
        >
          <Box>
            <Typography
              component="h1"
              variant="h3"
              fontWeight="bold"
              mb={{ xs: 3.5, md: 5 }}
            >
              Hi, I am Sinh, <br/>
              Full-stack Engineer
            </Typography>

            <Typography mb={{ xs: 3.5, md: 5 }}>
              More than 5 year experience for maintenance and work with big project.<br/>
              Experience about design data, structure connection and extend project.<br/><br/>
              Good knowledge of REST-full API, Laravel, CI 2x3x, Nodejs, ReactJs, …
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
            <Image
              src={avatar}
              alt="avatar"
              width={240}
              height={240}
              layout="fixed"
              loading="lazy"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
