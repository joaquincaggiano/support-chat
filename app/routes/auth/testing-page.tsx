import { Link } from "react-router";

const TestingPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1>Testing Page</h1>
      <Link to="/auth/login">Login</Link>
    </div>
  );
};

export default TestingPage;
