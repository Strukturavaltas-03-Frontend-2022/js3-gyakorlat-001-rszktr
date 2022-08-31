const HU = {
    date(date) { 
        return new Intl.DateTimeFormat('hu-HU').format(date)
    },
    currency(number) {
        const huCurrency = new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF'
        })
        return huCurrency.format(number)
    },
    list(array) {
        return `${array[0]}, ${array[1]} és ${array[2]}` 
    }
}

export default HU;
