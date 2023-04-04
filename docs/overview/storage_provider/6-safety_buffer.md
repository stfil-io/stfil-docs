---
sidebar_position: 6
---

#  Safety Buffer

In order to ensure that all loans obtained by storage providers are used for sector pledges, a
safety buffer index is introduced. If the node of the storage provider has fixed assets _**PV<sub>fixed</sub>**_
(excluding the available balance), when the node obtains a loan amount of _**D<sub>new</sub>**_ :

![](SB.png)

* _**L<sub>max</sub>**_ , Maximum loan leverage. Each node has a default maximum loan leverage based
on their chosen role as Owner or Beneficiary to delegate, with a minimum value of 1,
which represents a loan amount of 0. 

When _**PV<sub>t</sub> <= SB**_ ,storage providers' withdrawals will be restricted, and the generated earnings must first be used to repay the loan and interest. Withdrawals will only be permitted until _**PV<sub>t</sub> > SB**_.
