import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13417.821172960459!2d-96.7990857!3d32.7801851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9073cfe6d9a606a!2sMagnolia+Dallas+Downtown!5e0!3m2!1sen!2suk!4v1560118437290!5m2!1sen!2suk"
                width="100%"
                height="500px"
                frameborder="0"
                allowfullscreen>
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;