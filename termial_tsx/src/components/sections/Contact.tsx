import React from 'react';

export function Contact() {
  return (
    <div className="space-y-4">
      <div>
        <p>$ echo $CONTACT_INFO</p>
        <div className="ml-4 space-y-2">
          <p>EMAIL="your.email@example.com"</p>
          <p>GITHUB="https://github.com/yourusername"</p>
          <p>LINKEDIN="https://linkedin.com/in/yourusername"</p>
          <p>TWITTER="https://twitter.com/yourusername"</p>
        </div>
      </div>
      <p className="text-sm opacity-60">Feel free to reach out through any of these channels!</p>
    </div>
  );
}