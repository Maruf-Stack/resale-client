import React from 'react';

const Blog = () => {
    return (
        <div className='lg:mx-20'>
            <div className='bg-sky-200 p-6 rounded-md mb-5'>
                <div className="que mb-4">
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
                <div className="que mb-4">
                    <span className='text-2xl font-bold'>Question2 :</span>
                    How does prototypical inheritance work?
                </div>
                <div className="ans">
                    <span className='text-xl font-bold'>Answer : </span>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
                </div>
            </div>
            <div className='bg-sky-200 p-6 rounded-md mb-5'>
                <div className="que mb-4">
                    <span className='text-2xl font-bold'>Question3 :</span>
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="ans">
                    <span className='text-xl font-bold'>Answer : </span>
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended.<br></br>
                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </div>
            </div>
            <div className='bg-sky-200 p-6 rounded-md'>
                <div className="que mb-4">
                    <span className='text-2xl font-bold'>Question1 :</span>
                    React vs. Angular vs. Vue?
                </div>
                <div className="ans">
                    <span className='text-xl font-bold'>Answer : </span>
                    <span className='font-semibold'>Angular :</span>  developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.<br></br>
                    <span className='font-semibold'>React :</span> React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.<br></br>
                    <span className='font-semibold'>Vue :</span>Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesnt have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.
                </div>
            </div>
        </div>
    );
};

export default Blog;