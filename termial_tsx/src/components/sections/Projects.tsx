import React from 'react';

export function Projects() {
  const projects = [
    {
      name: 'DeFi Protocol',
      description: 'Decentralized finance protocol built on Ethereum',
      tech: ['Solidity', 'React', 'Web3.js'],
      link: 'https://github.com/username/defi-protocol'
    },
    {
      name: 'AI Image Generator',
      description: 'Neural network-based image generation tool',
      tech: ['Python', 'TensorFlow', 'React'],
      link: 'https://github.com/username/ai-image-gen'
    },
    {
      name: 'Blockchain Explorer',
      description: 'Custom blockchain explorer for EVM networks',
      tech: ['TypeScript', 'Next.js', 'GraphQL'],
      link: 'https://github.com/username/block-explorer'
    }
  ];

  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <div key={index} className="border-l-2 border-[#00ff00] pl-4">
          <p className="text-[#00ff00]">{'>'} {project.name}</p>
          <p className="opacity-80">{project.description}</p>
          <p className="text-sm opacity-60">Tech: {project.tech.join(', ')}</p>
          <a href={project.link} className="text-[#00ff00] hover:underline text-sm">
            View Project →
          </a>
        </div>
      ))}
    </div>
  );
}