import { Phone, Mail } from 'lucide-react';

export default function ContactPerson({ person }) {
  const { name, title, phone, phoneHref, email, emailHref, memberSince, imageSrc, imageAlt } = person;
  const hasImage = Boolean(imageSrc);

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className={`grid grid-cols-1 gap-8 items-start${hasImage ? ' lg:grid-cols-[2fr_3fr] lg:gap-10' : ''}`}>
      {hasImage ? (
        <figure className="rounded-2xl overflow-hidden aspect-square max-w-xs w-full mx-auto lg:mx-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
      ) : (
        <div className="w-20 h-20 rounded-full bg-uplift-navy/10 flex items-center justify-center shrink-0">
          <span className="font-heading font-bold text-uplift-navy text-2xl" aria-hidden="true">
            {initials}
          </span>
        </div>
      )}

      <div>
        <h3 className="font-heading text-2xl font-bold text-uplift-navy mb-1">
          {name}{' '}
          <span className="font-normal text-gray-600 text-xl">– {title}</span>
        </h3>

        <ul className="mt-4 space-y-3" aria-label={`Contact information for ${name}`}>
          <li className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-uplift-navy shrink-0" aria-hidden="true" />
            <a href={phoneHref} className="text-uplift-navy hover:underline">
              {phone}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-uplift-navy shrink-0" aria-hidden="true" />
            <a href={emailHref} className="text-uplift-navy hover:underline break-all">
              {email}
            </a>
          </li>
          {memberSince && (
            <li className="text-uplift-gray text-sm pt-1">
              Board Member Since {memberSince}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
