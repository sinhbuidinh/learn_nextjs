import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system'
import * as React from 'react'
import { Work } from '@/models';
import { WorkList } from '../work';

const workList: Work[] = [
  {
    id: 1,
    title: 'Hello Health Group',
    createdAt: '1663583795346',
    updatedAt: '1663583795346',
    tagList: ['Account Executive', 'Developer'],
    shortDescription: 'Democratising health & wellness knowledge. Empowering millions of people in Asia to live healthier & happier lives.',
    fullDescription: '',
    thumbnailUrl: 'https://res.cloudinary.com/dflcax7yz/image/upload/v1664274584/Portfolio_ES/dashboard_fs8tvj.jpg',
    reference: 'https://www.linkedin.com/company/hello-health-group/jobs/',
  },
  {
    id: 2,
    title: 'Lifull Tech Viet Nam',
    createdAt: '1643117400000',
    updatedAt: '1643117400000',
    tagList: ['Developer', 'BrSE', 'QA'],
    shortDescription: 'Entrusted development, the deliverables are pre-determined with certain delivery date. The development will be carried out after man-hours and the cost is estimated.',
    fullDescription: '',
    thumbnailUrl: 'https://res.cloudinary.com/dflcax7yz/image/upload/v1664274585/Portfolio_ES/illustration_atpysk.jpg',
    reference: 'https://lifull-tech.vn/en#recruit',
  },
  {
    id: 3,
    title: '36 Days of Malayalam type',
    createdAt: '1643117400000',
    updatedAt: '1643117400000',
    tagList: ['Typography'],
    shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    fullDescription: '',
    thumbnailUrl: 'https://res.cloudinary.com/dflcax7yz/image/upload/v1664274584/Portfolio_ES/typography_xis4zm.jpg',
    reference: null,
  }
];

export function FeaturedWorksSection () {
  return (
    <Box
      component="section"
      pt={2}
      pb={4}
    >
      <Container>
        <Typography pb={2} variant="h2">Featured Works</Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
