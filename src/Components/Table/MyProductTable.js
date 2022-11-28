import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { saveAdvertise } from '../../api/addProduct';
import PrimaryButton from '../Button/PrimaryButton';

const MyProductTable = ({ myProduct, handleDelete }) => {
  const { productName, resalePrice, image, _id, Description } = myProduct;
  
  // const [advertise, setAdvertise] = useState({});

  const handleAdvertise = (id) => {
    
    // const id = _id;
    const addAdvertise = {
      productName,
      resalePrice,
      image,
      Description,
    };
    saveAdvertise(addAdvertise).then((data) => {
      console.log(data);
      toast.success("Product Advertised Successfully!");
    });
    // setAdvertise(addAdvertise, _id);
  };

  return (
    <tr key={myProduct._id}>
      <td className="px-5 py-5 border-b border-gray-200 bg-sky-200 md:text-xl text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt=""
                src={image}
                className="mx-auto object-cover rounded h-12 w-16 "
              />
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-sky-200 md:text-xl text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{productName}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-sky-200 md:text-xl text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{resalePrice}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-sky-200 md:text-xl text-sm">
        {/* <p className="text-gray-900 whitespace-no-wrap"> */}
          {/* <Link to={`/dashboard/advertise/${_id}`}> */}
          <PrimaryButton onClick={() => handleAdvertise(_id)}>
            Advertise
          </PrimaryButton>
          {/* </Link> */}
        {/* </p> */}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-sky-200 md:text-xl text-sm">
        <label
          onClick={() => handleDelete(_id)}
          htmlFor="confirmation-modal"
          className="btn btn-sm btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default MyProductTable;