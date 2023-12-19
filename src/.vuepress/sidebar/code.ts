import { arraySidebar } from "vuepress-theme-hope";

export const code = arraySidebar([
  "",
  {
    text: "基础介绍",
    icon: "module",
    children: ["basic/", "windows/", "github/"],
  },
  {
    text: "Java",
    icon: "java",
    prefix: "java/common",
    collapsible: true,
    children: [
      {
        text: "基础",
        prefix: "basic/",
        icon: "stack",
        collapsible: true,
        children: [
          "java-basic-questions-01",
          "java-basic-questions-02",
          "java-basic-questions-03",
          {
            text: "重要知识点",
            icon: "star",
            collapsible: true,
            children: [
              "why-there-only-value-passing-in-java",
              "serialization",
              "generics-and-wildcards",
              "reflection",
              "proxy",
              "io",
              "bigdecimal",
            ],
          },
        ],
      },
      {
        text: "容器",
        prefix: "collection/",
        icon: "storage",
        collapsible: true,
        children: [
          "java-collection-questions-01",
          "java-collection-questions-02",
          "java-collection-precautions-for-use",
          {
            text: "源码分析",
            collapsible: true,
            icon: "star",
            children: [
              "arraylist-source-code",
              "hashmap-source-code",
              "concurrent-hash-map-source-code",
            ],
          },
        ],
      },
      {
        text: "并发编程",
        prefix: "concurrent/",
        icon: "line",
        collapsible: true,
        children: [
          "java-concurrent-questions-01",
          "java-concurrent-questions-02",
          {
            text: "重要知识点",
            icon: "star",
            collapsible: true,
            children: [
              "java-thread-pool-summary",
              "java-thread-pool-best-practices",
              "java-concurrent-collections",
              "aqs",
              "reentrantlock",
              "atomic-classes",
              "threadlocal",
              "completablefuture-intro",
            ],
          },
        ],
      },
      {
        text: "JVM",
        prefix: "jvm/",
        icon: "stage",
        collapsible: true,
        children: [
          "memory-area",
          "jvm-garbage-collection",
          "class-file-structure",
          "class-loading-process",
          "classloader",
          "jvm-parameters-intro",
          "jvm-intro",
          "JVMOptimize",
          "jdk-monitoring-and-troubleshooting-tools",
        ],
      },
      {
        text: "新特性",
        prefix: "new-features/",
        icon: "style",
        collapsible: true,
        children: [
          "java8-common-new-features",
          "java8-tutorial-translate",
          "java9",
          "java10",
          "java11",
          "java12-13",
          "java14-15",
        ],
      },
    ],
  },
  {
    text:"大数据",
    icon: "java",
    prefix: "bigData/common",
    collapsible: true,
    children:[
      {
        text: "hadoop",
        prefix: "hadoop/",
        icon: "storage",
        collapsible: true,
        children: [
          "hadoop-base",
        ],
      },
    ]
  },
  {
    text: "计算机基础",
    icon: "computer",
    prefix: "java/cs-basics/",
    collapsible: true,
    children: [
      {
        text: "网络",
        prefix: "network/",
        icon: "network",
        collapsible: true,
        children: [
          "osi&tcp-ip-model",
          "http&https",
          "http1.0&http1.1",
          "other-network-questions",
        ],
      },
      {
        text: "操作系统",
        prefix: "operating-system/",
        icon: "customize",
        collapsible: true,
        children: [
          "operating-system-basic-questions-01",
          "linux-intro",
          "shell-intro",
        ],
      },
      {
        text: "数据结构",
        prefix: "data-structure/",
        icon: "diagram",
        collapsible: true,
        children: [
          "linear-data-structure",
          "graph",
          "heap",
          "tree",
          "red-black-tree",
          "bloom-filter",
        ],
      },
      {
        text: "算法",
        prefix: "algorithms/",
        icon: "boolean",
        collapsible: true,
        children: [
          "string-algorithm-problems",
          "linkedlist-algorithm-problems",
          "the-sword-refers-to-offer",
          "10-classical-sorting-algorithms",
        ],
      },
    ],
  },
  {
    text: "数据库",
    icon: "table",
    prefix: "java/database/",
    collapsible: true,
    children: [
      {
        text: "基础",
        icon: "grid",
        collapsible: true,
        children: ["basic", "character-set"],
      },
      {
        text: "MySQL",
        prefix: "mysql/",
        icon: "mysql",
        collapsible: true,
        children: [
          "mysql-questions-01",
          "a-thousand-lines-of-mysql-study-notes",
          "mysql-high-performance-optimization-specification-recommendations",
          {
            text: "重要知识点",
            icon: "star",
            collapsible: true,
            children: [
              "mysql-index",
              "mysql-logs",
              "transaction-isolation-level",
              "innodb-implementation-of-mvcc",
              "how-sql-executed-in-mysql",
              "some-thoughts-on-database-storage-time",
              "index-invalidation-caused-by-implicit-conversion",
            ],
          },
        ],
      },
      {
        text: "Redis",
        prefix: "redis/",
        icon: "shell",
        collapsible: true,
        children: [
          "redis-basic",
          "redis-data",
          "redis-highAvailability",
          "redis-highAvailability-combat",
          "redis-questions-01",
          {
            text: "重要知识点",
            icon: "star",
            collapsible: true,
            children: [
              "3-commonly-used-cache-read-and-write-strategies",
              "redis-memory-fragmentation",
            ],
          },
        ],
      },
    ],
  },
  {
    text: "开发工具",
    icon: "tool",
    prefix: "java/tools/",
    collapsible: true,
    children: [
      {
        text: "Git",
        icon: "git",
        prefix: "git/",
        collapsible: true,
        children: ["git-intro", "github-tips"],
      },
      {
        text: "Docker",
        icon: "launch",
        prefix: "docker/",
        collapsible: true,
        children: ["docker-intro", "docker-in-action"],
      },
      {
        text: "IDEA",
        icon: "process",
        link: "https://gitee.com/SnailClimb/awesome-idea-tutorial",
      },
    ],
  },
  {
    text: "常用框架",
    prefix: "java/system-design/framework/",
    icon: "frame",
    collapsible: true,
    children: [
      {
        text: "Spring&Spring Boot",
        prefix: "spring/",
        collapsible: true,
        children: [
          "spring-knowledge-and-questions-summary",
          "springboot-knowledge-and-questions-summary",
          "spring-common-annotations",
          {
            text: "重要知识点",
            icon: "star",
            collapsible: true,
            children: [
              "spring-transaction",
              "spring-design-patterns-summary",
              "spring-boot-auto-assembly-principles",
            ],
          },
        ],
      },
      "mybatis/mybatis-interview",
      "netty",
      "springcloud/springcloud-intro",
    ],
  },
  {
    text: "系统设计",
    icon: "software",
    prefix: "java/system-design/",
    collapsible: true,
    children: [
      "system-design-questions",
      {
        text: "基础",
        prefix: "basic/",
        icon: "basic",
        collapsible: true,
        children: ["RESTfulAPI", "naming", "refactoring"],
      },
      {
        text: "安全",
        prefix: "security/",
        icon: "security-fill",
        collapsible: true,
        children: [
          "basis-of-authority-certification",
          "jwt-intro",
          "advantages&disadvantages-of-jwt",
          "sso-intro",
          "sentive-words-filter",
          "data-desensitization",
        ],
      },
      "schedule-task",
    ],
  },
  {
    text: "分布式",
    icon: "change",
    prefix: "java/distributed-system/",
    collapsible: true,
    children: [
      {
        text: "理论&算法&协议",
        prefix: "theorem&algorithm&protocol/",
        collapsible: true,
        children: ["cap&base-theorem", "paxos-algorithm", "raft-algorithm"],
      },
      "api-gateway",
      "distributed-id",
      {
        text: "RPC",
        prefix: "rpc/",
        collapsible: true,
        children: ["dubbo", "why-use-rpc"],
      },
      "distributed-transaction",
      {
        text: "分布式协调",
        prefix: "distributed-process-coordination/",
        collapsible: true,
        children: [
          "zookeeper/zookeeper-intro",
          "zookeeper/zookeeper-plus",
          "zookeeper/zookeeper-in-action",
        ],
      },
    ],
  },
  {
    text: "高性能",
    icon: "template",
    prefix: "java/high-performance/",
    collapsible: true,
    children: [
      "read-and-write-separation-and-library-subtable",
      "load-balancing",
      {
        text: "消息队列",
        prefix: "message-queue/",
        icon: "MQ",
        collapsible: true,
        children: [
          "message-queue",
          "kafka-questions-01",
          "rocketmq-intro",
          "rocketmq-questions",
          "rabbitmq-intro",
        ],
      },
    ],
  },
  {
    text: "高可用",
    icon: "guide",
    prefix: "java/high-availability/",
    collapsible: true,
    children: [
      "high-availability-system-design",
      "limit-request",
      "fallback&circuit-breaker",
      "timeout-and-retry",
      "cluster",
      "disaster-recovery&remote-live",
      "performance-test",
    ],
  },
]);
