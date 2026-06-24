import { Section } from '@/components/ui/section';

const stats = [
  { value: '100+',     label: 'Students' },
  { value: '4',        label: 'Core subjects' },
  { value: '1-on-1',   label: 'Mentorship available' },
];

export function StatsStrip() {
  return (
    <Section className="bg-brand-fog py-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p className="text-4xl font-bold font-display text-brand-navy">{value}</p>
            <p className="mt-1 text-base font-body text-brand-navy-muted">{label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
