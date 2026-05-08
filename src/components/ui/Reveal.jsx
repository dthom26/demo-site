import useInView from '@/hooks/useInView';

const VARIANTS = {
  'fade-up':    'translate-y-8',
  'fade-down':  '-translate-y-8',
  'fade-left':  'translate-x-8',
  'fade-right': '-translate-x-8',
  'fade':       '',
};

export default function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 650,
  className = '',
  as: Tag = 'div',
}) {
  const [ref, inView] = useInView();
  const offset = VARIANTS[variant] ?? VARIANTS['fade-up'];

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out ${
        inView
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${offset}`
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
