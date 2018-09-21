import { observable } from 'mobx';
import { FormProps } from 'react-jsonschema-form';

export default class FormModel<T> {
    // this will be a mongodb objectid once loaded from db.
    readonly id: number;
    @observable
    public name: string;
    @observable
    public description: string;
    @observable
    public formProps: FormProps<T>;

    /*
     *  Accepts a generic interface Ifor the FormProps Schema.
     */
    constructor(name: string, description: string, formProps: FormProps<T>) {
        this.id = FormModel.generateId();
        this.description = description;
        this.name = name;
        this.formProps = formProps;
    }

    static nextId = 1;
    static generateId(): number {
        return this.nextId++;
    }
}
