
const GridPhotos = () => {
    return (
      <div className="container m-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col space-y-4">
            <img src="images/1.jpg" className="h-40 rounded-lg" />
            <img src="images/2.jpg" className="h-72 rounded-lg" />
            <img src="images/3.jpg" className="h-60 rounded-lg" />
          </div>
          <div className="flex flex-col space-y-4">
            <img src="images/4.jpg" className="h-60 rounded-lg" />
            <img src="images/5.jpg" className="h-48 rounded-lg" />
            <img src="images/6.jpg" className="h-64 rounded-lg" />
          </div>
          <div className="flex flex-col space-y-4">
            <img src="images/7.jpg" className="h-45 rounded-lg" />
            <img src="images/8.jpg" className="h-70 rounded-lg" />
            <img src="images/9.jpg" className="h-75 rounded-lg" />
          </div>
        </div>
      </div>
    );
  }
  
  export default GridPhotos;