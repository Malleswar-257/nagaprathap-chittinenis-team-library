import React from 'react';
import { Select, Form } from 'antd';

const { Option } = Select;

const GenderSelect = ({ onChange, value }) => {
  const handleSelectChange = (value) => {
    onChange(value);
  };

  return (
    <Form.Item name="gender" label="Gender">
      <Select value={value} onChange={handleSelectChange}>
        <Option value="male">Male</Option>
        <Option value="female">Female</Option>
        <Option value="other">Other</Option>
      </Select>
    </Form.Item>
  );
};

export default GenderSelect;