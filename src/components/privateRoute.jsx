import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  // Mengecek status autentikasi saat pengguna mencoba mengakses route yang membutuhkan login
  useEffect(() => {
    console.log(isAuthenticated)
    if (isAuthenticated == "false") {
      navigate("/login"); // Arahkan ke halaman login jika belum terautentikasi
    }
  }, [isAuthenticated, navigate]);

  // Menampilkan Outlet jika pengguna sudah terautentikasi
  return <Outlet />;
};

export default PrivateRoute;
