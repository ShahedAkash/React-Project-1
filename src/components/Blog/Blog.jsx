import PropTypes from 'prop-types';

const Blog = ({blog, handleSelectedBlogs}) => {
    const {img, title, description, price, credit} = blog;
    return (
        <div className=' bg-white p-4 rounded-xl space-y-2 shadow-lg'>
            <img className='w-full rounded-lg' src={img} alt="" />
            <h2 className=' text-xl font-semibold'>{title}</h2>
            <p className=' text-sm text-slate-700'>{description}</p>
            <div className=' flex justify-between text-slate-500 font-semibold'>
                <small>Price: {price}</small>
                <small>Credit : {credit} hr</small>
            </div>
            <button onClick={()=>handleSelectedBlogs(blog)} className=' bg-blue-500 p-1 w-full rounded-lg text-white font-semibold'>Select</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleSelectedBlogs: PropTypes.func
}

export default Blog;