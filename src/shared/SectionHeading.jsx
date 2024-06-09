
const SectionHeading = ({heading}) => {
    return (
        <div className="my-4">
            <div className="w-1/3 mx-auto text-center py-4 border-y-2 ">
                <h1 className="text-3xl font-semibold text-gradient">{heading}</h1>
            </div>
        </div>
    );
};

export default SectionHeading;