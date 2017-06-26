/* global google */
import { openPanel } from './../utilities';

Object.defineProperty(exports, '__esModule', {
    value: true,
});

let autocomplete;
const componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name',
};


const fillInAddress = () => {
    // Get the place details from the autocomplete object.
    const placeAddressComponents = autocomplete.getPlace().address_components;

    Object.entries(componentForm).map(key => { // eslint-disable-line array-callback-return
        const formFieldName = key[0];
        document.getElementById(formFieldName).value = '';
        document.getElementById(formFieldName).disabled = false;
    });

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    placeAddressComponents.map(key => { // eslint-disable-line array-callback-return
        const addressType = key.types[0];
        if (componentForm[addressType]) {
            const val = key[componentForm[addressType]];
            document.getElementById(addressType).value = val;
        }
    });

    openPanel(document.getElementById('address'));
};

const initAutocomplete = () => {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      { types: ['geocode'] });

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
};


// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
const geolocate = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            const circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy,
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
};

exports.initAutocomplete = initAutocomplete;
exports.fillInAddress = fillInAddress;
exports.geolocate = geolocate;
