/**
 *  解题思路：
 *    当字符串存在重复字符时，排列方案中也存在重复的排列方案。为排除重复的方案，需在固定某位字符时，保证 "每种字符只在此位固定一次"，即遇到重复字符时
 *    不交换，直接跳过。从 DFS 角度看，此操作称为 "剪枝"
 * 
 *  递归解析：
 *    1.终止条件：当 x = len(c) - 1时，代表所有位已固定（最后一位只有一种情况），则将当前组合 c 转化为字符串并加入 res 并返回
 *    2.递推参数：当前固定位 x
 *    3.递推工作：初始化一个 Set 用于排除重复的字符；将第 x 位字符与 i ∈ [x, len(c)] 字符分别交换，并进入下层递归
 *      1.剪枝： 若 c[i] 在Set中，代表是重复字符，因此 剪枝
 *      2.将 c[i] 加入Set，以便之后遇到重复字符时剪枝
 *      3.固定字符：将 c[i] 和 c[x] 交换，即固定 c[i] 为当前字符
 *      4.开启下层递归：调用 dfs(x+1),即开始固定第 x + 1个字符
 *      5.还原交换：将字符 c[i]和c[x]交换 （还原之前的交换）
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  const len = s.length
  const res = []
  s = s.split("")
  const dfs = (x) => {
    if (x === len - 1) {
      res.push(s.join(""))
      return
    }
    // 借助集合来避免同一字符复用
    // 这里将集合放在递归内，相当于创建等于字符串字符长度的n个集合
    const dic = new Set()
    for (let i = x; i < len; i++) {
      if (dic.has(s[i])) continue // 剪枝，只有当前位没有固定过这个字符才进行后续回溯
      dic.add(s[i]);
      [s[i], s[x]] = [s[x], s[i]];
      dfs(x + 1);
      [s[i], s[x]] = [s[x], s[i]];
    }
  }
  dfs(0)
  return res
};