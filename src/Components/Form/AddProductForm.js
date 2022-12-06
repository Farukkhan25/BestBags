import { CalendarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import SmallSpinner from '../Spinner/SmallSpinner';

const AddProductForm = ({
  handleSubmit,
  loading,
  handleImageChange,
  preview,
  uploadButtonText,
}) => {
  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Product Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                name="productName"
                id="productName"
                type="text"
                placeholder="Product Name"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Choose Product Category
              </label>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Backpack</span>
                  <input
                    type="radio"
                    name="category"
                    value="63805c00bbbef22e0c0fe462"
                    className="radio checked:bg-red-500"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Briefcase</span>
                  <input
                    type="radio"
                    name="category"
                    value="63805c00bbbef22e0c0fe463"
                    className="radio checked:bg-blue-500"
                    // checked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Handbags</span>
                  <input
                    type="radio"
                    name="category"
                    value="63805c00bbbef22e0c0fe464"
                    className="radio checked:bg-green-500"
                    // checked
                  />
                </label>
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="sellerLocation" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                name="sellerLocation"
                id="sellerLocation"
                type="text"
                placeholder="Location"
                required
              />
            </div>

            {/* <div className="flex justify-between ">
              <div className="shadow-md rounded-md my-2 p-3 flex justify-between items-center">
                <div>
                  <p className="block text-sm text-gray-500">From</p>
                  <DatePicker
                    selected={arrivalDate}
                    onChange={(date) => setArrivalDate(date)}
                    className="w-2/3"
                  />
                </div>

                <CalendarIcon className="h5 w-5" />
              </div>
              <div className="shadow-md rounded-md my-2 p-3 flex justify-between items-center">
                <div>
                  <p className="block text-sm text-gray-500">To</p>
                  <DatePicker
                    selected={departureDate}
                    onChange={(date) => setDepartureDate(date)}
                    className="w-2/3"
                  />
                </div>

                <CalendarIcon className="h5 w-5" />
              </div>
            </div> */}

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="orginalPrice" className="block text-gray-600">
                  Orginal Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                  name="orginalPrice"
                  id="orginalPrice"
                  type="number"
                  placeholder="Orginal Price"
                  required
                />
              </div>
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="resalePrice" className="block text-gray-600">
                    Resale Price
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                    name="resalePrice"
                    id="resalePrice"
                    type="number"
                    placeholder="Resale Price"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="purchaseYear" className="block text-gray-600">
                    Purchase Year
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                    name="purchaseYear"
                    id="purchaseYear"
                    type="number"
                    placeholder="Purchase Year"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="yearsUsed" className="block text-gray-600">
                  Years Used
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                  name="yearsUsed"
                  id="yearsUsed"
                  type="number"
                  placeholder="Years Used"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="mobile" className="block text-gray-600">
                  Mobile Number:
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                  name="mobile"
                  id="mobile"
                  type="number"
                  placeholder="Enter Mobile Number"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Choose Product Condition
              </label>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Excellent!</span>
                  <input
                    type="radio"
                    name="condition"
                    value="Excellent!"
                    className="radio checked:bg-red-500"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Good</span>
                  <input
                    type="radio"
                    name="condition"
                    value="Good"
                    className="radio checked:bg-blue-500"
                    // checked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Fair</span>
                  <input
                    type="radio"
                    name="condition"
                    value="Fair"
                    className="radio checked:bg-green-500"
                    // checked
                  />
                </label>
              </div>
            </div>

            <div className="flex space-x-4 items-center">
              <label
                htmlFor="image"
                className="p-3 text-center rounded-md cursor-pointer text-gray-500 font-bold border  border-green-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:border-white hover:text-white"
              >
                {uploadButtonText}
                <input
                  type="file"
                  onChange={(e) => handleImageChange(e.target.files[0])}
                  name="image"
                  id="image"
                  accept="image/*"
                  hidden
                />
              </label>
              {preview && (
                <img src={preview} className="w-20 h-20" alt="preview_img" />
              )}
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="Description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="Description"
                className="block rounded-md focus:green-300 w-full h-20 px-4 py-3 text-gray-800 bg-green-50 border border-green-300 focus:outline-green-500 "
                name="Description"
              ></textarea>
            </div>

            <button
              type="submit"
              className="block w-full p-3 text-center font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-emerald-500 to-lime-500 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none"
            >
              {loading ? <SmallSpinner /> : "Add Product"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProductForm;