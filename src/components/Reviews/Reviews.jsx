import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'Api/App';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMoviesReviews(movieId)
      .then(data => {
        setReviews(data.results);
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

      {reviews.length === 0 ? (
        <p>No reviews available</p>
      ) : (
        <div>
          <h2>Reviews</h2>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Reviews;
