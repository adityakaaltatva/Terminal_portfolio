import React from 'react';

export function Skills() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-[#00ff00]">$ tree skills/</p>
        <pre className="ml-4">
{`├── Languages
│   ├── JavaScript/TypeScript
│   ├── Python
│   ├── Solidity
│   └── Rust
├── Frontend
│   ├── React
│   ├── Next.js
│   ├── Tailwind CSS
│   └── Web3.js
├── Backend
│   ├── Node.js
│   ├── Express
│   ├── GraphQL
│   └── PostgreSQL
└── Other
    ├── Git
    ├── Docker
    ├── AWS
    └── Linux`}
        </pre>
      </div>
    </div>
  );
}