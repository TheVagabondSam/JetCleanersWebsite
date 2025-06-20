'use client'
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    company: '',
    service: '',
    gardenTap: '',
    frequency: '',
    size: '',
    access: '',
    message: '',
});

    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
        const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
});

    if (res.ok) {
        setStatus('Mensagem enviada com sucesso!');
        setFormData({
            name: '',
            address: '',
            phone: '',
            company: '',
            service: '',
            gardenTap: '',
            frequency: '',
            size: '',
            access: '',
            message: '',
        });
} 
    else {
        const data = await res.json();
        setStatus(data.error || 'Error when sending.');
    }
    } 
    catch (err) {
        console.error(err);
        setStatus('Error sending message.');
} 
    finally {
        setLoading(false);
    }
};

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4">
        <h2 className="text-2xl font-bold text-center">Request a quote</h2>

        <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input name="address" type="text" placeholder="Address" value={formData.address} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input name="company" type="text" placeholder="Company" value={formData.company} onChange={handleChange} className="w-full p-2 border rounded" />

      {/* Services Required */}
        <select name="service" value={formData.service} onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">Select Service Required</option>
            <option value="Bins Cleaning">Bins Cleaning</option>
            <option value="Brick Cleaning">Brick Cleaning</option>
            <option value="Decks and Fences Cleaning">Decks and Fences Cleaning</option>
            <option value="Driveway and Sideways Cleaning">Driveway and Sideways Cleaning</option>
            <option value="Exterior Communal Space Cleaning">Exterior Communal Space Cleaning</option>
            <option value="Exterior House Washing">Exterior House Washing</option>
            <option value="Garage Washing">Garage Washing</option>
            <option value="Grafitti Removal">Grafitti Removal</option>
            <option value="Gum Removal">Gum Removal</option>
            <option value="Non Lead Paint Stripping">Non Lead Paint Stripping</option>
            <option value="Pavement Cleaning">Pavement Cleaning</option>
            <option value="Petrol Station Cleaning">Petrol Station Cleaning</option>
        </select>

      {/* Garden Tap */}
        <select name="gardenTap" value={formData.gardenTap} onChange={handleChange} required className="w-full p-2 border rounded">
        <option value="">Garden Tap?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        </select>

      {/* One Off or Regular */}
        <select name="frequency" value={formData.frequency} onChange={handleChange} required className="w-full p-2 border rounded">
        <option value="">One Off or Regular?</option>
        <option value="One off">One off</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        </select>
        <input name="Frequency" type="text" placeholder="Please tell us the frequency if you prefer" value={formData.size} onChange={handleChange} className="w-full p-2 border rounded" />
        

      {/* Access to Area */}
        <select name="access" value={formData.access} onChange={handleChange} required className="w-full p-2 border rounded">
        <option value="">Access to Area</option>
        <option value="Side gate">Side gate</option>
        <option value="Back of the property">Back of the property</option>
        <option value="Through property">Through property</option>
        </select>

        <input name="size" type="text" placeholder="Size (Square Metres)" value={formData.size} onChange={handleChange} className="w-full p-2 border rounded" />

        <textarea name="message" placeholder="Leave us a Message" value={formData.message} onChange={handleChange} rows={4} className="w-full p-2 border rounded" />

        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            {loading ? 'Sending...' : 'Send'}
        </button>

        {status && (
            <p className={`text-center ${status.includes('Sucess') ? 'text-green-600' : 'text-red-600'}`}>
        {status}
        </p>
    )}
    </form>
);
}
