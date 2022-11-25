import React, { useEffect, useState } from 'react';
import Single from './Single';

const Category = () => {
    const [catagories, setCatagories] = useState([])
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div>
            {
                catagories.map(category => <Single category={category}></Single>)
            }
        </div>
    );
};

export default Category;