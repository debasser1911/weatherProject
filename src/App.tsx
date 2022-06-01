import './App.css';
import { Button, Form, Switch } from 'antd';
import { useState } from 'react';
import { AttributeI, mockedAttributes } from './mockData';
import { FieldData } from 'rc-field-form/es/interface';

function App() {
  const onFinish = (allValues: any) => {
    console.log(allValues);
  };

  const [availableAttributes, setAvailableAttributes] =
    useState<AttributeI[]>(mockedAttributes);
  const [enabledAttributes, setEnabledAttributes] = useState<string[]>([]);

  const onChange = (changed: any): void => {
    if (enabledAttributes.includes(changed[0].name[0])) {
      const newArray = enabledAttributes.splice(
        enabledAttributes.findIndex(
          (attribute) => attribute === changed[0].name
        ),
        1
      );
      setEnabledAttributes(newArray);
    } else {
      setEnabledAttributes([
        ...enabledAttributes,
        changed[0].name[0] as string,
      ]);
    }
    console.log(changed);
    console.log(enabledAttributes);
  };

  return (
    <div className='App'>
      <Form onFinish={onFinish} onFieldsChange={onChange}>
        {availableAttributes.map((attribute) => (
          <Form.Item name={attribute.title} label={attribute.displayName}>
            <Switch />
          </Form.Item>
        ))}
        <Form.Item>
          <Button htmlType='submit'>submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
