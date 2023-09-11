import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'Api/App';
import ActorFoto from 'img/actorFoto.jpeg';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMoviesCast(movieId)
      .then(data => {
        setCast(data.cast);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}

      {cast.length === 0 && <p>No cast available</p>}

      {cast && (
        <div>
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                <div>
                  <img
                    srcSet={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                        : ActorFoto
                    }
                    alt="actor"
                  />
                </div>
                <div>
                  <p>{actor.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cast;
