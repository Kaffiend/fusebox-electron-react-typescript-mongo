import { FormProps } from 'react-jsonschema-form'
import { FormModel } from '../models';

export interface LoginForm {
   username: string;
   password: string;
   remember?: boolean;
}

export interface ServerSettingsForm {
    address: string;
    port: number;
    username: string;
    password: string;
    remember: boolean;
}

export const LoginForm: FormProps<LoginForm> = {
    schema: {
      title: 'Secure Login',
      type: 'object',
      required: [
        'username',
        'password'
      ],
      properties: {
        username: {type: 'string', title: 'Username'},
        password: {type: 'string', title: 'Password' },
        remember: {type: 'boolean', title: 'Remember me?'}
      }
    },
    uiSchema: {
      username: {
        'ui:autofocus': true
      },
      password: {
        'ui:widget': 'password'
      }
    }
  }
  
  export const ServerSettingsForm: FormProps<ServerSettingsForm> = {
    schema: {
      title: 'Server Settings',
      type: 'object',
      required: [
        'address',
        'port',
        'username',
        'password'
      ],
      properties: {
        address: {type: 'string', title: 'Address'},
        port: {type: 'number', title: 'Port'},
        username: {type: 'string', title: 'Username'},
        password: {type: 'string', title: 'Password'},
        remember: {type: 'boolean', title: 'Remember me?'}
      }
    },
    uiSchema: {
      address: {
        'ui:autofocus': true
      },
      password: {
        'ui:widget': 'password'
      }
    }
  }

  export const DefaultForms = [
    new FormModel('Login', 'Secure Login', LoginForm),
    new FormModel('Server Settings', 
      'Database Login Credentials and Settings', 
      ServerSettingsForm)
  ]