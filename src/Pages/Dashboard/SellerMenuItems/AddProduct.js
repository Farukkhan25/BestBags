import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../api/addProduct";
import { getImageUrl } from "../../../api/ibbImageUpload";
import AddProductForm from "../../../Components/Form/AddProductForm";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(
    new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000)
  );
    const handleSubmit = (event) => {
        event.preventDefault();
        const productName = event.target.productName.value;
        const category = event.target.category.value;
        const condition = event.target.condition.value;
        const Description = event.target.Description.value;
        const sellerLocation = event.target.sellerLocation.value;
        const from = arrivalDate;
        const To = departureDate;
        const orginalPrice = event.target.orginalPrice.value;
        const resalePrice = event.target.resalePrice.value;
        const yearsUsed = event.target.yearsUsed.value;
        const purchaseYear = event.target.purchaseYear.value;
        const sellerRole = "seller";
        const time = "30 Nov 2022";
    const image = event.target.image.files[0];
    setLoading(true);
    getImageUrl(image)
      .then((data) => {
        const productData = {
          productName,
          category,
          condition,
          Description,
          sellerLocation,        
          orginalPrice,
          resalePrice:"$"+resalePrice,
          purchaseYear,
          yearsUsed,
          id: "63805c00bbbef22e0c0fe462",         
          image: data,
          sellerName: user?.displayName,
          sellerEmail: user?.email,
          role: sellerRole,
          postedTime: time,
          
        };
        addProduct(productData)
          .then((data) => {
            console.log(data);
            setLoading(false);
            toast.success("Product added");
            navigate("/dashboard/my-products");
          })
          .catch((e) => {
            console.log(e.message);
            setLoading(false);
          });
      })
      .catch((e) => {
        setLoading(false);
        console.log(e.message);
      });
  };

  const handleImageChange = (image) => {
    setPreview(window.URL.createObjectURL(image));
    setUploadButtonText(image.name);
  };
  return (
    <div>
      <AddProductForm
        handleSubmit={handleSubmit}
        arrivalDate={arrivalDate}
        setArrivalDate={setArrivalDate}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        loading={loading}
        handleImageChange={handleImageChange}
        preview={preview}
        uploadButtonText={uploadButtonText}
      ></AddProductForm>
    </div>
  );
};

export default AddProduct;
