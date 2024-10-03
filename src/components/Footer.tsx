const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container px-4 py-6 mx-auto text-center text-gray-600">
        &copy; {new Date().getFullYear()} КНП ЦПМД ДМР
      </div>
    </footer>
  );
};

export default Footer;
