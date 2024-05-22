// const Grids = () => {
//   const imageUrls = [
//     "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg",
//     "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg",
//     "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg",
//     "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg",
//     "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg",
//     "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg",
   
//   ];

//   return (
//     <div>
//       <GridPhotos imageUrls={imageUrls} />
//     </div>
//   );
// }

// const GridPhotos = ({ imageUrls }) => {
//     return (
//     <div>
//  <div className="container m-auto p-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="flex flex-col space-y-4">
//             {imageUrls.slice(0, 3).map((imageUrl, index) => (
//               <img src={imageUrl} className="h-40 rounded-lg" key={index} />
//             ))}
//           </div>
//           <div className="flex flex-col space-y-4">
//             {imageUrls.slice(3, 6).map((imageUrl, index) => (
//               <img src={imageUrl} className="h-60 rounded-lg" key={index} />
//             ))}
//           </div>
//           <div className="flex flex-col space-y-5 md:hidden">
//             {imageUrls.slice(6).map((imageUrl, index) => (
//               <img src={imageUrl} className="h-45 rounded-lg" key={index} />
//             ))}
//           </div>
//         </div>
     
//       </div>
//       <Grids/>
//     </div>
     
//     );
//   }
  

//   export default Grids;
const GridPhotos = ({ imageUrls }) => {
  return (
    <div>
      <div className="container m-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col space-y-4">
            {imageUrls.slice(0, 3).map((imageUrl, index) => (
              <img src={imageUrl} className="h-auto rounded-lg" key={index} />
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            {imageUrls.slice(3, 6).map((imageUrl, index) => (
              <img src={imageUrl} className="h-auto rounded-lg" key={index} />
            ))}
          </div>
          <div className="flex flex-col space-y-5 ">
            {imageUrls.slice(6,9).map((imageUrl, index) => (
              <img src={imageUrl} className="h-auto rounded-lg" key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Grids = () => {
  const imageUrls = [
    "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg",
    "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",    "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6h5npvyqmIacYPracR7Icw2NKdUsWJabZDwfQ928iaQ&s",
    "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
    "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg",


  ];

  return (
    <div>
      <GridPhotos imageUrls={imageUrls} />
    </div>
  );
};

export default Grids;
