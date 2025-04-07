import React from 'react';

export function Projects() {
  const projects = [
    {
      name: 'HYPERX-CLOUD',
      description:
        'AI-driven quantum-resistant blockchain for cloud security using ZKP authentication, lattice cryptography, and automated threat mitigation.',
      tech: ['AI', 'Blockchain', 'ZKP', 'Lattice Cryptography'],
      link: 'https://github.com/adityakaaltatva/HyperX-CLoud'
    },
    {
      name: 'ECOSWAPE',
      description:
        'Carbon credit marketplace integrated with CBDC and AI-driven market predictions. Built secure, decentralized, and scalable smart contracts.',
      tech: ['Blockchain', 'Solidity', 'AI', 'CBDC'],
      link: 'https://github.com/adityakaaltatva/ecoswape-DEX'
    },
    {
      name: 'GIST',
      description:
        'Scalable deployment service like Vercel/Render supporting React/Vite. Built custom reverse proxy, auto rollbacks, Docker+AWS CI/CD, and live demo.',
      tech: ['Node.js', 'Docker', 'AWS', 'React', 'Vite'],
      link: 'https://github.com/adityakaaltatva/GIST-major'
    },
    {
      name: 'GIST Live Demo',
      description:
        'Live deployment of GIST CLI-based service with static site hosting, custom build pipelines, and GitHub integration.',
      tech: ['Shell', 'CI/CD', 'AWS S3', 'MongoDB'],
      link: 'https://gist-major-production.vercel.app/'
    },
    {
      name: 'HYPERX-FLOW',
      description:
        'Workflow automation tool like Zapier and n8n. Drag-and-drop node editor to automate web3 and cloud workflows using smart triggers and secure webhooks.',
      tech: ['Node.js', 'React Flow', 'Web3', 'MongoDB'],
      link: 'https://github.com/adityakaaltatva/hyperx-flow'
    },
    {
      name: 'VajraUptime',
      description:
        'Uptime monitoring and alerting platform with custom pings, downtime logs, alert webhooks, and incident dashboard. Built to be self-hosted and dev-friendly.',
      tech: ['Next.js', 'MongoDB', 'TailwindCSS', 'Cron Jobs'],
      link: 'https://github.com/adityakaaltatva/vajra-uptime'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-[#00ff00] text-lg font-bold">=== PROJECTS ===</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="border-l-2 border-[#00ff00] pl-4 hover:bg-[#0f0f0f] transition-all duration-300 rounded"
        >
          <p className="text-[#00ff00] font-semibold">{'>'} {project.name}</p>
          <p className="text-gray-300">{project.description}</p>
          <p className="text-sm text-gray-500">Tech: {project.tech.join(', ')}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff00] text-sm hover:underline"
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  );
}
