import axios from 'axios';
import MovieCard from 'components/moviecard';
import Paginacao from 'components/paginacao';
import { useEffect, useState } from 'react';
import { MoviePage } from 'types/movie';
import { BASE_URL } from 'utils/requests';

function Listas(){

    //Definindo o React Hooks useState
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() =>{
    // FORMA ERRADA DE FAZER REQUISIÇÃO
        axios.get(`${BASE_URL}/movies?size=12&page=1`).then(response =>{
            const data = response.data as MoviePage;
            console.log(data);
            setPageNumber(data.number);
        });

    },[]);


    return(
        <>
        <p>{pageNumber}</p>
            <Paginacao  />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>

  
            
        </>
    );
}

export default Listas;