import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { FormStore } from '../../store';

import { STORE_FORMS } from '../../constants';
import { FormModel } from '../../models';
import { LoginForm } from '../../constants/forms';
import Form, { IChangeEvent } from 'react-jsonschema-form';

export interface LoginProps extends RouteComponentProps<any> {
    //** MobX Stores injected via @inject() */
    // [STORE_FORMS]: FormsStore
}

export interface LoginState {
    formName: string;
    form: FormModel<LoginForm>;
}

@inject(STORE_FORMS)
@observer
export class LoginPage extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps, context: any) {
        super(props, context);
        this.state = { formName: 'Login', form: null };
    }

    componentWillMount() {
        this.loadFormSchema();
    }

    loadFormSchema() {
        const forms = this.props[STORE_FORMS] as FormStore;
        const loginForm = forms.findForm(this.state.formName);
        this.setState({ form: loginForm });
    }

    submitForm(e: IChangeEvent<LoginForm>) {
        console.log(e);
    }

    render() {
        return (
            <div>
                <Form
                    schema={this.state.form.formProps.schema}
                    uiSchema={this.state.form.formProps.uiSchema}
                    onSubmit={this.submitForm}
                />
            </div>
        );
    }
}
