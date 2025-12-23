import AdminGuard from "./AdminGuard";

export default function AdminSecure() {
  return (
    <AdminGuard>
      <h1>Admin Only Area</h1>
    </AdminGuard>
  );
}
