import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useEffect, useState } from "react";
import { Link, useRouteError } from "react-router-dom";
import Useproductdata from "../hooks/useproductdata";

export const Card = (props) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand = "Generic",
    category,
    thumbnail,
    images
  } = props;

  const originalPrice = price / (1 - discountPercentage / 100);

  return (
    <div className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="relative h-56 w-full overflow-hidden rounded-lg">
        <img
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={thumbnail}
          alt={title}
        />
        {discountPercentage > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            {Math.round(discountPercentage)}% OFF
          </div>
        )}
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            {category}
          </span>
          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Quick look</span>
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth={2} d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                <path stroke="currentColor" strokeWidth={2} d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
            <button
              type="button"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Add to Favorites</span>
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
              </svg>
            </button>
          </div>
        </div>
        <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
          {title}
        </a>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {description}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
            ))}
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-white">{rating.toFixed(1)}</p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({stock} in stock)</p>
        </div>
        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
            </svg>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
          </li>
          <li className="flex items-center gap-2">
            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
          </li>
        </ul>
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
              ${price}
            </p>
            {discountPercentage > 0 && (
              <p className="text-sm text-gray-500 line-through dark:text-gray-400">
                ${originalPrice.toFixed(2)}
              </p>
            )}
          </div>
          <Link to={`/productlayout/${props.id}`}>
            <button
              type="button"
              className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
              </svg>
              BUY NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const withBrand = (Component) => {
  return (props) => {
    const brandName = props.brand || "Generic";
    return (
      <div className="relative">
        <div className="absolute -top-2 -right-2 z-10">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            {brandName}
          </span>
        </div>
        <Component {...props} brand={brandName} />
      </div>
    );
  };
};

const CardWithBrand = withBrand(Card);

const Productlayout = () => {
  const { data, loading } = Useproductdata();

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 h-64 rounded-lg"></div>
              <div className="mt-4 space-y-2">
                <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
                <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((product) => (
            <CardWithBrand key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Productlayout;
