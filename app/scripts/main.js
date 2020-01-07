      'use strict';
      var { format, getWeeksInMonth } = require('date-fns');
      var ambSaving = require('./weeklySavings.js');
      (function (ambSaving) {
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
                  if (savingsMap.length / resultColumns > 0 ) {
                      var arrLength = savingsMap.length / resultColumns;
                      d = arrLength;
                  }
                  for (var i = 0; i < arrLength; i++) {
                      resultCell = document.createElement("tr");
                      for (var c = 1; c < resultColumns; c++) {
                          for(var prop in savingsMap[i]) {
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
                          for(var prop in savingsMap[d]) {
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

          function getOption(savingsType) {
              for (var i = 0; i < savingsType.length; i++) {
                  if (savingsType[i].checked) {
                      ambSaving.savingOption = savingsType[i].value;
                  }
                  savingsType[i].addEventListener("change", function () {
                      ambSaving.savingOption = this.value;
                      var values = ambSaving.weeklySavings();
                      mountHtml(values);
                  })
              }
          }

          function getWeeksInMonthApp(){
            let css = '';
            let colorIndex = -1;
            const monthsNames = [
              "Janeiro", 
              "Fevereiro", 
              "Março", 
              "Abril", 
              "Maio", 
              "Junho", 
              "Julho", 
              "Agosto", 
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro"
            ];
            const colors = {
              primary: "#ebfffc",
              link: "#eef3fc",
              info: "#eef6fc",
              success: "#effaf3",
              warning: "#fffbeb",
              danger: "#feecf0"
            }
            if (new Date().getFullYear() > initialYear) {
                initialYear = new Date().getFullYear();
            }

            while (months < totalMonths) {
                arrMonths[months] = getWeeksInMonth(new Date(initialYear, months));
                months++;
            }; 

            arrMonths.reduce((acc, element, index, array) => {
              const filho = document.createElement("li");
              const tag = document.createElement("span");
              const monthList = Array.from(document.querySelectorAll('.monthList'));
              console.log("monthList", monthList);
              let pseudoTd = ':first-child';
              tag.append(`${monthsNames[index]}`);
              colorIndex = colorIndex >= Object.keys(colors).length - 1 ? 0 : colorIndex + 1;
              tag.classList.add("tag", `is-${Object.keys(colors)[colorIndex]}`);
              filho.append(tag);

              if (monthList.length > 0) {
                monthList.forEach(element => element.appendChild(filho.cloneNode(true)));
              }
              
              if (acc > 26 || index > Math.ceil(array.length / 2)) {
                acc = (acc > 26 ? 0 : acc);
                pseudoTd = ':nth-child(4)';
              }

              if (acc > 0) {
                css = `#tblResult tbody tr:nth-child(-n+${acc}) td${pseudoTd} {
                  background-color: ${colors[Object.keys(colors)[colorIndex]]} 
                } ${css}`;
              }
              return acc = acc + element;
            }, 0)

            //  Escrever o style no document
            const style = document.createElement("style");
            style.append(css);
            document.getElementsByTagName("head")[0].appendChild(style);
          }

          var totalAmount = document.querySelector("#amount"),
              savingsType = document.getElementsByName("savingsType"),
              depositLevel = document.querySelector("#depositLevel"),
              initialYear = 2020,
              months = 0,
              totalMonths = 12,
              arrMonths = [];

          depositLevel.addEventListener("change", function(){
            ambSaving.savingOption = this.value;
            var values = ambSaving.weeklySavings();
            const toggleEls = Array.from(document.querySelectorAll(".hide"));
            toggleEls.forEach(element => element.classList.remove("hide"));
            mountHtml(values);
          });
          
          totalAmount.addEventListener("change", function(){
              ambSaving.amount(this.value);
              var values = ambSaving.weeklySavings();
              mountHtml(values);
          });

          getOption(savingsType);

          getWeeksInMonthApp();

      }(ambSaving));


