import { Route, Routes } from "react-router-dom";
import StudentForm from "./StudentForm";
import EmployeeList from "./StudentList";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<EmployeeList />} />
                    <Route path="/employee-create" element={<StudentForm />} />
                    <Route path="/edit-employee/:id" element={<StudentForm />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
