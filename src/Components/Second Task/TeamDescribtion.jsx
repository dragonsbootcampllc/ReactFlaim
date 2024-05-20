// import React from 'react';

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       image: "https://getaheadshot.net/wp-content/uploads/2022/08/Lora.2.png",
//       name: 'Fatima Mahmoud',
//       position: 'CEO',
//     //   Contact: ["./Images/gmail.png", "./Images/linkedin (1).png", "./Images/twitter.png"],
//     Contact: [
//         { url: 'mailto:john.doe@example.com', image: './Images/gmail.png', altText: 'Email' },
//         { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: './Images/linkedin (1).png', altText: 'LinkedIn' },
//         { url: 'https://twitter.com/johndoe', image: './Images/twitter.png', altText: 'Twitter' },
//       ]
//    },
//     {
//       image :"https://getaheadshot.net/wp-content/uploads/2024/01/Brian.jpg",
//       name: 'Jane Smith',
//       position: 'Designer',
//       Contact: [
//         { url: 'mailto:john.doe@example.com', image: './Images/gmail.png', altText: 'Email' },
//         { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: './Images/linkedin (1).png', altText: 'LinkedIn' },
//         { url: 'https://twitter.com/johndoe', image: './Images/twitter.png', altText: 'Twitter' },
//       ]
//     },
//     {
//         image: "https://getaheadshot.net/wp-content/uploads/2023/07/Kelly.jpg",
//         name: 'Hala Ahmed',
//         position: 'Back-end Developer',
//         Contact: [
//             { url: 'mailto:john.doe@example.com', image: './Images/gmail.png', altText: 'Email' },
//             { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: './Images/linkedin (1).png', altText: 'LinkedIn' },
//             { url: 'https://twitter.com/johndoe', image: './Images/twitter.png', altText: 'Twitter' },
//           ]

//     },
//     {
//         image: "https://getaheadshot.net/wp-content/uploads/2023/01/Josh.png",
//         name: 'Faisal Mohamed',
//         position: 'HR',
//         Contact: [
//             { url: 'mailto:john.doe@example.com', image: './Images/gmail.png', altText: 'Email' },
//             { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: './Images/linkedin (1).png', altText: 'LinkedIn' },
//             { url: 'https://twitter.com/johndoe', image: './Images/twitter.png', altText: 'Twitter' },
//           ]
//     }
   
//   ];

//   return (
//     <div>
//        <div className="grid grid-cols-4 gap-4">
//       {teamMembers.map((member, index) => (
//         <TeamMember
//           key={index}
//           image={member.image}
//           name={member.name}
//           position={member.position}
//           Contact={member.Contact}
//         />
//       ))}
//     </div>
//     {/* <TeamMember/> */}
//     </div>
    
   
//   );
// };
// const TeamMember = ({ image, name, position, Contact }) => {
//   return (
//     <div className="relative inline-block">
//      <div class="group relative cursor-pointer items-center justify-center h-[300px]">
//       <img src={image} alt={name} className="pt-10 h-auto w-auto object-cover transition-transform duration-500 rounded-lg  group-hover:scale-100 overflow-hidden" />
//         <div className="absolute inset-x-0  bottom-0 flex h-[70px] flex-col items-center justify-center text-center transition-all duration-500 group-hover:h-[100px] bg-white ">
//           <h2 className="sm:text-sm text-xl text-center font-dmserif  font-bold text-black">{name}</h2>
//           <p className="sm:text-sm text-gray-500 text-center italic">{position}</p>
//           <div className="  h-8 grid grid-cols-3 gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:grid grid-rows-3">
//            {Contact.map((detail, index) => (
//               <a key={index} href={detail.url} target="_blank" rel="noopener noreferrer">
//                 <img src={detail.image}/>
//               </a>
//             ))}
//           </div>
//           </div>
//       </div>
//       </div>
//   );
// };
// // export default TeamMember;
// export default TeamSection;
import React from 'react';
import { SiGmail } from "react-icons/si";
const TeamSection = () => {
  const teamMembers = [
    {
      image: "https://getaheadshot.net/wp-content/uploads/2022/08/Lora.2.png",
      name: 'Fatima Mahmoud',
      position: 'CEO',
      contact: [
        { url: 'mailto:john.doe@example.com', image: './Images/gmail.png', altText: 'Email Fatima Mahmoud' },
        { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: './Images/linkedin (1).png', altText: 'LinkedIn profile for Fatima Mahmoud' },
        { url: 'https://twitter.com/johndoe', image: './Images/twitter.png', altText: 'Twitter profile for Fatima Mahmoud' },
      ]
    },
    {
      image: "https://getaheadshot.net/wp-content/uploads/2024/01/Brian.jpg",
      name: 'Jane Smith',
      position: 'Designer',
      contact: [
        { url: 'mailto:john.doe@example.com', image: <SiGmail />, altText: 'Email Jane Smith' },
        { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: <SiGmail />, altText: 'LinkedIn profile for Jane Smith' },
        { url: 'https://twitter.com/johndoe', image: <SiGmail />, altText: 'Twitter profile for Jane Smith' },
      ]
    },
    {
      
      image: "https://getaheadshot.net/wp-content/uploads/2023/07/Kelly.jpg",
      name: 'Hala Ahmed',
      position: 'Back-end Developer',
      contact: [
        { url: 'mailto:john.doe@example.com', image: './Images/gmail.png', altText: 'Email Hala Ahmed' },
        { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: './Images/linkedin (1).png', altText: 'LinkedIn profile for Hala Ahmed' },
        { url: 'https://twitter.com/johndoe', image: './Images/twitter.png', altText: 'Twitter profile for Hala Ahmed' },
      ]
    },
    {
      image: "https://getaheadshot.net/wp-content/uploads/2023/01/Josh.png",
      name: 'Faisal Mohamed',
      position: 'HR',
      contact: [
        { url: 'mailto:john.doe@example.com', image: './Images/gmail.png', altText: 'Email Faisal Mohamed' },
        { url: 'https://www.linkedin.com/in/kenzy-sobhy-391524249/', image: './Images/linkedin (1).png', altText: 'LinkedIn profile for Faisal Mohamed' },
        { url: 'https://twitter.com/johndoe', image: './Images/twitter.png', altText: 'Twitter profile for Faisal Mohamed' },
      ]
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
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
    <div className="relative inline-block">
      <div className="group relative cursor-pointer items-center justify-center h-[300px]">
        <img src={image} alt={`Portrait of ${name}`} className="pt-10 h-auto w-auto object-cover transition-transform duration-500 rounded-lg group-hover:scale-100 overflow-hidden" />
        <div className="absolute inset-x-0 bottom-0 flex h-[70px] flex-col items-center justify-center text-center transition-all duration-500 group-hover:h-[100px] bg-white">
          <h2 className="sm:text-sm text-xl text-center font-dmserif font-bold text-black">{name}</h2>
          <p className="sm:text-sm text-gray-500 text-center italic">{position}</p>
          <div className="h-8 grid grid-cols-3 gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:grid grid-rows-3">
            {contact.map((detail, index) => (
              <a key={index} href={detail.url} target="_blank" rel="noopener noreferrer" aria-label={detail.altText}>
                {/* <img src={detail.image} alt={detail.altText} /> */}
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