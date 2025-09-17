// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import { Box, Flex, Text } from '@radix-ui/themes';

const Navbar = () => {
  return (
    <Box style={{ background: 'var(--gray-2)', padding: 'var(--space-3)' }}>
      <Flex as="nav" gap="4" align="center">
        <Link href="/" passHref>
          <Text style={{ cursor: 'pointer', fontWeight: 'bold' }}>Home</Text>
        </Link>
        <Link href="/about" passHref>
          <Text style={{ cursor: 'pointer' }}>About</Text>
        </Link>
        <Link href="/contact" passHref>
          <Text style={{ cursor: 'pointer' }}>Contact</Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
