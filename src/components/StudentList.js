import { Button, Checkbox, Table } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getListStudents, removeStudent } from "../service/localstorage";

const StudentList = () => {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);

    const deleteStudent = (id) => {
        removeStudent(id);
        setStudents(getListStudents());
    };

    const columns = [
        {
            title: "",
            dataIndex: "checkbox",
            render: (_, student) => <Checkbox></Checkbox>,
        },
        {
            title: "Mã sinh viên",
            dataIndex: "masv",
        },
        {
            title: "Tên sinh viên",
            dataIndex: "tensv",
        },
        {
            title: "Ngày sinh",
            dataIndex: "ngaysinh",
        },
        {
            title: "Giới tính",
            dataIndex: "gioitinh",
        },
        {
            title: "Mã khoa",
            dataIndex: "makhoa",
        },
        {
            title: "Tên khoa",
            dataIndex: "tenkhoa",
        },
        {
            title: "Chức năng",
            dataIndex: "action",
            render: (_, student) => (
                <div className="flex gap-5">
                    <Button type="dashed">Xem</Button>
                    <Button
                        onClick={() => navigate(`/edit-student/${student.id}`)}
                        type="primary"
                        ghost
                    >
                        Sửa
                    </Button>
                    <Button
                        onClick={() => deleteStudent(student.id)}
                        type="primary"
                        danger
                    >
                        Xóa
                    </Button>
                </div>
            ),
        },
    ];

    useEffect(() => {
        setStudents(getListStudents);
    }, []);

    return (
        <div>
            <Table columns={columns} dataSource={students} />
        </div>
    );
};
export default StudentList;
