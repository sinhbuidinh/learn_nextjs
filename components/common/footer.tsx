import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material'
import { Icon, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com' },
    { icon: Instagram, url: 'https://instagram.com' },
    { icon: Twitter, url: 'https://twitter.com' },
    { icon: LinkedIn, url: 'https://linkedin.com' }
  ]

  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" justifyContent="center">
        {socialLinks.map((item, idx) => (
          <Box
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            component="a"
            p={2}
          >
            <Icon component={item.icon} sx={{ fontSize: 48 }} />
          </Box>
        ))}
      </Stack>

      <Typography>Copyright ©{currentYear} All rights reserved </Typography>
    </Box>
  );
}