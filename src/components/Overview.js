import Svgicons from "./Images";

function Overview() {
  return (
    <div className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>

      <div className="overview__stars">
        <Svgicons iconClass="overview__icon-star" icon="icon-star" />
        <Svgicons iconClass="overview__icon-star" icon="icon-star" />
        <Svgicons iconClass="overview__icon-star" icon="icon-star" />
        <Svgicons iconClass="overview__icon-star" icon="icon-star" />
        <Svgicons iconClass="overview__icon-star" icon="icon-star" />
      </div>

      {/* Location */}

      <div className="overview__location">
        <Svgicons
          iconClass="overview__icon-location"
          icon="icon-location-pin"
        />
        <button className="btn-inline">Albufeira, Portugal</button>
      </div>
      {/* Rating */}

      <div className="overview__rating">
        <div className="overview__rating-average">8.8</div>
        <div className="overview__rating-count">429 votes</div>
      </div>
    </div>
  );
}

export default Overview;
