export default {
    dateBetween(date) {
        return 'Jan 2000 ~ Dez 2020';
    },
    location(place) {
        return [ place.city, place.state, place.country ].filter(v => !!v).join(', ');
    },
    nl2br(content) {
        return content.replace(/\n/g, '<br />');
    },
};