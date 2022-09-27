import { Work } from '@/models';
import { Stack, Box, Chip, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

export interface IWorkCardProps {
  work: Work
}

export function WorkCard ({ work }: IWorkCardProps) {
  const tagListStr = work.tagList.join(', ')

  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      spacing={2}
    >
      <Box
        width={{
          xs: '100%',
          md: '240px',
        }}
        flexShrink={0}
      >
        <Image
          src={work.thumbnailUrl}
          width={246}
          height={180}
          layout="responsive"
          alt={`work image ${tagListStr}`}
        />
      </Box>

      <Box>
        <Typography variant="h4" fontWeight="bold">{work.title}</Typography>
        <Stack
          direction="row"
          my={2}
        >
          <Chip
            color="default"
            label={new Date(
              Number.parseInt(work.createdAt)
            ).getFullYear()}
            size="small"
          />
          <Typography
            ml={3}
            color="GrayText"
          >{tagListStr}</Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
}
