import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center fw-bold mb-5'>This is blog page</h2>

<h3>What is the differences between uncontrolled and controlled components?</h3>
<p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
<h3>How to validate React props using PropTypes?</h3>
<p>React PropTypes validators
PropTypes.any : The prop can be of any data type.
PropTypes.bool : The prop should be a Boolean.
PropTypes.number : The prop should be a number.
PropTypes.string : The prop should be a string.
PropTypes.func : The prop should be a function.
PropTypes.array : The prop should be an array.</p>
<h3>What is the difference between nodejs and express js?</h3>
<p>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
<h3>What is a custom hook, and why will you create a custom hook?</h3>
<p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
        </div>


    );
};

export default Blog;