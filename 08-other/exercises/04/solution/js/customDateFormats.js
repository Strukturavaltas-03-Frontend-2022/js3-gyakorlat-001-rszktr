const customDateFormats = (date) => {
return {
    'short': new Intl.DateTimeFormat('hu-HU', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    }).format(date),
    'long' : new Intl.DateTimeFormat('hu-HU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(date)
}
}

export default customDateFormats;
