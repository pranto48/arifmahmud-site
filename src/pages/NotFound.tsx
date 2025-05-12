
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import GoogleAdsense from "../components/GoogleAdsense";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Log the error
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Set up countdown for auto-redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Page Not Found</h2>
          <div className="mt-2 h-1.5 w-16 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
          You'll be redirected to the homepage in <span className="font-bold text-primary">{countdown}</span> seconds.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => navigate(-1)} variant="outline" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Go Back
          </Button>
          <Button asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home size={16} />
              Home Page
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Google AdSense - Non-intrusive ad placement */}
      <div className="w-full max-w-md mt-8">
        <GoogleAdsense 
          adSlot="7782227990" 
          height="250px"
          className="bg-background/30 backdrop-blur-sm rounded-lg" 
        />
      </div>
    </div>
  );
};

export default NotFound;
