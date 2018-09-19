import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { todosActions } from '../';
import Form, { FormProps, IChangeEvent } from 'react-jsonschema-form';
import { Todo } from '../models';

type Props = {
    addTodo: (title: string) => any;
};
type State = {
    title: string;
};

class TodoForm extends React.Component<Props, State> {
    readonly state: Readonly<State> = { title: '' };
    todoFormSchema: FormProps<Todo> = {
        schema: {
            title: 'Todo',
            type: 'object',
            required: ['title'],
            properties: {
                title: { type: 'string', title: 'Title' }
            }
        }
    };
    handleTitleChange: React.ReactEventHandler<HTMLInputElement> = ev => {
        this.setState({ title: ev.currentTarget.value });
    };

    handleAdd = (e: IChangeEvent<Todo>) => {
        this.props.addTodo(e.formData.title);
        this.setState({ title: '' });
    };

    render() {
        // const { title } = this.state;

        return <Form schema={this.todoFormSchema.schema}
                     onSubmit={this.handleAdd}
         />;
    }
}

const mapStateToProps = (state: RootState) => ({});

export default connect(
    mapStateToProps,
    {
        addTodo: (title: string) => todosActions.add({ title })
    }
)(TodoForm);
