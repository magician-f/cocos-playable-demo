
## [cocos-playable-demo](https://github.com/magician-f/cocos-playable-demo)

* cocos creator 制作 playable 试玩 的有效解决方案
* 支持主流试玩平台 : applovin、facebook、google、ironsource、mintegral、pangle、unity

* 支持 cocos creator 版本 > 3.5.0

## 开始

### 1. 接入 

#### 下载并添加到项目

* 下载 [super_html_playable.ts](https://github.com/magician-f/cocos-playable-demo/tree/main/docs/sdk/super_html_playable.ts)

* 例子
```
// 添加到项目
Project/Assets/super_html_playable.ts
// 引用
import { super_html_playable } from "./super_html_playable";
```

#### 基础接入
* 点击下载按钮
```
super_html_playable.download();
```
* 试玩跳转到结算页
```
super_html_playable.game_end();
```

#### 额外接入

* 需要设置点击下载跳转的商店地址 : unity | ironsource
```
const google_play = "https://play.google.com/store/apps/details?id=com.unity3d.auicreativetestapp";
const appstore = "https://apps.apple.com/us/app/ad-testing/id1463016906";

super_html_playable.set_google_play_url(google_play);
super_html_playable.set_app_store_url(appstore);
```
* 只有这个平台需要 : ironsource 
```
// 游戏开始时，获取声音状态以决定是否将音量设置为0。
if(super_html_playable.is_audio()){
   // 音量恢复正常
}else{
   // 音量设置为0
}
```

### 2. 安装 [打包工具 super-html](https://store.cocos.com/app/detail/3657)

super-html 将构建好的web-mobile 打包成各个试玩平台文件

### 3. 打包生成

* [查看生成后的文件示例](https://github.com/magician-f/cocos-playable-demo/tree/main/build/super-html)

### 4. 测试

#### 试玩平台介绍

|平台|适配横竖屏|包体大小|文件格式|测试|
|--|--|--|--|--|
|[applovin](https://p.applov.in/playablePreview?create=1&qr=1)|✔️|5M|html|[web](https://p.applov.in/playablePreview?create=1&qr=1)|
|[facebook](https://docs.lunalabs.io/docs/playable/ad-networks/facebook)|❔|5M|zip|-|[web](https://developers.facebook.com/tools/playable-preview/)|
|[google](https://support.google.com/google-ads/answer/9981650?hl=zh-Hans)|❌|5M|zip|-|[web](https://h5validator.appspot.com/adwords/asset)|
|[ironsource](https://developers.is.com/ironsource-mobile/general/interactive-requirements)|✔️|5M|html|[upload review](https://developers.is.com/ironsource-mobile/general/html-upload/)|
|[mintegral](https://www.mindworks-creative.com/review/doc)|✔️|5M|zip|[web](https://www.mindworks-creative.com/review/)|
|[pangle - tiktok](https://ads.tiktok.com/help/article/playable-ads)|❌|5M|zip|[upload review](https://ads.tiktok.com/help/article/playable-ads?lang=zh#anchor-19)|
|[unity](https://docs.unity.com/acquire/manual/playable-ads)|✔️|5M|html|[android、ios](https://storage.googleapis.com/unity-ads-aui-prod-deployments/external-app/UnityAds_Playable_guide.pdf)|

## [常见问题 QA](./QA.md)

## 联系作者

* wechat：magician-f8

