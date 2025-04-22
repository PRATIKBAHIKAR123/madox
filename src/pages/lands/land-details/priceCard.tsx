import { Heart, Plus, Share2, Printer } from "lucide-react";

export default function PriceCard() {
  return (
    <div className="w-full max-w-md p-4 border bg-white">
      {/* Price Row */}
      <div className="flex items-end justify-between">
        <div className="text-lg font-semibold">Price:</div>
        <div className="text-2xl font-bold text-black">
          2,200<span className="text-lg font-normal text-gray-500 ml-1">$</span>
          <span className="text-base font-normal text-gray-500 ml-1">/month</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4" />

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-lg transition">
          <Heart className="w-5 h-5" />
          Add to wishlist
        </button>

        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
          <Plus className="w-5 h-5" />
        </button>

        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
          <Share2 className="w-5 h-5" />
        </button>

        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
          <Printer className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
