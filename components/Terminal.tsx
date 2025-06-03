'use client';

import { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import { commands as importedCommands } from '@/data/attacks';

interface TerminalComponentProps {
  attackSlug: string;
}

const staticCommands: Record<string, { command: string; description: string }[]> = {
  can: [
    { command: '$canmon', description: 'Run CAN diagnostic tool' },
    { command: '$canlog --ids', description: 'Clear CAN error flags' },
    { command: '$canlog --id <suspicious_id>', description: 'Clear CAN error flags' },
    { command: '$obdscan --devices', description: 'Clear CAN error flags' },
    { command: '$canban block 0x66', description: 'Clear CAN error flags' },
    { command: '$obdscan --remove 0x66', description: 'Clear CAN error flags' },
    { command: '$firewall --reload', description: 'Clear CAN error flags' },
  ],
  gps: [
    { command: 'locate', description: 'Show current GPS coordinates' },
    { command: 'mitigate', description: 'Trigger spoofing mitigation' },
  ],
  remote: [
    { command: 'scan', description: 'Scan for open vehicle services' },
    { command: 'lockout', description: 'Block remote access' },
  ],
   multimedia: [
    { command: 'multimedia-mon', description: 'Scan for open vehicle services' },
    { command: 'netstat -tuln', description: 'Block remote access' },
    { command: 'netlog --last 10', description: 'Block remote access' },
    { command: 'firewall --block 8080 -tuln', description: 'Block remote access' },
    { command: 'netstat -tuln', description: 'Block remote access' },
    { command: 'netstat -tuln', description: 'Block remote access' },
    { command: 'netstat -tuln', description: 'Block remote access' },
    { command: 'netstat -tuln', description: 'Block remote access' },

  ],
};

const unlockCommand: Record<string, string> = {
  can: 'firewall --reload',
  gps: 'mitigate',
  remote: 'lockout',
  multimedia: 'multi'
};

const TerminalComponent = ({ attackSlug }: TerminalComponentProps) => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const term = useRef<Terminal | null>(null);
  const inputBuffer = useRef<string>('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    if (!terminalRef.current) return;

    const terminal = new Terminal({
      cursorBlink: true,
      fontFamily: 'monospace',
      theme: {
        background: '#1e1e1e',
        foreground: '#00ff00',
      },
    });

    terminal.open(terminalRef.current);
    terminal.focus();
    terminal.write(`Welcome to the simulated terminal for "${attackSlug}" attack\r\n$ `);

    term.current = terminal;

    terminal.onKey(({ key, domEvent }) => {
      const char = key;

      if (char === '\r') {
        const input = inputBuffer.current.trim().toLowerCase();
        terminal.write('\r\n');

        const match = importedCommands.find(
          cmd => cmd.command.trim().toLowerCase() === input
        );

        if (match) {
          match.expectedOutput.split('\n').forEach(line => terminal.writeln(line));
        } else {
          terminal.writeln(`Command not found: "${input}"`);
        }

        // Unlock if the correct command is entered
        if (input === unlockCommand[attackSlug]?.toLowerCase()) {
          setIsUnlocked(true);
          terminal.writeln('✅ Mitigation process is now unlocked.');
        }

        inputBuffer.current = '';
        terminal.write('$ ');
      } else if (char === '\u007F') {
        if (inputBuffer.current.length > 0) {
          inputBuffer.current = inputBuffer.current.slice(0, -1);
          terminal.write('\b \b');
        }
      } else if (!domEvent.ctrlKey && !domEvent.metaKey) {
        inputBuffer.current += char;
        terminal.write(char);
      }
    });

    return () => {
      terminal.dispose();
    };
  }, [attackSlug]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <div
        ref={terminalRef}
        style={{
          height: '400px',
          width: '100%',
          backgroundColor: '#1e1e1e',
          padding: '1px',
          border: '1px solid #333',
          overflow: 'auto',
        }}
      />

      <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '0.5rem' }}>🛠️ Available Commands</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {(staticCommands[attackSlug] || []).map((cmd, idx) => (
            <li key={idx}>
              <strong>{cmd.command}</strong>: {cmd.description}
            </li>
          ))}
        </ul>

        <button
          onClick={() => window.location.href = `http://127.0.0.1:5000/mitigation/${attackSlug}`}
          disabled={!isUnlocked}
          style={{
            marginTop: '1.5rem',
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: isUnlocked ? '#2980b9' : '#ccc',
            color: isUnlocked ? '#fff' : '#666',
            border: 'none',
            borderRadius: '8px',
            cursor: isUnlocked ? 'pointer' : 'not-allowed',
          }}
        >
          🚀 Start Mitigation Process
        </button>
      </div>
    </div>
  );
};

export default TerminalComponent;
