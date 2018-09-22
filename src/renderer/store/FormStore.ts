import { observable, action} from 'mobx';
import { FormModel } from '../models';
import { FormTypes } from '../constants';

export class FormStore {
    /**
     * Takes a fixture for hydrating state. 
     */
    constructor(fixtures: FormModel<FormTypes>[]) {
        this.forms = fixtures;
    }

    @observable
    public forms: Array<FormModel<FormTypes>>;

    @action
    findForm(formName: string) : FormModel<FormTypes>{
        return this.forms.filter((f) => f.name == formName)[0];
    }

}

export default FormStore;