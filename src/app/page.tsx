'use client';

import { useState } from 'react';
import { Chip } from '@mantine/core';

export default function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Chip checked={checked} onChange={() => setChecked((v) => !v)}>
      My chip
    </Chip>
  );
}