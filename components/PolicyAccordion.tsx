/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

// Define a proper interface for PolicyItem props to ensure children are recognized by the TypeScript compiler
interface PolicyItemProps {
  title: string;
  children: React.ReactNode;
}

// Use React.FC with the defined interface to resolve the JSX children type mismatch
const PolicyItem: React.FC<PolicyItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left group"
      >
        <span className="text-xs font-black uppercase tracking-[0.2em] group-hover:text-[#C6A75E] transition-colors">{title}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="pb-8 text-sm text-zinc-500 leading-relaxed font-medium">
          {children}
        </div>
      </div>
    </div>
  );
};

const PolicyAccordion: React.FC = () => {
  return (
    <div className="section-container max-w-4xl">
      <h2 className="text-2xl font-black uppercase tracking-widest text-zinc-700 mb-12 text-center">Policies & Transparency</h2>
      <div className="space-y-2">
        <PolicyItem title="Refund & Cancellation Policy">
          <p>S&N Enterprises maintains a structured refund policy for our customers. Refunds are applicable only in cases of damaged or incorrect product delivery. Claims must be raised with our customer support within 48 hours of product delivery. Valid proof of damage (photographs) must be shared via our official email for processing. Once approved, refunds are initiated within 7-10 business days.</p>
        </PolicyItem>
        <PolicyItem title="Shipping & Delivery Policy">
          <p>We ship nationwide within India. Orders are typically processed within 24-48 hours. Estimated delivery time ranges from 3 to 7 business days depending on the location. Shipping charges are calculated at checkout based on the weight and destination. Customers will receive tracking information via SMS or Email once the order is dispatched.</p>
        </PolicyItem>
        <PolicyItem title="Terms & Conditions">
          <p>By accessing this website, you agree to comply with the terms of S&N Enterprises. The content provided is for informational purposes only. Devil Dip is a food item and should be consumed as per instructions. S&N Enterprises reserves the right to modify pricing, packaging, and policies without prior notice. Use of our products is at the consumer's discretion.</p>
        </PolicyItem>
        <PolicyItem title="Privacy Policy">
          <p>We respect your privacy. Personal data collected during the order process (Name, Address, Contact) is used exclusively for order fulfillment and customer communication. S&N Enterprises does not sell or share customer data with third-party marketing agencies. We employ industry-standard security measures to protect your information.</p>
        </PolicyItem>
      </div>
    </div>
  );
};

export default PolicyAccordion;
