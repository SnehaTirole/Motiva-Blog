export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-4 mt-10 shadow-inner">
      <div className="container mx-auto text-center">
        <p className="text-sm">
           Keep Inspiring, Keep Growing | Made for Motivators
        </p>
        <p className="text-xs mt-1">&copy; {new Date().getFullYear()} MotivaBlog. All rights reserved.</p>
      </div>
    </footer>
  );
}
