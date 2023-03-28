---
sidebar_position: 6
---

#  Safety Buffer

In order to ensure that all loans obtained by storage providers are used for sector pledges, a safety buffer index (SB) is introduced. If the node of the storage provider has fixed assets _PV<sub>fixed</sub>_ (excluding the available balance), when the node obtains a loan amount of _D<sub>new</sub>_:

![img.png](img.png) （_L<sub>max</sub>_  is the Maximum loan leverage）

When _PV<sub>t</sub>_ <= _SB_ ,storage providers' withdrawals will be restricted, and the generated earnings must first be used to repay the loan and interest. Withdrawals will only be permitted until _PV<sub>t</sub>_ > _SB_.
