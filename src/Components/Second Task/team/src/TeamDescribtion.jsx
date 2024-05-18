import React from 'react';
import TeamMember from './Team';
const TeamSection = () => {
  const teamMembers = [
    {
      image: "https://getaheadshot.net/wp-content/uploads/2022/08/Lora.2.png",
      name: 'Fatima Mahmoud',
      position: 'CEO',
    //   Contact: ["./Images/gmail.png", "./Images/linkedin (1).png", "./Images/twitter.png"],
    Contact: [
        { url: 'mailto:john.doe@example.com', image: './Images/gmail.png', altText: 'Email' },
        { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: './Images/linkedin (1).png', altText: 'LinkedIn' },
        { url: 'https://twitter.com/johndoe', image: './Images/twitter.png', altText: 'Twitter' },
      ]
   },
    {
      image :"https://getaheadshot.net/wp-content/uploads/2024/01/Brian.jpg",
      name: 'Jane Smith',
      position: 'Designer',
      Contact: [
        { url: 'mailto:john.doe@example.com', image: './Images/gmail.png', altText: 'Email' },
        { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: './Images/linkedin (1).png', altText: 'LinkedIn' },
        { url: 'https://twitter.com/johndoe', image: './Images/twitter.png', altText: 'Twitter' },
      ]
    },
    {
        image: "https://getaheadshot.net/wp-content/uploads/2023/07/Kelly.jpg",
        name: 'Hala Ahmed',
        position: 'Back-end Developer',
        Contact: [
            { url: 'mailto:john.doe@example.com', image: './Images/gmail.png', altText: 'Email' },
            { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: './Images/linkedin (1).png', altText: 'LinkedIn' },
            { url: 'https://twitter.com/johndoe', image: './Images/twitter.png', altText: 'Twitter' },
          ]

    },
    {
        image: "https://getaheadshot.net/wp-content/uploads/2023/01/Josh.png",
        name: 'Fasel Mohamed',
        position: 'HR',
        Contact: [
            { url: 'mailto:john.doe@example.com', image: './Images/gmail.png', altText: 'Email' },
            { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: './Images/linkedin (1).png', altText: 'LinkedIn' },
            { url: 'https://twitter.com/johndoe', image: './Images/twitter.png', altText: 'Twitter' },
          ]
    }
   
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {teamMembers.map((member, index) => (
        <TeamMember
          key={index}
          image={member.image}
          name={member.name}
          position={member.position}
          Contact={member.Contact}
        />
      ))}
    </div>
  );
};

export default TeamSection;