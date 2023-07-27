# match

## 简介（introduction）

简单的模式匹配

## 安装（installation）

```bash
npm i ppmatch
```

```js
import * as match from ppmatch

const arr = [1, 2, 3, 4, '5']
console.log(
    arr.map(
        a => match(a,
            (v = 1) => 'one',
            (v = 2) => 'two',
            (v = 3) => 'three',
            _ => `other${_}`
        )
    )
)
// ['one', 'two', 'three', 'other4', 'other5']
```
