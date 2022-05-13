import axios from 'axios';
import MovieCard from 'components/moviecard';
import Paginacao from 'components/paginacao';
import { BASE_URL } from 'utils/requests';

function listas(){

    // FORMA ERRADA DE FAZER REQUISIÇÃO
    axios.get(`${BASE_URL}/movies?size=12&page=0`).then(response =>{
        console.log(response.data);
    });

    return(
        <>
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

export default listas;