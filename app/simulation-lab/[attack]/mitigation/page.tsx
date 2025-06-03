// DO NOT include 'use client' here

import TerminalComponent from '@/components/Terminal';
interface PageProps {
  params: {
    attack: string;
  };
}

export default function AttackMitigationPage({ params }: PageProps) {
  return (
    <main style={{ padding: '2rem' }}>
      <TerminalComponent attackSlug={params.attack} />
    </main>
  );
}
