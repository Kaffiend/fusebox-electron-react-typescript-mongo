import * as React from 'react';
import { TodoTextInput } from '../TodoTextInput/TodoTextInput';
import { TodoModel } from '../../models/TodoModel';

export interface IHeaderProps {
  addTodo: (todo: Partial<TodoModel>) => any;
}

export interface IHeaderState {
  /* empty */
}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  private handleSave = (text: string) => {
    if (text.length) {
      this.props.addTodo({ text });
    }
  };

  render() {
    return (
      <header>
        <h1>Todos</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

export default Header;
