'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

export default function MermaidChart({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({ startOnLoad: true, theme: 'default' });
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div className="my-6">
      <div ref={ref} className="mermaid">
        {chart}
      </div>
    </div>
  );
}
