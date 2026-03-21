import { Button } from "../ui/button";

export default function SocialLogin() {
  return (
    <Button className="w-full flex items-center justify-center gap-2 text-gray-600 border p-3 rounded-md bg-white hover:bg-gray-50">
      <img src="/images/google.png" className="w-8 h-6" />
      Login with Google
    </Button>
  );
}
