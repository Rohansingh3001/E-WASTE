import React, { useState } from "react";
import { Upload, Package, Tag, Weight, PlusCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddEwaste = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    weight: "",
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("E-Waste Item Added Successfully!");
    setFormData({ itemName: "", category: "", weight: "", image: null });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative">
      {/* Back Button */}
      <button 
        className="absolute top-6 left-6 flex items-center text-gray-400 hover:text-white transition"
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={24} />
        <span className="ml-2">Back to Home</span>
      </button>

      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-96 text-center">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center space-x-2">
          <PlusCircle size={28} />
          <span>Add E-Waste</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Item Name */}
          <div className="relative">
            <Package className="absolute left-4 top-3 text-gray-400" size={20} />
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              placeholder="E-Waste Item Name"
              className="w-full bg-gray-700 text-white px-12 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Category */}
          <div className="relative">
            <Tag className="absolute left-4 top-3 text-gray-400" size={20} />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white px-12 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >
              <option value="" disabled>Select Category</option>
              <option value="Battery">Battery</option>
              <option value="Mobile">Mobile</option>
              <option value="Laptop">Laptop</option>
              <option value="Appliance">Home Appliance</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Weight */}
          <div className="relative">
            <Weight className="absolute left-4 top-3 text-gray-400" size={20} />
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Weight (kg)"
              className="w-full bg-gray-700 text-white px-12 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="relative border-2 border-dashed border-gray-600 rounded-lg p-6">
            <label className="cursor-pointer flex flex-col items-center">
              <Upload size={28} className="text-gray-400 mb-2" />
              <span className="text-gray-300">
                {formData.image ? formData.image.name : "Upload Image"}
              </span>
              <input
                type="file"
                name="image"
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
                required
              />
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 py-3 rounded-lg text-lg font-bold hover:scale-105 transition"
          >
            Add E-Waste
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEwaste;
