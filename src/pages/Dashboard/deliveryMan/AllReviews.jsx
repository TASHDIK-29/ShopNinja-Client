import ReviewCard from "../../../components/cards/ReviewCard";
import useAllReviews from "../../../hooks/useAllReviews";
import SectionHeading from "../../../shared/SectionHeading";

const AllReviews = () => {

    const reviews = useAllReviews();
    console.log('all reviews = ', reviews);


    return (
        <div>
            <SectionHeading heading={'Reviews From Users'}></SectionHeading>

            <div className="grid grid-cols-2 gap-6">
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;