## [playable-sdk](https://github.com/magician-f/cocos-super-html)

基于cocos creator，对接一次，即可支持众多试玩平台

## 试玩平台介绍

- 关于交付文件，根据不同试玩平台的要求，最终只能交付1个文件，比如：index.html 或 index.zip

|平台|需要横竖屏|包体大小|文件格式|接入难度|测试|
|--|--|--|--|--|--|
|[applovin](https://p.applov.in/playablePreview?create=1&qr=1)|✔️|5M|html|⭐|[web](https://p.applov.in/playablePreview?create=1&qr=1)|
|[mintegral](https://www.mindworks-creative.com/review/doc)|✔️|5M|zip|⭐⭐⭐|[web](https://www.mindworks-creative.com/review/)|
|[ironsource](https://developers.is.com/ironsource-mobile/general/interactive-requirements)|✔️|5M|html|⭐⭐⭐|[upload review](https://developers.is.com/ironsource-mobile/general/html-upload/)|
|[unity](https://docs.unity.com/acquire/manual/playable-ads)|✔️|5M|html|⭐⭐⭐|[android、ios](https://storage.googleapis.com/unity-ads-aui-prod-deployments/external-app/UnityAds_Playable_guide.pdf)|
|[google](https://support.google.com/google-ads/answer/9981650?hl=zh-Hans)|❌|5M|zip (<512文件)|未支持|[web](https://h5validator.appspot.com/adwords/asset)|
|[facebook](https://docs.lunalabs.io/docs/playable/ad-networks/facebook)|❔|5M|zip (<100文件)|未支持|[web](https://developers.facebook.com/tools/playable-preview/)|
|[pangle - tiktok](https://ads.tiktok.com/help/article/playable-ads)|❌|5M|zip|⭐⭐|[upload review](https://ads.tiktok.com/help/article/playable-ads?lang=zh#anchor-19)|
|[union - qq](http://developers.adnet.qq.com/doc/web/tryable)|❌|3M|zip|未支持|[local web](https://docs.qq.com/doc/DTklETEhTc0J6akJZ)|
|[vungle](https://support.vungle.com/hc/en-us/articles/360057120251#download-0-0)|❔|5M|ad.html|未支持|[android、ios](https://support.vungle.com/hc/en-us/articles/4908908675355-Test-Your-Playable-Asset-With-Our-Creative-Verifier#install-the-creative-verifier-0-0)|

<br/>

 ## 试玩打包工具

- [super-html](https://store.cocos.com/app/detail/3657) 将构建好的web-mobile 按照试玩平台的要求，合并成一个html
- [playable-ads-adapter](https://github.com/ppgee/cocos-pnp/blob/main/packages/playable-ads-adapter/README.md) Cocos广告试玩多渠道导出插件
- [smartad](https://www.smartad.pro/) 在线试玩打包工具
- [coolplayable](http://coolplayable.com/#) 试玩开发平台

## [常见问题 QA](./QA.md)

