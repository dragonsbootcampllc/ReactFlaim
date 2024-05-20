import TeamComponent1_Inner from './TeamComponent1_Inner';

const teamMembers = [
  {
    name: 'Adveen Desuza',
    title: 'UI Designer',
    image: 'https://via.placeholder.com/150',
    socials: [
      { platform: 'facebook', link: 'https://facebook.com' },
      { platform: 'twitter', link: 'https://twitter.com' },
      { platform: 'instagram', link: 'https://instagram.com' },
    ],
  },
  {
    name: 'Jezmin Uniya',
    title: 'Product Designer',
    image: 'https://via.placeholder.com/150',
    socials: [
      { platform: 'facebook', link: 'https://facebook.com' },
      { platform: 'twitter', link: 'https://twitter.com' },
      { platform: 'instagram', link: 'https://instagram.com' },
    ],
  },
  {
    name: 'Andrieo Gloree',
    title: 'App Developer',
    image: 'https://via.placeholder.com/150',
    socials: [
      { platform: 'facebook', link: 'https://facebook.com' },
      { platform: 'twitter', link: 'https://twitter.com' },
      { platform: 'instagram', link: 'https://instagram.com' },
    ],
  },
  {
    name: 'Jackie Sanders',
    title: 'Content Writer',
    image: 'https://via.placeholder.com/150',
    socials: [
      { platform: 'facebook', link: 'https://facebook.com' },
      { platform: 'twitter', link: 'https://twitter.com' },
      { platform: 'instagram', link: 'https://instagram.com' },
    ],
  },
];

const TeamComponent1_Wrapper = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
          {teamMembers.map((member, index) => (
            <TeamComponent1_Inner key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamComponent1_Wrapper;