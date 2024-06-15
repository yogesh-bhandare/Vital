import React from 'react';
// import './tailwind.css';

const features = [
    {
        image: 'https://img.freepik.com/free-vector/flat-hotel-review-with-stars_23-2148198232.jpg?w=740&t=st=1718459533~exp=1718460133~hmac=1282217e1cc027ad765c30f2f116cb7cdd896a6c97bd34171f36e43cd344cf60',
        title: 'Personalized Recommendations',
        description: 'Get dietary supplement recommendations tailored to your personal physical information and health goals.',
    },
    {
        image: 'https://img.freepik.com/free-vector/augmented-intelligence-abstract-concept-illustration_335657-3792.jpg?w=740&t=st=1718460096~exp=1718460696~hmac=9664745ba74b5ea33393eefab73e3884dda499fd1fe2c80a8f83354b76a60cac',
        title: 'AI Powered',
        description: 'Utilizes advanced AI and sentiment analysis to provide accurate and relevant supplement suggestions.',
    },
    {
        image: 'https://img.freepik.com/free-vector/hand-drawn-investments-concept_23-2149171640.jpg?t=st=1718460137~exp=1718460737~hmac=aef2256783e495bef363d4d2a57f55ef7932c4ccc0211653671e63aa67916e03',
        title: 'Cost Effective',
        description: 'Save money by avoiding unnecessary doctor visits and getting the right supplements the first time.',
    },
    {
        image: 'https://img.freepik.com/free-vector/appointment-booking-with-smartphone_23-2148567979.jpg?t=st=1718460193~exp=1718463793~hmac=9c51a80075d0495391480845ffcebf08f35945f0f2035d360a1cbf58974b5dd0&w=740',
        title: 'User Friendly',
        description: 'Easily enter your information and receive recommendations through a simple and intuitive interface.',
    },
];

const Features = () => {
    return (
        <div className="bg-[#F2F2F2] py-16 font-['Roboto'] border-gray-300 border-[1px]">
            <h2 className="text-3xl text-center text-[#F20707] font-bold mb-12">Features</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                        <img src={feature.image} alt={feature.title} className="w-full h-40  object-center object-scale-down mb-4 rounded-lg" />
                        <h3 className="text-xl font-semibold text-[#F20707] mb-2">{feature.title}</h3>
                        <p className="text-gray-700">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
