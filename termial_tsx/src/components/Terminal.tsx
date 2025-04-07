/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import Contact from './sections/Contact'; 
import { AsciiArt } from './AsciiArt';
import { Matrix } from './effects/Matrix';
import { Crash } from './effects/Crash';
import './node.css';

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
  const [loadingScan, setLoadingScan] = useState(false);

  const simulateHacking = () => {
    const hackingLines = [
      'Initializing hack sequence...',
      'Bypassing firewall...',
      'Accessing mainframe...',
      'Downloading data...',
      'Covering tracks...',
      'Hack complete!',
      'Lets Go .....'
    ];

    let output = '';
    hackingLines.forEach((line, index) => {
      setTimeout(() => {
        output += line + '\n';
        setHistory(prev => [
          ...prev.slice(0, -1),
          { input: 'hacktheplanet', output: <pre className="text-green-400 animate-pulse">{output}</pre> }
        ]);
      }, index * 1000);
    });
  };

  const simulateNmapScan = () => {
    setLoadingScan(true);
    const scanOutput = (
      <pre className="text-green-400 animate-fade-in">
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

    setTimeout(() => {
      setLoadingScan(false);
      setHistory(prev => [...prev, {
        input: 'nmap adityapandey',
        output: scanOutput
      }]);
    }, 3000);
  };

  const simulateResume = () => {
    const link = document.createElement('a');
    link.href = '/Aditya_Pandey_Resume.pdf'; // File should be in public folder
    link.download = 'Aditya_Pandey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setHistory(prev => [...prev, {
      input: 'resume',
      output: <p className="text-green-400">📄 Downloading resume... Check your downloads folder.</p>
    }]);
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
        setHistory(prev => [...prev, { input: cmd, output: <pre className="text-green-400">Starting hack...</pre> }]);
        simulateHacking();
        return;
      case 'nmap adityapandey':
        simulateNmapScan();
        return;
      case 'resume':
        simulateResume();
        return;
      case 'neo':
        output = (
          <p className="text-green-400 italic animate-pulse">
            "I know kung fu." - Neo, The Matrix
          </p>
        );
        break;
      case 'login root':
        output = (
          <div className="text-red-500 glitch">
            Access Denied. FBI Notified.
            <br />
            Tracking IP: {Array(4).fill(0).map(() => Math.floor(Math.random() * 255)).join('.')}
          </div>
        );
        break;
      case 'hireme':
        output = (
          <div className="space-y-2 text-yellow-400 animate-fade-in">
            <p>🚀 Looking for a passionate developer who thinks outside the box?</p>
            <p>You've found one! Check out my resume and let's build something legendary.</p>
            <p className="text-sm opacity-60">Type 'contact' to reach out!</p>
          </div>
        );
        break;
      case 'help':
        output = (
          <div className="my-2 space-y-2 text-purple-300">
            <p>Available commands:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>about, whoami - View my bio</li>
              <li>resume - Download the latest Resume</li>
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
        output = <p className="text-red-400 animate-pulse">Command not found. Type 'help' for commands.</p>;
    }

    setHistory(prev => [...prev, { input: cmd, output }]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, loadingScan]);

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
    <div className="max-w-4xl mx-auto font-mono text-sm text-green-300">
      <div className="bg-[#0d0d0d] rounded-lg shadow-2xl border border-[#444] p-4 min-h-[80vh] overflow-y-auto relative">

        {showMatrix && <Matrix />}
        {showCrash && <Crash />}

        <div className="flex items-center gap-2 mb-4 border-b border-[#333] pb-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-sm text-gray-500">welcome@aditya_pandey:~</span>
        </div>

        <AsciiArt />

        <div className="mb-4 typewriter text-purple-300">
          Welcome to my terminal. Type 'help' to begin.
        </div>

        {history.map((cmd, i) => (
          <div key={i} className="mb-4 animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="text-green-500">welcome@adityapandey:~$</span>
              <span>{cmd.input}</span>
            </div>
            <div className="mt-2 ml-4">{cmd.output}</div>
          </div>
        ))}

        {loadingScan && (
          <div className="ml-4 text-green-400 animate-pulse">Scanning network...</div>
        )}

        <div className="flex items-center gap-2 mt-2">
          <span className="text-green-500">welcome@adityapandey:~$</span>
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
            className="flex-1 bg-transparent border-none outline-none text-green-200 caret-pink-500"
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
