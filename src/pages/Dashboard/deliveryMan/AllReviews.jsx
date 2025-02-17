import { Helmet } from "react-helmet-async";
import ReviewCard from "../../../components/cards/ReviewCard";
import useAllReviews from "../../../hooks/useAllReviews";
import SectionHeading from "../../../shared/SectionHeading";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const AllReviews = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    useEffect( () =>{
        AOS.init({duration: 1000});
    },[])

    const reviews = useAllReviews();
    console.log('all reviews = ', reviews);


    return (
        <div>
            <Helmet>
                <title>All Review || Ship Ninja</title>
            </Helmet>
            <SectionHeading heading={'Reviews From Users'}></SectionHeading>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-aos="zoom-in-up">
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;