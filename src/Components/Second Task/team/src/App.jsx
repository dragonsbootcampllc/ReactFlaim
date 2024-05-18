import TeamSection from './TeamDescribtion'
import './App.css'

function App() {
  return (
    <div>
       <h1 className=" sm:text-sm pt-10 text-base text-center text-white">
     Our Team Members
    </h1>
    <h1 className="sm:text-xl text-4xl font-bold text-center text-white">
     Our Creative Team
    </h1>
    <p className='sm:text-xs pt-3 pb-5 text-sm text-center text-white'> Our mission is to transform aspiring programmers into skilled tech professionals.</p>
    <TeamSection />
    </div>
  );
}

export default App
