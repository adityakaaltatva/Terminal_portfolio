import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';
import { AsciiArt } from './AsciiArt';
import { Matrix } from './effects/Matrix';
import { Crash } from './effects/Crash';

type Command = {
  input: string;
  output: React.ReactNode;
};

export function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showMatrix, setShowMatrix] = useState(false);
  const [showCrash, setShowCrash] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const typedRef = useRef<Typed | null>(null);

  const simulateHacking = () => {
    const hackingLines = [
      'Initializing hack sequence...',
      'Bypassing firewall...',
      'Accessing mainframe...',
      'Downloading data...',
      'Covering tracks...',
      'Hack complete!'
    ];

    let output = '';
    hackingLines.forEach((line, index) => {
      setTimeout(() => {
        output += line + '\n';
        setHistory(prev => [
          ...prev.slice(0, -1),
          { input: 'hacktheplanet', output: <pre className="text-green-400">{output}</pre> }
        ]);
      }, index * 1000);
    });
  };

  const simulatePortScan = () => {
    return (
      <pre className="text-green-400">
        {`Starting Nmap 7.94 ( https://nmap.org )
PORT     STATE    SERVICE
22/tcp   open     ssh
80/tcp   open     http
443/tcp  open     https
3000/tcp filtered node
8080/tcp open     http-proxy
Nmap scan complete`}
      </pre>
    );
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    let output: React.ReactNode;

    switch (command) {
      case 'about':
      case 'whoami':
        output = <About />;
        break;
      case 'projects':
      case 'ls projects':
        output = <Projects />;
        break;
      case 'skills':
        output = <Skills />;
        break;
      case 'contact':
        output = <Contact />;
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'matrix':
        setShowMatrix(true);
        setTimeout(() => setShowMatrix(false), 10000);
        return;
      case 'sudo rm -rf /':
        setShowCrash(true);
        setTimeout(() => setShowCrash(false), 5000);
        return;
      case 'hacktheplanet':
        simulateHacking();
        return;
      case 'nmap adityapandey':
        output = simulatePortScan();
        break;
      case 'neo':
        output = (
          <p className="text-green-400 italic">
            "I know kung fu." - Neo, The Matrix
          </p>
        );
        break;
      case 'login root':
        output = (
          <div className="text-red-500">
            Access Denied. FBI Notified.
            <br />
            Tracking IP: {Math.floor(Math.random() * 255)}.{Math.floor(Math.random() * 255)}.{Math.floor(Math.random() * 255)}.{Math.floor(Math.random() * 255)}
          </div>
        );
        break;
      case 'hireme':
        output = (
          <div className="space-y-2">
            <p className="text-yellow-400">🚀 Looking for a passionate developer who thinks outside the box?</p>
            <p>You've found one! Check out my resume and let's create something amazing together.</p>
            <p className="text-sm opacity-60">Type 'contact' to reach out!</p>
          </div>
        );
        break;
      case 'help':
        output = (
          <div className="my-2 space-y-2">
            <p>Available commands:</p>
            <ul className="ml-4 space-y-1">
              <li>about, whoami - View my bio</li>
              <li>projects, ls projects - View my projects</li>
              <li>skills - View my technical skills</li>
              <li>contact - View contact information</li>
              <li>clear - Clear terminal</li>
              <li>matrix - Enter the Matrix</li>
              <li>hacktheplanet - Initiate hack sequence</li>
              <li>nmap adityapandey - Run port scan</li>
              <li>neo - Matrix quote</li>
              <li>login root - Try to gain root access</li>
              <li>hireme - Why you should hire me</li>
              <li>help - Show this help message</li>
            </ul>
          </div>
        );
        break;
      default:
        output = <p className="text-red-500">Command not found. Type 'help' for available commands.</p>;
    }

    setHistory(prev => [...prev, { input: cmd, output }]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement === inputRef.current) {
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (historyIndex < commandHistory.length - 1) {
            const newIndex = historyIndex + 1;
            setHistoryIndex(newIndex);
            setInput(commandHistory[commandHistory.length - 1 - newIndex]);
          }
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (historyIndex > 0) {
            const newIndex = historyIndex - 1;
            setHistoryIndex(newIndex);
            setInput(commandHistory[commandHistory.length - 1 - newIndex]);
          } else if (historyIndex === 0) {
            setHistoryIndex(-1);
            setInput('');
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [historyIndex, commandHistory]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#1a1a1a] rounded-lg shadow-xl border border-[#333] p-4 min-h-[80vh] overflow-y-auto relative">
        {showMatrix && <Matrix />}
        {showCrash && <Crash />}
        
        <div className="flex items-center gap-2 mb-4 border-b border-[#333] pb-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-sm opacity-50">welcome@adityapandey:~</span>
        </div>

        <AsciiArt />

        <div className="mb-4 typewriter">
          Welcome to my portfolio terminal. Type 'help' for available commands.
        </div>

        {history.map((cmd, i) => (
          <div key={i} className="mb-4">
            <div className="flex items-center gap-2">
              <span className="text-[#00ff00]">welcome@adityapandey:~$</span>
              <span>{cmd.input}</span>
            </div>
            <div className="mt-2 ml-4">{cmd.output}</div>
          </div>
        ))}

        <div className="flex items-center gap-2">
          <span className="text-[#00ff00]">welcome@adityapandey:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && input.trim()) {
                handleCommand(input);
              }
            }}
            className="flex-1 bg-transparent border-none outline-none focus:ring-0"
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}