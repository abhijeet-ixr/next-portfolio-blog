export default function SectionHeader({ header }) {
  return (
    <div className="divider py-2">
      <h2 className="text-4xl font-bold tracking-wide capitalize">{header}</h2>
    </div>
  );
}
