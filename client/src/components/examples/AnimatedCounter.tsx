import AnimatedCounter from '../AnimatedCounter';

export default function AnimatedCounterExample() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">
        <AnimatedCounter value={42} suffix="%" />
      </h1>
      <h2 className="text-2xl">
        <AnimatedCounter value={100} /> items
      </h2>
    </div>
  );
}
