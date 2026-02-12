import React, { useState } from 'react';

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pack: '10',
    quantity: '1'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order Inquiry Submitted. Our team will contact you for payment confirmation.');
  };

  return (
    <div className="section-container max-w-3xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Place Your Order</h2>
        <p className="text-zinc-500 font-medium">Complete the details below to initiate your order.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-[#111111] p-8 md:p-12 rounded-3xl border border-zinc-800 space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Full Name</label>
            <input 
              required
              className="w-full bg-[#1a1a1a] border border-zinc-800 rounded-xl px-6 py-4 focus:outline-none focus:border-[#C6A75E] text-white"
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Phone Number</label>
            <input 
              required
              type="tel"
              className="w-full bg-[#1a1a1a] border border-zinc-800 rounded-xl px-6 py-4 focus:outline-none focus:border-[#C6A75E] text-white"
              placeholder="+91 00000 00000"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Email Address</label>
          <input 
            required
            type="email"
            className="w-full bg-[#1a1a1a] border border-zinc-800 rounded-xl px-6 py-4 focus:outline-none focus:border-[#C6A75E] text-white"
            placeholder="name@domain.com"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Select Package</label>
            <select 
              className="w-full bg-[#1a1a1a] border border-zinc-800 rounded-xl px-6 py-4 focus:outline-none focus:border-[#C6A75E] text-white appearance-none"
              value={formData.pack}
              onChange={e => setFormData({...formData, pack: e.target.value})}
            >
              <option value="10">Trial Pack (10 Sachets) - ₹50</option>
              <option value="30">Momentum Pack (30 Sachets) - ₹150</option>
              <option value="60">Hustler Pack (60 Sachets) - ₹300</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Quantity (Units)</label>
            <input 
              type="number"
              min="1"
              className="w-full bg-[#1a1a1a] border border-zinc-800 rounded-xl px-6 py-4 focus:outline-none focus:border-[#C6A75E] text-white"
              value={formData.quantity}
              onChange={e => setFormData({...formData, quantity: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Complete Shipping Address</label>
          <textarea 
            required
            rows={4}
            className="w-full bg-[#1a1a1a] border border-zinc-800 rounded-xl px-6 py-4 focus:outline-none focus:border-[#C6A75E] text-white resize-none"
            placeholder="House no, Street, Landmark, City, State, Pincode"
            value={formData.address}
            onChange={e => setFormData({...formData, address: e.target.value})}
          ></textarea>
        </div>

        <button type="submit" className="w-full btn-primary py-5 rounded-xl text-xs uppercase tracking-[0.3em]">
          Confirm Order Inquiry
        </button>

        <p className="text-center text-[10px] text-zinc-600 font-bold uppercase tracking-widest italic">
          Order confirmation and payment details will be shared via email or phone after validation.
        </p>
      </form>
    </div>
  );
};

export default OrderForm;