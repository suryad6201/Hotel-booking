import { User3, User4, User5, User6 } from "./Images";

function List(props) {
  return <li className="list__item">{props.text}</li>;
}

function Image(props) {
  return <img src={props.name} alt="Friends" className="recommend__photo" />;
}

function Description() {
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.`;

  return (
    <div className="description">
      <p className="paragraph">{lorem}</p>
      <p className="paragraph">{lorem.slice(0, 120)}</p>

      <ul className="list">
        <List text="Close to the beach" />
        <List text="Breakfast included" />
        <List text="Free airport shuttle" />
        <List text="Free wifi in all rooms" />
        <List text="Air conditioning and heating" />
        <List text="Pets allowed" />
        <List text="We speak all languages" />
        <List text="Perfect for families" />
      </ul>

      <div className="recommend">
        <p className="recommend__count">
          Rahul and 3 other friends recommend this hotel.
        </p>
        <div className="recommend__friends">
          <Image name={User3} />
          <Image name={User4} />
          <Image name={User5} />
          <Image name={User6} />
        </div>
      </div>
    </div>
  );
}

export default Description;
