import type { ICard } from "../interface/card.inteface";

type Props = {
  card: ICard;
  handleChoice: (card: ICard) => void;
  flipped: boolean;
  disabled: boolean;
};

const Card = ({ card, handleChoice, flipped, disabled }: Props) => {
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={() => {
            if (!disabled) handleChoice(card);
          }}
          alt="card back"
        />
      </div>
    </div>
  );
};

export default Card;
