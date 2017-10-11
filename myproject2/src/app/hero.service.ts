// 导入Angular的 Injectable 函数,并作为 @Injectable() 装饰器使用空上函数.
import { Injectable } from '@angular/core';

// 导入 HEROES 常量,并在 getHeroes 方法中返回它,
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// 不要忘了写圆括号,如果忘了写,就会导致一个很难诊断的错误
@Injectable()
// 我们把这个类命名为 `HeroService` , 并导出它, 以供别人使用
// 当TypeScript 看到 @Injectable() 装饰器时,就会记下本服务的元数据,
// 如果Angular需要这个服务中注入其它依赖,就会使用这些元数据

// 如果此时 HeroService 还没有任何依赖,但我们还是得加上这个装饰器.
// 作为一项最佳实践,无论是出于提高统一性还是减少变更的目的,都应该从一开始就加上 @Injectable() 装饰器
export class HeroService{

    // 添加一个叫 getHeros 的桩方法
    getHeroes():Hero[]{
        return HEROES;
    } // stub
    // HeroService 可以从任何地方获取 Hero 数据 --- Web 服务,本地存储或模拟数据,
    // 从组件中移除数据访问逻辑意味着你可以更改这些实现方式,而不影响这些英雄数据的组件


}

