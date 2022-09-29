import { Box, Divider, Stack, Typography } from '@mui/material'
import { Post } from '@/models'
import { format } from 'date-fns'
import * as React from 'react'

export interface PostItemProps {
  post: Post
}

export function PostItem ({ post }: PostItemProps) {
  if (!post) return null

  return (
    <Box>
      <Typography
        variant="h3"
        fontWeight="bold"
      >{post.title}</Typography>

      <Stack direction="row" my={2}>
        <Typography variant="body1">{post.publishedDate}</Typography>
        <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
        <Typography>{post.tagList.join(', ')}</Typography>
      </Stack>

      <Typography variant="body2">{post.description}</Typography>
    </Box>
  );
}
