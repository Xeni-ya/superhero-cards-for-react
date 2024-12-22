const Card = (props) => {
  return (
    <div className="card">
      <h4 className="card__title-name">{props.name}</h4>
      <p className="card__text">{props.universe}</p>
      <p className="card__text">{props.alterego}</p>
      <p className="card__text">{props.occupation}</p>
      <p className="card__text">{props.friends}</p>
      <p className="card__text">{props.alterego}</p>
      <p className="card__text">{props.superpowers}</p>
      <img src={props.url} alt={props.name} />
      <p className="card__text">{props.info}</p>
      <div className="rating-wrap">
        <input type="radio" id="star-5" name="rating" value="5" />
        <label htmlFor="star-5" title="Оценка «5»"></label>
        <input type="radio" id="star-4" name="rating" value="4" />
        <label htmlFor="star-4" title="Оценка «4»"></label>
        <input type="radio" id="star-3" name="rating" value="3" />
        <label htmlFor="star-3" title="Оценка «3»"></label>
        <input type="radio" id="star-2" name="rating" value="2" />
        <label htmlFor="star-2" title="Оценка «2»"></label>
        <input type="radio" id="star-1" name="rating" value="1" />
        <label htmlFor="star-1" title="Оценка «1»"></label>
      </div>
    </div>
  );
}

export default Card;