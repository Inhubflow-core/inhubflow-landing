'use client';

import { Toaster, type ToasterProps } from 'sonner';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ToasterProvider() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <Toaster theme={resolvedTheme as ToasterProps['theme']} />;
}
