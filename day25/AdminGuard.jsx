import { useAuth } from "../day23/AuthContext";

export default function AdminGuard({ children }) {
  const { user } = useAuth();
  return user ? children : null;
}
