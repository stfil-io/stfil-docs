---
sidebar_position: 4
---

# 📌 Borrowing


### How do I borrow?
Before you can borrow money, you need to provide an SP that is already in healthy operation as collateral. After this, just go to the "Borrow" section and click "Borrow" to get the asset you want to borrow. Select the SP that can be used as collateral and enter the amount of FIL that needs to be loaned. Choose a stable or variable rate and confirm your transaction. You can always change the rate later as many times as you want.

### How much can I borrow?
The maximum amount you can borrow depends on the balance of the SP you provide, the chosen collateral type (beneficiary/owner wallet) and available liquidity. For example, you cannot borrow an asset if there is not enough liquidity or if your health factors do not allow you to borrow the asset. You can find specific lending parameters in the risk parameters section.

### What assets do I need to repay?
You pay back the loan with the same assets you borrowed. For example, if you borrow 1 FIL, you will repay 1 FIL + accrued interest.

### What is the difference between a stable rate and a variable rate?
A stable rate acts as a fixed rate in the short term, but can be rebalanced in the long term as market conditions change. The variable rate is based on the funds utilization rate in STFIL. As the name suggests, a stable rate will remain fairly constant and is the best option for planning how much interest you will need to pay. Variable rates will change over time and may be the best rate, depending on market conditions. You can switch between stable and floating rates at any time through the dashboard.

### Can SP borrow using stable and variable rate at the same time for one asset?
No, you can only borrow using stable or variable rate, if you switch to your desired rate it will switch the rate for your whole debt on that asset. Despite this, you can have different borrow rates for different assets.

### How much would I pay in interest?
The interest rate you pay for borrowing assets depends on the borrowing rate which is derived from the supply and demand ratio of the asset. Moreover, the interest rate of a variable rate changes constantly, whereas stable interest rate provides stability for the interest rates. You can find your current borrowing rate at any time in the Borrowings section of your dashboard.

### Can an SP choose not to use its assets as collateral?
no. In order to ensure the stable maintenance of SP, SP must choose a way to mortgage (the beneficiary wallet/owner wallet can be mortgaged). Choosing different ways of mortgage will apply for different amounts of loans.

### What is the health factor?
The health factor is the numeric representation of the safety of your deposited assets against the borrowed assets and its underlying value. The higher the value is, the safer the state of your funds are against a liquidation scenario. If the health factor reaches 1, the liquidation of your deposits will be triggered. A Health Factor below 1 can get liquidated. For a HF=2, the collateral value vs borrow can reduce by 1 out of 2: 50%. The health factor depends on the liquidation threshold of your collateral against the value of your borrowed funds. You can find all of the collateral parameters in the risk parameters section.
If you would like to know more technical details about the health factor calculation, you can find those here.

### What happens when my fitness factor drops?
Depending on the available balance of SP, the health factor increases or decreases. If your health factor increases, it will improve your borrowing position by making the liquidation threshold less likely to be reached. If the SP's balance drops due to network penalties or withdrawals, the health factor will also decrease, resulting in increased liquidation risk.

### When do I need to pay back the loan?
There is no fixed time period to pay back the loan. As long as your position is safe, you can borrow for an undefined period. However, as time passes, the accrued interest will grow making your health factor decrease, which might result in your deposited assets becoming more likely to be liquidated.

### How do I payback the loan?
In order to payback the loan you simply go to the Borrowings section of your dashboard and click on the repay button for the asset you borrowed and want to repay. Select the amount to pay back and confirm the transaction.

### How do I avoid liquidation?
In order to avoid the reduction of your health factor leading to liquidation, you can repay the loan or deposit more assets in order to increase your health factor. Out of these two available options, repaying the loan would increase your health factor more.












