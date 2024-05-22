// import React from 'react';
// import { SiGmail,SiTwitter} from "react-icons/si";
// import { FaLinkedin } from "react-icons/fa6";
// const TeamSection = () => {
//   const teamMembers = [
//     {
//       image: "https://getaheadshot.net/wp-content/uploads/2022/08/Lora.2.png",
//       name: 'Fatima Mahmoud',
//       position: 'CEO',
//       contact: [
//         { url: 'mailto:john.doe@example.com', image:  <SiGmail color="#D44638" size={20}/>, altText: 'Email Fatima Mahmoud' },
//         { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image:  <FaLinkedin  color="#0043b8" size={20}/>},
//         { url: 'https://twitter.com/johndoe', image:   <SiTwitter color="#1DA1F2" size={20} />, altText: 'Twitter profile for Fatima Mahmoud' },
//       ]
//     },
//     {
//       image: "https://getaheadshot.net/wp-content/uploads/2024/01/Brian.jpg",
//       name: 'Jane Smith',
//       position: 'Designer',
//       contact: [
//         { url: 'mailto:john.doe@example.com', image:<SiGmail color="#D44638" size={20}/>, altText: 'Email Jane Smith' },
//         { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: <FaLinkedin  color="#0043b8" size={20}/>, altText: 'LinkedIn profile for Jane Smith' },
//         { url: 'https://twitter.com/johndoe', image:  <SiTwitter color="#1DA1F2" size={20} />, altText: 'Twitter profile for Jane Smith' },
//       ]
//     },
//     {
      
//       image: "https://getaheadshot.net/wp-content/uploads/2023/07/Kelly.jpg",
//       name: 'Hala Ahmed',
//       position: 'Back-end Developer',
//       contact: [
//         { url: 'mailto:john.doe@example.com', image:  <SiGmail color="#D44638" size={20}/>, altText: 'Email Hala Ahmed' },
//         { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: <FaLinkedin  color="#0043b8" size={20}/>, altText: 'LinkedIn profile for Hala Ahmed' },
//         { url: 'https://twitter.com/johndoe', image:   <SiTwitter color="#1DA1F2" size={20} />, altText: 'Twitter profile for Hala Ahmed' },
//       ]
//     },
//     {
//       image: "https://getaheadshot.net/wp-content/uploads/2023/01/Josh.png",
//       name: 'Faisal Mohamed',
//       position: 'HR',
//       contact: [
//         { url: 'mailto:john.doe@example.com', image:  <SiGmail color="#D44638" size={20}/>, altText: 'Email Faisal Mohamed' },
//         { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image:  <FaLinkedin  color="#0043b8" size={20}/>, altText: 'LinkedIn profile for Faisal Mohamed' },
//         { url: 'https://twitter.com/johndoe', image:   <SiTwitter color="#1DA1F2" size={20} />, altText: 'Twitter profile for Faisal Mohamed' },
//       ]
//     }
//   ];

