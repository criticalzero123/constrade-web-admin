import React from "react";

const data = [
  {
    transaction_id: 123123,
    product_name: "Xbox",
    seller_name: "Carrie G. Ragusa ",
    buyer_name: "Doris A. Bergstrom",
    date_of_transaction: "02 - 11 - 2023",
  },
  {
    transaction_id: 123321,
    product_name: "ps5",
    seller_name: "Jennifer S. Blakeman",
    buyer_name: "Lucille H. Palmeri",
    date_of_transaction: "02 - 18 - 2023",
  },
  {
    transaction_id: 123456,
    product_name: "Ps4",
    seller_name: "Howard M. Hotchkiss",
    buyer_name: "Jim J. Martin",
    date_of_transaction: "02 - 14 - 2023",
  },
];

const TransactionHistory = () => {
  return (
    <div>
      <p className="text-white bg-[#83838370] p-4 h-16 font-bold">
        Transaction History
      </p>
      <div className="App">
        <table className="w-full mx-auto">
          <tr className="border-b border-[#9e9c9c77]">
            <th className="p-4">Transaction ID</th>
            <th className="p-4">Product Name</th>
            <th className="p-4">Seller Name</th>
            <th className="p-4">Buyer Name</th>
            <th className="p-4">Date Of Transaction</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr className="border-b border-[#9e9c9c77]" key={key}>
                <td className="text-center p-4">{val.transaction_id}</td>
                <td className="text-center p-4">{val.product_name}</td>
                <td className="text-center p-4">{val.seller_name}</td>
                <td className="text-center p-4">{val.buyer_name}</td>
                <td className="text-center p-4">{val.date_of_transaction}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
