const convertButton = document.querySelector(".convert-button");
const currencySelectOne = document.querySelector("#currency-select-one");
const currencySelect = document.querySelector(".currency-select");

async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValue = document.querySelector(".currency-value");

    

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    
    const realToday = 1;
    const dolarToday = data.USDBRL.high;
    const euroToday = data.EURBRL.high;
    const bitToday = data.BTCBRL.high;
    const libraToday = 7.40;

    if (currencySelect.value === "real") {
        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToday);
    }
    if (currencySelect.value === "dolar") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }
    if (currencySelect.value === "euro") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }
    if (currencySelect.value === "bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitToday);
    }
    if (currencySelect.value === "libra") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

};
function changeCurrencyOne() {
    const inputCurrencyValue = document.querySelector(".input-currency")
    const currencyNameOne = document.querySelector("#currency-name-one");
    const currencyImgOne = document.querySelector("#currency-img-one");

    if (currencySelectOne.value === "real") {
        inputCurrencyValue.placeholder = "R$ 10.000,00";
        currencyNameOne.innerHTML = "Real brasileiro";
        currencyImgOne.src = "./assets/images/real.png";
    };
    if (currencySelectOne.value === "dolar") {
        inputCurrencyValue.placeholder = "$ 10.000,00";
        currencyNameOne.innerHTML = "Dólar americano";
        currencyImgOne.src = "./assets/images/dolar.png";
    };
    if (currencySelectOne.value === "euro") {
        inputCurrencyValue.placeholder = "€ 10.000,00";
        currencyNameOne.innerHTML = "Euro";
        currencyImgOne.src = "./assets/images/euro.png";
    };
    if (currencySelectOne.value === "bitcoin") {
        inputCurrencyValue.placeholder = "BTC 10.000,00";
        currencyNameOne.innerHTML = "Bitcoin";
        currencyImgOne.src = "./assets/images/bitcoin 1.png"
    };
    if (currencySelectOne.value === "libra") {
        inputCurrencyValue.placeholder = "£ 10.000,00";
        currencyNameOne.innerHTML = "Libra";
        currencyImgOne.src = "./assets/images/libra 1.png"
    };

}
function changeCurrency() {
    const currencyName = document.querySelector("#currency-name");
    const currencyImg = document.querySelector(".currency-img");

    if (currencySelect.value === "real") {
        currencyName.innerHTML = "Real brasileiro";
        currencyImg.src = "./assets/images/real.png"
    };
    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImg.src = "./assets/images/dolar.png"
    };
    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/images/euro.png"
    };
    if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImg.src = "./assets/images/bitcoin 1.png"
    };
    if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra";
        currencyImg.src = "./assets/images/libra 1.png"
    };

    convertValues();
};
currencySelectOne.addEventListener("change", changeCurrencyOne);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);