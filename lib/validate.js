import validator from 'validator'

// TODO: подумать как передать языковые переменные функции валидации
export const required = value => (value ? undefined : '*')

export const isEmail = value => validator.isEmail(value) ? undefined : 'not email'

export const isURL = value => validator.isURL(value) ? undefined : 'not url'

export const isPersonUrl = value => {
    const str = 'not url'
    const is_url = isURL(value);
    if(is_url === str) return str;

    return !!value.match(/(facebook\.com\/.+)|(instagram\.com\/.+)/) ? undefined : str;
}

export const mustBeNumber = (value) => (isNaN(value) ? 'Must be a number' : undefined)

export const minMaxValue = (min) => (max) => (value) => (value.toString().length >= min
? value.toString().length <= max
? undefined
: `<${max}`
: `> ${min}`)

export const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined)

export const trim = (value) => value.trim()
