import { Outlet, Link } from "react-router-dom";

export default function App() {
    return (
        <div>
                {/*<Link to="/invoices">Invoices</Link> |{" "}*/}
                {/*<Link to="/expenses">Expenses</Link>*/}
            <Outlet />
        </div>
    );
}