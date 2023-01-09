import { User1, User2 } from "./Images";

function Reviews(props) {
  return (
    <figure className="review">
      <blockquote className="review__text">{props.reviewText}</blockquote>

      <figcaption className="review__user">
        <img
          src={props.imgName}
          alt={props.altText}
          className="review__photo"
        />
        <div className="review__user-box">
          <p className="review__user-name">{props.userName}</p>
          <p className="review__user-date">{props.userDate}</p>
        </div>
        <div className="review__rating">{props.rating}</div>
      </figcaption>
    </figure>
  );
}

function UserReview() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.";

  return (
    <div className="user-reviews">
      <Reviews
        reviewText={text}
        imgName={User1}
        altText="User 1"
        userName="Aiden"
        userDate="March 05th, 2022"
        rating="8.8"
      />
      <Reviews
        reviewText={text}
        imgName={User2}
        altText="User 2"
        userName="Naomi"
        userDate="Sept 13th, 2022"
        rating="9.8"
      />

      <button className="btn-inline">
        Show all <span>&rarr;</span>
      </button>
    </div>
  );
}

export default UserReview;
