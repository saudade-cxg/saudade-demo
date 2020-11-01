import React, { useState } from 'react';
import { Form, Input, Button, Radio, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import {connect} from 'umi'

const { Dragger } = Upload;
let imgRul = ''
const props = {
  name: 'file',
  multiple: true,
  action: 'https://elm.cangdu.org/v1/addimg/shop',
  onChange(info) {
    console.log('info',info)
    imgRul =  info.fileList[0].response? 'https://elm.cangdu.org/img/' + info.fileList[0].response.image_path:''
  }
}

const ShopAdd = ({dispatch}) => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');

  const onRequiredTypeChange = ({ requiredMark }) => {
    setRequiredMarkType(requiredMark);
  };

  const submit = values => {
    console.log(values);
    console.log('imgRul',imgRul)
    dispatch({
        type: 'data_add/addShop',
        payload: {
            ...values,
            imgRul
        }
    })
  }

  return (
    <div style={{ width: '80%', margin: '20px auto' }}>
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          requiredMark,
        }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
        onFinish = {submit}
      >
        <Form.Item label="商品ID" required name="shopId">
          <Input placeholder="请输入商品ID" />
        </Form.Item>
        <Form.Item label="请上传商品图片">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              点击或者拖拽文件到此区域进行文件上传
            </p>
          </Dragger>
        </Form.Item>
        <Form.Item label="商品主题" name="d_title">
          <Input placeholder="请输入商品主题" />
        </Form.Item>
        <Form.Item label="商品价格" name="price">
          <Input placeholder="请输入商品单价" />
        </Form.Item>
        <Form.Item label="商品库存量" name="num">
          <Input placeholder="请输入商品库存量" />
        </Form.Item>
        <Form.Item label="商品原价" name="oringinal">
          <Input placeholder="请输入商品原价" />
        </Form.Item>
        <Form.Item label="商品销量" name="sales">
          <Input placeholder="请输入商品销量" />
        </Form.Item>
        <Form.Item label="商品评价" name="comment">
          <Input placeholder="请输入商品评价" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(({data_add})=>data_add)(ShopAdd);
