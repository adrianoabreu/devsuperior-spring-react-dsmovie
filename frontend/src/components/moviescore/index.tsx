import MovieStars from "components/moviestars";
import './styles.css';


type Props = {
    score: number;
    count: number;
}

function movescore({ score, count } : Props){

    //const score = 3.5;
    //const count = 13;

    return(
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
                <MovieStars score={score}/>
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    );
}

export default movescore;