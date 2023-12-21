const t=JSON.parse('{"key":"v-418a26c0","path":"/code/java/high-availability/timeout-and-retry.html","title":"超时&重试机制","lang":"zh-CN","frontmatter":{"title":"超时&重试机制","category":"高可用","date":"2021-03-18T00:00:00.000Z","description":"一旦用户的请求超过某个时间得不到响应就结束此次请求并抛出异常。 如果不进行超时设置可能会导致请求响应速度慢，甚至导致请求堆积进而让系统无法在处理请求。 另外，重试的次数一般设为 3 次，再多次的重试没有好处，反而会加重服务器压力（部分场景使用失败重试机制会不太适合）。","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/begun-blog/code/java/high-availability/timeout-and-retry.html"}],["meta",{"property":"og:site_name","content":"咖飞"}],["meta",{"property":"og:title","content":"超时&重试机制"}],["meta",{"property":"og:description","content":"一旦用户的请求超过某个时间得不到响应就结束此次请求并抛出异常。 如果不进行超时设置可能会导致请求响应速度慢，甚至导致请求堆积进而让系统无法在处理请求。 另外，重试的次数一般设为 3 次，再多次的重试没有好处，反而会加重服务器压力（部分场景使用失败重试机制会不太适合）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:published_time","content":"2021-03-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"超时&重试机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":0.45,"words":136},"filePathRelative":"code/java/high-availability/timeout-and-retry.md","localizedDate":"2021年3月18日","excerpt":"","autoDesc":true}');export{t as data};
