---
title: 动态
date: 2024-02-04 00:39:30
---


{% timeline %}
<!-- node 2024 年 4 月 8 日 -->
浏览器平滑滚动：html,body{ scroll-behavior:smooth; }
<!-- node 2024 年 3 月 8 日 -->
nginx配置反向代理示例：
{% box child:codeblock color:green %}
```
# 配置反向代理
location /maoyan {
    proxy_pass   https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%A8%84%E5%BA%95&ci=274&channelId=4;
}
```
{% endbox %}
{% mark 说明：当匹配到/maoyan路径请求时会进行反向代理 %}
<!-- node 2024 年 1 月 19 日 -->
css属性实现宽度自适应内容, width: fit-content;
<!-- node 2024 年 1 月 7 日 -->
上天赐个我一位美丽的姑娘吧，我想谈恋爱了💓，哈哈哈哈
{% endtimeline %}