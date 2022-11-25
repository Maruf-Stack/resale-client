import React from 'react';

const Blog = () => {
    return (
        <div className='lg:mx-20'>
            <div className='bg-sky-200 p-6 rounded-md mb-5'>
                <div className="que">
                    <span className='text-2xl font-bold'>Question1 :</span>  What are the different ways to manage a state in a React application?
                </div>
                <div className="ans">
                    <span className='text-xl font-bold'>Answer : </span>
                    There are four main types of state to properly manage in your React apps:<br></br>
                    •Local state<br></br>
                    •Global state<br></br>
                    •Server state<br></br>
                    •URL state
                </div>
            </div>
            <div className='bg-sky-200 p-6 rounded-md mb-5'>
                <div className="que font-thin">
                    <span className='text-2xl font-bold'>Question2 :</span>
                    How does prototypical inheritance work?
                </div>
                <div className="ans">
                    <span className='text-xl font-bold'>Answer : </span>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
                </div>
            </div>
            <div className='bg-sky-200 p-6 rounded-md mb-5'>
                <div className="que font-thin">
                    <span className='text-2xl font-bold'>Question1 :</span>
                </div>
                <div className="ans">
                    <span className='text-xl font-bold'>Answer : </span>
                </div>
            </div>
            <div className='bg-sky-200 p-6 rounded-md'>
                <div className="que font-thin">
                    <span className='text-2xl font-bold'>Question1 :</span>
                </div>
                <div className="ans">
                    <span className='text-xl font-bold'>Answer : </span>
                </div>
            </div>
        </div>
    );
};

export default Blog;