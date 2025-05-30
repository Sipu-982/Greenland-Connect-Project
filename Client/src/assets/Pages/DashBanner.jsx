import React from 'react';
import logo1 from '../Images/mountain1-Photoroom.png';
import logo2 from '../Images/mountain2-Photoroom.png';
import logo3 from '../Images/land-Photoroom.png';
import './DashBanner.css'
const DashBanner = () => {
  const bannerItems = [
    {
      title: 'User and Seller Management',
      description:
        'Approve or reject seller registrations. Verify seller credentials and uploaded documents. Manage seller roles (e.g., verified, premium seller).',
      image: logo1,
      alt: 'User and Seller Management Icon',
    },
    {
      title: 'Seller Registration and Verification',
      description:
        'Review submitted documents and details for legitimacy. Ensure sellers provide valid business or identification credentials.',
      image: logo2,
      alt: 'Seller Verification Icon',
    },
    {
      title: 'Land Listing Moderation',
      description:
        'Review newly added land/property listings for accuracy and policy compliance. Approve or reject listings based on verification criteria. Edit or remove misleading or fraudulent listings.',
      image: logo3,
      alt: 'Land Moderation Icon',
    },
  ];

  return (
    <div className="absolute left-[18%] top-[15%] w-[80%] p-6 min-h-[80vh] bg-gray-50 flex flex-col gap-8">
      
      {/* Cards Section */}
      <div className="flex flex-wrap gap-6 justify-center">
        {bannerItems.map((item, index) => (
          <div
            key={index}
            className="bg-white dash-card relative rounded-2xl shadow-2xl  p-6 w-full md:w-[30%] min-h-[250px] flex flex-col items-center text-center"
          >
            <h2 className="text-lg font-semibold text-black mb-2">{item.title}</h2>
            <p className="text-sm text-gray-700">{item.description}</p>
            <div className="absolute right-3 bottom-0"> <img src={item.image} alt={item.alt} className="w-20 h-20 object-contain mb-4" /></div>

          </div>
        ))}
      </div>

      {/* Passage Section */}
      <div className="w-full bg-green-700 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-white">Platform Purpose</h3>
        <p className="text-white text-sm line-clamp-3">
          Greenland Connect aims to provide a secure and transparent platform for buyers and sellers to manage land transactions effectively. Our admin panel ensures that all seller activities, listings, and documents meet platform guidelines and legal standards.
        </p>
      </div>
    </div>
  );
};

export default DashBanner;
