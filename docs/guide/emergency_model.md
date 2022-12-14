
# 经济模型

_**STFIL**_ 协议将用户的质押的资金提供给精心挑选的存储提供商进行代币质押，获得的收益重新铸造stFIL，再分给用户，用户可以在存款后的 24 小时内收到质押奖励，而无需等待验证器激活。那么如何分配收益，成为所有参与者最关心的内容。

在STFIL的经济模型中，扣除平台一小部分服务费后，存储提供商最终的收益比例数学公式: _S<sub>final</sub>_，它由两部分组成，分别是基础收益分成数学公式: _S<sub>base</sub>_，和鼓励分成数学公式: _S<sub>award</sub>_ 即持币人收益的一部分:

$$ _S<sub>final</sub>_ = _S<sub>base</sub>_ + ( 1 - _S<sub>base</sub>_ ) × _S<sub>award</sub>_ $$

### 基础收益

对于存储提供商来说，在本协议中，将质押的FIL为单位计算付出的成本，以美元计价，包含服务器费用、IDC成本、gas消耗、人员维护成本。记 数学公式: _C<sub>sp</sub>_ 为存储提供商单位成本，在市场供求正常情况下较稳定，由 STFIL DAO 提案调整。资金持有人的成本数学公式: _C<sub>assets</sub>_ ，即当前FIL相对于USDT的价格，由预言机喂加来维持STFIL协议中的价格始终于和市场保持一致。

准寻投入比例即收益的比例，得出存储提供商获得一笔质押，要付出收益的数学公式: _S<sub>base</sub>_ 份额给协议，用来作为持币人的收益：

$$ _S<sub>base</sub>_ = \frac{_C<sub>sp</sub>_}{_C<sub>sp</sub>_ + _C<sub>assets</sub>_} $$

若 $ _C<sub>sp</sub>_ = 7 _usdt_ $ 时，那么在不同的FIL价格下波动：

![img.png](img.png)

### 鼓励

该协议本质是通过DeFi的能力来提高资本效率和效用性，但是如果任由STFIL流动性池不间断的吸引了大量的TVL（Total Value Locked），但大部分资金并未被利用，也不会得到满意的效果。所以协议设置了鼓励分成数学公式: _S<sub>award</sub>_ ，表示持币人愿意出让一部分收益，用来推进存储提供商充分的利用协议内的资金，给自己带来更多更稳定的收益。

记 数学公式: _UR<sub>base</sub>_ 为资金利用率的基准线，当资金的利用率不足数学公式: _UR<sub>base</sub>_ 时，发起数学公式: _S<sub>max-award</sub>_ 的最大鼓励分成，斜率由两者共同决定，那么当前的鼓励分成为：

$$ _S<sub>current</sub>_ = \frac{ _S<sub>max-award</sub>_ }{ _UR<sub>base</sub>_ } × _S<sub>current</sub>_  + _S<sub>max-award</sub>_ $$

每一次的贷款，都有当前的鼓励分成数学公式: $ _S<sub>current</sub>_ $ 和贷款后的鼓励分成数学公式: $ _S<sub>after</sub>_ $ ，最终的奖励分成由两者的平均数决定：

$$ _S<sub>award</sub>_ = \frac{ _S<sub>current</sub>_ + _S<sub>after</sub>_ }{2} $$

当金库余额太少，金库的流动性不足，会造成市场的恐慌。为了解决这个问题，协议设置存储准备金率数学公式: $ R $,这部分资金将不接受给存储提供商用于质押。

暂停贷款的条件：

$$ _S<sub>current</sub>_ \geq 1-R $$

金库的最佳状态：

$$  _UR<sub>base</sub>_ \leq _UR<sub>current</sub>_ \leq 1-R $$

若数学公式: $ _S<sub>award</sub>_  $= 20% ，数学公式: $ _UR<sub>base</sub>_ $= 70%则：

![float_img.png](float_img.png)
