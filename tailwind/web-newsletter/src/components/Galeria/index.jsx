import { useEffect, useState } from "react"
import axios from 'axios'

const Galeria = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        handleLoadPhotos()
    }, [])


    const handleLoadPhotos = () => {
        
        axios.get('https://jsonplaceholder.typicode.com/photos/')
        .then(function (response) {
          return response.data
        })
        .then(function (json) {
           setPhotos(json) 
        })
           
    }
    

    return (
      <div>
        <button
          className="block bg-blue-400 p-2 rounded"
          onClick={handleLoadPhotos}
        >
          Carregar Imagens
        </button>
        Total de fotos: {photos.length}
        <div className="grid grid-cols-8 gap-3">
          {photos.map((item, index) => (
            <div key={index}>
              {item.title}
              <img src={item.thumbnailUrl} className="w-32 block "></img>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Galeria
