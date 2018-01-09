'use strict';

var ambSaving = {
    savingOption: '',
    amount: function amount(_amount) {
        this.numberAmount = parseInt(_amount);
    },
    removeData: function removeData() {
        var myNode = document.getElementById("teste");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    },
    weeklySavings: function weeklySavings() {
        this.removeData();
        var weeksTotal = 52,
            weekCounter = 0,
            weeklyAmount = 0,
            savingsTotal = 0,
            savingsMap = [];
        console.log('Comentário', weeksTotal, weekCounter, weeklyAmount, savingsTotal, savingsMap);
        while (weekCounter < weeksTotal) {
            if (savingsTotal === 0 || weeklyAmount === 0) {
                savingsTotal = this.numberAmount;
                weeklyAmount = this.numberAmount;
            } else {
                switch (this.savingOption) {
                    case "incremental":
                        //// calcula o valor semanalmente
                        weeklyAmount = weeklyAmount + this.numberAmount;
                        break;
                    case "step":
                        //// calcula o valor inicial + 1
                        weeklyAmount = weekCounter + this.numberAmount;
                        break;
                    case "stop":
                        //// calcula apenas o mesmo valor over and over
                        weeklyAmount = this.numberAmount;
                        break;
                }
                savingsTotal = savingsTotal + weeklyAmount;
            }
            savingsMap.push({
                week: weekCounter,
                weeklyAmount: weeklyAmount,
                savingsTotal: savingsTotal
            });
            weekCounter += 1;
        }
        return savingsMap;
    }
};
//# sourceMappingURL=weeklySavings.js.map
