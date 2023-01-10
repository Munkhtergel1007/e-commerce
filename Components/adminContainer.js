function AdminContainer({ children }) {
  return (
    <main className="mt-0 bg-white">
      <div className="px-64 py-[120px] h-screen">{children}</div>
    </main>
  );
}

export default AdminContainer;
