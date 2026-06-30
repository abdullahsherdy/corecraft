import { Section } from '@/components/ui/section';

const stats = [
  { value: '100+', label: 'Students taught' },
  { value: '4', label: 'Core subjects' },
  { value: 'Arabic / English', label: 'Teaching languages' },
];

export function StatsStrip() {
  return (
    <Section className="bg-brand-fog py-12">
      <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p className="font-display text-3xl font-bold text-brand-navy md:text-4xl">{value}</p>
            <p className="mt-1 font-body text-base text-brand-navy/65">{label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
