import PlaceCard from "./PalceCard";
import data from "../data";

function Content() {
    const placeCards = data.map((item) => {
        return <PlaceCard key={item.id} item={item} />;
    });

    return <div>{placeCards}</div>;
}

export default Content;
