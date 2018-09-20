import { History } from 'history';
import { TodoModel, FormModel } from '../models';
import { TodoStore } from './TodoStore';
import { RouterStore } from './RouterStore';
import { STORE_TODO, STORE_ROUTER, STORE_FORMS, FormTypes } from '../constants';
import { FormStore } from './FormStore';

export function createStores(
  history: History,
  defaultTodos?: TodoModel[],
  defaultForms?: FormModel<FormTypes>[]) {
  const todoStore = new TodoStore(defaultTodos);
  const routerStore = new RouterStore(history);
  const formsStore = new FormStore(defaultForms)
  return {
    [STORE_TODO]: todoStore,
    [STORE_ROUTER]: routerStore,
    [STORE_FORMS]: formsStore
  };
}
