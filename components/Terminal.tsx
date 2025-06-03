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
    { command: '$canmon:', description: 'Monitors real-time CAN messages being sent inside the car.' },
    { command: '$canlog --ids:', description: 'Shows all active message IDs on the CAN bus, and their source ECU.' },
    { command: '$canlog --id <suspicious_id>:', description: 'Displays detailed logs for a single message ID.' },
    { command: '$obdscan --devices:', description: 'Lists all electronic devices connected to the car, including any unknown modules on the OBD-II port.' },
    { command: '$canban block <suspicious_id>: ', description: 'Blocks CAN messages coming from the suspicious ID.' },
    { command: '$obdscan --remove <device_id>:', description: 'Removes the unauthorized device.' },
    { command: '$firewall --reload:', description: 'Reloads firewall rules to apply changes.' },
  ],
  remote: [
    { command: 'canmon --watch :', description: 'Live monitor for CAN activity.' },
    { command: 'ip link show :', description: 'Checks if the CAN interface (can0) is active.' },
    { command: 'ps aux | grep nc :', description: 'Finds unauthorized reverse shell processes running.' },
    { command: 'kill <process_id> :', description: 'Stops shell process.' },
    { command: 'ip link set can0 down :', description: 'Disables the CAN interface.' },
    { command: 'netlog --last 10 :', description: 'shows all active and listening ports on the car system.' },
    { command: 'firewall --block-ports <suspicious_port> :', description: 'Blocks the unauthorized port discovered.' },
    { command: 'api-sec --require-auth infotainment:', description: 'Secures infotainment API endpoints by requiring login or token access.' },
    { command: 'netlog --blacklist <attacker_ip>:', description: 'Blocks IP.' },
  ],
  gps: [
    { command: 'gpsmon --live :', description: 'Monitors the car’s GPS system in real-time to detect sudden jumps in location.' },
    { command: 'netstat -tuln | grep LISTEN :', description: 'Lists all open network ports.' },
    { command: 'gpslog --last 10:', description: 'Shows the last 10 GPS updates, and Identifies suspicious IP addresses.' },
    { command: 'ufw deny from <attacker_ip> to any port <gps_port> :', description: 'Blocks IP address and the identified open port.' },
    { command: 'gps-sec --restrict --ip 127.0.0.1:', description: 'Restricts access to the GPS API so that only the local system can update location data.' },
    { command: 'gps-sec --auth enable --token <secure_token>:', description: 'Enables authentication for GPS API commands to prevent unauthorized updates.' },
    { command: 'gps-reset --to-last-good:', description: 'Restores the car’s GPS system to the last known good location.' },
    { command: 'systemctl restart nav-stack:', description: 'Restarts the vehicle’s navigation stack to apply the changes and resume normal routing.' },
    { command: 'gps-status :', description: 'system check to ensure GPS is secure, accurate, and locked to a trusted source.' },
  ],
   multimedia: [
    { command: 'multimedia-mon:', description: 'Monitors the car’s infotainment system for unusual playback or activity and to confirm it’s secure and idle.' },
    { command: 'netstat -tuln:', description: 'Displays all active network ports to check for open vulnerabilities.' },
    { command: 'netlog --last 10:', description: 'Shows the last 10 network activities.' },
    { command: 'firewall --block <suspicious_port> :', description: 'Blocks the unauthorized port discovered.' },
    { command: 'adbconfig --disable-remote :', description: 'Disables remote Android Debug Bridge (ADB) access.' },
    { command: 'media-sec --enforce-auth on :', description: 'enforcing an authentication token for future media API commands, preventing unauthenticated playback.' },
    { command: 'netlog --blacklist <attacker_ip> :', description: 'Blocks the IP address.' },
  ],
  lidar: [
    { command: 'lidar-mon --live:', description: 'Watches for unusual LiDAR readings.' },
    { command: 'netstat -anu | grep 2368:', description: 'Checks if the UDP port for LiDAR data is open and listening.' },
    { command: 'tcpdump -i eth0 port 2368 -c 5:', description: 'Captures packets on port 2368 (ex. IP).' },
    { command: 'ufw deny from <attacker_ip> to any port 2368 :', description: 'Blocks all packets coming from IP address.' },
    { command: 'ufw allow from <trusted_sensor_ip> to any port 2368 :', description: 'Allows only the trusted LiDAR device to send packets to the car.' },
    { command: 'ufw deny to any port 2368 :', description: 'Blocks all other incoming traffic to the LiDAR port.' },
    { command: 'lidar-sec --trusted-ip <trusted_sensor_ip> :', description: 'Marks the IP of the official LiDAR sensor as trusted.' },
    { command: 'systemctl restart lidar-stream:', description: 'Restarts the LiDAR stream to clear data and apply new firewall settings.' },
    { command: 'lidar-status:', description: 'check to confirm the system is receiving normal LiDAR input.' },
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
