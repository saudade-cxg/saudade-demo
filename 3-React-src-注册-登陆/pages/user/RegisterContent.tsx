import React, { useState } from 'react';
import { Form, Input, Button, Radio, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import {setCookie} from '@/utils/cookie'
import {connect} from 'umi'
const { Dragger } = Upload;
const props = {
  name: 'file',
  action: 'https://elm.cangdu.org/v1/addimg/shop',
  onChange(info) {
    console.log('info',info)
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success('文件上传成功');
      setCookie('pic','https://elm.cangdu.org/img/'+info.fileList[0].response.image_path,7)
    } else if (status === 'error') {
      message.error('文件上传失败');
    }
  },
};

import styles from './index.less';
export default connect(
  ({user})=>user
)(function RegisterContent ({dispatch}) {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<boolean | 'optional'>(
    'optional',
  );

  const onRequiredTypeChange = ({ requiredMark }) => {
    setRequiredMarkType(requiredMark);
  };
  function submit (value) {
    console.log('values',value)
    dispatch({
      type: 'user/register',
      payload: value
    })
  }
  return (
    <div className={styles.register}>
      <div className={styles.content}>
        <Form
          form={form}
          layout="vertical"
          initialValues={{ requiredMark }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
          onFinish = {submit}
        >
          <Form.Item label="用户名" required name="username">
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item label="邮箱" name="email">
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input type="password" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item label="头像上传">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                点击此处或者拖拽文件到此处进行上传
              </p>
            </Dragger>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" >注册</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
)