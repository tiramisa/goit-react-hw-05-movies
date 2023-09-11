import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'Api/App';
import ActorFoto from 'img/actorFoto.jpeg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMoviesCast(movieId).then(data => {
      console.log('data', data);
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <div>
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
