import axios from 'axios';
import MovieCard from 'components/moviecard';
import Paginacao from 'components/paginacao';
import { useEffect, useState } from 'react';
import { MoviePage } from 'types/movie';
import { BASE_URL } from 'utils/requests';

function Listas(){

    //Definindo o React Hooks useState
    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() =>{
    // FORMA ERRADA DE FAZER REQUISIÇÃO
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`).then(response =>{
            const data = response.data as MoviePage;
            setPage(data);
            //console.log(data);
            //setPageNumber(data.number);
        });

    },[pageNumber]);

   //OBJETO MOCKADO
    //const movie = {
    //    id: 1,
    //    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    //    title: "The Witcher",
    //    count: 2,
    //    score: 4.5
    //};

    return(
        <>
        <Paginacao  />

            <div className="container">
                <div className="row">
                
                {page.content.map(movie => (
                    <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard movie={movie}/>
                    </div>
                )
                )}
                    

                </div>
            </div>

  
            
        </>
    );
}

export default Listas;