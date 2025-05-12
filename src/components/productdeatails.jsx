import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ShimmerSimpleGallery } from 'react-shimmer-effects';
import Useproductdatadeatails from "../hooks/useproductdatadeatails";
import Usecart from "../hooks/usecart";
import Toast from "./Toast";

const Productsdeatails = () => {
    const { product_id } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const {data, loading} = Useproductdatadeatails(product_id);
    const { addToCart } = Usecart();
    const [showToast, setShowToast] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (data) {
            addToCart({ ...data, quantity });
            setShowToast(true);
        }
    };

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= data?.stock) {
            setQuantity(newQuantity);
        }
    };

    if (loading) {
        return <ShimmerSimpleGallery card imageHeight={300} />;
    }

    if (!data) {
        return <div>No product data available</div>;
    }

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg key={`star-${i}`} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <svg key="half-star" className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
            );
        }

        return stars;
    };

    return (
        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                        <div className="relative">
                            <img
                                className="w-full h-96 object-contain rounded-lg"
                                src={data.images[selectedImage]}
                                alt={data.title}
                            />
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                {data.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            selectedImage === index ? 'bg-primary-700 w-4' : 'bg-gray-300'
                                        }`}
                                        aria-label={`View image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 mt-4">
                            {data.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                                        selectedImage === index ? 'ring-2 ring-primary-700' : ''
                                    }`}
                                >
                                    <img
                                        className="w-full h-24 object-cover"
                                        src={image}
                                        alt={`${data.title} - ${index + 1}`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                            {data.title}
                        </h1>
                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <div className="flex items-center gap-2">
                                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                    ${data.price}
                                </p>
                                {data.discountPercentage > 0 && (
                                    <span className="text-sm text-red-500 line-through">
                                        ${(data.price / (1 - data.discountPercentage / 100)).toFixed(2)}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                <div className="flex items-center gap-1">
                                    {renderStars(data.rating)}
                                </div>
                                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                                    ({data.rating.toFixed(1)})
                                </p>
                                <a href="#reviews" className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white">
                                    {data.reviews.length} Reviews
                                </a>
                            </div>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Description</h3>
                                <p className="text-gray-500 dark:text-gray-400">{data.description}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Product Details</h3>
                                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                                    <li><strong>Brand:</strong> {data.brand}</li>
                                    <li><strong>Category:</strong> {data.category}</li>
                                    <li><strong>Stock:</strong> {data.stock} units</li>
                                    <li><strong>SKU:</strong> {data.sku}</li>
                                    <li><strong>Weight:</strong> {data.weight} kg</li>
                                    <li><strong>Dimensions:</strong> {data.dimensions.width} x {data.dimensions.height} x {data.dimensions.depth} cm</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Shipping & Returns</h3>
                                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                                    <li><strong>Shipping:</strong> {data.shippingInformation}</li>
                                    <li><strong>Returns:</strong> {data.returnPolicy}</li>
                                    <li><strong>Warranty:</strong> {data.warrantyInformation}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                                <button
                                    onClick={() => handleQuantityChange(quantity - 1)}
                                    className="inline-flex items-center justify-center p-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                    </svg>
                                </button>
                                <input
                                    type="number"
                                    min="1"
                                    max={data.stock}
                                    value={quantity}
                                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                                    className="w-16 text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                                />
                                <button
                                    onClick={() => handleQuantityChange(quantity + 1)}
                                    className="inline-flex items-center justify-center p-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                            </div>
                            <button 
                                onClick={handleAddToCart}
                                className="flex-1 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                            >
                                <svg className="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                                </svg>
                                Add to cart
                            </button>
                        </div>

                        <div id="reviews" className="mt-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Customer Reviews</h3>
                            <div className="mt-4 space-y-4">
                                {data.reviews.map((review, index) => (
                                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div className="flex items-center gap-2">
                                            {renderStars(review.rating)}
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">{review.reviewerName}</span>
                                        </div>
                                        <p className="mt-2 text-gray-500 dark:text-gray-400">{review.comment}</p>
                                        <p className="mt-2 text-sm text-gray-400">{new Date(review.date).toLocaleDateString()}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showToast && (
                <Toast 
                    message="Product added to cart successfully!" 
                    type="success" 
                    onClose={() => setShowToast(false)} 
                />
            )}
        </section>
    );
};

export default Productsdeatails;