import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { FormStore } from '../../store';

import { STORE_FORMS, STORE_ROUTER, FormTypes } from '../../constants';
import { FormModel } from '../../models';
import { ServerSettingsForm } from '../../constants/forms';
import Form, { IChangeEvent } from 'react-jsonschema-form';

export interface ServerSettingsProps extends RouteComponentProps<any> {
    //** MobX Stores injected via @inject() */
    // [STORE_FORMS]: FormsStore
}

export interface ServerSettingsState {
    formName: string;
    form: FormModel<FormTypes>;
}

@inject(STORE_FORMS, STORE_ROUTER)
@observer
export class ServerSettingsPage extends React.Component<ServerSettingsProps, ServerSettingsState> {
    constructor(props: ServerSettingsProps, context: any) {
        super(props, context);
        this.state = { formName: 'Server Settings', form: null };
    }

    componentWillMount() {
        this.loadFormSchema();
    }

    loadFormSchema() {
        const forms = this.props[STORE_FORMS] as FormStore;
        const serverSettingsForm = forms.findForm(this.state.formName);
        this.setState({ form: serverSettingsForm });
    }

    /**
     * On Successful login from DB if remember checked store username in render process local storage
     * and use for initialization (re-hydration of state) on subsequent logins.
     */
    submitForm(e: IChangeEvent<ServerSettingsForm>) {
        console.log(e);
        //TODO: After database integration this only happens on successful login.
        if (e.formData.remember) {
            localStorage.setItem('username', e.formData.username);
        }
    }

    render() {
        const { push } = this.props[STORE_ROUTER] as RouterStore;
        return (
            <div>
                <Form
                    schema={this.state.form.formProps.schema}
                    uiSchema={this.state.form.formProps.uiSchema}
                    onSubmit={this.submitForm}
                />
                <button onClick={() => push('/')}>Back</button>
            </div>
        );
    }
}
