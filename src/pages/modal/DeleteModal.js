import React from 'react';

const DeleteModal = () => {
    return (
        <a href="#my-modal-2" className="btn">open modal</a>
        <p>{/<em> Put this part before </body> tag </em> /}</p>
    <div className="modal" id="my-modal-2">
        <div className="modal-box">
            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div className="modal-action">
                <a href="#" className="btn">Yay!</a>
            </div>
        </div>
    </div>
    );
};

export default DeleteModal;