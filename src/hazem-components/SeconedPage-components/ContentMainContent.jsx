


function ContentMainContent() {
    return (
        <div className="content text-white mt-8">
            <div className="text max-w-4xl text-center">
                <h1 className=' text-2xl'>Just Sign Up & Get a Free
                    Demo of Zentro</h1>
                <p className=' p-5 text-sm text-borderColor mb-6 '>Aliquam et tellus urna. Phasellus egetadipiscing elit. Mauris id nunc odio.
                    Aliquam et tellus urna. Phasellus egetl</p>
            </div>
            <div className="boxes flex flex-col md:flex-row justify-evenly items-center  ">
                <div className="box text-center mb-14 ">
                    <div className="icon">
                        <div className="w-12 h-12 bg-ItemsColor rounded-full mx-auto shadow-box-shadow"></div>
                    <p className="p-2">Chat bot Creation </p>
                    </div>
                    <div className="items">
                    <p className=" text-start bg-gradient-to-r from-background to-borderColor border-none  p-2 rounded-lg">bot type  </p>
                    </div>
                </div>
                <div className="box  text-center mb-14 ">
                    <div className="icon">
                        <div className="w-12 h-12 bg-ItemsColor rounded-full mx-auto shadow-box-shadow"></div>
                    <p className="p-2">Developer API</p>
                    </div>
                    <div className="items">
                    <p className=" text-start bg-gradient-to-r from-background to-borderColor border-none  p-2 rounded-lg">API Integration </p>
                    </div>
                </div>
                <div className="box  text-center mb-14">
                    <div className="icon">
                        <div className="w-12 h-12 bg-ItemsColor rounded-full mx-auto shadow-box-shadow"></div>
                    <p className="p-2">Copywriting </p>
                    </div>
                    <div className="items">
                    <p className=" text-start bg-gradient-to-r from-background to-borderColor border-none  p-2 rounded-lg">Product description  </p>
                    </div>
                </div>
                <div className="box text-center mb-14">
                    <div className="icon">
                        <div className="w-12 h-12 bg-ItemsColor rounded-full mx-auto shadow-box-shadow"></div>
                    <p className="p-2">Sales</p>
                    </div>
                    <div className="items">
                    <p className=" text-start bg-gradient-to-r from-background to-borderColor border-none  p-2 rounded-lg">Hashtag ideas  </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContentMainContent;