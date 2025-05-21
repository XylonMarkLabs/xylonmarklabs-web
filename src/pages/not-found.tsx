import { Card, CardContent } from "../components/ui/card";
import { AlertCircle } from "lucide-react";

import notfound from "../assets/images/404.svg";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <img
        src={notfound}
        className="rounded-xl mb-6 w-full h-48 object-contain"
      />
          <h3 className="text-2xl font-bold mb-3 text-center">Page Not Found</h3>
          <p className="text-gray-500 mb-4 flex-grow">
            Sorry, the page you are looking for does not exist.
          </p>
          
        
        </CardContent>
      </Card>
    </div>
  );
}
