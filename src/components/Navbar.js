import { Button, Layout, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;
const items1 = ["Trang chủ", "Blog", "Liên hệ"].map((key) => ({
    key,
    label: ` ${key}`,
}));
const Navbar2 = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            <Header className="header flex gap-20 justify-between items-center">
                <div className="logo text-white text-2xl flex font-bold items-center text-center">
                    Quản lý sinh viên
                </div>
                <div className="flex items-center gap-10">
                    <Menu
                        onClick={() => navigate("/")}
                        className="flex items-center justify-center"
                        theme="dark"
                        mode="horizontal"
                        items={items1}
                    />
                    <Button
                        type="primary"
                        danger
                        onClick={() => navigate("/student-create")}
                    >
                        Quay lại
                    </Button>
                </div>
            </Header>
        </Layout>
    );
};
export default Navbar2;
