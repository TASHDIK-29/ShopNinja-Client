import ReviewCard from "../../../components/cards/ReviewCard";
import useAllReviews from "../../../hooks/useAllReviews";

const AllReviews = () => {

    const reviews = useAllReviews();
    console.log('all reviews = ', reviews);


    return (
        <div>
            all reviews

            <div className="grid grid-cols-2 gap-6">
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;