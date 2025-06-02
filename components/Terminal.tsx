'use client';

import { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

type CommandMap = {
  [key: string]: {
    description: string;
    response: string;
  };
};

const TerminalComponent = () => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const term = useRef<Terminal | null>(null);
  const inputBuffer = useRef<string>('');
  const commandsRef = useRef<CommandMap>({});
  const initializedRef = useRef(false);

  const [commands, setCommands] = useState<CommandMap>({});

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const initTerminal = async () => {
      if (!terminalRef.current) return;

      try {
        const res = await fetch('/commands.json'); // ✅ Updated path
        const data: CommandMap = await res.json();
        commandsRef.current = data;
        setCommands(data);
      } catch (error) {
        console.error('Failed to load commands.json:', error);
      }

      term.current = new Terminal({
        cursorBlink: true,
        fontFamily: 'monospace',
        theme: {
          background: '#1e1e1e',
          foreground: '#ffffff',
        },
      });

      term.current.open(terminalRef.current);
      term.current.write('Welcome to the simulated terminal\r\n$ ');

      term.current.onKey(({ key, domEvent }) => {
        const char = key;

        if (char === '\r') {
          const command = inputBuffer.current.trim().toLowerCase();
          term.current?.write('\r\n');

          const cmdObj = commandsRef.current[command];
          if (cmdObj) {
            cmdObj.response.split('\n').forEach(line => term.current?.writeln(line));
          } else {
            term.current?.writeln(`Command not found: ${command}`);
          }

          inputBuffer.current = '';
          term.current?.write('$ ');
        } else if (char === '\u007F') {
          if (inputBuffer.current.length > 0) {
            inputBuffer.current = inputBuffer.current.slice(0, -1);
            term.current?.write('\b \b');
          }
        } else if (!domEvent.ctrlKey && !domEvent.metaKey) {
          inputBuffer.current += char;
          term.current?.write(char);
        }
      });
    };

    initTerminal();

    return () => {
      term.current?.dispose();
    };
  }, []);

  return (
    <>
      <div ref={terminalRef} style={{ height: '400px', width: '100%' }} />

      {/* Command container below terminal */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h3>Available Commands</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {Object.entries(commands).map(([cmd, { description }]) => (
            <li key={cmd} style={{ margin: '6px 0' }}>
              <strong>{cmd}</strong> – {description}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TerminalComponent;
