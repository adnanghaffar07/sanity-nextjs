'use client';
import { useState } from 'react';
import "../globals.css";

const recipientOptions = [
  { label: 'Contact Form', value: 'contactForm' },
  { label: 'Calendly Meeting', value: 'calendlyMeeting' },
  { label: 'FB Meta Leads', value: 'fbMetaLead' },
  { label: 'Testing', value: 'testing' },
];

export default function NewsletterForm() {
  type PricingItem = { service: string; setupCost: string; monthlyCost: string };
  type ContentBlock = { heading: string; description: string };

  interface FormData {
    subject: string;
    introText: string;
    offerPrice: string;
    offerDetails: string;
    contentBlocks: ContentBlock[];
    projectsList: string[];
    pricingTable: PricingItem[];
    recipientGroups: string[];
  }

  const defaultFormData: FormData = {
    subject: '',
    introText: '',
    offerPrice: '',
    offerDetails: '',
    contentBlocks: [{ heading: '', description: '' }],
    projectsList: [],
    pricingTable: [],
    recipientGroups: [],
  };

  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [isLoading, setIsLoading] = useState(false);

  const updateProject = (index: number, value: string) => {
    const updated = [...formData.projectsList];
    updated[index] = value;
    setFormData({ ...formData, projectsList: updated });
  };

  const updatePricing = (index: number, key: keyof PricingItem, value: string) => {
    const updated = [...formData.pricingTable];
    updated[index][key] = value;
    setFormData({ ...formData, pricingTable: updated });
  };

  const updateContentBlock = (index: number, key: keyof ContentBlock, value: string) => {
    const updated = [...formData.contentBlocks];
    updated[index][key] = value;
    setFormData({ ...formData, contentBlocks: updated });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/send-newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        setFormData(defaultFormData);
      }
    } catch (error) {
      console.error('Error sending newsletter:', error);
      alert('An error occurred while sending the newsletter.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold">Send Emails to Leads</h2>

      <input
        type="text"
        placeholder="Subject"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        placeholder="Intro Text"
        value={formData.introText}
        onChange={(e) => setFormData({ ...formData, introText: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />

      {/* 📝 Content Blocks */}
      <div>
        <label className="font-semibold">Content Sections:</label>
        {formData.contentBlocks.map((block, idx) => (
          <div key={idx} className="mt-4 space-y-2 border p-4 rounded-lg">
            <input
              type="text"
              placeholder={`Heading ${idx + 1}`}
              value={block.heading}
              onChange={(e) => updateContentBlock(idx, 'heading', e.target.value)}
              className="w-full border p-2 rounded font-medium"
            />
            <textarea
              placeholder={`Description ${idx + 1}`}
              value={block.description}
              onChange={(e) => updateContentBlock(idx, 'description', e.target.value)}
              className="w-full border p-2 rounded"
              rows={3}
            />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    contentBlocks: formData.contentBlocks.filter((_, i) => i !== idx),
                  })
                }
                className="text-red-500 text-sm"
                disabled={formData.contentBlocks.length <= 1}
              >
                Remove Section
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              contentBlocks: [...formData.contentBlocks, { heading: '', description: '' }],
            })
          }
          className="mt-2 text-sm text-blue-600"
        >
          + Add Content Section
        </button>
      </div>

      <input
        type="text"
        placeholder="Offer (Bold Text)"
        value={formData.offerPrice}
        onChange={(e) => setFormData({ ...formData, offerPrice: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        placeholder="Offer Details"
        value={formData.offerDetails}
        onChange={(e) => setFormData({ ...formData, offerDetails: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />

      {/* 🗂️ Projects List */}
      <div>
        <label className="font-semibold">Project Highlights:</label>
        {formData.projectsList.map((proj, idx) => (
          <div key={idx} className="flex gap-2 mt-2">
            <input
              type="text"
              value={proj}
              onChange={(e) => updateProject(idx, e.target.value)}
              className="flex-1 border p-2 rounded"
            />
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  projectsList: formData.projectsList.filter((_, i) => i !== idx),
                })
              }
              className="text-red-500"
            >
              ✖
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setFormData({ ...formData, projectsList: [...formData.projectsList, ''] })
          }
          className="mt-2 text-sm text-blue-600"
        >
          + Add Project
        </button>
      </div>

      {/* 💰 Pricing Table */}
      <div>
        <label className="font-semibold">Pricing Table:</label>
        {formData.pricingTable.map((row, idx) => (
          <div key={idx} className="grid grid-cols-3 gap-2 mt-2">
            <input
              type="text"
              placeholder="Service"
              value={row.service}
              onChange={(e) => updatePricing(idx, 'service', e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Setup Cost"
              value={row.setupCost}
              onChange={(e) => updatePricing(idx, 'setupCost', e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Monthly Cost"
              value={row.monthlyCost}
              onChange={(e) => updatePricing(idx, 'monthlyCost', e.target.value)}
              className="border p-2 rounded"
            />
            <div className="col-span-3 text-right">
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    pricingTable: formData.pricingTable.filter((_, i) => i !== idx),
                  })
                }
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              pricingTable: [...formData.pricingTable, { service: '', setupCost: '', monthlyCost: '' }],
            })
          }
          className="mt-2 text-sm text-blue-600"
        >
          + Add Pricing Row
        </button>
      </div>

      {/* 📬 Recipient Groups */}
      <div className="flex flex-col gap-1">
        <label className="font-semibold">Recipient Groups:</label>
        {recipientOptions.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={opt.value}
              checked={formData.recipientGroups.includes(opt.value)}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setFormData((prev) => ({
                  ...prev,
                  recipientGroups: isChecked
                    ? [...prev.recipientGroups, opt.value]
                    : prev.recipientGroups.filter((g) => g !== opt.value),
                }));
              }}
              required={formData.recipientGroups.length === 0}
            />
            {opt.label}
          </label>
        ))}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`px-6 py-2 rounded text-white ${
          isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isLoading ? 'Sending...' : 'Send Newsletter'}
      </button>
    </form>
  );
}