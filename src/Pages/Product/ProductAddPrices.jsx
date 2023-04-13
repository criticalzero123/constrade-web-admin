import React, { useState } from "react";
import { addProductprices } from "../../redux/action/productAction";

const ProductAddPrices = () => {
  const { id } = JSON.parse(localStorage.getItem("account"));

  const [value, setValue] = useState(0);
  const [releaseDate, setReleaseDate] = useState("");
  const [originUrl, setOriginUrl] = useState("");
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [name, setName] = useState("");
  const [shopName, setShopeName] = useState("");

  const handleAddProductPrices = async (e) => {
    e.preventDefault();

    if (guardClause()) {
      alert("Please input all fields!");
      return;
    }

    const info = {
      value,
      releaseDate,
      originUrl,
      genre,
      platform,
      name,
      shopName,
      addedBy: id,
    };

    const res = await addProductprices(info);
    if (res) {
      alert("successfully added");
      resetFields();
    } else {
      alert("Not successfully added.");
    }
  };

  const guardClause = () => {
    return (
      value === 0 ||
      releaseDate.trim() === "" ||
      originUrl.trim() === "" ||
      genre.trim() === "" ||
      platform.trim() === "" ||
      name.trim() === "" ||
      shopName.trim() === ""
    );
  };

  const resetFields = () => {
    setValue(0);
    setReleaseDate("");
    setOriginUrl("");
    setGenre("");
    setPlatform("");
    setName("");
    setShopeName("");
  };

  return (
    <div>
      <form onSubmit={handleAddProductPrices}>
        <h3 className=" text-white pb-3 text-base opacity-90">Product Name</h3>
        <input
          className="mb-5 px-3 py-3 w-full rounded-sm text-black "
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h3 className=" text-white pb-3 text-base opacity-90">Product Value</h3>
        <input
          className="mb-5 px-3 py-3 w-full rounded-sm text-black "
          type="number"
          placeholder="0"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <h3 className=" text-white pb-3 text-base opacity-90">Release Date</h3>
        <input
          className="mb-5 px-3 py-3 w-full rounded-sm text-black "
          type="text"
          placeholder="YYYY-MM-DD"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />

        <h3 className=" text-white pb-3 text-base opacity-90">Genre</h3>
        <input
          className="mb-5 px-3 py-3 w-full rounded-sm text-black "
          type="text"
          placeholder="action,racing"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <h3 className=" text-white pb-3 text-base opacity-90">Platform</h3>
        <input
          className="mb-5 px-3 py-3 w-full rounded-sm text-black "
          type="text"
          placeholder="xbox,ps4"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />

        <h3 className=" text-white pb-3 text-base opacity-90">Origin Url</h3>
        <input
          className="mb-5 px-3 py-3 w-full rounded-sm text-black "
          type="text"
          placeholder="www.something.com/product-name"
          value={originUrl}
          onChange={(e) => setOriginUrl(e.target.value)}
        />

        <h3 className=" text-white pb-3 text-base opacity-90">Shop Name</h3>
        <input
          className="mb-5 px-3 py-3 w-full rounded-sm text-black "
          type="text"
          placeholder="datablitz"
          value={shopName}
          onChange={(e) => setShopeName(e.target.value)}
        />

        <button className="bg-[#e6592e] hover:bg-[#ae4221] py-4 w-full rounded-sm font-bold text-[#FCFBFA] text-base tracking-wide text-center">
          Add
        </button>
      </form>
    </div>
  );
};

export default ProductAddPrices;
