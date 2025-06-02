'use client';

import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

const TerminalComponent = () => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const term = useRef<Terminal | null>(null);
  const inputBuffer = useRef<string>('');
  const commandsRef = useRef<Record<string, string>>({});

  useEffect(() => {
    const initTerminal = async () => {
      if (!terminalRef.current) return;

      // Load commands from public/commands.json
      try {
        const res = await fetch('/commands.json');
        const data = await res.json();
        commandsRef.current = data;
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

          const response = commandsRef.current[command];
          if (response) {
            // Split multi-line responses and write each line
            response.split('\n').forEach(line => term.current?.writeln(line));
          } else {
            term.current?.writeln(`Command not found: ${command}`);
          }

          inputBuffer.current = '';
          term.current?.write('$ ');
        } else if (char === '\u007F') {
          // Handle backspace
          if (inputBuffer.current.length > 0) {
            inputBuffer.current = inputBuffer.current.slice(0, -1);
            term.current?.write('\b \b');
          }
        } else if (!domEvent.ctrlKey && !domEvent.metaKey) {
          // Add character to input
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

  return <div ref={terminalRef} style={{ height: '400px', width: '100%' }} />;
};

export default TerminalComponent;