/**
 *         title
        location
        googleMapsUrl
        startDate
        endDate
        description
        imageUrl
 */

function PlaceCard(props) {
    console.log(props);
    return (
        <div className="place">
            <img className="place-image" src={props.item.imageUrl} alt="" />
            <div className="place-details">
                <div className="place-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>{props.item.location}</p>
                    <a
                        href={props.item.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View on Google Maps
                    </a>
                </div>

                <div className="place-description">
                    <h2>{props.item.title}</h2>
                    <h3>
                        {props.item.startDate} - {props.item.endDate}
                    </h3>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    );
}

export default PlaceCard;
