import React from 'react';

const Working = () => {
    return (
        <div className="bg-[#F2F2F2] py-16" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {/* Project Overview */}
            <div className="container mx-auto px-4 mb-16">
                <h1 className="text-4xl text-center text-[#F20707] font-bold mb-8">Vital: Your AI-Powered Supplement Recommender</h1>
                <p className="text-lg text-gray-800 text-center mb-4">
                    “The aim of medicine is to prevent disease and prolong life; the ideal of medicine is to eliminate the need of a physician.” - William J. Mayo
                </p>
                <p className="text-lg text-gray-800 text-center">
                    Introducing Vital, an AI-powered recommender for dietary supplements. Using your personal information such as age, gender, allergies, and health goals, Vital generates a list of top recommended dietary supplements, saving you time, money, and confusion.
                </p>
            </div>

            <hr className="border-gray-300 my-8"/>

            {/* How Vital Works Section */}
            <div className="container mx-auto px-4 mb-16">
                <h2 className="text-3xl text-center text-[#F20707] font-bold mb-8">How Vital Works</h2>
                <div className="flex flex-col gap-8">
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl text-[#F20707] font-bold mb-2">Step 1: Input Information</h3>
                        <p className="text-gray-800">
                            Enter your age, gender, allergies, and specific health goals.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl text-[#F20707] font-bold mb-2">Step 2: Data Processing</h3>
                        <p className="text-gray-800">
                            Vital uses AI and sentiment analysis to process your data and tailor recommendations.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl text-[#F20707] font-bold mb-2">Step 3: Get Recommendations</h3>
                        <p className="text-gray-800">
                            Receive a list of the best supplements suited to your needs and preferences.
                        </p>
                    </div>
                </div>
            </div>

            <hr className="border-gray-300 my-8"/>

            {/* Benefits of Using Vital Section */}
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-center text-[#F20707] font-bold mb-8">Benefits of Using Vital</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl text-[#F20707] font-bold mb-2">Personalized</h3>
                        <p className="text-gray-800">
                            Tailored supplement recommendations for your unique health profile.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl text-[#F20707] font-bold mb-2">AI-Powered</h3>
                        <p className="text-gray-800">
                            Advanced AI ensures accurate and relevant suggestions.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl text-[#F20707] font-bold mb-2">Cost Efficient</h3>
                        <p className="text-gray-800">
                            Save money by avoiding unnecessary doctor visits.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl text-[#F20707] font-bold mb-2">User Friendly</h3>
                        <p className="text-gray-800">
                            Simple and intuitive interface for easy use.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Working;
