'use strict';

var ambSaving = ambSaving || {};
(function (ambSaving) {
    'use strict';
    function mountHtml(savingsMap) {
        if (savingsMap === 'undefined') {
            console.log('errr');
        } else {
            var resultTable = document.querySelector("#tblResult"),
                resultTbody = resultTable.children[1],
                resultElement = '',
                resultCell = '',
                resultValue = '',
                resultColumns = 2,
                d = '',
                value = 0;
            if (resultTbody.children.length > 0) {
                for (var i = 0; i < resultTbody.children.length; i++) {
                    resultTbody.children[i].parentNode.removeChild(resultTbody.children[i]);
                }
            }
            if (savingsMap.length / resultColumns > 0) {
                var arrLength = savingsMap.length / resultColumns;
                d = arrLength;
            }
            for (var i = 0; i < arrLength; i++) {
                resultCell = document.createElement("tr");
                for (var c = 1; c < resultColumns; c++) {
                    for (var prop in savingsMap[i]) {
                        if (prop == "week") {
                            value = savingsMap[i][prop] + 1;
                        } else {
                            value = savingsMap[i][prop].toFixed(2);
                        }
                        resultElement = document.createElement("td");
                        resultValue = document.createTextNode(value);
                        resultElement.appendChild(resultValue);
                        resultCell.appendChild(resultElement);
                    }
                    for (var prop in savingsMap[d]) {
                        if (prop == "week") {
                            value = savingsMap[d][prop] + 1;
                        } else {
                            value = savingsMap[d][prop].toFixed(2);
                        }
                        resultElement = document.createElement("td");
                        resultValue = document.createTextNode(value);
                        resultElement.appendChild(resultValue);
                        resultCell.appendChild(resultElement);
                    }
                }
                d += 1;
                resultTbody.appendChild(resultCell);
            }
        }
    }

    // function weeklySavings(amount, savingOption) {
    //     if (amount) {
    //         var weeksTotal = 52,
    //             weekCounter = 0,
    //             weeklyAmount = 0,
    //             savingsTotal = 0,
    //             savingsMap = [];
    //             //
    //         // do the counting
    //         while (weekCounter < weeksTotal) {
    //             if (savingsTotal === 0 || weeklyAmount === 0) {
    //                 savingsTotal = amount;
    //                 weeklyAmount = amount;
    //             } else {
    //                 switch (savingOption) {
    //                     case "incremental":
    //                         //// calcula o valor semanalmente
    //                         weeklyAmount = weeklyAmount + amount;
    //                     break;
    //                     case "step":
    //                         //// calcula o valor inicial + 1
    //                         weeklyAmount = weekCounter + amount;
    //                     break;
    //                     case "stop":
    //                         //// calcula apenas o mesmo valor over and over
    //                         weeklyAmount = amount;
    //                     break;
    //                 }
    //                 savingsTotal = savingsTotal + weeklyAmount;
    //             }
    //             savingsMap.push({
    //                 week: weekCounter,
    //                 weeklyAmount: weeklyAmount,
    //                 savingsTotal: savingsTotal
    //             });
    //             weekCounter += 1;
    //         }
    //         mountHtml(savingsMap);
    //     }
    // }

    var totalAmount = document.querySelector("#amount"),
        savingsType = document.getElementsByName("savingsType");

    totalAmount.addEventListener("change", function () {
        ambSaving.amount(this.value);
        console.log('ambSaving', ambSaving);
        var values = ambSaving.weeklySavings();
        mountHtml(values);
    });

    getOption(savingsType);

    function getOption(savingsType) {
        for (var i = 0; i < savingsType.length; i++) {
            if (savingsType[i].checked) {
                ambSaving.savingOption = savingsType[i].value;
            }
            savingsType[i].addEventListener("change", function () {
                ambSaving.savingOption = this.value;
                var values = ambSaving.weeklySavings();
                mountHtml(values);
            });
        }
    }
})(ambSaving);
//# sourceMappingURL=main.js.map
