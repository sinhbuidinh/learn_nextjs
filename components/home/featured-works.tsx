import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system'
import * as React from 'react'
import { Work } from '@/models';
import { WorkList } from '../work';

const workList: Work[] = [
  {
    id: 1,
    title: 'Designing Dashboards',
    createdAt: '1663583795346',
    updatedAt: '1663583795346',
    tagList: ['Dashboard'],
    shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    fullDescription: '',
    thumbnailUrl: 'https://res.cloudinary.com/dflcax7yz/image/upload/v1664274584/Portfolio_ES/dashboard_fs8tvj.jpg',
  },
  {
    id: 2,
    title: 'Vibrant Portraits of 2020',
    createdAt: '1643117400000',
    updatedAt: '1643117400000',
    tagList: ['Illustration'],
    shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    fullDescription: '',
    thumbnailUrl: 'https://res.cloudinary.com/dflcax7yz/image/upload/v1664274585/Portfolio_ES/illustration_atpysk.jpg',
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
        <Typography pb={2} variant="h5">Featured Works</Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
