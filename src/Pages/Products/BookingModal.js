import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { saveBookings } from "../../api/bookings";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ confirmProduct }) => {
  const { productName, resalePrice, sellerEmail, image } = confirmProduct;

    const { user } = useContext(AuthContext);
    
    // const [bookingData, setBookingData] = useState({
         
    // });  
    
    const handleBooking = (event) => {
     event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const location = form.location.value;

        const bookingData = {
          name: user.displayName,
          buyerEmail: user.email,
          // buyerImage: user.photoURL,
          phone,
          location,
          productName,
          resalePrice,
          sellerEmail,
          image,
        };
   console.log(bookingData);
   saveBookings(bookingData)
     .then((data) => {
       console.log(data);
         toast.success("Booking success!");
        
     })
     .catch((error) => {
       toast.error(error.message);
     });
 };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h2 className="card-title mx-auto text-blue-700">{productName}</h2>
          <hr />
          <h3 className="text-red-800 text-xl text-bolder mb-4 mt-2">
            USD {resalePrice}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered my-3"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input w-full input-bordered my-3"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
