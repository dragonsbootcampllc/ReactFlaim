import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Proptype from 'prop-types';

const TeamComponent1_Inner = ({ member }) => {
  const socialIcons = {
    facebook: FaFacebook,
    twitter: FaTwitter,
    instagram: FaInstagram,
  };

  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-lg">
      <img className="w-32 h-32 rounded-full mx-auto mb-4" src={member.image} alt={member.name} />
      <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
      <p className="text-indigo-600">{member.title}</p>
      <div className="mt-4 flex justify-center space-x-4">
        {member.socials && member.socials.map((social, index) => {
          const IconComponent = socialIcons[social.platform];
          return (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600">
              <IconComponent className="w-6 h-6" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

TeamComponent1_Inner.propTypes = {
  member: Proptype.object.isRequired,
};

export default TeamComponent1_Inner;