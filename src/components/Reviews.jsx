import { useEffect, useState } from "react";
import "../pages/Products.css";

function Reviews({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;

    fetch(`https://dummyjson.com/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        setReviews(data.reviews || []);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p>Loading reviews...</p>;

  return (
    <div className="reviews-container">
      <h3 className="reviews-title">Customer Reviews</h3>
      {reviews.length === 0 ? (
        <p className="no-reviews">No reviews yet.</p>
      ) : (
        reviews.map((rev, idx) => (
          <div className="review-card" key={idx}>
            <div className="review-header">
              <h4 className="review-user">{rev.reviewerName}</h4>
              <span className="review-rating">⭐ {rev.rating}/5</span>
            </div>
            <p className="review-comment">{rev.comment}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Reviews;
