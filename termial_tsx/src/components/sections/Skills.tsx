import React from 'react';

export function Skills() {
  return (
    <div className="space-y-4">
      <p className="text-[#00ff00] font-mono">$ tree ~/skills</p>
      <pre className="ml-4 text-sm text-[#00ff00] font-mono">
{`├── Languages
│   ├── JavaScript / TypeScript
│   ├── Python
│   ├── Java
│   ├── Solidity
│   └── Rust (WIP)
├── Frontend
│   ├── React / Next.js
│   ├── TailwindCSS / ShadCN
│   └── EJS / Vite / Redux
├── Backend
│   ├── Node.js / Express
│   ├── MongoDB / PostgreSQL
│   ├── GraphQL / REST
│   └── WebSockets
├── Web3 & Blockchain
│   ├── Ethereum / Solidity
│   ├── Hardhat / Foundry
│   ├── IPFS / Filecoin
│   └── WalletConnect / Metamask APIs
├── DevOps & Infra
│   ├── Docker / AWS S3 / EC2
│   ├── Linux / Bash / GitHub Actions
│   └── Gist Deployer (Custom CLI)
└── AI / ML
    ├── OpenAI / LangChain
    ├── TensorFlow / Scikit-Learn
    └── LLMs / Prompt Engineering`}
      </pre>
    </div>
  );
}
