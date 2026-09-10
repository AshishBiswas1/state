import starFilled from '/image/filled-star.jpg';
import starEmpty from '/image/empty-star.jpg';

export default function Star(props) {
    let starIcon = props.isFavorite ? starFilled : starEmpty;

      let label = props.isFavorite
        ? 'Remove from Favorite'
        : 'Add to Favorite';
      let alt = props.isFavorite ? 'filled star icon' : 'empty star icon';
  return (
    <button
      onClick={props.toggle}
      aria-pressed={props.isFavorite}
      aria-label={label}
      className="favorite-button"
    >
      <img src={starIcon} alt={alt} className="favorite" />
    </button>
  );
}
