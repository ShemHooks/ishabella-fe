export default function AuthCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-6">
        <span className="text-green-700 font-bold">{title}</span>
      </h2>

      {children}
    </div>
  );
}
