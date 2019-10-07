import React from 'react';
import Axios from 'axios';

import {
  Form,
  Select,
  Radio,
  Button,
  Upload,
  Input,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
} from 'antd';

const { TextArea } = Input;

const CATEGORIES = ['Historia', 'Geografia', 'Matematica'];
const SUBCATEGORIES = ['Historia del Peru', 'Historia Universal'];
const LEVELS = ['Basico', 'Intermedio', 'Avanzado'];


const { Option } = Select;

class SearchExam extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        Axios.get('/get-examn', { params: {
          "title": values['titulo'],
          "subcategory": values['select-two'],
          "level": values['select-three'],
        }})
          .then(({ data }) => {
            const filePath = `http://localhost:8080${data.file}`;
            const a = document.createElement('A');
            a.href = filePath;
            a.download = filePath.substr(filePath.lastIndexOf('/') + 1);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          })
      }
    });


  };

  normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Titulo para tu Examen" hasFeedback>
          {getFieldDecorator('titulo', {
            rules: [{ required: true }]
          })(<Input placeholder="Titulo para tu examen"></Input>)}
        </Form.Item>
        <Form.Item label="Categoria" hasFeedback>
          {getFieldDecorator('select', {
            rules: [{ required: true, message: 'Por favor selecciona una categoria' }],
          })(
            <Select placeholder="Por favor selecciona una categoria">
              {
                CATEGORIES.map((category) =>
                  <Option value={category}>{category}</Option>
                )
              }
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="Subcategoria" hasFeedback>
          {getFieldDecorator('select-two', {
            rules: [
              { required: true, message: 'Por favor selecciona una subcategoria' },
            ],
          })(
            <Select placeholder="Por favor selecciona una subcategoria">
              {
                SUBCATEGORIES.map((subcategory) => <Option value={subcategory}> {subcategory} </Option>)
              }
            </Select>,
          )}
        </Form.Item>


        <Form.Item label="Nivel" hasFeedback>
          {getFieldDecorator('select-three', {
            rules: [
              { required: true, message: 'Por favor selecciona un nivel' },
            ],
          })(
            <Select placeholder="Por favor selecciona un nivel">
              {
                LEVELS.map((level) => <Option value={level}> {level} </Option>)
              }
            </Select>,
          )}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Generar
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedSearchExam = Form.create({ name: 'validate_other' })(SearchExam);

export default WrappedSearchExam


// <PageHeader
//   avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
// >
//   <Content>
//     <h1>Nombre del examen:</h1>
//     <Input type="text" style={{ width: '60%' }} />
//     <br />
//     <h1>Area:</h1>
//     <Select
//       style={{ width: '60%' }}
//       placeholder="Selecciona un area"
//     >
//       {
//         CATEGORY.map((category) => {
//           return <Option key={category}>{category}</Option>
//         })
//       }
//     </Select>
//     <br />
//     <h1>Curso:</h1>
//     <Select
//       style={{ width: '60%' }}
//       placeholder="Selecciona un curso">
//       {
//         SUBCATEGORY.map((subcategory) => {
//           return <Option key={subcategory}>{subcategory}</Option>
//         })
//       }
//     </Select>
//     <br />
//     <h1>Nivel:</h1>
//     <Select
//       style={{ width: '60%' }}
//       placeholder="Selecciona un nivel">
//       {
//         LEVEL.map((level) => {
//           return <Option key={level}>{level}</Option>
//         })
//       }
//     </Select>
//     <br />
//     <h1>Cantidad de preguntas:</h1>
//     <input type="number" style={{ width: '10%' }} />
//     <br />
//     <br />
//     <Button type="primary">Enviar</Button>
//   </Content>
// </PageHeader>
