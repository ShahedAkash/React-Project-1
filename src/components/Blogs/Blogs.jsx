import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleSelectedBlogs}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('api.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleSelectedBlogs={handleSelectedBlogs}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleSelectedBlogs: PropTypes.func
}

export default Blogs;