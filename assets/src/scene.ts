import { _decorator, Button, Color, Component, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import super_html_playable from './super_html/super_html_playable';
const { ccclass, property } = _decorator;

@ccclass('scene')
export class scene extends Component {

    @property(Label)
    label_status: Label = null

    @property(Node)
    button_game_end: Node = null;

    @property(Node)
    button_download: Node = null;

    @property(Node)
    Layer_Simulate_Store: Node = null;

    onLoad() {
        this.Layer_Simulate_Store.active = false;
        super_html_playable.set_google_play_url("https://play.google.com/store/apps/details?id=com.unity3d.auicreativetestapp");
        super_html_playable.set_app_store_url("https://apps.apple.com/us/app/ad-testing/id1463016906");

        if (super_html_playable.is_hide_download()) {
            this.button_download.active = false;
        }
    }

    on_click_game_end() {
        this.button_game_end.active = false;
        this.label_status.string = "Game End";
        super_html_playable.game_end();
    }

    on_click_download() {
        super_html_playable.download();
        this.Layer_Simulate_Store.active = true;
        this.scheduleOnce(() => {
            this.Layer_Simulate_Store.active = false;
        }, 1.5)
    }
}


