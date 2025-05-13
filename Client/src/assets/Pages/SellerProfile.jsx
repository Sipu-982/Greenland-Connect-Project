import React, { useEffect, useState } from 'react';

const SellerProfile = () => {
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedSeller = localStorage.getItem('sellerInfo');
    if (storedSeller) {
      try {
        setSeller(JSON.parse(storedSeller));
      } catch (err) {
        console.error('Error parsing seller info:', err);
      }
    }
    setLoading(false); // Always stop loading after checking
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-500 mt-10">
        Loading profile...
      </div>
    );
  }

  if (!seller) {
    return (
      <div className="text-center text-red-500 mt-10">
        Failed to load seller profile.
      </div>
    );
  }

  return (
    <div className="pt-[150px]">
    <div className="bg-green-300 text-neutral-700 p-8 rounded shadow-lg w-full max-w-md mx-auto ">
      <div className="flex flex-col items-center">
        <div className="bg-green-100 rounded-full h-32 w-32 flex items-center justify-center mb-6 text-white text-5xl">
          👤
        </div>
        <h1 className="text-2xl font-bold mb-2">
          {seller.fullName || 'Seller Name'}
        </h1>
        <hr className="w-full border-gray-300 mb-4" />
        <p className="mb-2"><strong>Email:</strong> {seller.email || 'Not Available'}</p>
        <p><strong>Phone:</strong> {seller.phone || 'Not Available'}</p>
      </div>
    </div>
    </div>
  );
};

export default SellerProfile;
