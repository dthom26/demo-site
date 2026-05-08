const placeholderImages = [
  { label: 'Annual Golf Tournament', category: 'Fundraiser' },
  { label: 'Operation Surf', category: 'Veterans' },
  { label: 'Warrior Rizen Ranch', category: 'Veterans' },
  { label: 'Mustang Medicine', category: 'Healing' },
  { label: 'Community Gathering', category: 'Community' },
  { label: 'First Responders Day', category: 'First Responders' },
  { label: 'Youth Program', category: 'Youth' },
  { label: 'OpenWater Session', category: 'Veterans' },
  { label: 'Golf Tournament 2025', category: 'Fundraiser' },
  { label: 'Volunteer Day', category: 'Community' },
  { label: 'Awards Ceremony', category: 'Community' },
  { label: 'Hill Air Force Base Event', category: 'Veterans' },
];

export default function ImageGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {placeholderImages.map(({ label, category }) => (
        <figure key={label} className="group relative aspect-square bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
          {/* Placeholder image area */}
          <div className="absolute inset-0 bg-gradient-to-br from-uplift-navy/20 to-uplift-navy/40 flex items-center justify-center">
            <span className="text-white/60 text-xs font-medium text-center px-2">Photo placeholder</span>
          </div>
          <figcaption className="absolute bottom-0 inset-x-0 bg-black/60 text-white px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
            <p className="text-xs font-semibold">{label}</p>
            <p className="text-xs text-white/60">{category}</p>
          </figcaption>
          {/* Real images will use loading="lazy" for performance */}
          {/* <img src={src} alt={label} loading="lazy" width={400} height={400} className="w-full h-full object-cover" /> */}
        </figure>
      ))}
    </div>
  );
}
