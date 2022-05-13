import FormCard from "components/formCard";
import { Link, useParams }   from "react-router-dom";
import { Movie } from 'types/movie';


function Formularios(){


    //OBJETO MOCKADO. DEVE-SE FAZER O USO DE PROPS
    //const movie = {
    //    id: 1,
    //    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    //    title: "The Witcher",
    //    count: 2,
    //    score: 4.5
    //};

    const params = useParams();

    return(
    <FormCard movieId={`${params.movieId}`}/>
    );
}

export default Formularios;