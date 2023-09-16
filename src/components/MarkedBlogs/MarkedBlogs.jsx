import PropTypes from 'prop-types';


const MarkedBlogs = ({selectedBlogs, availableHours, creditRemainingHours, blogsPrice}) => {
    return (
        <div className=''>
            <div className=' bg-white p-4 rounded-xl'>
            <h2 className='mb-2 text-xl font-bold text-blue-600'>Credit Hour Remaining: {creditRemainingHours} hr</h2>
            <hr />
            <h2 className=' my-2 text-xl font-semibold'>Course Name</h2>
            {
                selectedBlogs.map((blogGoContainer,idx) => <li key={idx} className="my-2 list-decimal text-[#777676]">{blogGoContainer.title}</li>)
            }
            <hr />
            <h2 className='my-2 text-xl font-semibold'>Total Credit Hours: {availableHours}</h2>
            <hr />
            <h2 className='mt-2 text-xl font-bold'>Total Price : {blogsPrice} USD</h2>
            </div>
        </div>
    );
};

MarkedBlogs.propTypes = {
    selectedBlogs: PropTypes.array,
    availableHours: PropTypes.number,
    creditRemainingHours: PropTypes.number,
    blogsPrice: PropTypes.number
}

export default MarkedBlogs;