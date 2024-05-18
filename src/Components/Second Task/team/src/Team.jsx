import React from 'react';
const TeamMember = ({ image, name, position, Contact }) => {
    return (
      <div className="relative inline-block">
       <div class="group relative cursor-pointer items-center justify-center">
        <img src={image} alt={name} className="pt-10 h-auto w-auto object-cover transition-transform duration-500 rounded-lg  group-hover:scale-100 rounded-md" />
          <div className="absolute inset-x-0  bottom-0 flex translate-y-[85%]   flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-1/2 bg-white ">
            <h2 className="sm:text-sm text-xl text-center font-dmserif  font-bold text-black">{name}</h2>
            <p className="sm:text-sm text-gray-500 text-center italic">{position}</p>
            <div className="  h-8 grid grid-cols-3 gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:grid grid-rows-3">
             {Contact.map((detail, index) => (
                <a key={index} href={detail.url} target="_blank" rel="noopener noreferrer">
                  <img src={detail.image}/>
                </a>
              ))}
            </div>
            </div>
        </div>
        </div>
    );
  };
  export default TeamMember;