import PropTypes from 'prop-types';

const MarkedBlog = ({blogGoContainer}) => {
    const {title} = blogGoContainer;
    
    return (
        <div className='mb-2'>
            <li className=' list-none'>{title}</li>
        </div>
    );
};

MarkedBlog.propTypes = {
    blogGoContainer: PropTypes.object
}

export default MarkedBlog;