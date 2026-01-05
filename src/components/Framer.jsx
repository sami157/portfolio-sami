import React, { useState, useRef} from 'react';

const Framer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [buttonRect, setButtonRect] = useState(null);
    const buttonRef = useRef(null);

    const handleOpen = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setButtonRect(rect);
        }
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
            {/* Trigger Button */}
            <button
                ref={buttonRef}
                onClick={handleOpen}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
                Open Modal
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={handleClose}
                >
                    {/* Background Overlay */}
                    <div
                        className="absolute inset-0 bg-black transition-opacity duration-500"
                        style={{
                            opacity: isOpen ? 0.7 : 0,
                        }}
                    />

                    {/* Modal Content */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 ease-out"
                        style={{
                            width: buttonRect ? `${buttonRect.width}px` : '600px',
                            height: buttonRect ? `${buttonRect.height}px` : '400px',
                            top: buttonRect ? `${buttonRect.top - window.innerHeight / 2 + buttonRect.height / 2}px` : '0',
                            left: buttonRect ? `${buttonRect.left - window.innerWidth / 2 + buttonRect.width / 2}px` : '0',
                            animation: isOpen ? 'morphToModal 0.5s ease-out forwards' : 'none',
                        }}
                    >
                        <div className="h-full flex flex-col p-8">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <h2 className="text-3xl font-bold text-gray-800">Modal Title</h2>
                                <button
                                    onClick={handleClose}
                                    className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-600"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto">
                                <p className="text-gray-600 mb-4">
                                    This modal morphs from the button position and size to its final state, creating a smooth and delightful animation effect.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    The animation uses CSS transitions and dynamic positioning based on the button's location on the screen.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="p-4 bg-purple-50 rounded-xl">
                                        <h3 className="font-semibold text-purple-800 mb-2">Feature 1</h3>
                                        <p className="text-sm text-gray-600">Smooth morphing animation</p>
                                    </div>
                                    <div className="p-4 bg-blue-50 rounded-xl">
                                        <h3 className="font-semibold text-blue-800 mb-2">Feature 2</h3>
                                        <p className="text-sm text-gray-600">Dynamic positioning</p>
                                    </div>
                                    <div className="p-4 bg-pink-50 rounded-xl">
                                        <h3 className="font-semibold text-pink-800 mb-2">Feature 3</h3>
                                        <p className="text-sm text-gray-600">Responsive design</p>
                                    </div>
                                    <div className="p-4 bg-green-50 rounded-xl">
                                        <h3 className="font-semibold text-green-800 mb-2">Feature 4</h3>
                                        <p className="text-sm text-gray-600">Easy to customize</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
                                <button
                                    onClick={handleClose}
                                    className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors"
                                >
                                    Cancel
                                </button>
                                <button className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors">
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        @keyframes morphToModal {
          from {
            width: ${buttonRect?.width}px;
            height: ${buttonRect?.height}px;
            border-radius: 1rem;
          }
          to {
            width: 600px;
            height: 400px;
            border-radius: 1.5rem;
            top: 0;
            left: 0;
          }
        }

        @media (max-width: 640px) {
          @keyframes morphToModal {
            from {
              width: ${buttonRect?.width}px;
              height: ${buttonRect?.height}px;
              border-radius: 1rem;
            }
            to {
              width: 90vw;
              height: 80vh;
              border-radius: 1.5rem;
              top: 0;
              left: 0;
            }
          }
        }
      `}</style>
        </div>
    );
};

export default Framer;