import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

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

class Question extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        Axios.post('/preguntas', {
          "description": values['text-area'],
          "category": values['select'],
          "subcategory": values['select-two'],
          "level": values['select-three'],
          "options": [
            values['input-1'],
            values['input-2'],
            values['input-3'],
            values['input-4'],
          ],
          "answer": values['radio-group']
        })
          .then(() => {
            this.props.history.push('/generate')
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
              { required: true, message: 'Por favor selecciona una subcategoria'},
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
              { required: true, message: 'Por favor selecciona un nivel'},
            ],
          })(
            <Select placeholder="Por favor selecciona un nivel">
             {
               LEVELS.map((level) => <Option value={level}> {level} </Option>)
             }
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="Pregunta" hasFeedback>
          {getFieldDecorator('text-area', {
            rules: [
              { required: true, message: 'Por favor escribe una pregunta' },
            ],
          })(
            <TextArea
              placeholder="Escribe la pregunta"
              autosize={{ minRows: 3, maxRows: 5 }}/>
          )}
        </Form.Item>


        <Form.Item label="Alternativas">
          {getFieldDecorator('radio-group', {
            rules: [
              { required: true, message: 'Por favor, marca una alternativa' },
            ]
          })(
            <Radio.Group>
              <Radio value="a">
                {
                  getFieldDecorator('input-1', {
                      rules: [ {required: true} ]
                  })(<Input></Input>)
                }
              </Radio>
              <br></br>
              <Radio value="b">
                {
                  getFieldDecorator('input-2', {
                    rules: [{ required: true }]
                  })(<Input></Input>)
                }
              </Radio>
              <br></br>
              <Radio value="c">
                {
                  getFieldDecorator('input-3', {
                    rules: [{ required: true }]
                  })(<Input></Input>)
                }
              </Radio>
              <br></br>
              <Radio value="d">
                {
                  getFieldDecorator('input-4', {
                      rules: [ {required: true} ]
                  })(<Input></Input>)
                }
              </Radio>
              <br></br>
              <Radio value="e">
                No conozco la respuesta
              </Radio>
              <br></br>
            </Radio.Group>,
          )}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedQuestion = Form.create({ name: 'validate_other' })(Question);

export default WrappedQuestion
