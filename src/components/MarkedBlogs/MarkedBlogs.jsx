import PropTypes from 'prop-types';
import MarkedBlog from '../MarkedBlog/MarkedBlog';

const MarkedBlogs = ({selectedBlogs, availableHours, creditRemainingHours, blogsPrice}) => {
    return (
        <div className='w-6/12'>
            <h2 className='mb-2 text-xl font-semibold'>Credit Hour Remaining: {creditRemainingHours} hr</h2>
            <hr />
            <h2 className=' my-2 text-xl font-semibold'>Course Name</h2>
            {
                selectedBlogs.map((blogGoContainer,idx) => <MarkedBlog 
                    key={idx}
                    blogGoContainer={blogGoContainer}
                    availableHours={availableHours}
                    ></MarkedBlog>)
            }
            <hr />
            <h2 className='my-2 text-xl font-semibold'>Total Credit Hours: {availableHours}</h2>
            <hr />
            <h2 className='mt-2 text-xl font-semibold'>Total Price : {blogsPrice} USD</h2>
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