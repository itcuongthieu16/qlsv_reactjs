import { Button, Checkbox, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getListStudents, removeStudent } from "../service/localstorage";
import { Scrollbars } from 'react-custom-scrollbars-2';
import Search from "./Search";

const StudentList = () => {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);

    const deleteStudent = (id) => {
        removeStudent(id);
        const newStudents = getListStudents();
        setStudents(newStudents);
        setFilteredStudents(newStudents);
        setSelectedStudentIds((prevIds) =>
            prevIds.filter((selectedId) => selectedId !== id)
        );
    };

    const columns = [
        {
            title: "",
            dataIndex: "checkbox",
            render: (_, student) => <Checkbox onChange={(event) => handleCheckboxChange(event, student.id)}></Checkbox>,
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
                    <Button
                        onClick={() => navigate(`/view-student/${student.id}`)}
                        type="dashed"
                    >
                        Xem
                    </Button>
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
        setStudents(getListStudents());
        setFilteredStudents(getListStudents());
    }, []);

    const [selectedStudentIds, setSelectedStudentIds] = useState([]);

    const handleCheckboxChange = (event, studentId) => {
        if (event.target.checked) {
            setSelectedStudentIds((prevIds) => [...prevIds, studentId]);
        } else {
            setSelectedStudentIds((prevIds) =>
                prevIds.filter((id) => id !== studentId)
            );
        }
    };

    const handleDeleteSelectedStudents = () => {
        Modal.confirm({
            okType: "Xác nhận",
            title: "Xác nhận xoá sinh viên",
            content: `Bạn có chắc muốn xoá ${selectedStudentIds.length} sinh viên đã chọn?`,
            onOk() {
                // Xoá các sinh viên đã chọn
                selectedStudentIds.forEach((id) => deleteStudent(id));
                setSelectedStudentIds([]);
            },
        });
    };

    const handleSearch = (searchValue) => {
        const filtered = students.filter((student) => {
            const lowerCaseSearchValue = searchValue.toLowerCase();
            return (
                student.masv.toLowerCase().includes(lowerCaseSearchValue) ||
                student.tensv.toLowerCase().includes(lowerCaseSearchValue) ||
                student.ngaysinh.toLowerCase().includes(lowerCaseSearchValue) ||
                student.gioitinh.toLowerCase().includes(lowerCaseSearchValue) ||
                student.makhoa.toLowerCase().includes(lowerCaseSearchValue) ||
                student.tenkhoa.toLowerCase().includes(lowerCaseSearchValue)
            );
        });
        setFilteredStudents(filtered);
    };

    return (
        <div className="flex flex-col">
            <div className="p-4"><Search searchData={handleSearch} /></div>
            {selectedStudentIds.length > 0 && (
                <div className="mt-5 mb-5 ml-5">
                    <Button type="primary" danger onClick={handleDeleteSelectedStudents}>
                        Xoá các sinh viên đã chọn
                    </Button>
                </div>
            )}
            <Scrollbars style={{ height: 500 }}>

                {
                    filteredStudents ? <Table columns={columns} dataSource={filteredStudents} /> : <Table columns={columns} dataSource={students} />
                }
            </Scrollbars>
        </div>
    );
};
export default StudentList;
