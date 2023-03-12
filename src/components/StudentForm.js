import { Button, Form, Input, Select } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uuid from "react-uuid";
import { useForm } from "../hooks/useForm";
import {
  addStudent,
  editStudent,
  getStudentById
} from "../service/localstorage";
const { Option } = Select;

const StudentForm = () => {
  const notify = () => toast("Thành công!");
  const navigate = useNavigate();
  const { id } = useParams();
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    masv: "",
    tensv: "",
    ngaysinh: "",
    gioitinh: "",
    makhoa: "",
    tenkhoa: "",
  });

  useEffect(() => {
    if (id) {
      const student = getStudentById(id);
      setForm(student);
    }
  }, [id]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   id
  //     ? editStudent(id, inputValues)
  //     : addStudent({ id: uuid(), ...inputValues });

  //   console.log(inputValues);
  //   resetForm();
  // };


  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { id: uuid(), ...inputValues };
    id ? editStudent(id, inputValues) : addStudent(newStudent);
    resetForm();
    toast.success(`Student ${id ? "updated" : "added"} successfully!`);
    navigate("/");
  };
  return (
    <div className="">
      <ToastContainer />
      <div className="flex justify-center items-center mt-10">
        <form onSubmit={handleSubmit} className="w-[50%] flex flex-col">
          <Form.Item
            label="Mã sinh viên"
            rules={[{ required: true, message: "Vui lòng nhập mã sinh viên!" }]}
          >
            <Input
              name="masv"
              type="text"
              value={inputValues.masv}
              onChange={handleInputChange}
              id="inputValid"
              placeholder="Mã sinh viên..."
              className="w-[600px] float-right"
            />
          </Form.Item>
          <Form.Item
            label="Họ và tên"
            rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
          >
            <Input
              name="tensv"
              type="text"
              value={inputValues.tensv}
              onChange={handleInputChange}
              id="inputValid"
              placeholder="Họ và tên..."
              className="w-[600px] float-right"
            />
          </Form.Item>
          <Form.Item
            label="Ngày sinh"
            rules={[{ required: true, message: "Vui lòng nhập ngày sinh!" }]}
          >
            <Input
              name="ngaysinh"
              type="date"
              value={inputValues.ngaysinh}
              onChange={handleInputChange}
              id="inputValid"
              placeholder="Ngày sinh..."
              className="w-[600px] float-right"
            />
          </Form.Item>

          <Form.Item name="gioitinh" label="Giới tính">
            <div className="w-[600px] float-right">
              <Select
                placeholder="Giới tính..."
                onChange={(value) =>
                  handleInputChange({ target: { name: "gioitinh", value } })
                }
                className="float-left"
              >
                <Option value="Nam">Nam</Option>
                <Option value="Nữ">Nữ</Option>
                <Option value="Khác">Khác</Option>
              </Select>
            </div>
          </Form.Item>

          <Form.Item
            label="Mã khoa"
            rules={[{ required: true, message: "Vui lòng nhập mã khoa!" }]}
          >
            <Input
              type="text"
              name="makhoa"
              value={inputValues.makhoa}
              onChange={handleInputChange}
              id="inputValid"
              className="w-[600px] float-right"
              placeholder="Mã khoa..."
            />
          </Form.Item>
          <Form.Item
            label="Tên khoa"
            rules={[{ required: true, message: "Vui lòng nhập tên khoa!" }]}
          >
            <Input
              className="w-[600px] float-right"
              placeholder="Tên khoa..."
              name="tenkhoa"
              type="text"
              value={inputValues.tenkhoa}
              onChange={handleInputChange}
              id="inputValid"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              onClick={notify}
              type="primary"
              danger
              htmlType="submit"
              className="float-right"
            >
              {id ? "Cập nhật" : "Thêm sinh viên"}
            </Button>
          </Form.Item>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
