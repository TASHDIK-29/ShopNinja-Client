import { Rating } from "@smastrom/react-rating";
import ReactStarsRating from 'react-awesome-stars-rating';
import '@smastrom/react-rating/style.css';

const TopDeliverymanCard = ({ deliveryMan }) => {

    const { totalDelivery, totalRating, totalReview, role, phone, name, image } = deliveryMan;
    const rating = parseFloat(totalRating / totalReview);

    return (
        <div className="flex flex-col justify-center px-8 mx-6 my-12 text-center rounded-md  bg-slate-400/25">
            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={image} />
            <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">{name}</p>
                <p>Delivered : {totalDelivery}</p>
                <p>Ratings : {rating.toFixed(1)}</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-orange-600">
                <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    readOnly
                />
            </div>
        </div>
    );
};

export default TopDeliverymanCard;