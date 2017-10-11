// 从 app.component.ts 文件中剪切 HEROS 数组,把它粘贴到 app 目录下一个名叫 mock-heroes.ts
// 文件中, 还要复制  import {Hero}... 语句,因为我们的英雄数组用到了 Hero 类.
import { Hero } from './hero';

// 创建英雄
const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  