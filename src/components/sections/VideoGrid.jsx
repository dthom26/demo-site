import { Play } from 'lucide-react';

const placeholderVideos = [
  { title: 'Operation Surf — Veteran Stories', duration: '3:42' },
  { title: 'Warrior Rizen Ranch Experience', duration: '5:10' },
  { title: 'Mustang Medicine — Healing in Action', duration: '4:28' },
  { title: 'Annual Golf Tournament Highlights', duration: '2:55' },
  { title: 'Community Message from Our Founders', duration: '6:00' },
  { title: 'First Responder Appreciation Day', duration: '3:15' },
];

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {placeholderVideos.map(({ title, duration }) => (
        <figure key={title} className="group cursor-pointer">
          <div className="relative aspect-video bg-uplift-navy/10 rounded-xl border border-gray-200 overflow-hidden mb-3">
            <div className="absolute inset-0 bg-gradient-to-br from-uplift-navy/30 to-uplift-navy/60 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play className="w-6 h-6 text-white fill-white ml-1" aria-hidden="true" />
              </div>
            </div>
            {/* Video placeholder label */}
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
              {duration}
            </div>
            {/* Replace with iframe embed when real videos are available */}
            {/* <iframe src={youtubeEmbedUrl} title={title} loading="lazy" allowFullScreen className="w-full h-full" /> */}
          </div>
          <figcaption className="font-semibold text-gray-900 text-sm">{title}</figcaption>
        </figure>
      ))}
    </div>
  );
}
