export default function PropertyCard() {
  return (
    <div className="w-64 rounded-2xl overflow-hidden shadow-lg border border-gray-700 bg-gray-900 text-white">
      {/* Gambar */}
      <img
        src="https://source.unsplash.com/300x200/?modern-house"
        alt="Property"
        className="w-full h-40 object-cover"
      />

      {/* Konten */}
      <div className="p-4">
        {/* Judul dan Rating */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Party Every</h2>
          <div className="flex items-center text-orange-400">
            ⭐ <span className="ml-1 text-sm">4.5/5</span>
          </div>
        </div>

        {/* Harga */}
        <p className="text-gray-400 text-sm mt-1">$18,983/mo</p>

        {/* Informasi Properti */}
        <div className="flex justify-between items-center mt-3 text-gray-300 text-sm">
          <div className="flex items-center gap-1">📏 529 sqft</div>
          <div className="flex items-center gap-1">🛏 3</div>
          <div className="flex items-center gap-1">📶 10gb</div>
        </div>
      </div>
    </div>
  );
}
