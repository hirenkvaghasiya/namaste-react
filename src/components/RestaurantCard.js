import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ restData }) => {

    const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = restData?.data;

    return (
        <div className="res__card">
            <div className="res__img">
                <img
                    src={CDN_URL + cloudinaryImageId}
                    className="res__card__img"
                    alt="restaurant"
                />
            </div>
            <div className="res__info">
                <h2>{name}</h2>
                <h4 className="res__cuisines">{cuisines.join(", ")}</h4>
                <div className="res__card__bottom">
                    <h4>⭐️ {avgRating}</h4>
                    <span>•</span>
                    <h4>{deliveryTime} MINS</h4>
                    <span>•</span>
                    <h4>₹{costForTwo / 100} FOR TWO</h4>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;