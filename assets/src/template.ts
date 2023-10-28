import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('template')
export class template extends Component {

    @property(Label)
    label_title: Label = null;

    @property(Label)
    label_content: Label = null;

}