//   return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {teamMembers.map((member, index) => (
//           <TeamMember
//             key={index}
//             image={member.image}
//             name={member.name}
//             position={member.position}
//             contact={member.contact}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const TeamMember = ({ image, name, position, contact }) => {
//   return (
//     <div className="relative inline-block  w-full  sm:w-auto">
//       <div className="group relative cursor-pointer items-center justify-center h-[300px]">
//         <img src={image} alt={`Portrait of ${name}`} className="pt-10 h-auto w-auto object-cover transition-transform duration-500 rounded-lg group-hover:scale-100 overflow-hidden" />
//         <div className="absolute inset-x-0 bottom-0 flex h-[70px] flex-col items-center justify-center text-center transition-all duration-500 group-hover:h-[100px] bg-white">
//           <h2 className="sm:text-sm text-xl text-center font-dmserif font-bold text-black">{name}</h2>
//           <p className="sm:text-sm text-gray-500 text-center italic">{position}</p>
//           <div className="h-8 grid grid-cols-3 gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:grid grid-rows-2">
//             {contact.map((detail, index) => (
//               <a key={index} href={detail.url} target="_blank" rel="noopener noreferrer" aria-label={detail.altText}>
//                 {detail.image}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default TeamSection;
import React from 'react';
import { SiGmail, SiTwitter } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const TeamSection = () => {
  const teamMembers = [
    {
      image: "https://getaheadshot.net/wp-content/uploads/2022/08/Lora.2.png",
      name: 'Fatima Mahmoud',
      position: 'CEO',
      contact: [
        { url: 'mailto:john.doe@example.com', image: <SiGmail color="#D44638" size={20} />, altText: 'Email Fatima Mahmoud' },
        { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: <FaLinkedin color="#0043b8" size={20} /> },
        { url: 'https://twitter.com/johndoe', image: <SiTwitter color="#1DA1F2" size={20} />, altText: 'Twitter profile for Fatima Mahmoud' },
      ]
    },
    {
      image: "https://getaheadshot.net/wp-content/uploads/2024/01/Brian.jpg",
      name: 'Jane Smith',
      position: 'Designer',
      contact: [
        { url: 'mailto:john.doe@example.com', image: <SiGmail color="#D44638" size={20} />, altText: 'Email Jane Smith' },
        { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: <FaLinkedin color="#0043b8" size={20} />, altText: 'LinkedIn profile for Jane Smith' },
        { url: 'https://twitter.com/johndoe', image: <SiTwitter color="#1DA1F2" size={20} />, altText: 'Twitter profile for Jane Smith' },
      ]
    },
    {
      image: "https://getaheadshot.net/wp-content/uploads/2023/07/Kelly.jpg",
      name: 'Hala Ahmed',
      position: 'Back-end Developer',
      contact: [
        { url: 'mailto:john.doe@example.com', image: <SiGmail color="#D44638" size={20} />, altText: 'Email Hala Ahmed' },
        { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: <FaLinkedin color="#0043b8" size={20} />, altText: 'LinkedIn profile for Hala Ahmed' },
        { url: 'https://twitter.com/johndoe', image: <SiTwitter color="#1DA1F2" size={20} />, altText: 'Twitter profile for Hala Ahmed' },
      ]
    },
    {
      image: "https://getaheadshot.net/wp-content/uploads/2023/01/Josh.png",
      name: 'Faisal Mohamed',
      position: 'HR',
      contact: [
        { url: 'mailto:john.doe@example.com', image: <SiGmail color="#D44638" size={20} />, altText: 'Email Faisal Mohamed' },
        { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: <FaLinkedin color="#0043b8" size={20} />, altText: 'LinkedIn profile for Faisal Mohamed' },
        { url: 'https://twitter.com/johndoe', image: <SiTwitter color="#1DA1F2" size={20} />, altText: 'Twitter profile for Faisal Mohamed' },
      ]
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            image={member.image}
            name={member.name}
            position={member.position}
            contact={member.contact}
          />
        ))}
      </div>
    </div>
  );
};

const TeamMember = ({ image, name, position, contact }) => {
  return (
    <div className="relative inline-block w-full">
      <div className="group relative cursor-pointer items-center justify-center h-[300px]">
        <img src={image} alt={`Portrait of ${name}`} className="pt-10 h-auto w-auto object-cover transition-transform duration-500 rounded-lg group-hover:scale-100 overflow-hidden" />
        <div className="absolute inset-x-0 bottom-0 flex h-[70px] flex-col items-center justify-center text-center transition-all duration-500 group-hover:h-[100px] bg-white">
          <h2 className="text-lg sm:text-sm md:text-base lg:text-lg text-center font-dmserif font-bold text-black">{name}</h2>
          <p className="text-sm sm:text-xs md:text-sm lg:text-base text-gray-500 text-center italic">{position}</p>
          <div className="h-8 grid grid-cols-3 gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {contact.map((detail, index) => (
              <a key={index} href={detail.url} target="_blank" rel="noopener noreferrer" aria-label={detail.altText}>
                {detail.image}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

