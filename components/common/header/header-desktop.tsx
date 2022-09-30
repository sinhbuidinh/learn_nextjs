import { Container, Stack, Link as MuiLink } from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react'
import { ROUTE_LIST, BLOG_ROUTE_PATH } from './routes';

export interface HeaderDesktopProps {
}

export function HeaderDesktop (props: HeaderDesktopProps) {
  const router = useRouter()

  return (
    <Box display={{xs: 'none', md: 'block'}} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map(route => (
            <Link key={route.path} href={route.path} passHref>
              <MuiLink
                sx={{ ml: 2, fontWeight: 'medium' }}
                data-path={route.path}
                data-startwith={router.pathname.startsWith(BLOG_ROUTE_PATH)}
                className={clsx({
                  active: router.pathname === route.path 
                    || (
                      route.path == BLOG_ROUTE_PATH
                      && router.pathname.startsWith(BLOG_ROUTE_PATH)
                    )
                })}
              >{route.label}</MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
