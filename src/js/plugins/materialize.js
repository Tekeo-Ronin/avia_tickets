import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

//init select

const select = document.querySelectorAll('select');
M.FormSelect.init(select);

//init autocomplite
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete, {
  data: {
    "Apple": null,
    "Microsoft": null,
    "Google": 'https://placehold.it/250x250'
  },
});

//init datepicker

const datepicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepicker, {
  showClearBtn: true,
});

export function getSelectInstance(elem) {
  return M.FormSelect.getInstance(elem);
}

export function getAutocompleteInstance(elem) {
  return M.Autocomplete.init(elem);
}

export function getDatepickerInstance(elem){
  return M.Datepicker.init(elem);
}