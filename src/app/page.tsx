import Button from '@/components/Button';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to our Radix UI App</h1>
      <p className="text-lg mb-8">
        This is a sample page using a custom Button component with Radix UI.
      </p>
      <Button>Click me</Button>
    </main>
  );
}